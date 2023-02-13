import React from "react";
import styles from "./QvipleLoader.module.css";
const QvipleLoading = () => {
  return (
    <div className={styles.loaderGif}>
      <img src="/images/loader/loader.gif" alt="for load an items" />
    </div>
  );
};

export default QvipleLoading;
