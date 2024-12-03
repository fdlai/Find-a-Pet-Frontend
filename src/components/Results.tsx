import "../blocks/Results.css";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getLocationsByName, getNearestPets } from "../utils/api";
import PetCard from "./PetCard";

interface Pet {
  name: string;
  city: string;
  _id: string;
  imageUrl: string;
  state: string;
  species: string;
}

export default function Results() {
  const [pets, setPets] = useState([]);
  const [noPetsFound, setNoPetsFound] = useState(true);
  const [currentLocation, setCurrentLocation] = useState({ name: "" });
  const [isLoading, setIsLoading] = useState(true);
  const { query } = useParams();
  const location = useLocation();

  console.log(location.search);

  useEffect(() => {
    if (!query) {
      return;
    }

    getLocationsByName(query)
      .then((data) => {
        console.log(data);
        if (data.geonames.length === 0) {
          throw new Error("Could not find any locations that match this name");
        }
        setCurrentLocation(data.geonames[0]);
        return getNearestPets({
          longitude: data.geonames[0].lng,
          latitude: data.geonames[0].lat,
          queryString: location.search.replace(/^\?/, ""),
        });
      })
      .then((petsArray) => {
        setPets(petsArray);
        setNoPetsFound(false);
      })
      .catch((err) => {
        console.error(err);
        setPets([]);
        setNoPetsFound(true);
        //alert(`${err} Could not find locations!`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query, location.search]);
  return (
    <div className="results">
      {!isLoading && (
        <h2>
          {noPetsFound
            ? "No pets found"
            : `Nearest pets to ${currentLocation.name}:`}
        </h2>
      )}
      <div className="results__grid">
        {pets.map((pet: Pet) => {
          return <PetCard key={pet._id} pet={pet} />;
        })}
      </div>
    </div>
  );
}
