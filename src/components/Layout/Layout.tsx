import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";

const Layout  = ({ children }) => {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full">
      <Header />
      <main>
        {children}
      </main>
      </div>
    </div>
  );
};

export default Layout;
