import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loaderOverlay">
      {/* <div className="lds-dual-ring"></div> */}
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
