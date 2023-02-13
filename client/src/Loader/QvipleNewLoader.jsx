import React from "react";
import style from "./QvipleLoader.module.css";

const QvipleNewLoader = () => {
  return (
    <div className={style.new_qviple_loader}>
      <img
        src="/images/new-loader-transparent.svg"
        alt="loading all necessary data to user intract"
      />
    </div>
  );
};

export default QvipleNewLoader;
