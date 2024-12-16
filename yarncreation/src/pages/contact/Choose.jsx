import React from "react";
import Title from "../../components/Title";

const Choose = () => {
  return (
    <div className="bg-[#f5f5f5] text-sm">
      <div className="text-sm text-left ml-24 ">
        <Title text1={"Why"} text2={"Choose Us"} />
      </div>
      <div className="flex w-full text-[12px] ">
        <div className=" border bg-[#FF5733] ml-20 flex flex-col gap-2">
        <div className="p-4 text-white">
          <h3 className="font-bold ">Uncompromising Quality</h3>
          <p>
            Our products are crafted from the highest quality materials,
            selected for their durability, softness, and visual appeal. Each
            item is designed to meet rigorous quality standards, ensuring
            longevity and satisfaction with every use.
          </p>
          </div>
        </div>
        <div className=" border bg-white px-2 ml-8 flex flex-col gap-2">
        <div className="p-4">
          <h3 className="font-bold">Trusted Reliability</h3>
          <p>
            From the materials we use to our customer service approach, Yarn
            Creation is committed to delivering a reliable, consistent
            experience, ensuring that every item meets or exceeds expectations.
          </p>
        </div>
        </div>
        <div className=" border bg-[#FF5733] px-2 ml-8 mr-20 flex flex-col gap-2">
        <div className="p-4 text-white">
          <h3 className="font-bold"> Custom Design</h3>
          <p>
            Whether you’re looking for a specific color, size, or design, we’re
            here to make your ideas a reality. Share your preferences with us,
            and we’ll work together to create something special that fits your
            needs.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
