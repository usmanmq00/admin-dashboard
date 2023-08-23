import React from "react";

const LoginFields = ({
  icon,
  type,
  placeholder,
  name,
  value,
  onChange,
  children,
  error,
}) => {
  return (
    <div>
      <section className="w-[375px] h-[52px] flex border-1 gap-3 px-4 rounded-lg bg-gray-100 items-center">
        <div className="text-2xl text-gray-200">{icon}</div>
        <input
          className="bg-transparent outline-none w-full"
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
        {children}
      </section>
      {error && <p className="text-xs text-[red] mt-0.5 text-start">{error}</p>}
    </div>
  );
};

export default LoginFields;
