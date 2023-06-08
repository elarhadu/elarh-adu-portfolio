import React from 'react'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/testimonials.css'
import avatar_1 from '../assets/my_profile.jpg'
import avatar_2 from '../assets/my_profile.jpg'
import avatar_3 from '../assets/my_profile.jpg'
import avatar_4 from '../assets/my_profile.jpg'

const testimonial_data = [
  {
    avatar: avatar_1,
    name: 'Emmanuella',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime dolorum est nemo quas ea porro id reprehenderit animi? Praesentium soluta adipisci ratione qui earum facere fuga laudantium ab autillum!'
  },
  {
    avatar: avatar_2,
    name: 'Emmanuella',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime dolorum est nemo quas ea porro id reprehenderit animi? Praesentium soluta adipisci ratione qui earum facere fuga laudantium ab autillum!'
  },
  {
    avatar: avatar_3,
    name: 'Emmanuella',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime dolorum est nemo quas ea porro id reprehenderit animi? Praesentium soluta adipisci ratione qui earum facere fuga laudantium ab autillum!'
  },
  {
    avatar: avatar_4,
    name: 'Emmanuella',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime dolorum est nemo quas ea porro id reprehenderit animi? Praesentium soluta adipisci ratione qui earum facere fuga laudantium ab autillum!'
  }
]


function Testimonials() {
  return (
    <section id='testimonials'>
      <h2>Testimonials</h2>
      <Swiper
      className="container testimonials_container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      >
      

        {
          testimonial_data.map(({ avatar, name, review }, index) => {
             return (
               <SwiperSlide key={index } className="testimonial">
                    <div className="reviewer_avatar">
                    <img src={avatar} alt="" />
                    </div>
                    <h5 className='name'>{name}</h5>
                    <small className="review">
                      {review}
                    </small>
                  </SwiperSlide>
                  )
                }
                )
       } 
          
      </Swiper>
    </section>
  )
}

export default Testimonials