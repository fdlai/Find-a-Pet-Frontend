import "../blocks/PetCard.css";

interface Pet {
  pet: {
    name: string;
    city: string;
    _id: string;
    imageUrl: string;
    state: string;
  };
}

export default function PetCard({ pet }: Pet) {
  return (
    <div key={pet._id} className="petCard">
      <h3 className="petCard__name">{pet.name}</h3>
      <p>{`${pet.city}, ${pet.state}`}</p>
      <img className="petCard__image" src={pet.imageUrl} alt="" />
    </div>
  );
}
