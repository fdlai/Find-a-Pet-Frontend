import { useState } from "react";
import "../blocks/Carousel.css";
import leftArrow from "../assets/left-arrow.svg";
import rightArrow from "../assets/right-arrow.svg";

export default function Carousel({ children, items = [] }) {
  const [itemIndex, setItemIndex] = useState(0);

  function onRightArrowClick() {
    setItemIndex((prev) => Math.max(1, prev + 1));
  }

  function onLeftArrowClick() {
    setItemIndex((prev) => Math.min(prev - 1, items.length - 1));
  }

  return (
    <div className="carousel">
      <div className="carousel__container">
        {items.map((item) => {
          return (
            <div
              className="carousel__item"
              key={item.url}
              style={{
                transform: `translateX(-${itemIndex * 100}%)`,
                flex: `0 0 ${30}%`,
              }}
            >
              {item.title}
            </div>
          );
        })}
      </div>
      <button
        className="carousel__button carousel__button_left"
        onClick={onLeftArrowClick}
      >
        <img className="carousel__arrow" src={leftArrow} alt="left arrow" />
      </button>
      <button
        className="carousel__button carousel__button_right"
        onClick={onRightArrowClick}
      >
        <img className="carousel__arrow" src={rightArrow} alt="right arrow" />
      </button>
    </div>
  );
}
