import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/images/logos.png";

const Footer = () => {
  return (
    <div className="flex flex-col w-full bg-[#f5f5f5] p-5">
      {/* Top Section: Logo and Social Icons */}
      <div className="flex text-left">
        {/* Left Section: Logo and Name */}
        <div className="flex flex-col space-y-2 ml-28">
          <div className="flex items-center space-x-3">
            <img className="w-12 h-12" src={Logo} alt="logo" />
            <h1 className="text-[25px] text-[#FF5733] font-bold">Yarn Creation</h1>
          </div>
          
          {/* Social Media Icons Below Name */}
          <div className="flex space-x-3 mt-2 ml-20">
            <FontAwesomeIcon icon={faFacebook} size="2x" className="text-[#000000]" />
            <FontAwesomeIcon icon={faInstagram} size="2x" className="text-[#000000]" />
            <FontAwesomeIcon icon={faTwitter} size="2x" className="text-[#000000]" />
          </div>
        </div>
        <div className="flex space-x-20 ml-32"> 
          <div className="flex flex-col items-center">
            <h1 className="text-lg font-bold text-[#FF5733]">Pages</h1>
            <p className="cursor-pointer hover:text-[#FF5733] ">Home</p>
            <p className="cursor-pointer hover:text-[#FF5733] ">Products</p>
            <p className="cursor-pointer hover:text-[#FF5733] ">About Us</p>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-lg font-bold  text-[#FF5733]">Terms and Policies</h1>
            <a href="/terms" className="text-sm cursor-pointer  hover:text-[#FF5733] ">Terms & Conditions</a>
            <a href="/privacy-policy" className="text-sm  cursor-pointer hover:text-[#FF5733] ">Privacy Policy</a>
          </div>

          {/* Contact Information Section */}
          <div className="flex flex-col items-center">
            <h1 className="text-lg font-bold text-[#FF5733]">Contact Us</h1>
            <p>yarncreation@gmail.com</p>
            <p>Kalimati, Kathmandu</p>
            <p>9860931929</p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center mt-3">
        <hr className="w-full border-t-2 border-gray-300 my-2" />
        <div className="text-sm text-[#FF5733] mt-1">
          © {new Date().getFullYear()} Yarn Creation. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
