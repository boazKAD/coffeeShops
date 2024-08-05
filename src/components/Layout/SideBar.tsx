import React from "react";
import homeIcon from "../../assets/Vector.png";
import menuIcon from "../../assets/menu.png";
import orderIcon from "../../assets/order.png";
import { TbReport } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const SideBar = () => {
  return (
    <div className="h-screen w-32 gap-4 flex flex-col border-r items-center justify-center">
      <div className="bg-[#c67c4e] flex flex-col items-center justify-center w-20 h-20 rounded-lg">
        <img src={homeIcon} alt="home icon" />
        <h2 className="text-white">Home</h2>
      </div>
      <div className="flex flex-col items-center justify-center w-20 h-20 rounded-lg">
        <img src={menuIcon} alt="home icon" />
        <h2 className="text-[#a5a9af]">Menu</h2>
      </div>
      <div className="flex flex-col items-center justify-center w-20 h-20 rounded-lg">
        <img src={orderIcon} alt="home icon" />
        <h2 className="text-[#a5a9af]">My Order</h2>
      </div>
      <div className="flex flex-col items-center justify-center w-20 h-20 rounded-lg">
      <TbReport  className="w-6 h-6 text-[#a5a9af]"/>
        <h2 className="text-[#a5a9af]">Reports</h2>
      </div>
      <div className="flex flex-col items-center justify-center w-20 h-20 rounded-lg">
      <IoSettingsOutline  className="w-6 h-6 text-[#a5a9af]"/>
        <h2 className="text-[#a5a9af]">Setting</h2>
      </div>
      <div className="flex flex-col items-center justify-center w-20 h-20 rounded-lg">
      <IoIosLogOut className="w-6 h-6 text-[#a5a9af]"/>
        <h2 className="text-[#a5a9af]">Logout</h2>
      </div>
    </div>
  );
};
export default SideBar;
