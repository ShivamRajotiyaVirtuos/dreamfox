import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Homepage/Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      <div className="h-36">
        <Navbar />
      </div>
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
