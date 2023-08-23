import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useProductContext } from "../../../../context/ProductContext";

// data array
const menuItemData = [
  { item: "Published", value: "Published" },
  { item: "Draft", value: "Draft" },
  { item: "Scheduled", value: "Scheduled" },
  { item: "Inactive", value: "Inactive" },
];

const Status = () => {
  const { fields, setFields } = useProductContext();

  const handleChange = (event) => {
    setFields((prevFields) => ({
      ...prevFields,
      status: event.target.value,
    }));
  };

  return (
    <div className="bg-white rounded-lg p-6 w-full">
      <h1 className="font-semibold text-xl">Status</h1>

      <div className="w-full mt-4 statusSelect">
        <FormControl sx={{ minWidth: "100%" }}>
          <Select
            value={fields.status}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="" disabled>
              Status
            </MenuItem>
            {menuItemData.map(({ item, value }, index) => {
              return (
                <MenuItem value={value} key={index}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <p className="text-[#A1A5B7] text-xs mt-2">Set the product status.</p>
      </div>
    </div>
  );
};

export default Status;
