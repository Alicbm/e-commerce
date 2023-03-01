import React from 'react'
import logo from '../images/black.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { BsFillCartPlusFill } from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { modal as setModal, headerSearch as setHeader } from '../features/mainSlices'
import './Header.css'

export const Header = () => {
  const { headerSearch } = useAppSelector(state => state.mainReducer)
  const dispatch = useAppDispatch();

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
          <span><FaSearch /></span>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="Header-cart icon-green">
        <span>0</span>
        <BsFillCartPlusFill />
      </div>
    </header>
  );
}
