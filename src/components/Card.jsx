import React from "react";
import Img from "../assets/images/image-product-desktop.jpg";
import Button from "./Button";

const Card = () => {
  return (
    <section className="max-h-[600px] max-w-[900px] justify-center flex flex-row">
      <img src={Img} alt="" className="w-6/12" />
      <div className="bg-white w-6/12 p-10">
        <section>
          <h2>Perfume</h2>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p>A floral, solar and voluptuous interpretation composed by</p>
          <div>$149.99</div>
          <Button />
        </section>
      </div>
    </section>
  );
};

export default Card;
