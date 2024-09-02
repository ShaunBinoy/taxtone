import React from "react";
import Slider from "react-slick";
import time from "../../assets/carousel/time.svg";
import malayalam from "../../assets/carousel/malayalam.svg";
import one from "../../assets/carousel/one.png";
import challenge from "../../assets/carousel/challenge.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show two slides at once
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show one slide at a time on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    {
      img: challenge,
      title: "Challanges ",
      description: "Based Training",
    },
    {
      img: malayalam,
      title: "Malayalam",
      description: "Classes",
    },
    {
      img: one,
      title: "One to One ",
      description: "Personal Mentors",
    },
    {
      img: time,
      title: "Flexible ",
      description: "Time Scheduling",
    },
  ];

  return (
    <section>
      <div className="container bg-white py-4">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="px-4">
              <div className=" bg-blue-100 p-6 rounded-2xl shadow-md flex flex-row items-center mb-4">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-16 h-16 mr-4 md:w-44 md:h-44"
                />
                <div>
                  <h3 className="text-3xl md:text-5xl  font-bold text-blue-500">{slide.title}</h3>
                  <p className="text-xl md:text-2xl font-semibold text-gray-600">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Services2;
