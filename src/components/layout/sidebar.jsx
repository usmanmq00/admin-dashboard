import React, { useState } from "react";
import Logo from "../../assets/images/sidebar/Logo.svg";
import DecreaseIcon from "../../assets/images/sidebar/DecreaseIcon";
import IncreaseIcon from "../../assets/images/sidebar/IncreaseIcon";
import logoutIcon from "../../assets/images/sidebar/Logout.svg";
import { ReactComponent as Category } from "../../assets/images/sidebar/Category.svg";
import { ReactComponent as Bag } from "../../assets/images/sidebar/Bag.svg";
import { ReactComponent as User } from "../../assets/images/sidebar/User.svg";
import { ReactComponent as Folder } from "../../assets/images/sidebar/Folder.svg";
import { ReactComponent as Ticket } from "../../assets/images/sidebar/Ticket.svg";
import { Link, useLocation } from "react-router-dom";
import { useContextAPI } from "../../context/AuthContext";

const Sidebar = () => {
  const location = useLocation();

  const [isClicked, setIsClicked] = useState(false);

  const handleClicked = () => {
    setIsClicked(!isClicked);
  };

  const data = [
    {
      item: "Dashboard",
      icon: <Category className="fill-white text-white" />,
      path: "/dashboard",
    },
    {
      item: "Orders",
      icon: <Bag className="fill-white text-white" />,
      path: "/orders",
    },
    {
      item: "Customers",
      icon: <User className="fill-white text-white" />,
      path: "/customers",
    },
    {
      item: "Inventory",
      icon: <Folder className="fill-white text-white" />,
      path: "/inventory",
    },
    {
      item: "Coupon",
      icon: <Ticket className="fill-white text-white" />,
      path: "/coupon",
    },
    {
      item: "Category",
      icon: <Ticket className="fill-white text-white" />,
      path: "/category",
    },
    {
      item: "Custom Order",
      icon: <Ticket className="fill-white text-white" />,
      path: "/custom-order",
    },
  ];

  const { logout } = useContextAPI();

  return (
    <section
      className={`h-[100vh] flex flex-col transition-all duration-300 ${
        isClicked ? "w-[70px]" : "lg:w-[250px] w-[70px]"
      } overflow-hidden sticky top-0 left-0 z-10`}
    >
      <div className="flex justify-between items-center mx-6 mt-5 mb-8">
        <div
          className={`${
            isClicked ? "hidden" : "md:flex hidden"
          }  items-center justify-between`}
        >
          <img className="mr-3" src={Logo} alt="Logo" />
          <h1 className="w-[49px] h-[30px] font-extrabold text-[#45464E] text-[20px]">
            Logo
          </h1>
        </div>

        <button onClick={handleClicked}>
          {isClicked ? <IncreaseIcon /> : <DecreaseIcon />}
        </button>
      </div>

      <section className="h-full flex justify-between flex-col overflow-auto">
        <div className="mx-2">
          {data.map((d, index) => (
            <Link to={d.path} key={index}>
              <div
                className={`flex cursor-pointer text-[#53545C] mb-2 p-4 ${
                  location.pathname === d.path &&
                  "bg-[#2F4EF7] rounded-xl text-white font-medium"
                }`}
              >
                <p>{d.icon}</p>
                <p
                  className={`pl-5 w-[120px] h-[17px] text-[14px]  ${
                    isClicked ? "hidden" : "lg:block"
                  }`}
                >
                  {d.item}
                </p>
              </div>
            </Link> 
          ))}
        </div>

        <button type="button" className="mx-5 mb-[30px] flex" onClick={logout}>
          <img
            className="cursor-pointer w-[25px] h-[25px]"
            src={logoutIcon}
            alt="logout"
          />
          <p
            className={`pl-5 w-[46px] h-[17px] text-[14px] font-medium text-[#FC6E69]  ${
              isClicked ? "hidden" : "block"
            } cursor-pointer`}
          >
            Logout
          </p>
        </button>
      </section>
    </section>
  );
};

export default Sidebar;
