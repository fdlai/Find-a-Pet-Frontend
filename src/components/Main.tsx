import "../blocks/Main.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { getLocationsByName } from "../utils/api";
import { useNavigate } from "react-router-dom";

//http://api.geonames.org/searchJSON?q=${query}&maxRows=5&country=US&username=${import.meta.env.VITE_GEONAMES_USERNAME}
//http://api.geonames.org/postalCodeSearchJSON?postalcode=${query}&maxRows=1&country=US&username=${import.meta.env.VITE_GEONAMES_USERNAME}

interface Location {
  name: string;
  geonameId: number;
}

export default function Main() {
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
    <main className="main">
      <form className="main__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="main__input"
          onChange={handleQueryChange}
          value={query}
          list="location-options"
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setShowDropdown(false)}
        />

        <div
          className={`main__dropdown-container ${
            showDropdown &&
            similarLocations.length > 0 &&
            "main__dropdown-container_opened"
          }`}
        >
          <ul
            className={`main__dropdown ${
              showDropdown &&
              similarLocations.length > 0 &&
              "main__dropdown_opened"
            }`}
            style={
              showDropdown && similarLocations.length > 0 ? ulStyle : undefined
            }
          >
            {similarLocations.map((location: Location) => (
              <li
                key={location.geonameId}
                onMouseDown={() => {
                  setQuery(location.name);
                  setShowDropdown(false);
                }}
                className="main__dropdown-item"
              >
                {location.name}
              </li>
            ))}
          </ul>
        </div>

        <button type="submit" className="main__submit-button">
          Search
        </button>
      </form>
    </main>
  );
}
