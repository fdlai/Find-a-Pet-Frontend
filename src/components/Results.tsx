import "../blocks/Results.css";
import { useEffect, useState, MouseEvent } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getLocationsByName, getNearestPets } from "../utils/api";
import PetCard from "./PetCard";
import { colors } from "../utils/helpers";
import previousArrow from "../assets/previous-arrow.svg";
import nextArrow from "../assets/next-arrow.svg";

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
  const navigate = useNavigate();

  console.log(location);

  function handleArrowButtonsClick(e: MouseEvent<HTMLButtonElement>) {
    // Get current page from URL or default to 1
    const searchParams = new URLSearchParams(location.search);
    const currentPage = parseInt(searchParams.get("page") ?? "1", 10);

    // Determine the button type and calculate the new page
    const isNext = e.currentTarget.name === "next";
    const isPrevious = e.currentTarget.name === "previous";

    if ((currentPage <= 1 && isPrevious) || (pets.length === 0 && isNext)) {
      return; // Prevent navigation if out of bounds
    }

    const newPage = isNext ? currentPage + 1 : currentPage - 1;

    // Update the search params with the new page number
    searchParams.set("page", newPage.toString());
    const newUrl = `${location.pathname}?${searchParams.toString()}`;

    // Navigate to the new URL and scroll to the top
    navigate(newUrl);
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }

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
        <h2 className="results__heading">
          {noPetsFound
            ? "No pets found"
            : `Nearest pets to ${currentLocation.name}`}
        </h2>
      )}
      <div className="results__grid">
        {pets.map((pet: Pet, index) => {
          return (
            <PetCard
              key={pet._id}
              pet={pet}
              color={colors[index % colors.length]}
            />
          );
        })}
      </div>
      <div className="results__arrow-buttons-container">
        <button
          onClick={handleArrowButtonsClick}
          className="results__arrow-button results__arrow-button_left"
          name="previous"
          type="button"
          aria-label="Previous page"
        >
          <img src={previousArrow} alt="arrow pointing left" />
        </button>
        <button
          onClick={handleArrowButtonsClick}
          className="results__arrow-button results__arrow-button_right"
          name="next"
          type="button"
          aria-label="Next page"
        >
          <img src={nextArrow} alt="arrow pointing right" />
        </button>
      </div>
    </div>
  );
}
