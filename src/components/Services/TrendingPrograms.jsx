import React from "react";
import img1 from "../../assets/courses/1.png";
import img2 from "../../assets/courses/2.png";
import img3 from "../../assets/courses/3.png";
import img4 from "../../assets/courses/4.png";
import { motion } from "framer-motion";
import { FiClock } from "react-icons/fi";

const TrendingPrograms = () => {
  const programs = [
    {
      title: "ACCOUNTING MASTERY",
      sub: "2 Months",
      medium: "Online",
      img: img1,
      des: "Focused on GST, Excel, Tally, TDS, and Income Tax.",
    },
    {
      title: "EXCEL ESSENTIALS",
      sub: "1 Month",
      medium: "Online",
      img: img2,
      des: "Comprehensive Excel training.",
    },
    {
      title: "GST ESSENTIALS",
      sub: "1 Month",
      medium: "Online",
      img: img3,
      des: "In-depth GST knowledge and application.",
    },
    {
      title: "GST MASTERCLASS",
      sub: "1 Month",
      medium: "Offline",
      img: img4,
      des: "Offline 1 Month GST Practicals in our Centers",
    },
    // { title: "Java Full Stack - Malayalam", img: DemoImage },
    // { title: "Professional Accounting - Malayalam", img: DemoImage },
  ];

  const handleKnowMoreClick = (title) => {
    const message = `I want to know more about the ${title}`;
    const whatsappUrl = `https://wa.me/918111917098?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="container">
      <div className="mx-auto px-4 py-12">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-700"
        >
          Trending Programs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center pb-10 font-semibold text-slate-500"
        >
          Enroll in Offline Programs at Our Centers <br /> for Hands-On Learning
          and Skill Development.
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative bg-gray-100 rounded-2xl p-4 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={program.img}
                alt={program.title}
                className="w-32 h-32 mb-2 md:w-28 md:h-28"
              />
              <h2 className="text-md md:text-lg font-bold text-center text-blue-500 pt-2">
                {program.title}
              </h2>
              <p className="text-xs md:text-lg font-semibold text-left text-gray-500 flex items-center">
                <FiClock className="mr-2" />
                {program.sub}
              </p>

              <p className="text-xs md:text-sm font-semibold text-right text-gray-500 pb-6">
                {program.medium}
              </p>
              <div className="absolute inset-0 bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-4 flex flex-col items-center justify-center">
                <p className="text-white text-center">{program.des}</p>
                <button
                  onClick={() => handleKnowMoreClick(program.title)}
                  className="bg-white rounded-2xl px-4 py-2 mt-3"
                >
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingPrograms;
