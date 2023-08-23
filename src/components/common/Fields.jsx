import React from "react";

export const Fields = ({
  label,
  type,
  description,
  width,
  name,
  onChange,
  value,
  placeholder,
  min,
  max,
  error,
}) => {
  return (
    <div className="space-y-1.5">
      <h4 className="text-sm">{label}</h4>
      <input
        type={type ? type : "text"}
        className="outline-none border border-[#e1e3ea] rounded-md p-2 bg-[#F4F5FA]"
        style={{ width: width }}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        max={max}
      />
      {error && <p className="text-sm text-[red] my-2">{error}</p>}
      <p className="text-[#A1A5B7] text-xs">{description}</p>
    </div>
  );
};

export const TextArea = ({
  label,
  type,
  description,
  width,
  height,
  name,
  onChange,
  value,
  placeholder,
  error,
}) => {
  return (
    <div className="space-y-1.5">
      <h4 className="text-sm">{label}</h4>
      <textarea
        type={type ? type : "text"}
        className="outline-none border border-[#e1e3ea] rounded-md p-2 resize-none bg-[#F4F5FA]"
        style={{ width: width, height: height }}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <p className="text-sm text-[red] my-2">{error}</p>}
      <p className="text-[#A1A5B7] text-xs">{description}</p>
    </div>
  );
};
