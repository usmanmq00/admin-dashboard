import React from "react";
import { Link } from "react-router-dom";
import ProductTag from "./ProductTag";
import { useProductContext } from "../../../../context/ProductContext";
import Categories from "./Categories";

const ProductDetails = () => {
  const { fields, setFields } = useProductContext();

  return (
    <div className="bg-white rounded-lg p-6 w-full space-y-3">
      <h1 className="font-semibold text-xl">Product Details</h1>

      <section className="text-sm text-[#3C434A]">
        <p className="mt-1">Categories</p>

        <section className="p-2 border border-[#dcdcde] text-sm space-y-0.5">
          <Categories setFields={setFields} />
        </section>

        <p className="text-[#A1A5B7] text-xs mt-1">
          Add product to a category.
        </p>

        <Link
          to={"/category/create-category"}
          className="mt-3 bg-[#f1faff] text-[#2f4ef7] h-9 w-44 flex items-center justify-center text-sm font-medium"
        >
          Create new category
        </Link>

        <div className="mt-6 mb-16 tagSelect space-y-1.5">
          <h4 className="text-sm">Tags</h4>
          <ProductTag setFields={setFields} fields={fields} />
          <p className="text-[#A1A5B7] text-xs">Add tags to a product.</p>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
