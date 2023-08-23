import React from "react";
import Thumbnail from "./Thumbnail";
import Status from "./Status";
import ProductDetails from "./ProductDetails";

const LeftSide = () => {
  return (
    <div className="w-[300px] space-y-6">
      <Thumbnail />
      <Status />
      <ProductDetails />
    </div>
  );
};

export default LeftSide;
