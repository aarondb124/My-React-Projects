import React from "react";
import "./portfolio.css";

import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Portfolio 1",
    description:"",
    github: "https://github.com",
    demo: "http://aarondb.infinityfreeapp.com/Page-1/indexpage.html",
  },

  {
    id: 2,
    image: IMG2,
    title: "Snake game",
    description:"Click the snake button above",
    github: "https://github.com",
    demo: "../games/snakegame/Snake1.jsx",
  },

  {
    id: 3,
    image: IMG3,
    title: "Portfolio 3",
    description:"",
    github: "https://github.com",
    demo: "http://aarondb.infinityfreeapp.com/Page-1/indexpage.html",
  },

  {
    id: 4,
    image: IMG4,
    title: "Portfolio 4",
    description:"",
    github: "https://github.com",
    demo: "http://aarondb.infinityfreeapp.com/Page-1/indexpage.html",
  },

  {
    id: 5,
    image: IMG5,
    title: "Portfolio 5",
    description:"",
    github: "https://github.com",
    demo: "http://aarondb.infinityfreeapp.com/Page-1/indexpage.html",
  },

  {
    id: 6,
    image: IMG6,
    title: "Portfolio 6",
    description:"",
    github: "https://github.com",
    demo: "http://aarondb.infinityfreeapp.com/Page-1/indexpage.html",
  },
];

const Portfolio = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section id="portfolio">
      

      <Swiper
        className="container portfolio_container"
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}

        data-aos="zoom-out"
        data-aos-duration="800"
        data-aos-offset="250"
      >
        {data.map(({ id, image, title, description, github, demo }) => {
          return (
            <SwiperSlide key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <h5>{description}</h5>
              <div className="porfolio_item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Portfolio;
