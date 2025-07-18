import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Homepage/Footer";

const Layout = ({ children }) => {
  return (
    <div id="smooth-wrapper" className="bg-[#000]">
      <div id="smooth-content">
        {/* <Navbar /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Layout;
