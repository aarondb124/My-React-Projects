import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpeg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpeg";
import AVTR4 from "../../assets/avatar4.jpeg";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Thomas Shelby",
    review:
      "Great work on the recent project. Your brilliant problem-solving skills helped us to reach our targets much more quickly.We are fortunate to have an innovator like you amongst us. Your work will bring a lot of insights into solving our next problem.",
  },

  {
    avatar: AVTR2,
    name: "Saitama Sense",
    review:
      " Be proud of the fact that you have the power to rise above any situation and deliver the best results no matter the circumstances. Excellent work!You continue to exceed every expectation that we set. Great job.",
  },

  {
    avatar: AVTR3,
    name: "Ragnar Lorthbrok",
    review:
      "The way you handled the project showed resilience, experience, knowledge, and critical thinking. We would love to get your perspective on our next project. Your work will bring a lot of insights into solving our next problem.",
  },

  {
    avatar: AVTR4,
    name: "Professor",
    review:
      "Thank you for your tremendous help in our new project. Without your diligence, hard work, late nights, and early mornings we would not have been able to meet the deadline. Excellent work! We are fortunate to have an innovator like you amongst us.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clints</h5>
      <h2>&lt;Testimonials&#47;&gt;</h2>

      <Swiper
        className="container testimonials_container"
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        data-aos="zoom-in"
        data-aos-duration="800"
        data-aos-offset="300"
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
