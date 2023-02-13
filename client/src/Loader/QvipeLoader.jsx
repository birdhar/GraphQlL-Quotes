import React from "react";
import styles from "./QvipleLoader.module.css";

const QvipeLoader = () => {
  return (
    <div className={styles.loader} style={{ color: "black" }}>
      <img src="/images/career/newLogoText.svg" alt="qviple" />
    </div>
  );
};

export default QvipeLoader;
