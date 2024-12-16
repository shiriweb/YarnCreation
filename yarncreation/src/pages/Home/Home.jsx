import React from "react";
import image from "../../assets/images/homeeee.jpg";
import FirstDiv from "./FirstDiv";
import SecondDiv from "./SecondDiv";
import Collection from "../products/Collection";
import BestSeller from "../../components/BestSeller";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <FirstDiv />
      <SecondDiv />
      <Collection />
      <BestSeller />
      <Footer />
    </>
  );
};

export default Home;
