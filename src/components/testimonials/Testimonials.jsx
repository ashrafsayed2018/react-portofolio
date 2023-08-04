import "./testimonials.css";
import AVATAR from "../../assets/avatar.png";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    avatar: AVATAR,
    name: "ashraf sayed",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eaque.",
  },
  {
    id: 2,
    avatar: AVATAR,
    name: "ali sayed",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eaque.",
  },
  {
    id: 3,
    avatar: AVATAR,
    name: "mohammed sayed",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eaque.",
  },
  {
    id: 4,
    avatar: AVATAR,
    name: "sameh sayed",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eaque.",
  },
  {
    id: 5,
    avatar: AVATAR,
    name: "omer sayed",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eaque.",
  },
  {
    id: 6,
    avatar: AVATAR,
    name: "mohsen sayed",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eaque.",
  },
  {
    id: 7,
    avatar: AVATAR,
    name: "sleeman sayed",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eaque.",
  },
  {
    id: 8,
    avatar: AVATAR,
    name: "tamer sayed",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eaque.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((item) => {
          return (
            <SwiperSlide className="testimonial" key={item.id}>
              <div className="client__avatar">
                <img src={item.avatar} alt={item.review} />
              </div>
              <h5 className="client__name">{item.name}</h5>
              <small className="client__review">{item.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
