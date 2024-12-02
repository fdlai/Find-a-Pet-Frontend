import "../blocks/Main.css";
import PetCard from "./PetCard";
import { getRecentPets } from "../utils/api";
import { useEffect, useState } from "react";
import SlickCarousel from "./SlickCarousel";

interface Pet {
  name: string;
  city: string;
  _id: string;
  imageUrl: string;
  state: string;
  species: string;
}

interface NewsArticle {
  title: string;
  url: string;
  urlToImage: string;
  id: undefined | string;
  hasTransition: boolean;
}

export default function Main() {
  /* -------------------------------------------------------------------------- */
  /*                            states and constants                            */
  /* -------------------------------------------------------------------------- */
  const [pets, setPets] = useState([]);
  const [newsArticles, setNewsArticles] = useState([]);

  /* -------------------------------------------------------------------------- */
  /*                                  functions                                 */
  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                                 useEffects                                 */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    getRecentPets(4).then((petsArray) => {
      console.log(petsArray);
      setPets(petsArray);
    });
  }, []);

  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=pets&pageSize=75", {
      headers: {
        "X-Api-Key": `${import.meta.env.VITE_NEWS_API_KEY}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        Promise.reject(res.status);
      })
      .then((data) => {
        console.log(data);
        setNewsArticles(
          data.articles.filter(
            (article: NewsArticle) => article.title !== "[Removed]"
          )
        );
      });
  }, []);

  return (
    <main className="main">
      <h2>Recently added pets:</h2>
      <div className="main__recent-pets">
        {pets.map((pet: Pet) => {
          return <PetCard key={pet._id} pet={pet} />;
        })}
      </div>
      <h2>Pet related news:</h2>
      <SlickCarousel items={newsArticles} />
    </main>
  );
}
