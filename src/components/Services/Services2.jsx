import React from "react";
import Slider from "react-slick";
import DemoImage from "../../assets/hero.png"; // Use the image you uploaded
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
      img: DemoImage,
      title: "Demo 1",
      description: "This is a demo slide",
    },
    {
      img: DemoImage,
      title: "Demo 2",
      description: "This is another demo slide",
    },
    {
      img: DemoImage,
      title: "Demo 3",
      description: "This is yet another demo slide",
    },
    {
      img: DemoImage,
      title: "Demo 4",
      description: "This is the final demo slide",
    },
  ];

  return (
    <section>
      <div className="container bg-white py-12">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="px-4">
              <div className=" bg-green-100 p-6 rounded-lg shadow-md flex flex-row items-center">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-16 h-16 mr-4 md:w-44 md:h-44"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{slide.title}</h3>
                  <p>{slide.description}</p>
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
