import { useState } from "react";
import "../blocks/Carousel.css";
import leftArrow from "../assets/left-arrow.svg";
import rightArrow from "../assets/right-arrow.svg";

interface CarouselProps<ItemType> {
  items: Array<ItemType>;
  renderItem: (item: ItemType, itemIndex: number) => JSX.Element;
}

export default function Carousel<ItemType>({
  renderItem,
  items,
}: CarouselProps<ItemType>) {
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
          return renderItem(item, itemIndex);
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
