import { useState } from "react";
import "./works.scss";
import {
  prevButton,
  nextButton,
  portfolio1,
  portfolio2,
  portfolio3,
} from "../index";

function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderData = [
    {
      id: 1,
      title: "Title 1",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, aliquid hic, libero molestiae oluta ipsa harum quaerat voluptatum temporibus sint, dignissimos nisi quis natus veniam corporis sequi. Iure, cupiditate. Laboriosam!",
      img: portfolio1,
    },
    {
      id: 2,
      title: "Title 2",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, aliquid hic, libero molestiae oluta ipsa harum quaerat voluptatum temporibus sint, dignissimos nisi quis natus veniam corporis sequi. Iure, cupiditate. Laboriosam!",
      img: portfolio2,
    },
    {
      id: 3,
      title: "Title 3",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, aliquid hic, libero molestiae oluta ipsa harum quaerat voluptatum temporibus sint, dignissimos nisi quis natus veniam corporis sequi. Iure, cupiditate. Laboriosam!",
      img: portfolio3,
    },
  ];

  const handleClick = (direction) => {
    if (direction === "prev") {
      setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : currentSlide);
    } else {
      setCurrentSlide(
        currentSlide < sliderData.length - 1 ? currentSlide + 1 : currentSlide
      );
    }
  };

  return (
    <section className="works" id="works">
      <div
        className="works__slider"
        style={{ transform: `translateX(-${currentSlide * 47}vw)` }}
      >
        {sliderData.map((dataItem) => (
          <div
            className="works__slider-inner"
            key={`${dataItem.title}_${dataItem.id}`}
          >
            <div className="works__slider-item">
              <div className="works__slider-top">
                <img src={dataItem.img} alt={dataItem.title} />
              </div>
              <div className="works__slider-bottom">
                <div className="works__slider-bottom-container">
                  <div className="line line1"></div>
                  <h2>{dataItem.title}</h2>
                  <div className="line line2"></div>
                  <p>{dataItem.description}</p>
                  <span>Project</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="works__slider-btn works__slider-btn-prev">
        <div
          className="works__slider-arrow"
          onClick={() => handleClick("prev")}
        >
          <img src={prevButton} alt="prevButton" />
        </div>
      </button>
      <button className="works__slider-btn works__slider-btn-next">
        <div
          className="works__slider-arrow"
          onClick={() => handleClick("next")}
        >
          <img src={nextButton} alt="nextButton" />
        </div>
      </button>
    </section>
  );
}

export default Works;
