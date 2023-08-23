import React from "react";

const AddHeader = ({ title }) => {
  return (
    <>
      <section className="flex h-[36px] w-full justify-between items-center py-8 mt-[19px]">
        <h1 className="text-[#181C32] text-lg leading-5 font-semibold">
          {title}
        </h1>
        <div className="flex items-center">
          <input
            className="ml-[28px] rounded-[6.18px] bg-[#2F4EF7] text-white w-[161px] h-[44px] font-medium cursor-pointer"
            type="submit"
            value="Save & Publish"
          />
        </div>
      </section>
    </>
  );
};

export default AddHeader;
