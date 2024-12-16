import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getFromLocalStorage, saveToLocalStorage } from '../../utils/localStorage';

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = Date.now();
    const userData = { ...formData, id: userId };

    // Get existing users from localStorage
    const existingUsers = getFromLocalStorage('users') || [];

    // Check if the email already exists
    const emailExists = existingUsers.some(user => user.username === formData.username);

    if (emailExists) {
      alert('username already exists. Please use a different username.');
    } else {
      // Add the new user to the array
      existingUsers.push(userData);
      // Save the updated array back to localStorage
      saveToLocalStorage('users', existingUsers);
      alert('User data saved!');
    }
  };

  return (
    <div className="flex justify-center items-center mx-auto mt-[40px] w-[350px] h-[380px] shadow-xl">
      <div className="w-full h-full p-5 bg-[#ffffff] rounded-lg mb-4">
        <form onSubmit={handleSubmit} >
          <h1 className="flex justify-center items-center text-[25px] font-bold text-[#FF5733]">
            Sign Up
          </h1>
          <p className="mt-1 ml-9 font-light text-[13px]">
            Enter your details to signin to your account
          </p>
          <div className="relative mt-5">
            <input
              type="text"
              name="username"
              value={formData.username}
              placeholder="Username"
              onChange={handleChange}
              className="pl-12 py-2 border-2 border-[#f3f3f3] bg-[#f5f5f5] rounded-md w-full"
            />
            <FontAwesomeIcon
              icon={faUser}
              className="absolute left-3 top-3 text-gray-500"
            />
          </div>
          <div className="relative mt-5">
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formData.password}
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
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
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
