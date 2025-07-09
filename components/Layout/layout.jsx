import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Homepage/Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#000] min-h-screen">
      {/* <div className="h-20 sm:h-28 2xl:h-32"> */}
        <Navbar />
      {/* </div> */}
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
