import React from 'react';
import "./App.css";
import './components/header/Header'
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Expaerience from './components/experience/Expaerience';
import Footer from './components/footer/Footer';
import Testimonials from './components/testimonials/Testimonials';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';

const App = () => {

  return (
   

  <>
  <Header />
  <Navbar />
  <About />
  <Expaerience />
  <Services />
  <Portfolio />
  <Testimonials />
  <Contact />
  <Footer />
  </>



);
  
};

export default App;