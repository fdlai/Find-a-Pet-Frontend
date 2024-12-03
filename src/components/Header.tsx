import "../blocks/Header.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { getLocationsByName } from "../utils/api";
import { useNavigate, Link, useLocation } from "react-router-dom";
import dog from "../assets/dog-silhouette.png";
import magnifyingGlass from "../assets/magnifying-glass.svg";
import HamburgerButton from "./HamburgerButton";

interface Location {
  name: string;
  geonameId: number;
}

type Filters = {
  [key: string]: string;
};

export default function Header() {
  /* -------------------------------------------------------------------------- */
  /*                            states and constants                            */
  /* -------------------------------------------------------------------------- */
  const [query, setQuery] = useState("");
  const [keyPressCount, setKeyPressCount] = useState(0);
  const [similarLocations, setSimilarLocations] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [filters, setFilters] = useState<Filters>({});
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const filtersString = new URLSearchParams(filters).toString();
  const location = useLocation();

  console.log(location);

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
    navigate(
      `/pets/search/${query}${filtersString ? "?" + filtersString : ""}`
    );
    setShowDropdown(false);
  }

  function handleFiltersChange(
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) {
    const { name, value } = e.target;

    if (!value) {
      const newFilters = { ...filters };
      delete newFilters[name];
      setFilters(newFilters);
      return;
    }

    setFilters({ ...filters, [name]: value });
  }

  function handleHamburgerButtonClick() {
    setSideMenuOpen(!sideMenuOpen);
  }

  /* -------------------------------------------------------------------------- */
  /*                                 useEffects                                 */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    if (query.length >= 3 && keyPressCount >= 5) {
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

  useEffect(() => {
    //any search filters found in the url are set in the filters state variable
    const params = new URLSearchParams(location.search);
    const updatedFilters = { ...filters };
    params.forEach((value, key) => {
      updatedFilters[key] = value;
    });

    setFilters(updatedFilters);
  }, [location.search]);

  useEffect(() => {
    //if the url path starts with "/pets/search/", then we set the query state to be the city/query that follows
    if (!location.pathname.startsWith("/pets/search/")) {
      return;
    }
    const match = location.pathname.match(
      /(?<=\/pets\/search\/)[a-zA-Z0-9+%.,'’()\-]+/
    );

    if (match) {
      const queriedLocation = decodeURIComponent(match[0]);
      setQuery(queriedLocation);
    }
  }, [location.pathname]);

  return (
    <header className="header">
      <div className="header__top-bar">
        <HamburgerButton
          onClick={handleHamburgerButtonClick}
          style={{ position: "absolute", top: "15px", left: "15px" }}
        />
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
      <div
        className={`header__left-bar ${
          sideMenuOpen && "header__left-bar_opened"
        }`}
      >
        <HamburgerButton onClick={handleHamburgerButtonClick} />
        <div className="header__filters">
          <label className="header__filter">
            Species
            <select
              value={filters.species || ""}
              name="species"
              onChange={handleFiltersChange}
            >
              <option value="">Any</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
          </label>
          <label className="header__filter">
            Breed
            <input
              onChange={handleFiltersChange}
              value={filters.breed || ""}
              name="breed"
              type="text"
            />
          </label>
          <label className="header__filter">
            Sex
            <select
              value={filters.sex || ""}
              name="sex"
              onChange={handleFiltersChange}
            >
              <option value="">Any</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label className="header__filter">
            Age
            <select
              value={filters.age || ""}
              name="age"
              onChange={handleFiltersChange}
            >
              <option value="">Any</option>
              <option value="young">Young</option>
              <option value="adolescent">Adolescent</option>
              <option value="adult">Adult</option>
              <option value="senior">Senior</option>
            </select>
          </label>
          <label className="header__filter">
            Size
            <select
              value={filters.size || ""}
              name="size"
              onChange={handleFiltersChange}
            >
              <option value="">Any</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </label>
        </div>
      </div>
    </header>
  );
}
