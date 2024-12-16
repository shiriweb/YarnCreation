import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const SuccessMsgDisplay = () => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-[#f5f5f5] p-6">
      <div className="flex items-center justify-center w-[400px] p-6 bg-white rounded-lg shadow">
        <FontAwesomeIcon icon={faCheck} className="text-green-600 text-4xl mr-4" />
        <p className="font-bold text-xl text-green-700">Order Placed Successfully!</p>
      </div>
    </div>
  );
};

export default SuccessMsgDisplay;
