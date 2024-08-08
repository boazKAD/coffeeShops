import React from "react";
import Layout from "../components/Layout/Layout";
import MenuComponent from "../components/Menucomponent/MenuComponent";
import OrderDetails from "../components/Menucomponent/OrderDetails";

function Menu() {
  return (
    <Layout>
      <div className="flex h-full">
        <div className=" pl-6 pt-6  w-[75%]">
          <div className="">
            <h1>Choose Category</h1>
            <div className="py-4 gap-6 flex">
              <button className=" flex flex-row gap-1 items-center justify-center   bg-[#C67C4E] text-white px-6 py-2 rounded-3xl">
                <h1 className="text-lg">Coffee</h1>
              </button>
              <button className=" flex flex-row gap-1 items-center justify-center   xbg-[#C67C4E] border px-6 py-2 rounded-3xl">
                <h1 className="text-lg">Coffee Beans</h1>
              </button>
              <button className=" flex flex-row gap-1 items-center justify-center   xbg-[#C67C4E] border px-6 py-2 rounded-3xl">
                <h1 className="text-lg">Non-coffee</h1>
              </button>
              <button className=" flex flex-row gap-1 items-center justify-center   xbg-[#C67C4E] border px-6 py-2 rounded-3xl">
                <h1 className="text-lg">Tea</h1>
              </button>
              <button className=" flex flex-row gap-1 items-center justify-center   xbg-[#C67C4E] border px-6 py-2 rounded-3xl">
                <h1 className="text-lg">Snacks</h1>
              </button>
              <button className=" flex flex-row gap-1 items-center justify-center   xbg-[#C67C4E] border px-6 py-2 rounded-3xl">
                <h1 className="text-lg">Dessert</h1>
              </button>
            </div>
          </div>
          <div className="mt-6 flex-1   ">
            <div className="flex justify-between">
              <h1 className="font-bold text-lg">Coffee Menu</h1>
              <p className="pr-6">12 Coffees Results</p>
            </div>
            <div className="h-[36rem] overflow-y-auto flex-1 gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
              <MenuComponent />
              <MenuComponent />
              <MenuComponent />
              <MenuComponent />
              <MenuComponent />
              <MenuComponent />
            </div>
          </div>
        </div>
        <div className=" ">
          <OrderDetails />
        </div>
      </div>
    </Layout>
  );
}

export default Menu;
