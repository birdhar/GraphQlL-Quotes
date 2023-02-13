import React from "react";
import { Oval } from "react-loader-spinner";
import "./LoaderButton.css";
const LoaderButton = () => {
  return (
    <Oval
      ariaLabel="loading-indicator"
      height={20}
      width={20}
      // strokeWidth={5}
      color="white"
      secondaryColor="#1c023b"
    />
  );
};

export default LoaderButton;
