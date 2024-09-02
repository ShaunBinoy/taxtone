import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const GetStartedButton = () => {
  const handleButtonClick = () => {
    const message = "I would like to get started.";
    const whatsappUrl = `https://wa.me/918111917098?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleButtonClick}
      className="primary-btn flex items-center gap-2 group mt-2"
    >
      Get Started
      <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
    </button>
  );
};

export default GetStartedButton;
