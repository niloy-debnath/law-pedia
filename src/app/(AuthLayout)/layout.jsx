import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Logo from "../components/shared/Logo";

const layout = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto w-full mt-2">
      <Logo className="invert"></Logo>
      {children}
    </div>
  );
};

export default layout;
