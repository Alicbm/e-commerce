import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useAppSelector } from '../store/hooks'
import { ArrayFeedback, ArrayProducts } from '../types'
import './Comments.css'

export const Comments = () => {
  const { productSelected } = useAppSelector((state) => state.mainReducer);
  const [url, setUrl] = React.useState<ArrayProducts>();

  const { mainUrl } = useAppSelector((state) => state.mainReducer);
  const finalUrl = mainUrl + "/products";


  React.useEffect(() => {
    const id = productSelected.id;

    const fetUrl = async () => {
      const res = await fetch(finalUrl + "/" + id);
      const json = await res.json();

      setUrl(json);
    };

    fetUrl();
  }, [finalUrl, productSelected]);   

  return (
    <div className='Comments'>
      {
        url?.feedback.map((comment: ArrayFeedback) => (
          <div className='Comments-container'>
            <div className='Comments-container__head'>
              <h4>{comment.name}</h4>
              <div>
                <span><AiFillStar /></span>
                <span><AiFillStar /></span>
                <span><AiFillStar /></span>
                <span><AiFillStar /></span>
                <span><AiFillStar /></span>
              </div>
            </div>
            <p>{comment.description}</p>
          </div>
        ))
      }
    </div>
  )
}
