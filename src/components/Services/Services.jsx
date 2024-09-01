import React from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import { AiFillFileText } from "react-icons/ai";
import { SiMicrosoftexcel } from "react-icons/si";
import { RiAccountPinBoxLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { FaBalanceScale } from "react-icons/fa";
import { motion } from "framer-motion";

const ServicesData = [
  {
    id: 1,
    title: "GST",
    link: "#",
    icon: <FaBalanceScale />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Tally",
    link: "#",
    icon: <RiAccountPinBoxLine />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Excel",
    link: "#",
    icon: <SiMicrosoftexcel />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "TDS",
    link: "#",
    icon: <AiFillFileText />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "Income Tax",
    link: "#",
    icon: <FaMoneyBillWave />,
    delay: 0.6,
  },
  // {
  //   id: 6,
  //   title: "24/7 support",
  //   link: "#",
  //   icon: <BiSupport />,
  //   delay: 0.7,
  // },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
const Services = () => {
  return (
    <section className="bg-white mt-4">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center pb-4">
          Services We Provide
        </h1>
        <p className="text-center pb-10 font-semibold text-slate-500">
          Enroll in 3-Month Offline Programs at Our Centers <br /> for Hands-On
          Learning and Skill Development.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4"> {service.icon}</div>
              <h1 className="text-lg font-semibold text-center px-3">
                {service.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
