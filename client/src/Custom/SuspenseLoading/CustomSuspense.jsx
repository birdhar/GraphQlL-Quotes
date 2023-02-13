import React from "react";
import QLoader from "../../Loader/QLoader";

const CustomSuspense = ({ children }) => {
  return <React.Suspense fallback={<QLoader />}>{children}</React.Suspense>;
};

export default CustomSuspense;
