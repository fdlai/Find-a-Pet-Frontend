import "../blocks/NewsCard.css";

interface NewsCardProps {
  item: {
    source: {
      id: string;
      name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  };
}

export default function NewsCard({ item }: NewsCardProps) {
  return (
    <div key={item.url} className="news-article">
      <div className="news-article__content">
        <a href={item?.url} target="_blank">
          <div className="news-article__overlay">
            <h3
              onMouseOver={(e: React.MouseEvent<HTMLHeadingElement>) => {
                (e.target as HTMLHeadingElement).title =
                  (e.target as HTMLHeadingElement).textContent || "";
              }}
              className="news-article__title"
            >
              {item?.title}
            </h3>
            <h3 className="news-article__text">Read More →</h3>
          </div>
        </a>

        <img
          src={item?.urlToImage}
          alt={item?.title}
          className="news-article__image"
        />
      </div>
    </div>
  );
}
