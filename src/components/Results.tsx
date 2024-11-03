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
  imageUrl: string;
}

export default function Results() {
  const [pets, setPets] = useState([]);
  const [noPetsFound, setNoPetsFound] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({ name: "" });
  const [isLoading, setIsLoading] = useState(true);
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
          if (data.geonames.length === 0) {
            setPets([]);
            setNoPetsFound(true);
            throw new Error("Could not find any pets at this location");
          }
          console.log(typeof data.geonames[0].lat);
          setCurrentLocation(data.geonames[0]);
          return getPets({
            longitude: data.geonames[0].lng,
            latitude: data.geonames[0].lat,
          });
        })
        .then((petsArray) => {
          console.log(petsArray);
          setPets(petsArray);
          setNoPetsFound(false);
        })
        .catch((err) => {
          console.error(err);
          //alert(`${err} Could not find locations!`);
        })
        .finally(() => {
          setIsLoading(false);
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
      {!isLoading && (
        <h2>
          {noPetsFound
            ? "No pets found"
            : `Closest pets to ${currentLocation.name}:`}
        </h2>
      )}
      <div className="results__grid">
        {pets.map((pet: Pet) => {
          return (
            <div key={pet._id} className="petCard">
              <h3>{pet.name}</h3>
              <p>{pet.city}</p>
              <img className="petCard__image" src={pet.imageUrl} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
