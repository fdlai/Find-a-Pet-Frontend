import "../blocks/PetCard.css";
import { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import imageNotFound from "../assets/image-not-found.jpg";

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
  imgAspectRatio?: Number;
  infoContainerStyles?: {
    padding: string;
    alignItems: string;
  };
}

export default function PetCard({
  pet,
  color = "white",
  imgAspectRatio = 1,
  infoContainerStyles = { padding: "20px 10px", alignItems: "center" },
}: Pet) {
  return (
    <Link
      to={`/pets/info/${pet._id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div key={pet._id} className="petCard">
        <img
          className="petCard__image"
          style={{ aspectRatio: `${imgAspectRatio}` }}
          src={pet.imageUrl}
          alt={`image of ${pet.species}`}
          onError={(e: SyntheticEvent<HTMLImageElement>) =>
            ((e.target as HTMLImageElement).src = imageNotFound)
          }
        />
        <div
          className="petCard__info-container"
          style={{ ...infoContainerStyles, backgroundColor: `${color}` }}
        >
          <h3 className="petCard__name">{pet.name}</h3>
          <p className="petCard__location">{`${pet.city}, ${pet.state}`}</p>
        </div>
      </div>
    </Link>
  );
}
