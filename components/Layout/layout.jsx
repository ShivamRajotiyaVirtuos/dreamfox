import React from "react";

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
