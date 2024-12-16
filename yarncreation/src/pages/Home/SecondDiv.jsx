import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCab,
  faPencil,
  faShield,
  faStar,
  faThumbsUp,
  faTruck,
  faTshirt,
} from "@fortawesome/free-solid-svg-icons";

const SecondDiv = () => {
  return (
    <>
      <div className="flex ml-[40px] p-4 w-[1080px] h-[100px]">
        <div className="flex text-[30px] w-[270px]  ">
          <FontAwesomeIcon
            className=" text-[38px] text-[#FF5733]"
            icon={faShield}
          />
          <div className=" ml-2 ">
            <h1 className="text-[18px] text-black font-bold">
              Quality Assurance
            </h1>
            <p className="font-light text-[12px]">Premium handmade quality</p>
          </div>
        </div>{" "}
      
        <div className=" flex text-[30px] w-[270px]   ">
          <FontAwesomeIcon className=" text-[38px] text-[#FF5733]" icon={faPencil} />
          <div className=" ml-2 ">
            <h1 className="text-[18px] text-black font-bold">Custom Orders </h1>
            <p className="font-light text-[12px]">
              Custom-designed for your needs.
            </p>
          </div>
        </div>
        <div className=" flex text-[30px] w-[270px] ml-4">
          <FontAwesomeIcon className=" text-[#FF5733] text-[38px]" icon={faCab} />
          <div className=" ml-2 ">
            <h1 className="text-[18px] text-black font-bold">
              Timely Delivery
            </h1>
            <p className="font-light text-[12px] ml-1">Fast and punctual delivery</p>
          </div>
        </div>
        <div className=" flex text-[30px] w-[270px] ">
        <FontAwesomeIcon
          className="text-[38px] text-[#FF5733]"
          icon={faStar}
        />
        <div className=" ml-2">
          <h1 className="text-[18px] text-black font-bold">
            Satisfaction Guarantee
          </h1>
          <p className="font-light text-[12px]">
            Your happiness is our top priority.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default SecondDiv;
