import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex">
      <SideBar />
      <Header />
    </div>
  );
};

export default Layout;
