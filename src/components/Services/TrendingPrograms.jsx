import React from "react";
import img1 from "../../assets/courses/1.png";
import img2 from "../../assets/courses/2.png";
import img3 from "../../assets/courses/3.png";
import img4 from "../../assets/courses/4.png";

const TrendingPrograms = () => {
  const programs = [
    {
      title: "TWO MONTHS",
      sub: "Online Course",
      img: img1,
      des: "Focused on GST, Excel, Tally, TDS, and Income Tax.",
    },
    {
      title: "ONE MONTH",
      sub: "Online Excel Course",
      img: img2,
      des: "Comprehensive Excel training.",
    },
    {
      title: "ONE MONTH",
      sub: "Online GST Course",
      img: img3,
      des: "In-depth GST knowledge and application.",
    },
    {
      title: "ONE MONTH",
      sub: "Offline Course",
      img: img4,
      des: "Offline 1 Month GST Practicals in our Centers",
    },
    // { title: "Java Full Stack - Malayalam", img: DemoImage },
    // { title: "Professional Accounting - Malayalam", img: DemoImage },
  ];

  return (
    <section className="container">
      <div className="mx-auto px-4 py-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-700">
          Trending Programs
        </h2>
        <p className="text-center pb-10 font-semibold text-slate-500">
          Enroll in Offline Programs at Our Centers <br /> for Hands-On Learning
          and Skill Development.
        </p>
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
              <h2 className="text-lg md:text-2xl font-bold text-center text-blue-500 pt-2">
                {program.title}
              </h2>
              <p className="text-sm md:text-xl  font-semibold text-center text-gray-500 pb-6">
                {program.sub}
              </p>
              <div className="absolute inset-0 bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-4 flex flex-col items-center justify-center">
                <p className="text-white text-center">{program.des}</p>
                <button className="bg-white rounded-2xl px-4 py-2 mt-3">
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
