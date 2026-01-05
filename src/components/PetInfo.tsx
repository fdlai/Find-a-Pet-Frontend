import { useEffect, useState, SyntheticEvent } from "react";
import "../blocks/PetInfo.css";
import { useParams } from "react-router-dom";
import { getPetInfo } from "../utils/api";
import ImageModal from "./ImageModal";
import useModal from "../hooks/useModal";
import imageNotFound from "../assets/image-not-found.jpg";

export default function PetInfo() {
  const { id } = useParams();
  const [pet, setPet] = useState({
    breed: "",
    characteristics: "",
    city: "",
    createdAt: "",
    description: "",
    health: "",
    imageUrl: "",
    location: { type: "Point", coordinates: [0, 0] },
    name: "",
    sex: "",
    size: "",
    species: "",
    state: "",
    zipCode: "",
    _id: "",
  });

  const { isOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    if (!id) {
      return;
    }
    getPetInfo(id).then((data) => {
      setPet(data);
    });
  }, [id]);
  console.log(pet);
  return (
    <>
      <div className="pet-info">
        <h2 className="pet-info__title">{pet.name}</h2>
        <img
          src={pet.imageUrl}
          alt={`image of ${pet.species}`}
          className="pet-info__image"
          onClick={openModal}
          onError={(e: SyntheticEvent<HTMLImageElement>) =>
            ((e.target as HTMLImageElement).src = imageNotFound)
          }
        />
        <div className="pet-info__text-container">
          <p className="pet-info__text">
            <span className="pet-info__highlight">Species:</span>{" "}
            {`${pet.species}`}
          </p>
          <p className="pet-info__text">
            <span className="pet-info__highlight">Breed:</span> {`${pet.breed}`}
          </p>
          <p className="pet-info__text">
            <span className="pet-info__highlight">Sex:</span> {`${pet.sex}`}
          </p>
          <p className="pet-info__text">
            <span className="pet-info__highlight">Size:</span> {`${pet.size}`}
          </p>
          <p className="pet-info__text">
            <span className="pet-info__highlight">Characteristics:</span>{" "}
            {`${pet.characteristics}`}
          </p>
          <p className="pet-info__text">
            <span className="pet-info__highlight">Health:</span>{" "}
            {`${pet.health}`}
          </p>
          <p className="pet-info__text">
            <span className="pet-info__highlight">Description:</span>{" "}
            {`${pet.description}`}
          </p>
        </div>
      </div>
      <ImageModal
        isOpen={isOpen}
        imageUrl={pet.imageUrl}
        altText={`image of ${pet.species}`}
        closeModal={closeModal}
      />
    </>
  );
}
