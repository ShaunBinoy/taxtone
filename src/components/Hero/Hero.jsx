import React from "react";
import Navbar from "../Navbar/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import Blob from "../../assets/blob.svg";
import HeroPng from "../../assets/working2.png";
import Book from "../../assets/352.png";
import Bulb from "../../assets/Light Bulb.png";
import Cloud from "../../assets/set-clouds.png";
import Star from "../../assets/stars.png";
import Drawing from "../../assets/351.svg";

import { animate, motion } from "framer-motion";
import GetStartedButton from "../ContactButton/GetStartedButton";

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  return (
    <section className="bg-blue-200 overflow-hidden relative">
      <motion.img
        src={Star}
        alt="Star"
        className="absolute w-full h-auto" // Full width with auto height to maintain aspect ratio
        animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
      <motion.img
        src={Star}
        alt="Star"
        className="absolute w-3/4 h-auto" // Full width with auto height to maintain aspect ratio
        animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] mt-20">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20 ml-3">
          <div className="text-start md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-6xl lg:text-7xl font-bold !leading-snug text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-gray-800 bg-[length:400%_400%] animate-textclip"
            >
              UpSkill
              <span className="text-6xl lg:text-7xl font-bold !leading-snug text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-gray-900 to-blue-700 bg-[length:200%_100%] animate-textclip">
                Now
              </span>
            </motion.h1>

            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-lg lg:text-2xl font-bold !leading-snug text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-gray-900 to-blue-700 bg-[length:200%_100%] animate-textclip"
            >
              Leading Accounting <br />
              Virtual Internship Platform
            </motion.h1>
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-lg lg:text-2xl font-semibold !leading-snug text-gray-700"
            >
              It's easy when taught <br /> with care and expertise.
            </motion.h1>
            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-start md:justify-start"
            >
              <GetStartedButton />
            </motion.div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="flex justify-center items-center -mt-16">
          <motion.img
            src={Bulb}
            alt="Bulb"
            className="md:absolute md:w-9 md:h-12 md:top-40 md:left-40 hidden md:block"
            animate={{ y: [0, 25, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
          <motion.img
            src={Cloud}
            alt="Cloud r"
            className="absolute top-52 left-64 w-20 h-20 sm:w-28 sm:h-28 z-[2] md:top-24 md:left-96"
            // initial={{ x: 50, opacity: 0 }}
            animate={{ x: [0, 20, 0], opacity: 1 }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
              delay: 0.4,
            }}
          />
          <motion.img
            src={Cloud}
            alt="Cloud l"
            className="absolute top-20 left-28 w-20 h-20 sm:w-28 sm:h-28 z-[2] md:top-16 md:left-12"
            animate={{ x: [0, -20, 0], opacity: 1 }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
              delay: 0.4,
            }}
          />
          <motion.img
            src={Drawing}
            alt="Cloud"
            className="absolute bottom-80 left-10 w-16 h-16 sm:w-24 sm:h-24 md:bottom-12 md:left-1/3"
            animate={{ x: [0, -20, 0], opacity: 1 }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
              delay: 0.4,
            }}
          />
          <motion.img
            src={Book}
            alt="pen"
            className="absolute top-96 left-3/4 w-8 h-12 sm:w-8 sm:h-12 md:top-1/2 md:left-16"
            animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={HeroPng}
            alt=""
            className="w-[320px] xl:w-[500px] relative z-10 my-8"
          />
          <motion.img
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            src={Blob}
            alt=""
            className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
