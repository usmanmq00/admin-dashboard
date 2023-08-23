import React from "react";

import { Fields, TextArea } from "../../../../../components/common/Fields";
import Discount from "./Discount";
import Media from "./Media";
import { useProductContext } from "../../../../../context/ProductContext";

const General = () => {
  const { fields, formErrors, handleChange } = useProductContext();

  const {
    productName,
    productDescription,
    shippingReturns,
    careInstructions,
    basePrice,
  } = fields;

  return (
    <div className="mt-8 space-y-4 mb-20">
      <section className="space-y-6 bg-white rounded-lg p-4 w-full">
        <h1 className="font-semibold text-xl">General</h1>

        <Fields
          label={"Product Name *"}
          placeholder={"Product name"}
          description={
            "A product name is required and recommended to be unique."
          }
          error={formErrors.productName}
          width={"100%"}
          name={"productName"}
          value={productName}
          onChange={handleChange}
        />
        <TextArea
          label={"Description"}
          placeholder={"Type your text here..."}
          description={
            "Set a description to the product for better visibility."
          }
          width={"100%"}
          height={"200px"}
          name={"productDescription"}
          value={productDescription}
          onChange={handleChange}
        />
        <TextArea
          label={"Shipping & Returns"}
          placeholder={"Type your text here..."}
          description={
            "Set a shipping & returns to the product for better visibility."
          }
          width={"100%"}
          height={"200px"}
          name={"shippingReturns"}
          value={shippingReturns}
          onChange={handleChange}
        />
        <TextArea
          label={"Care Instructions"}
          placeholder={"Type your text here..."}
          description={
            "Set a care instructions to the product for better visibility."
          }
          width={"100%"}
          height={"200px"}
          name={"careInstructions"}
          value={careInstructions}
          onChange={handleChange}
        />
      </section>

      <Media />

      <section className="space-y-4 bg-white rounded-lg p-4 w-full">
        <h1 className="font-semibold text-xl">Pricing</h1>

        <Fields
          label={"Base Price *"}
          type={"number"}
          placeholder={"Product price"}
          description={"Set the product price."}
          width={"100%"}
          name={"basePrice"}
          value={basePrice}
          onChange={handleChange}
          error={formErrors.basePrice}
        />

        <Discount />
      </section>
    </div>
  );
};

export default General;
