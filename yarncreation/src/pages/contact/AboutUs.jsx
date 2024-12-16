import React from "react";
import Title from "../../components/Title";
import Crochet from "../../assets/images/toys/crochets.jpg";
import Choose from "./Choose";
const AboutUs = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="text-xl text-center">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="flex p-4 w-full  bg-[#f5f5f5]">
        <div className="w-1/2 ml-[90px]">
          <img className="w-[400px] h-auto" src={Crochet} />
        </div>
        <div className="w-1/2 p-2 mb-10 mt-7 mr-44">
          <div className="flex flex-col w-full text-sm">
            <p className="mb-2">
              Welcome to Yarn Creation, where artistry meets quality in the
              world of handmade yarn products. Our journey began with a
              dedication to the craft of crochet and an ambition to share these
              unique creations with crochet lovers
            </p>
            <p className="mb-3">
              At Yarn Creation, we believe in the uniqueness of handmade
              products and the joy they bring. Each item is crafted not just as
              a product but as a cherished piece of art. Thank you for
              supporting Yarn Creation, where every creation is made with love
              and care just for you.
            </p>
            <h3 className="mb-2 font-bold">Our Mission</h3>
            <p>
              {" "}
              <p>
                Our mission is to provide products that reflect the beauty of
                handcrafted work. Every piece is thoughtfully made to bring joy
                and a sense of individuality to our customers. We believe that
                handmade items carry a special value, making them ideal for
                personal enjoyment or gifting to someone special.
              </p>
            </p>
          </div>
        </div>
      </div>
      <Choose />
    </div>
  );
};

export default AboutUs;
