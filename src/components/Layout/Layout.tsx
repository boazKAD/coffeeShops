import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen overflow-hidden">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <Header  />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;