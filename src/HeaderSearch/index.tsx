import React from "react";
import { FaSearch } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { headerSearch as setHeader, typeProductSelected as setType } from '../features/mainSlices'
import { useNavigate } from "react-router-dom";
import { ArrayProducts } from "../types";
import "./HeaderSearch.css";

export const HeaderSearch = () => {
  const { mainUrl, headerSearch } = useAppSelector(state => state.mainReducer)
  const finalUrl = mainUrl + "/products";

  const [text, setText] = React.useState<string>('')
  const [products, setProducts] = React.useState<ArrayProducts[]>([]);

  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  React.useEffect(() => {
    const fetUrl = async () => {
      const res = await fetch(finalUrl);
      const json = await res.json();

      setProducts(json)
    };

    fetUrl();
  }, []);

  const handleTextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const handleSearch = () => {
    const values: ArrayProducts[] = [] 

     products.forEach((item: ArrayProducts) => {

      let name = item.name.toLowerCase();
      let description = item.description.toLowerCase();
      let brand = item.brand.toLowerCase();
      let textState = text.toLowerCase()
      
      if(name.includes(textState)){
        values.push(item)
      }else if(description.includes(textState)){
        values.push(item)
      }else if(brand.includes(textState)){
        values.push(item)
      }else{
        let newTitle = document.querySelector('.SelectedProduct-container .Recommendations-title') as HTMLHRElement
        newTitle.innerHTML = 'There are no items matching your search :('
      }
    })
    
    navigate('/products')
    dispatch(setType(values))
  }
  return (
    <div
      className={headerSearch ? "HeaderSearch header-unshow" : "HeaderSearch"}
    >
      <span 
        onClick={handleSearch}
        className="HeaderSearch-search"
      >
        <FaSearch />
      </span>
      <input
        onChange={handleTextInput}
        className="HeaderSearch-input"
        type="text"
        placeholder="Search"
      />
      <span
        onClick={() => dispatch(setHeader(false))}
        className="HeaderSearch-close"
      >
        <CgClose />
      </span>
    </div>
  );
};
