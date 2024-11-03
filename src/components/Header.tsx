import "../blocks/Header.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { getLocationsByName } from "../utils/api";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/find-a-pet-logo.png";
import logoTurquoise from "../assets/find-a-pet-logo-turquoise.png";
import logoWhite from "../assets/find-a-pet-logo-white.png";
import dog from "../assets/dog-silhouette.png";
import magnifyingGlass from "../assets/magnifying-glass.svg";

//http://api.geonames.org/searchJSON?q=${query}&maxRows=5&country=US&username=${import.meta.env.VITE_GEONAMES_USERNAME}
//http://api.geonames.org/postalCodeSearchJSON?postalcode=${query}&maxRows=1&country=US&username=${import.meta.env.VITE_GEONAMES_USERNAME}

interface Location {
  name: string;
  geonameId: number;
}

export default function Header() {
  /* -------------------------------------------------------------------------- */
  /*                            states and constants                            */
  /* -------------------------------------------------------------------------- */
  const [query, setQuery] = useState("");
  const [keyPressCount, setKeyPressCount] = useState(0);
  const [similarLocations, setSimilarLocations] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const ulStyle: React.CSSProperties | undefined = {
    maxHeight: `calc(30px + ${similarLocations.length * 25}px)`,
  };

  const navigate = useNavigate();

  /* -------------------------------------------------------------------------- */
  /*                                  functions                                 */
  /* -------------------------------------------------------------------------- */

  function handleQueryChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    setKeyPressCount((prev) => prev + 1);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!query) {
      return;
    }
    navigate(`/pets/search/${query}`);
    setShowDropdown(false);
  }

  /* -------------------------------------------------------------------------- */
  /*                                 useEffects                                 */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    if (query.length >= 3 && keyPressCount >= 5) {
      //make the fetch
      getLocationsByName(query)
        .then((data) => {
          setSimilarLocations(data.geonames);
          //reset keyPressCount to 0
          setKeyPressCount(0);
        })
        .catch((err) => {
          console.error(err);
          alert(`${err} Could not find similar locations!`);
        });
    }
  }, [query]);

  return (
    <header className="header">
      <div className="header__top-bar">
        <div className="header__logo-container">
          <Link style={{ textDecoration: "none" }} to={"/pets"}>
            <div className="header__logo">
              <img
                src={dog}
                alt="Find a Pet logo"
                className="header__logo-image"
              />
              <p className="header__logo-text">
                Find a <span className="header__logo-text-accent">Pet</span>
              </p>
            </div>
          </Link>
        </div>
        <form className="header__form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="header__input"
            onChange={handleQueryChange}
            value={query}
            list="location-options"
            onFocus={() => setShowDropdown(true)}
            onBlur={() => setShowDropdown(false)}
            placeholder="location or zipcode"
          />
          <div
            className={`header__dropdown-container ${
              showDropdown &&
              similarLocations.length > 0 &&
              "header__dropdown-container_opened"
            }`}
          >
            <ul
              className={`header__dropdown ${
                showDropdown &&
                similarLocations.length > 0 &&
                "header__dropdown_opened"
              }`}
              style={
                showDropdown && similarLocations.length > 0
                  ? ulStyle
                  : undefined
              }
            >
              {similarLocations.map((location: Location) => (
                <li
                  key={location.geonameId}
                  onMouseDown={() => {
                    setQuery(location.name);
                    setShowDropdown(false);
                  }}
                  className="header__dropdown-item"
                >
                  {location.name}
                </li>
              ))}
            </ul>
          </div>
          <button type="submit" className="header__submit-button">
            <img
              className="header__submit-button-image"
              src={magnifyingGlass}
              alt="magnifying glass"
            />
          </button>
        </form>
      </div>
      <div className="header__left-bar"></div>
    </header>
  );
}
