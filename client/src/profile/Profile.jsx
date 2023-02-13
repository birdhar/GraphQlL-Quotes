import React from "react";
import style from "./Profile.module.css";
import Profileleft from "./Profileleft/Profileleft";
import ProfileRight from "./Profileright/ProfileRight";

function Profile() {
  return (
    <div className={style.profile}>
      <div className={style.backicon}>
        <img src="/images/back-grey.png" alt="" />
      </div>
      <div className={style.profileleft}>
        <Profileleft />
      </div>
      <div className={style.profileright}>
        <ProfileRight />
      </div>
    </div>
  );
}

export default Profile;
