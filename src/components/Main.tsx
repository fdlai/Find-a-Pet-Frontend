import "../blocks/Main.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface Location {
  name: string;
  geonameId: number;
}

export default function Main() {
  const [query, setQuery] = useState("");
  const [keyPressCount, setKeyPressCount] = useState(0);
  const [similarLocations, setSimilarLocations] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  //http://api.geonames.org/searchJSON?q=${query}&maxRows=5&country=US&username=${import.meta.env.VITE_GEONAMES_USERNAME}

  function handleQueryChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    setKeyPressCount((prev) => prev + 1);
  }

  function getSimilarLocations() {
    return fetch(
      `http://api.geonames.org/searchJSON?q=${query}&maxRows=5&country=US&username=${
        import.meta.env.VITE_GEONAMES_USERNAME
      }`
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    return getSimilarLocations()
      .then((data) => {
        console.log(data);
        console.log(data.geonames[0]);
      })
      .catch((err) => {
        console.error(err);
        alert(`${err} Could not find similar locations!`);
      });
  }

  console.log(similarLocations);

  useEffect(() => {
    if (query.length >= 3 && keyPressCount >= 5) {
      //make the fetch
      getSimilarLocations()
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

  const ulStyle: React.CSSProperties | undefined = {
    maxHeight: `calc(30px + ${similarLocations.length * 25}px)`,
  };

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
