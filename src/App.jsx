import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Services2 from "./components/Services/Services2";
import TrendingPrograms from "./components/Services/TrendingPrograms";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-white text-dark">
        <section id="home">
          <Hero />
        </section>
        <section id="programs">
          <TrendingPrograms />
        </section>
        <section id="services">
          <Services2 />
          <Services />
        </section>
        <section id="team">
          <Banner />
        </section>
        <section id="reviews">
          <Subscribe />
          <Banner2 />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;

// import React from "react";
// import Hero from "./components/Hero/Hero";
// import Services from "./components/Services/Services";
// import Services2 from "./components/Services/Services2";
// import TrendingPrograms from "./components/Services/TrendingPrograms";
// import Banner from "./components/Banner/Banner";
// import Subscribe from "./components/Subscribe/Subscribe";
// import Banner2 from "./components/Banner/Banner2";
// import Footer from "./components/Footer/Footer";

// const App = () => {
//   return (
//     <main className="overflow-x-hidden bg-white text-dark">
//       <Hero />
//       <TrendingPrograms />
//       <Services2 />
//       <Services />
//       <Banner />
//       <Subscribe />
//       <Banner2 />
//       <Footer />
//     </main>
//   );
// };

// export default App;
