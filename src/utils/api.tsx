interface Coordinate {
  longitude: string;
  latitude: string;
}

export function getLocationsByName(query: string) {
  return fetch(`http://localhost:3001/locations?query=${query}`).then((res) => {
    //checking res.ok is probably not necessar here, since we've done that on the backend now
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  });
}

export function getLocationByZipcode(query: string) {
  return fetch(
    `http://api.geonames.org/postalCodeSearchJSON?postalcode=${query}&maxRows=1&country=US&username=${
      import.meta.env.VITE_GEONAMES_USERNAME
    }`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  });
}

export function getNearestPets({ longitude, latitude }: Coordinate) {
  return fetch(
    `http://localhost:3001/pets/near?lng=${longitude}&lat=${latitude}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  });
}

export function getRecentPets(n: number) {
  return fetch(`http://localhost:3001/pets/recent?number=${n}`).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  });
}
