import React from "react";
import Img from "../assets/images/image-product-desktop.jpg";
import Img1 from "../assets/images/image-product-mobile.jpg";
import Button from "./Button";
import "../App.css";

const Card = () => {
  return (
    <section className="md:max-h-[600px] md:max-w-[900px] justify-center flex md:flex-row flex-col max-w-full">
      <img
        src={Img}
        alt="perfume"
        className="
      hidden md:block md:w-6/12 md:rounded-l-xl rounded-b-xl "
      />
      <img src={Img1} alt="perfume" className="block md:hidden rounded-t-xl" />
      <div className="bg-white md:w-6/12 p-10 md:rounded-r-xl">
        <section>
          <h2 className="text-sm font-medium font-primary tracking-[7px] uppercase text-gray-500 mb-2 md:mb-8">
            Perfume
          </h2>
          <h1 className="font-secondary text-5xl font-extrabold mb-4 md:mb-8 pr-4">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="text-xl font-medium font-primary text-gray-500 mb-8 tracking-tighter md:pr-8">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="mb-10 flex flex-row w-full justify-center items-center">
            <h1 className="text-4xl font-secondary w-1/2 font-extrabold text-[hsl(158,36%,37%)]">
              $149.99
            </h1>
            <h2 className="text-lg w-1/2 font-primary text-[hsl(158,36%,37%)] line-through">
              $169.99
            </h2>
          </div>
          <div className="justify-center flex items-center">
            <Button />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
