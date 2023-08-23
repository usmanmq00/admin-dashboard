import React from "react";
import { ReactComponent as Calendar } from "../../assets/images/inventory/Calendar.svg";
import { ReactComponent as Down } from "../../assets/images/inventory/Down.svg";
import { ReactComponent as Swap } from "../../assets/images/inventory/Swap.svg";
import { ReactComponent as Search } from "../../assets/images/inventory/Search.svg";

const InventoryItemsSection = () => {
  return (
    <section className="mb-[27px]">
      <div className="flex justify-between">
        <h1 className="text-[16px] font-medium text-[#45464E]">
          Inventory Items
        </h1>
        <div className="flex">
          <div className="border-2 border-[#ABAFB1] mr-3 rounded-[4px]">
            <div className="inline pl-2">
              {<Search className="inline mb-1 mr-2 w-5 h-5" />}
            </div>
            <input
              className="p-[8px] outline-none"
              type="text"
              placeholder="Search"
            />
          </div>
          <button className="border-2 border-[#53545C] rounded-[4px] p-2 mr-3">
            {<Swap className="inline mb-1 mr-2 w-5 h-5" />} Import/Export
          </button>
          <button className="border-2 border-[#53545C] rounded-[4px] p-2 mr-3">
            {<Calendar className="inline mb-1 mr-2 w-5 h-5" />} Filter
          </button>
          <button className="border-2 border-[#53545C] rounded-[4px] p-2 mr-3">
            Bulk Action {<Down className="inline mb-1 ml-2 w-5 h-5" />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default InventoryItemsSection;
