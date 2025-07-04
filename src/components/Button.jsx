import React from "react";
import Image from "../assets/images/icon-cart.svg";

const Button = () => {
  return (
    <button className="bg-[hsl(228,12%,48%)] p-4 w-90 flex justify-center items-center flex-row rounded-lg hover:bg-[hsl(158,42%,18%)] cursor-pointer">
      <img src={Image} alt="" srcset="" className="mr-5 w-6" />
      <h2 className="text-white text-xl font-primary font-bold">Add to Cart</h2>
    </button>
  );
};

export default Button;
