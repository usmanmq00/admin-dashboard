import React from "react";
import { Fields } from "../../../../../components/common/Fields";
import Meta from "./Meta";
import { useProductContext } from "../../../../../context/ProductContext";

const Advanced = () => {
  const { fields, formErrors, setFields, handleChange } = useProductContext();

  const handleCheckboxChange = (event) => {
    const checked = event.target.checked;
    setFields((prevFields) => ({
      ...prevFields,
      backorders: checked,
    }));
  };

  return (
    <div className="mt-8 space-y-4 mb-20">
      <section className="space-y-6 bg-white rounded-lg p-4 w-full">
        <h1 className="font-semibold text-xl">Advanced</h1>

        <Fields
          label={"SKU *"}
          placeholder={"SKU"}
          description={"Enter the product SKU."}
          width={"100%"}
          name={"sku"}
          value={fields.sku}
          onChange={handleChange}
        />

        <Fields
          label={"Barcode"}
          placeholder={"Barcode number"}
          description={"Enter the product barcode number."}
          width={"100%"}
          name={"barcode"}
          value={fields.barcode}
          onChange={handleChange}
        />

        <Fields
          label={"Stock"}
          placeholder={"Quantity"}
          description={"Enter the product quantity."}
          width={"100%"}
          error={formErrors.stock}
          min={0}
          type={"number"}
          name={"stock"}
          value={fields.stock}
          onChange={handleChange}
        />

        <div className="space-y-1.5">
          <h4 className="text-sm">Allow Backorders</h4>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              className="scale-125 cursor-pointer"
              checked={fields.backorders}
              onChange={handleCheckboxChange}
            />
            <p className="text-sm text-[#A1A5B7]">Yes</p>
          </div>
          <p className="text-[#A1A5B7] text-xs">
            Allow customers to purchase products that are out of stock.
          </p>
        </div>
      </section>

      <Meta handleChange={handleChange} fields={fields} setFields={setFields} />
    </div>
  );
};

export default Advanced;
