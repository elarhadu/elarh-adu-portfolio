import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/testimonials.css';
import avatar1 from '../assets/sabi.jpeg';
import avatar2 from '../assets/michael.png';
import avatar3 from '../assets/asha.jpeg';
import avatar4 from '../assets/samuel.jpeg';
import avatar5 from '../assets/rohit.jpeg';

const testimonialData = [
  {
    id: 1,
    avatar: avatar1,
    name: 'Sabi',
    review:
      "Emmanuella is one of the brightest software developers I've ever met. I worked alongside her while building a two-player platformer, and in that time she proved her commitment and determination over and over again. Emmanuella is always challenging herself--she's the type of person who reads documentation for fun, and her attention to detail is evident in all of the projects I've worked with her on. She's also genuinely a kind, encouraging person, and kept me from falling into bug blues multiple times. I can recommend her without reservation.",
  },
  {
    id: 2,
    avatar: avatar2,
    name: 'Michael',
    review:
      'I strongly recommend Emmanuella Adu for tech roles in either Front-End Web Development, Back-End Web Development, or both. Having collaborated with her for several months, Emmanuella has proven to be an exceptional developer with a strong grasp of Front-End Development libraries like ReactJS and Back-End Development frameworks like Ruby on Rails. Her collaborative nature and strong communication skills foster a positive work culture, enabling seamless collaboration with cross-functional teams.',
  },
  {
    id: 3,
    avatar: avatar3,
    name: 'Asha',
    review:
      'I had the pleasure of working with Emmanuella on a web development project, and I highly recommend her for any future endeavors. She always approaches each task with a positive attitude and a willingness to go the extra mile. Her ability to consistently stay ahead of deadlines and deliver high-quality work was commendable. She was always professional, articulate, and responsive, greatly facilitating collaboration and ensuring everyone was on the same page. Her willingness to seek help when needed and actively participate in discussions demonstrated her commitment to producing the best possible results.',
  },
  {
    id: 4,
    avatar: avatar4,
    name: 'Samuel',
    review:
      "Emmanuella Adu possesses a rare combination of technical skill and dedication, consistently delivering outstanding results. Her problem-solving abilities enable her to tackle complex challenges with ease, finding innovative solutions that elevate our projects. Throughout our collaboration, I have witnessed Emmanuella's unwavering work ethic and commitment to excellence. Her attention to detail and determination to deliver high-quality work make her an invaluable team member. I wholeheartedly recommend Emmanuella Adu for her exceptional contributions and positive impact on our team.",
  },
  {
    id: 5,
    avatar: avatar5,
    name: 'Rohit',
    review:
      "I highly recommend Emmanuella Adu as a talented and dedicated co-worker who excelled in our collaborative project involving React and Ruby on Rails. Emmanuella's expertise, professionalism, and collaborative spirit were invaluable to our team's success. Working with Emmanuella was an absolute pleasure. Her technical expertise, collaborative mindset, and commitment to excellence make her an exceptional team member. I have no doubt that Emmanuella will continue to thrive and make significant contributions in any future projects she undertakes. I highly recommend her for any position or project that requires a skilled and motivated developer.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
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
        {testimonialData.map(({
          avatar, name, review, id,
        }) => (
          <SwiperSlide key={id} className="testimonial">
            <div className="reviewer_avatar">
              <img src={avatar} alt="" />
            </div>
            <h5 className="name">{name}</h5>
            <small className="review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;
