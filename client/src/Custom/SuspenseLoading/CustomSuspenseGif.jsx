import React from "react";
import QvipleLoading from "../../Loader/QvipleLoading";

const CustomSuspenseGif = ({ children }) => {
  return (
    <React.Suspense fallback={<QvipleLoading />}>{children}</React.Suspense>
  );
};

export default CustomSuspenseGif;
