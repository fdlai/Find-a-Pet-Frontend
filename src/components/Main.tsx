import "../blocks/Main.css";
import PetCard from "./PetCard";
import { getRecentPets } from "../utils/api";
import { useEffect, useState } from "react";

interface Pet {
  name: string;
  city: string;
  _id: string;
  imageUrl: string;
  state: string;
}

export default function Main() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    getRecentPets(4).then((petsArray) => {
      console.log(petsArray);
      setPets(petsArray);
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
    </main>
  );
}
