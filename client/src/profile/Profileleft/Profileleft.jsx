import React from "react";
import style from "./Profileleft.module.css";

function Profileleft() {
  return (
    <div className={style.profileleft}>
      <div className={style.coverImg}>
        <img src="https://source.unsplash.com/9wg5jCEPBsw" alt="cover" />
      </div>
      <div className={style.profileImg}>
        <img src="https://source.unsplash.com/7Sz71zuuW4k" alt="cover" />

        <button className={style.followbtn}>Follow</button>
      </div>
      <div className={style.userdetails}>
        <h5 className={style.name}>John Bronson</h5>
        <h6 className={style.profession}>
          Advisor and Consultant, Stripe Inc.
        </h6>
      </div>
      <div className={style.contactDetails}>
        <div className={style.contactRow}>
          <img src="/images/location.png" alt="" />
          <p>Linchonshire, IL, USA</p>
        </div>
        <div className={style.contactRow}>
          <img src="/images/phone.png" alt="" />
          <p>000-000-0000</p>
        </div>
        <div className={style.contactRow}>
          <img src="/images/mail.png" alt="" />
          <p>john89@gmail.com</p>
        </div>
      </div>
      <div className={style.about}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset .
      </div>
    </div>
  );
}

export default Profileleft;
