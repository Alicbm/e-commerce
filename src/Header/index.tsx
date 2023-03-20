import React from 'react'
import logo from '../images/black.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { BsFillCartPlusFill } from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { modal as setModal, headerSearch as setHeader, typeProductSelected as setType } from '../features/mainSlices'
import { useNavigate } from 'react-router-dom';
import { ArrayProducts } from '../types';
import './Header.css'

export const Header = () => {
  const { mainUrl, headerSearch, cartProducts } = useAppSelector(state => state.mainReducer)
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
      }
    })    
    
    if(values.length === 0){
      let newTitle = document.querySelector('.SelectedProduct-container .Recommendations-title') as HTMLHRElement
      newTitle.innerHTML = 'There are no items matching your search :('
    }else if(values.length > 0){
      let newTitle = document.querySelector('.SelectedProduct-container .Recommendations-title') as HTMLHRElement
      newTitle.innerHTML = 'Results of your search'

    }

    navigate('/products')
    dispatch(setType(values))
  }

  return (
    <header className={!headerSearch ? "Header" : "Header header-unshow"}>
      <div
        className="Header-menu icon-green"
        onClick={() => dispatch(setModal(true))}
      >
        <GiHamburgerMenu />
      </div>
      <div className="Header-logo icon-green">
        <img src={logo} alt="Logo" />
        <span 
          className="Header-logo__icon"
          onClick={() => dispatch(setHeader(true))}
        >
          <FaSearch />
        </span>
        <div className="Header-logo__input">
          <span onClick={handleSearch}>
            <FaSearch />
          </span>
          <input 
            onChange={handleTextInput}
            type="text" 
            placeholder="Search" 
          />
        </div>
      </div>
      <div 
        className="Header-cart icon-green"
        onClick={() => navigate('/cart')}  
      >
        <span>{cartProducts.length}</span>
        <BsFillCartPlusFill />
      </div>
    </header>
  );
}
