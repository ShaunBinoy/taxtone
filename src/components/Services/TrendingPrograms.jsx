import React from "react";
import DemoImage from "../../assets/hero.png"; // Replace with your demo image path

const TrendingPrograms = () => {
  const programs = [
    {
      title: "2 Months Online Course",
      img: DemoImage,
      des: "Focused on GST, Excel, Tally, TDS, and Income Tax.",
    },
    {
      title: "1 Month Online Excel Classe",
      img: DemoImage,
      des: "Comprehensive Excel training.",
    },
    {
      title: "1 Month Online GST Course",
      img: DemoImage,
      des: "In-depth GST knowledge and application.",
    },
    {
      title: "1 Month Offline Course",
      img: DemoImage,
      des: "Offline 1 Month GST Practicals in our Centers",
    },
    // { title: "Java Full Stack - Malayalam", img: DemoImage },
    // { title: "Professional Accounting - Malayalam", img: DemoImage },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          Trending Programs
        </h2>
        <p className="text-center mb-10">Choose your Internship Program</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative bg-gray-200 rounded-lg p-4 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={program.img}
                alt={program.title}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-3xl font-poppins font-bold text-center text-gray-800 pt-2 pb-6">
                {program.title}
              </h3>
              <div className="absolute inset-0 bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-4 flex flex-col items-center justify-center">
                <p className="text-white text-center">{program.des}</p>
                <button className="bg-white rounded-2xl px-4 py-2 mt-3">Know More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingPrograms;
