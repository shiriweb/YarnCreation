import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";
import { ShopContext } from "../../context/ShopContext.jsx";
import { getFromLocalStorage } from "../../utils/localStorage";

export const Login = () => {

  const { setUserStatus, setActiveStatus, setCarts } = useContext(ShopContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const checkUserExistence = () => {
    const existingUsers = getFromLocalStorage('users') || [];

    const user = existingUsers.find(user => user.username === formData.username && user.password === formData.password);

    if (user) {
      alert("Login successful");
      setUserStatus({ id: user.id, username: user.username });
      setActiveStatus(true);
      const savedCarts = getFromLocalStorage("carts") || {};
      setCarts(savedCarts);
      navigate("/");
    } else {
      alert("Invalid username or password");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkUserExistence();
  };

  return (
    <div className="flex justify-center items-center mx-auto mt-[40px] w-[350px] h-[320px] shadow-xl ">
      <div className="w-full h-full p-5 bg-[#ffffff] rounded-lg mb-4">
        <form onSubmit = {handleSubmit}>
          <h1 className="flex justify-center items-center text-[25px] font-bold text-[#FF5733]">
            Log In
          </h1>
          <p className="mt-1 ml-9 font-light text-[13px]">
            Enter your details to login to your account
          </p>
          <div className="relative mt-5">
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
              className="pl-12 py-2  bg-[#f5f5f5] border-2 border-[#f3f3f3] rounded-md w-full"
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
            Log In
          </button>
        </form>
        <p className="ml-14 mt-2 font-light text-[14px] text-gray-700">
          Dont have an account?{" "}
          <Link className="text-[#D32F2F] hover:text-[#FF5733]" to="/register">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
