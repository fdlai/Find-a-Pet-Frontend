import Slider from "react-slick";
import "../blocks/SlickCarousel.css";
import "../blocks/Carousel.css";

interface NewsArticle {
  title: string;
  url: string;
  urlToImage: string;
  id: undefined | string;
  hasTransition: boolean;
}

interface SlickCarouselProps {
  items: Array<NewsArticle>;
}

export default function SlickCarousel({ items }: SlickCarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
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
            <div key={item.url} className="news-article">
              <div className="news-article__content">
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
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
