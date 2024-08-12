import React from "react";
import DemoImage from "../../assets/hero.png"; // Replace with your demo image path

const TrendingPrograms = () => {
  const programs = [
    { title: "Mobile App Development - Malayalam", img: DemoImage },
    { title: "Python Full Stack - Malayalam", img: DemoImage },
    { title: "Digital Marketing - Malayalam", img: DemoImage },
    { title: "Java Full Stack - Tamil", img: DemoImage },
    { title: "Java Full Stack - Malayalam", img: DemoImage },
    { title: "Professional Accounting - Malayalam", img: DemoImage },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          Trending Programs
        </h2>
        <p className="text-center mb-10">Choose your Internship Program</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative bg-blue-900 rounded-lg p-4 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={program.img}
                alt={program.title}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-white text-sm text-center">
                {program.title}
              </h3>
              <div className="absolute inset-0 bg-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-4 flex items-center justify-center">
                <p className="text-white text-center">Enroll Now</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingPrograms;
