import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpeg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpeg';
import AVTR4 from '../../assets/avatar4.jpeg';

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Thomas Shelby',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime quod sed? Praesentium, quasi consectetur voluptatum tempore dolore voluptates architecto sapiente veritatis quis suscipit quae ratione minus debitis, esse possimus.'
  },

  {
    avatar: AVTR2,
    name: 'Saitama Sense',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime quod sed? Praesentium, quasi consectetur voluptatum tempore dolore voluptates architecto sapiente veritatis quis suscipit quae ratione minus debitis, esse possimus.'
  },

  {
    avatar: AVTR3,
    name: 'Ragnar Lorthbrok',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime quod sed? Praesentium, quasi consectetur voluptatum tempore dolore voluptates architecto sapiente veritatis quis suscipit quae ratione minus debitis, esse possimus.'
  },

  {
    avatar: AVTR4,
    name: 'Proffesor',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime quod sed? Praesentium, quasi consectetur voluptatum tempore dolore voluptates architecto sapiente veritatis quis suscipit quae ratione minus debitis, esse possimus.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clints</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}

      data-aos="zoom-out"
        data-aos-duration="800"
        data-aos-offset="150"
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>{review}</small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>

  )
}

export default Testimonials