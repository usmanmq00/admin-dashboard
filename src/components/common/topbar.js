import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Notification } from "../../assets/images/sidebar/Notification.svg";
import Home from "../../assets/images/sidebar/Home.svg";

const Topbar = ({ title, path }) => {
  return (
    <>
      <nav className="w-full h-[60px] bg-white ml-[16px] overflow-hidden border-b-2 border-gray-100">
        <div className="flex justify-between items-center h-[60px] pl-5 ">
          <Link to={path}>
            <h1 className="font-medium text-[#1E1E1E] leading-7 text-base cursor-pointer">
              {title}
            </h1>
          </Link>
          <div className="flex items-center mr-[40px]">
            <div>{<Notification className="cursor-pointer" />}</div>
          </div>
        </div>
      </nav>
      <nav className="w-full h-[24px] bg-white ml-[16px] overflow-hidden">
        <div className="flex items-center h-[60px] pl-5 overflow-hidden">
          <img
            className="w-[13px] h-[]14px] cursor-pointer mb-9 hover:border-b-2 hover:border-blue-500"
            src={Home}
            alt="Home"
          />
        </div>
      </nav>
    </>
  );
};

export default Topbar;
