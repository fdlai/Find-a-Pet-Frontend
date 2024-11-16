import { useEffect, useState } from "react";
import "../blocks/PetInfo.css";
import { useParams } from "react-router-dom";
import { getPetInfo } from "../utils/api";
import ImageModal from "./ImageModal";
import useModal from "../hooks/useModal";

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
        />
        <p className="pet-info__text">{`Species: ${pet.species}`}</p>
        <p className="pet-info__text">{`Breed: ${pet.breed}`}</p>
        <p className="pet-info__text">{`Sex: ${pet.sex}`}</p>
        <p className="pet-info__text">{`Size: ${pet.size}`}</p>
        <p className="pet-info__text">{`Characteristics: ${pet.characteristics}`}</p>
        <p className="pet-info__text">{`Health: ${pet.health}`}</p>
        <p className="pet-info__text">{`Description: ${pet.description}`}</p>
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
