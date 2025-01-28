import { useState, useEffect } from "react";
export const useFetch = (api) => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${api}language=en-US&page=1`;

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_APP_API_KEY}`,
      },
    };

    async function fetchMovies() {
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json.results);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    }

    fetchMovies();
  }, [url]);
  return { data };
};
