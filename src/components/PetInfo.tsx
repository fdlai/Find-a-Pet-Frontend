import { useEffect, useState } from "react";
import "../blocks/PetInfo.css";
import { useParams } from "react-router-dom";
import { getPetInfo } from "../utils/api";

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

  useEffect(() => {
    if (!id) {
      return;
    }
    getPetInfo(id).then((data) => {
      setPet(data);
    });
  }, [id]);
  console.log(pet);
  return <div className="pet-info">This is the PetInfo component</div>;
}
