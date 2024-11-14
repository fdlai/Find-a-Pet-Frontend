import { useState, useRef, useEffect, useMemo } from "react";
import "../blocks/Carousel.css";
import leftArrow from "../assets/left-arrow.svg";
import rightArrow from "../assets/right-arrow.svg";

interface CarouselProps<ItemType> {
  items: Array<ItemType>;
  renderItem: (item: ItemType, itemIndex: number, gap: number) => JSX.Element;
  gap: number;
  keyProp: keyof ItemType;
}

export default function Carousel<
  ItemType extends { id?: string | number; hasTransition?: boolean }
>({ renderItem, items, gap = 10, keyProp }: CarouselProps<ItemType>) {
  const [itemIndex, setItemIndex] = useState(1);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const clonedItems = useMemo(() => {
    if (items.length === 0) {
      return [];
    }
    return [
      { ...items[items.length - 1], id: "first" },
      ...items,
      { ...items[0], id: "3rdToLast" },
      { ...items[1], id: "2ndToLast" },
      { ...items[2], id: "last" },
    ].map((item) => {
      return { ...item, hasTransition: true };
    });
  }, [items]);

  console.log({ itemIndex, length: clonedItems.length });

  function onRightArrowClick() {
    setItemIndex((prev) => prev + 1);
  }

  function onLeftArrowClick() {
    setItemIndex((prev) => prev - 1);
  }

  console.log(itemRefs);

  function disableTransition() {
    clonedItems.forEach((item) => {
      item.hasTransition = false;
    });
  }

  function enableTransition() {
    clonedItems.forEach((item) => {
      item.hasTransition = true;
    });
  }

  function handleTransitionEnd() {
    disableTransition();
    if (itemIndex === 0) {
      setItemIndex(clonedItems.length - 4);
    } else if (itemIndex === clonedItems.length - 3) {
      setItemIndex(1);
    }
    setButtonsDisabled(false);
  }

  // function triggerDebounce() {
  //   setButtonsDisabled(true);
  //   setTimeout(() => {
  //     setButtonsDisabled(false);
  //   }, 300);
  // }

  useEffect(() => {
    if (itemIndex === 0 || itemIndex === clonedItems.length - 3) {
      setButtonsDisabled(true);
      itemRefs.current.forEach((divEl) => {
        divEl?.addEventListener("transitionend", handleTransitionEnd);
      });
    } else if (itemIndex === 1 || itemIndex === clonedItems.length - 4) {
      enableTransition();
    }
    return () => {
      itemRefs.current.forEach((divEl) => {
        divEl?.removeEventListener("transitionend", handleTransitionEnd);
      });
    };
  }, [itemIndex]);

  return (
    <div className="carousel">
      <div className="carousel__container" style={{ gap: `${gap}px` }}>
        {clonedItems.map((item, index) => {
          return (
            <div
              className="carousel__item"
              key={item.id ?? (item[keyProp] as string | number)}
              style={{
                transform: `translateX(calc(${-itemIndex} * (100% + ${gap}px)))`,
                flex: `0 0 ${31}%`,
                ...(item.hasTransition === false && { transition: "none" }),
              }}
              ref={(element) => (itemRefs.current[index] = element)}
            >
              {renderItem(item, itemIndex, gap)}
            </div>
          );
        })}
      </div>
      <button
        className="carousel__button carousel__button_left"
        onClick={onLeftArrowClick}
        disabled={buttonsDisabled}
      >
        <img className="carousel__arrow" src={leftArrow} alt="left arrow" />
      </button>
      <button
        className="carousel__button carousel__button_right"
        onClick={onRightArrowClick}
        disabled={buttonsDisabled}
      >
        <img className="carousel__arrow" src={rightArrow} alt="right arrow" />
      </button>
    </div>
  );
}
