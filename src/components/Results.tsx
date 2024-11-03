import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getLocationsByName,
  getLocationByZipcode,
  getPets,
} from "../utils/api";
import { isValidZipcode } from "../utils/helpers";

export default function Results() {
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
        .then((pets) => {
          console.log(pets);
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
  }, []);
  return <div className="results">These are the search results!</div>;
}
