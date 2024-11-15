import "../blocks/PetCard.css";
import { SyntheticEvent } from "react";
import { Link } from "react-router-dom";

interface Pet {
  pet: {
    name: string;
    city: string;
    _id: string;
    imageUrl: string;
    state: string;
    species: string;
  };
}

export default function PetCard({ pet }: Pet) {
  return (
    <div key={pet._id} className="petCard">
      <Link
        to={`/pets/info/${pet._id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <h3 className="petCard__name">{pet.name}</h3>
      </Link>
      <p>{`${pet.city}, ${pet.state}`}</p>
      <img
        className="petCard__image"
        src={pet.imageUrl}
        alt={`image of ${pet.species}`}
        onError={(e: SyntheticEvent<HTMLImageElement>) =>
          ((e.target as HTMLImageElement).src =
            "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg")
        }
      />
    </div>
  );
}
