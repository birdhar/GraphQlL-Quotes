import React from "react";
import styles from "./QvipleLoader.module.css";

const QLoader = () => {
  return (
    <div className={styles.backdrop_loader}>
      <div className={styles.dimmer_holder}>
        <div className={styles.dimmer} />
      </div>
    </div>
  );
};

export default QLoader;
