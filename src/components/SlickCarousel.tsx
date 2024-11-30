import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Core Slick styles
import "slick-carousel/slick/slick-theme.css"; // Optional theme styles
import "../blocks/SlickCarousel.css";
import "../blocks/Carousel.css";

// interface SlickCarouselProps<ItemType> {
//   items: Array<ItemType>;
//   renderItem: (item: ItemType, itemIndex: number, gap: number) => JSX.Element;
//   gap: number;
//   keyProp: keyof ItemType;
// }

export default function SlickCarousel({ items }) {
  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items.map((item) => {
          return (
            <div className="news-article">
              <h3
                onMouseOver={(e: React.MouseEvent<HTMLHeadingElement>) => {
                  (e.target as HTMLHeadingElement).title =
                    (e.target as HTMLHeadingElement).textContent || "";
                }}
                className="news-article__title"
              >
                {item?.title}
              </h3>

              <a href={item?.url} target="_blank">
                <img
                  src={item?.urlToImage}
                  alt={item?.title}
                  className="news-article__image"
                />
              </a>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
