import React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags({ setFields, fields }) {
  // Function to handle tag selection
  const handleTagSelection = (event, newValue) => {
    setFields((prevFields) => ({
      ...prevFields,
      tags: newValue,
    }));
  };

  return (
    <Autocomplete
      multiple
      freeSolo
      id="checkboxes-tags-demo"
      options={tags}
      disableCloseOnSelect
      getOptionLabel={(option) => option}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option}
        </li>
      )}
      style={{ width: "100%" }}
      renderInput={(params) => (
        <TextField {...params} placeholder="Tags" sx={{ padding: 0 }} />
      )}
      sx={{ padding: 0 }}
      value={fields.tags}
      onChange={handleTagSelection}
    />
  );
}

const tags = ["discount", "on sale", "best seller"];
