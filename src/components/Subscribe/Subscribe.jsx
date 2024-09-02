import React from "react";
import Slider from "react-slick";
import r1 from "../../assets/review/1.png";
import r2 from "../../assets/review/2.png";
import r3 from "../../assets/review/3.png";
import r4 from "../../assets/review/4.png";
import r5 from "../../assets/review/5.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    img: r1,
    name: "Kiran",
    designation: "Accounting Mastery",
    review:
      "Taxtone offers courses on GST, Excel, Tally, TDS, and Income Tax, all in one place. The training is practical, helping me apply what I learned directly to my work. Taxtone is the best tax practicing institute for anyone who wants to get better at tax work. Their courses cover everything you need to know about these topics.",
  },
  {
    img: r2,
    name: "Akhil",
    designation: "GST Essentials",
    review:
      "Taxtone gave me deep knowledge about GST that I can now apply in my job. The teachers explain everything clearly, making GST easy to understand. If you want to really learn GST, Taxtone is the best tax practicing institute to go to. Their GST course is thorough and practical, helping you gain confidence in GST.",
  },
  {
    img: r3,
    name: "Sruthy",
    designation: "GST Masterclass",
    review:
      "I completed the Offline 1 Month GST Practicals at Taxtone, and it was a great experience! The hands-on training really helped me understand GST better. If you want to learn GST with real-life practice, Taxtone is the best tax practicing institute. The trainers are very supportive, and the environment is perfect for learning. I highly recommend Taxtone for GST training!",
  },
  {
    img: r4,
    name: "Pavi",
    designation: "Excel Essentials",
    review:
      "Taxtone’s Excel training was exactly what I needed. The course covered everything, from basics to advanced Excel skills, all focused on tax work. Now, I can handle Excel with confidence. If you want to improve your Excel skills, Taxtone is the best tax practicing institute for you. Their Excel course is practical and easy to follow.",
  },
  {
    img: r5,
    name: "Anjana",
    designation: "GST Essentials",
    review:
      "Taxtone offers clear and detailed GST training, making it easy to understand even the tough parts. I now feel more confident using GST in my work. If you want practical and easy-to-follow GST lessons, Taxtone is the best tax practicing institute. Their teaching really helped me improve my skills.",
  },
];

const TestimonialCarousel = () => {
  const settings = {
    // dots: true,
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
            <div className="p-4 bg-blue-100 shadow-lg rounded-lg flex items-start">
              <img
                src={testimonial.img}
                alt="Demo"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <p className="font-bold text-lg">{testimonial.name}</p>
                <p className="text-gray-500 mb-2">{testimonial.designation}</p>
                <p className="italic line-clamp-none">"{testimonial.review}"</p>
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
