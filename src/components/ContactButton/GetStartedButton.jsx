import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";

const GetStartedButton = () => {
  return (
    <ScrollLink
      to="contact" // The ID of the section you want to scroll to
      smooth={true}
      duration={500}
      className="primary-btn flex items-center gap-2 group mt-2 cursor-pointer"
    >
      Get Started
      <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
    </ScrollLink>
  );
};

export default GetStartedButton;

// import React from "react";
// import { IoIosArrowRoundForward } from "react-icons/io";

// const GetStartedButton = () => {
//   const handleButtonClick = () => {
//     const message = "I would like to get started.";
//     const whatsappUrl = `https://wa.me/918111917098?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   return (
//     <button
//       onClick={handleButtonClick}
//       className="primary-btn flex items-center gap-2 group mt-2"
//     >
//       Get Started
//       <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
//     </button>
//   );
// };

// export default GetStartedButton;
