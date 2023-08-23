import React, { useState } from "react";

import General from "./General/General";
import Advanced from "./Advanced/Advanced";

const RightSide = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full">
      <div className="flex gap-6 w-full">
        {["General", "Advanced"].map((item, index) => {
          return (
            <button
              type="button"
              key={index}
              className={`font-medium pb-2 border-b-2 ${
                active === index
                  ? "border-b-[#2f4ef7] text-[#2f4ef7]"
                  : "text-[#a1a5b7] border-b-transparent"
              } transition-all duration-300 hover:border-b-[#2f4ef7] hover:text-[#2f4ef7]`}
              onClick={() => setActive(index)}
            >
              {item}
            </button>
          );
        })}
      </div>

      {active === 0 ? <General /> : <Advanced />}
    </div>
  );
};

export default RightSide;
