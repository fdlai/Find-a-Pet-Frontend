import "../blocks/Main.css";
import PetCard from "./PetCard";
import { getNewsArticles, getRecentPets } from "../utils/api";
import { useEffect, useState } from "react";
import SlickCarousel from "./SlickCarousel";
import { colors } from "../utils/helpers";

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
    getRecentPets(6).then((petsArray) => {
      console.log(petsArray);
      setPets(petsArray);
    });
  }, []);

  useEffect(() => {
    getNewsArticles().then((data) => {
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
      <h2 className="main__heading">Recently added pets</h2>
      <div className="main__recent-pets">
        {pets.map((pet: Pet, index) => {
          return (
            <PetCard
              key={pet._id}
              pet={pet}
              color={colors[index % colors.length]}
              imgAspectRatio={2}
              infoContainerStyles={{ padding: "10px", alignItems: "start" }}
            />
          );
        })}
      </div>
      <h2 className="main__heading">Pet related news</h2>
      <SlickCarousel items={newsArticles} />
    </main>
  );
}
