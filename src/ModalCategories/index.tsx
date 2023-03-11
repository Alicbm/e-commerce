import React from "react";
import { CgClose } from "react-icons/cg";
import { ImHome } from "react-icons/im";
import { SmallCategory } from "../SmallCategory";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  category1 as setCat1,
  // category2 as setCat2,
  // category3 as setCat3,
  // category4 as setCat4,
  // category5 as setCat5,
  // category6 as setCat6,
} from "../features/categoriesSlices";
import {modal as setModal} from '../features/mainSlices'
import "./ModalCategories.css";
import { ArrayCategory } from "../types";
import { useNavigate } from "react-router-dom";

export const ModalCategories = () => {
  const { modal, filterModal, category1 } = useAppSelector(
    (state) => state.mainReducer
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { mainUrl } = useAppSelector((state) => state.mainReducer);
  const finalUrl = mainUrl + "/categories";

  const [url, setUrl] = React.useState<ArrayCategory[]>([]);

  React.useEffect(() => {
    const fetUrl = async () => {
      const res = await fetch(finalUrl);
      const json = await res.json();

      setUrl(json);
    };

    fetUrl();
  }, [finalUrl]);

  if (modal || filterModal) {
    document.querySelector("body")?.classList.add("withouth-scroll");
  } else {
    document.querySelector("body")?.classList.remove("withouth-scroll");
  }

  return (
    <div
      className={modal ? "ModalCategories scroll-active" : "ModalCategories"}
    >
      <span
        className="ModalCategories-close"
        onClick={() => dispatch(setModal(false))}
      >
        <CgClose />
      </span>
      <div className="ModalCategories-container">
        <div
          onClick={() => navigate("/")}
          className="ModalCategories-container__home"
        >
          <p>Home</p>
          <span>
            <ImHome />
          </span>
        </div>
        <div className="ModalCategories-container__categories">
          <p className="ModalCategories-container__categories-title">
            Categories
          </p>
          {url?.map((category) => (
            <SmallCategory
              state={category1}
              setState={setCat1}
              category={category}
              key={category.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
