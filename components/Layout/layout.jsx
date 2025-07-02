import React from "react";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      <div className="h-36">
        <Navbar />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
