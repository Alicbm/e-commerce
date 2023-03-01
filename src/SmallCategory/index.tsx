import React from "react";
import "./SmallCategory.css";
import { MdKeyboardArrowDown } from 'react-icons/md'
import { MdKeyboardArrowUp } from "react-icons/md";
import { GrCheckbox } from 'react-icons/gr'
import { GrCheckboxSelected } from 'react-icons/gr'
// import { useAppDispatch } from "../store/hooks";

export const SmallCategory =(prop: {state: boolean}) => {
  
  return (
    <div className="SmallCategory">
      <div className="SmallCategory-title">
        <p>Tecnology</p>
        <span>{!prop.state ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}</span>
      </div>
      <ul className={!prop.state ? `SmallCategory-list ${prop.state}-show` : 'SmallCategory'}>
        <li className="SmallCategory-list__item">
          <span><GrCheckboxSelected /></span>
          <p>Smatphones</p>
        </li>
        <li className="SmallCategory-list__item">
          <span><GrCheckbox /></span>
          <p>Laptops</p>
        </li>
        <li className="SmallCategory-list__item">
          <span><GrCheckboxSelected /></span>
          <p>TVs</p>
        </li>
      </ul>
    </div>
  );
};
