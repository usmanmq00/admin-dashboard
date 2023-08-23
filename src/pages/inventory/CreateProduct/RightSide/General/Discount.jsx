import React, { useEffect } from "react";
import { Slider } from "@mui/material";
import { Fields } from "../../../../../components/common/Fields";
import { useProductContext } from "../../../../../context/ProductContext";

const Discount = () => {
  const { fields, setFields, handleChange } = useProductContext();

  useEffect(() => {
    fields.discountType === "no discount"
      ? setFields((prevFields) => ({
          ...prevFields,
          discount: 0,
        }))
      : fields.discountType === "fixed"
      ? setFields((prevFields) => ({
          ...prevFields,
          discount: "",
        }))
      : setFields((prevFields) => ({
          ...prevFields,
          discount: 10,
        }));
  }, [fields.discountType, setFields]);

  const handleSliderChange = (event, newValue) => {
    setFields((prevFields) => ({
      ...prevFields,
      discount: newValue,
    }));
  };

  return (
    <div className="space-y-2">
      <p className="text-sm font-semibold">Discount Type</p>

      <div className="flex gap-6">
        {[
          { label: "No Discount", value: "no discount" },
          { label: "Percentage %", value: "percentage" },
          { label: "Fixed Price", value: "fixed" },
        ].map(({ label, value }, index) => (
          <label
            key={index}
            className={`border ${
              fields.discountType === value
                ? "border-dashed border-[#2F4EF7] bg-[#f1faff]"
                : "border-[#e1e3ea] bg-[#f4f4f4]"
            } p-4 flex gap-3 items-center rounded-lg w-full cursor-pointer`}
          >
            <input
              type="radio"
              name="discountType"
              value={value}
              checked={fields.discountType === value}
              onChange={handleChange}
              className="cursor-pointer"
            />
            <p className="text-sm font-medium">{label}</p>
          </label>
        ))}
      </div>

      {fields.discountType === "percentage" && (
        <section className="relative pt-6">
          <p className="text-sm">Set Discount Percentage</p>
          <h1 className="text-center text-5xl font-bold my-4">
            {fields.discount} %
          </h1>
          <Slider
            value={typeof fields.discount === "number" ? fields.discount : 0}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
          />
          <p className="text-[#A1A5B7] text-xs">
            Set a percentage discount to be applied on this product.
          </p>
        </section>
      )}

      {fields.discountType === "fixed" && (
        <section className="relative pt-6">
          <Fields
            type={"number"}
            label={"Fixed Discounted Price"}
            placeholder={"Discounted price"}
            description={
              "Set the discounted product price. The product will be reduced at the determined fixed price"
            }
            width={"100%"}
            name={"discount"}
            value={fields.discount}
            onChange={handleChange}
          />
        </section>
      )}
    </div>
  );
};

export default Discount;
