import { ChangeEvent, FormEvent, useState } from "react";

export default function Main() {
  const [query, setQuery] = useState("");

  //http://api.geonames.org/searchJSON?q=${query}&maxRows=5&country=US&username=${import.meta.env.VITE_GEONAMES_USERNAME}

  function handleQueryChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    return fetch(
      `http://api.geonames.org/searchJSON?q=${query}&maxRows=5&country=US&username=${
        import.meta.env.VITE_GEONAMES_USERNAME
      }`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .then((data) => {
        console.log(data);
        console.log(data.geonames[0]);
      });
  }

  return (
    <main className="main">
      <form className="main__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="main__input"
          onChange={handleQueryChange}
          value={query}
        />
        <button type="submit" className="main__submit-button">
          Search
        </button>
      </form>
    </main>
  );
}
