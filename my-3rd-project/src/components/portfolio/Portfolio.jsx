import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const data =[
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio 1',
    github: 'https://github.com',
    demo: 'http://aarondb.infinityfreeapp.com/Page-1/indexpage.html'
  },

  {
    id: 2,
    image: IMG2,
    title: 'Portfolio 2',
    github: 'https://github.com',
    demo: 'http://aarondb.infinityfreeapp.com/Page-1/indexpage.html'
  },

  {
    id: 3,
    image: IMG3,
    title: 'Portfolio 3',
    github: 'https://github.com',
    demo: 'http://aarondb.infinityfreeapp.com/Page-1/indexpage.html'
  },

  {
    id: 4,
    image: IMG4,
    title: 'Portfolio 4',
    github: 'https://github.com',
    demo: 'http://aarondb.infinityfreeapp.com/Page-1/indexpage.html'
  },

  {
    id: 5,
    image: IMG5,
    title: 'Portfolio 5',
    github: 'https://github.com',
    demo: 'http://aarondb.infinityfreeapp.com/Page-1/indexpage.html'
  },

  {
    id: 6,
    image: IMG6,
    title: 'Portfolio 6',
    github: 'https://github.com',
    demo: 'http://aarondb.infinityfreeapp.com/Page-1/indexpage.html'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Resent Works</h5>
      <h2>Portfolio</h2>

      <Swiper className='container portfolio_container'
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
          spaceBetween: 15,
        },
      }}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <SwiperSlide key ={id} className='portfolio_item'>
                  <div className="portfolio_item-image">
                      <img src={image} alt= {title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="porfolio_item-cta">
                    <a href={github} className='btn' target='_self'>Github</a>
                    <a href={demo} className='btn btn-primary' target='_self'>Live Demo</a>
                  </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Portfolio