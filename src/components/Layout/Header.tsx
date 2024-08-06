import React from "react";
import { CiSearch } from "react-icons/ci";
import filter from "../../assets/filter.png";
import avatar from "../../assets/Avatar.png";
import { IoIosNotificationsOutline } from "react-icons/io";
const Header = () => {
  return (
    <div className="flex h-32 flex-row ">
      <div className="w-[75%] flex justify-center items-center border-b border-r">
        <div className=" relative ">
          <input
            type="text"
            className="h-[72px] text-[22px] block w-[756px] p-2 pl-14 focus:outline-none border bg-[#f8f8f8] rounded-2xl"
            placeholder="Search..."
          />
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-9 h-11 mr-2" />
          <button className=" flex flex-row gap-1 items-center justify-center absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#C67C4E] text-white px-4 py-2 rounded-md">
            <img src={filter} alt="filter" className="h-3 w-4 text-white" />
            <h1 className="text-lg">Filter</h1>
          </button>
        </div>
      </div>
      <div className="border-b p-4 gap-2 border-l flex items-center justify-between w-[25%]">
        <div className="flex items-center gap-2 justify-center">
          <img src={avatar} alt="" />
          <div>
            <h1 className="">Mandela Wilson</h1>
            <h1>Cashier</h1>
          </div>
        </div>
        <IoIosNotificationsOutline className="w-10 h-6" />
      </div>
    </div>
  );
};
export default Header;
