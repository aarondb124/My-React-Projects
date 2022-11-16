import React from "react";
import "./App.css";
import "./components/header/Header";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Expaerience from "./components/experience/Expaerience";
import Footer from "./components/footer/Footer";
import Testimonials from "./components/testimonials/Testimonials";
import Services from "./components/services/Services";
import Swiper from "./components/Swiper";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Expaerience />
      <Services />
      <Swiper />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
