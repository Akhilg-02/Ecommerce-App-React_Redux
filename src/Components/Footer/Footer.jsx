import React from "react";
import logo from "../../assets/images/logo2.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="flex items-center justify-center">
        <hr className="h-px w-4/5 bg-gray-400 opacity-50 outline-none border-none" />
      </div>
      <div className="flex items-center justify-around pt-4">
        <div>
          <img className="h-20" src={logo} alt="logo"
          style={{
            border: "3px solid #fdd835",
            idth: "32vw",
            borderRadius:"2em",
          }}
          />
        </div>
        <div>
          <p className="text-black text-sm font-inter underline normal-case">
            Copyright {year} page by React Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;