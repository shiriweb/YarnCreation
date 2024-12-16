import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";



const Register = () => {
  return (
      <div className="flex justify-center items-center mx-auto mt-[40px] w-[350px] h-[380px] shadow-xl">
        <div className="w-full h-full p-5 bg-[#ffffff] rounded-lg mb-4">
          <form className="">
            <h1 className="flex justify-center items-center text-[25px] font-bold text-[#FF5733]">
              Sign Up
            </h1>
            <p className="mt-1 ml-9 font-light text-[13px]">
              Enter your details to signin to your account
           </p>
            <div className="relative mt-5">
              <input
                type="text"
                placeholder="Username"
                className="pl-12 py-2 border-2 border-[#f3f3f3] bg-[#f5f5f5] rounded-md w-full"
              />
              <FontAwesomeIcon
                icon={faUser}
                className="absolute left-3 top-3 text-gray-500"
              />
            </div>
            <div className="relative mt-5">
              <input
                type="password"
                placeholder="Password"
                className="pl-12 py-2  bg-[#f5f5f5] border-2 border-[#f3f3f3] rounded-md w-full"
              />
              <FontAwesomeIcon
                icon={faLock}
                className="absolute left-3 top-3 text-gray-500"
              />
            </div>
            <div className="relative mt-5">
              <input
                type="password"
                placeholder="Re-write Password"
                className="pl-12 py-2  bg-[#f5f5f5] border-2 border-[#f3f3f3] rounded-md w-full "
              />
              <FontAwesomeIcon
                icon={faLock}
                className="absolute left-3 top-3 text-gray-500"
              />
            </div>
            <button
              className="bg-[#FF5733] w-full p-2 mt-5 text-white font-bold rounded-lg hover:bg-[#D32F2F]"
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <p className="ml-14 mt-2 font-light text-[14px] text-gray-700">
          Already have an account?
          <Link className="text-[#D32F2F] hover:text-[#FF5733]" to="/login">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
