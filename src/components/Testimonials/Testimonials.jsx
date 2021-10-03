import React from "react";
import "./testimonials.scss";
import { avatar, star } from "../index";

function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Gulia Isaeva",
      title: "Jyldyz Academy, Polaris student",
      img: avatar,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo velit cumque nostrum nisi eum reiciendis dolorem, rem, quo iure nam, quibusdam minus accusantium unde sed. Est obcaecati officia delectus. Inventore.",
    },
    {
      id: 2,
      name: "Archabek",
      title: "Jyldyz Academy, Polaris student",
      img: avatar,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo velit cumque nostrum nisi eum reiciendis dolorem, rem, quo iure nam, quibusdam minus accusantium unde sed. Est obcaecati officia delectus. Inventore.",
      featured: true,
    },
    {
      id: 3,
      name: "KG Coders",
      title: "Summer Challenge, Polaris team",
      img: avatar,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo velit cumque nostrum nisi eum reiciendis dolorem, rem, quo iure nam, quibusdam minus accusantium unde sed. Est obcaecati officia delectus. Inventore.",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__container">
        {data.map((testimonial) => (
          <div
            className={
              testimonial.featured
                ? "testimonials__card testimonials__card--featured"
                : "testimonials__card"
            }
            key={`${testimonial.title}_${testimonial.id}`}
          >
            <div className="testimonials__top">
              <p>{testimonial.desc}</p>
            </div>
            <div className="testimonials__center">
              <img src={testimonial.img} alt={testimonial.title} />
            </div>
            <div className="testimonials__bottom">
              <h4>{testimonial.name}</h4>
              <p>{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="star">
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
      </div>
      <div className="testimonials__line testimonials__line1"></div>
      <div className="testimonials__line testimonials__line2">
        <h2>Testimonials</h2>
      </div>
    </section>
  );
}

export default Testimonials;
