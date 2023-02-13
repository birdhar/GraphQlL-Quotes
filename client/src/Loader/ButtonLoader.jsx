import React from "react";
import style from "./QvipleLoader.module.css";

const ButtonLoader = ({ disabled, buttontext, onClick }) => {
  return (
    <button
      className={style.apply_elections_btn}
      disabled={disabled}
      onClick={onClick}
    >
      <span>{buttontext}</span>
      {disabled && <LoaderButton />}
    </button>
  );
};

export default ButtonLoader;
