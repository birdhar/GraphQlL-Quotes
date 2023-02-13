import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Ripple.css";

function RippleButton({ children, onclick }) {
  const [isRipple, setIsRipple] = useState(false);
  const [cords, setCords] = useState({
    x: -1,
    y: -1,
  });

  //   console.info(cords);

  useEffect(() => {
    if (cords.x !== -1 && cords.y !== -1) {
      setIsRipple(true);

      setTimeout(() => setIsRipple(false), 1000);
    } else {
      setIsRipple(false);
    }
  }, [cords]);

  useEffect(() => {
    if (!isRipple) {
      setCords({
        x: -1,
        y: -1,
      });
    }
  }, [isRipple]);

  const handleClick = (e) => {
    setCords({
      x: e.clientX - e.target.offsetLeft,
      y: e.clientY - e.target.offsetTop,
    });

    onclick && onclick(e);
  };

  return (
    <div className="ripple_btn" onClick={handleClick}>
      {isRipple ? <span className="ripple" /> : ""}
      <span className="content">{children}</span>
    </div>
  );
}

export default RippleButton;
