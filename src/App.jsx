import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Services2 from "./components/Services/Services2";
import TrendingPrograms from "./components/Services/TrendingPrograms";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Services />
      <Services2 />
      <TrendingPrograms />
      <Banner />
      <Subscribe />
      <Banner2 />
      <Footer />
    </main>
  );
};

export default App;
