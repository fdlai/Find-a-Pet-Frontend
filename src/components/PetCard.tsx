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
  color?: String;
}

export default function PetCard({ pet, color = "white" }: Pet) {
  return (
    <Link
      to={`/pets/info/${pet._id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div key={pet._id} className="petCard">
        <img
          className="petCard__image"
          src={pet.imageUrl}
          alt={`image of ${pet.species}`}
          onError={(e: SyntheticEvent<HTMLImageElement>) =>
            ((e.target as HTMLImageElement).src =
              "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg")
          }
        />
        <div
          className="petCard__info-container"
          style={{ backgroundColor: `${color}` }}
        >
          <h3 className="petCard__name">{pet.name}</h3>
          <p className="petCard__location">{`${pet.city}, ${pet.state}`}</p>
        </div>
      </div>
    </Link>
  );
}
