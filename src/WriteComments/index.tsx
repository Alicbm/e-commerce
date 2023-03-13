import React from 'react'
import { useAppSelector } from '../store/hooks';
import './WriteComments.css'

export const WriteComments = () => {
  const { productSelected } = useAppSelector((state) => state.mainReducer);

  const [name, setName] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [experience, setExperience] = React.useState<string>('good');

  const { mainUrl } = useAppSelector((state) => state.mainReducer);
  const finalUrl = mainUrl + "/feedback";

  const handleName = (event:  React.ChangeEvent<HTMLInputElement>) => {
    const value = event?.target.value;
    setName(value)
  }  

  const handleDescription = (event:  React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event?.target.value;
    setDescription(value)
  }

  const handleSendComment = async () => {

    const resId = await fetch(finalUrl)
    const jsonId = await resId.json()

    const id = productSelected.id;
    const dataId = jsonId[jsonId.length - 1];

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const data = {
      id: dataId.id + 1,
      name: name,
      bad: experience !== 'bad' ? false : true,
      regular: experience !== 'regular' ? false : true,
      good: experience !== 'good' ? false : true,
      description: description,
      createAt: `${day}-${month}-${year}`,
      productId: id,
    };
    await fetch(finalUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  }


  return (
    <div className="WriteComments">
      <h1 className="WriteComments-title">Comments</h1>
      <input
        className="WriteComments-input"
        type="text"
        placeholder="Name"
        onChange={handleName}
      />
      <textarea
        className="WriteComments-textarea"
        placeholder="Write a comment"
        onChange={handleDescription}
      ></textarea>
      <div className="WriteComments-options">
        <button
          onClick={() => setExperience("good")}
          className={experience !== 'good' ? 'WriteComments-good' : 'WriteComments-good expe-selected'}
        >
          Good
        </button>
        <button
          onClick={() => setExperience("regular")}
          className={experience !== 'regular' ? 'WriteComments-regular' : 'WriteComments-regular expe-selected'}
        >
          Regular
        </button>
        <button
          onClick={() => setExperience("bad")}
          className={experience !== 'bad' ? 'WriteComments-bad' : 'WriteComments-bad expe-selected'}
        >
          Bad
        </button>
      </div>
      <button 
        onClick={handleSendComment}
        className="WriteComments-post"
      >
        Post a comment
      </button>
    </div>
  );
}
