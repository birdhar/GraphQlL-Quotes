import React, { useState } from "react";
import QuoteCard from "../../QuoteCard/QuoteCard";
import style from "./ProfileRight.module.css";
import Tabs from "./Tabs/Tabs";

function ProfileRight() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={style.profilrRight}>
      <div className={style.profilrRighttop}>
        <Tabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>
      <div className={style.profilrRightbody}>
        <QuoteCard />
      </div>
    </div>
  );
}

export default ProfileRight;
