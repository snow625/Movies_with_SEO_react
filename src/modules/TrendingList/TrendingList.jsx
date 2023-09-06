import { useState, useEffect } from "react";

import MovieList from "../../components/MovieList";
import { getTrendingMovies } from "../../shared/serveces/themoviedb";

import s from "./trendingList.module.css";

const TrendingList = () => {
  const [state, setState] = useState({
    items: [],
    error: null,
    loading: false,
  });

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setState((prevState) => {
        return { ...prevState, loading: true, error: false };
      });
      try {
        const data = await getTrendingMovies();
        setState((prevState) => {
          return { ...prevState, loading: false, items: data };
        });
      } catch (error) {
        setState((prevState) => {
          return { ...prevState, loading: false, error };
        });
      }
    };
    fetchTrendingMovies();
  }, []);

  const { items, error, loading } = state;
  return (
    <>
      <h2 className={s.title}>Trending today</h2>
      {error && (
        <p className={s.error}>We are sorry, a server error occurred</p>
      )}
      {loading && <p className={s.error}>loading...</p>}
      {items.length > 0 && <MovieList items={items} />}
    </>
  );
};

export default TrendingList;
