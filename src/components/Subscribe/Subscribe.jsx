import React from "react";
import Slider from "react-slick";
import DemoImage from "../../assets/hero.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "John Doe",
    designation: "CEO at Company",
    review:
      "“This service is fantastic! The team was very professional and exceeded our expectations.”",
  },
  {
    name: "Jane Smith",
    designation: "CTO at Tech Corp",
    review:
      "“Highly recommend! They delivered top-notch quality and were incredibly responsive throughout the process.”",
  },
  {
    name: "Emily Johnson",
    designation: "Marketing Director",
    review:
      "“An exceptional experience! The attention to detail and creativity shown was truly impressive.”",
  },
  {
    name: "Michael Brown",
    designation: "Product Manager",
    review:
      "“Great work! The team managed to capture our vision perfectly and delivered results ahead of schedule.”",
  },
  {
    name: "Sarah Davis",
    designation: "Creative Director",
    review:
      "“Excellent service with a keen eye for design. We were thrilled with the final product and the smooth process. Great work! The team managed to capture our vision perfectly and delivered results ahead of schedule.”",
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // Optional: Center the current slide
    centerPadding: "0", // Optional: Remove padding for centered slides
    responsive: [
      {
        breakpoint: 768, // Adjust for smaller screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative container mx-auto px-4 ">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="px-4 " // Add padding to the item wrapper
          >
            <div className="p-4 bg-green-200 shadow-lg rounded-lg flex items-start">
              <img
                src={DemoImage}
                alt="Demo"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <p className="font-bold text-lg">{testimonial.name}</p>
                <p className="text-gray-500 mb-2">{testimonial.designation}</p>
                <p className="italic line-clamp-6">"{testimonial.review}"</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;

// import React from "react";
// import { FaBell } from "react-icons/fa";
// import BgImage from "../../assets/bg.png";
// import { motion } from "framer-motion";

// const bgStyle = {
//   backgroundImage: `url(${BgImage})`,
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
// };

// const Subscribe = () => {
//   return (
//     <section className="bg-[#f7f7f7]">
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         style={bgStyle}
//         className="container py-24 md:py-48"
//       >
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, ease: "easeInOut" }}
//           className="flex flex-col justify-center"
//         >
//           <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
//             <h1 className="text-4xl font-bold !leading-snug">
//               450K+ Students are learning from us
//             </h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Recusandae iusto minima
//             </p>
//             <a
//               href=""
//               className="primary-btn !mt-8 inline-flex items-center gap-4 group"
//             >
//               Subscribe Now
//               <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200" />
//             </a>
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Subscribe;
