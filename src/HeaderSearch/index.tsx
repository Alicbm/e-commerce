import React from "react";
import { FaSearch } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import "./HeaderSearch.css";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { headerSearch as setHeader } from '../features/mainSlices'

export const HeaderSearch = () => {
  const { headerSearch } = useAppSelector(state => state.mainReducer)
  const dispatch = useAppDispatch();

  return (
    <div className={ headerSearch ? "HeaderSearch header-unshow" : "HeaderSearch" }>
      <span className="HeaderSearch-search">
        <FaSearch />
      </span>
      <input 
        className="HeaderSearch-input"
        type="text" 
        placeholder="Search" />
      <span 
        onClick={() => dispatch(setHeader(false))}
        className="HeaderSearch-close"
      >
        <CgClose />
      </span>
    </div>
  );
};
