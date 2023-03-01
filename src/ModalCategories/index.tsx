import React from "react";
import { CgClose } from 'react-icons/cg'
import { ImHome } from "react-icons/im";
import { SmallCategory } from "../SmallCategory";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { modal as setModal } from '../features/mainSlices'
import "./ModalCategories.css";

export const ModalCategories = () => {
  const { 
    modal,
    category1,
    category2,
    category3,
    category4,
    category5,
    category6,     
  } = useAppSelector((state) => state.mainReducer);
  const dispatch = useAppDispatch();
  
  if(modal){
    document.querySelector('body')?.classList.add('withouth-scroll')
  }else{
    document.querySelector('body')?.classList.remove('withouth-scroll')
  }

  return (
    <div className={modal ? 'ModalCategories scroll-active' : 'ModalCategories'}>
      <span 
        className="ModalCategories-close"
        onClick={() => dispatch(setModal(false))}
      ><CgClose /></span>
      <div className="ModalCategories-container">
        <div className="ModalCategories-container__home">
          <p>Home</p>
          <span>
            <ImHome />
          </span>
        </div>
        <div className="ModalCategories-container__categories">
          <p className="ModalCategories-container__categories-title">Categories</p>
          <SmallCategory state={category1}/>
          <SmallCategory state={category2}/>
          <SmallCategory state={category3}/>
          <SmallCategory state={category4}/>
          <SmallCategory state={category5}/>
          <SmallCategory state={category6}/>
        </div>
      </div>
    </div>
  );
};
