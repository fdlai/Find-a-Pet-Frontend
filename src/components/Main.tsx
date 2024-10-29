import { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface Location {
  name: string;
  geonameId: number;
}

export default function Main() {
  const [query, setQuery] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [similarLocations, setSimilarLocations] = useState([]);

  //http://api.geonames.org/searchJSON?q=${query}&maxRows=5&country=US&username=${import.meta.env.VITE_GEONAMES_USERNAME}

  function handleQueryChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    setCharacterCount((prev) => prev + 1);
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

  useEffect(() => {
    if (characterCount === 5) {
      //make the fetch
      getSimilarLocations()
        .then((data) => {
          setSimilarLocations(data.geonames);
          //reset characterCount to 0
          setCharacterCount(0);
        })
        .catch((err) => {
          console.error(err);
          alert(`${err} Could not find similar locations!`);
        });
    }
  }, [characterCount]);

  return (
    <main className="main">
      <form className="main__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="main__input"
          onChange={handleQueryChange}
          value={query}
          list="location-options"
        />
        <datalist id="location-options">
          {similarLocations.map((location: Location) => {
            return (
              <option key={location.geonameId} value={location.name}></option>
            );
          })}
        </datalist>
        <button type="submit" className="main__submit-button">
          Search
        </button>
      </form>
    </main>
  );
}
