import "../blocks/Results.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getLocationsByName,
  getLocationByZipcode,
  getPets,
} from "../utils/api";
import { isValidZipcode } from "../utils/helpers";

interface Pet {
  name: string;
  city: string;
  _id: string;
}

export default function Results() {
  const [pets, setPets] = useState([]);
  const { query } = useParams();
  console.log(query);

  useEffect(() => {
    if (!query) {
      return;
    }

    if (!isValidZipcode(query)) {
      getLocationsByName(query)
        .then((data) => {
          console.log(data);
          console.log(data.geonames[0]);
          console.log(typeof data.geonames[0].lat);
          return getPets({
            longitude: data.geonames[0].lng,
            latitude: data.geonames[0].lat,
          });
        })
        .then((petsArray) => {
          console.log(petsArray);
          setPets(petsArray);
        })
        .catch((err) => {
          console.error(err);
          //alert(`${err} Could not find locations!`);
        });
    } else {
      getLocationByZipcode(query)
        .then((data) => {
          console.log(data);
          console.log(data.postalCodes[0].placeName);
        })
        .catch((err) => {
          console.error(err);
          alert(`${err} Could not find location!`);
        });
    }
  }, [query]);
  return (
    <div className="results">
      {pets.map((pet: Pet) => {
        return (
          <div key={pet._id} className="petCard">
            <h3>{pet.name}</h3>
            <p>{pet.city}</p>
          </div>
        );
      })}
    </div>
  );
}
