import Slider from "react-slick";
import "../blocks/SlickCarousel.css";
import NewsCard from "./NewsCard";

interface NewsArticle {
  title: string;
  url: string;
  urlToImage: string;
  id: undefined | string;
  hasTransition: boolean;
  source: {
    id: string;
    name: string;
  };
  author: string;
  description: string;
  publishedAt: string;
  content: string;
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
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items.map((item) => {
          return <NewsCard item={item} />;
        })}
      </Slider>
    </div>
  );
}
