import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm";
import { getMovieByQwery } from "../../shared/serveces/themoviedb";
import MovieList from "../../components/MovieList";

import s from "./searchMovies.module.css";

const SearchMovies = () => {
  const [state, setState] = useState({
    items: [],
    error: null,
    loading: false,
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const fetchFilms = (qwery) => setSearchParams({ qwery });

  let searchFilmName = searchParams.get("qwery");

  useEffect(() => {
    const fetchMoviesByQwery = async () => {
      setState((prevState) => {
        return { ...prevState, loading: true, error: false };
      });
      try {
        const data = await getMovieByQwery(searchFilmName);
        setState((prevState) => {
          return { ...prevState, loading: false, items: data.results };
        });
      } catch (error) {
        setState((prevState) => {
          return { ...prevState, loading: false, error };
        });
      }
    };
    if (searchFilmName) {
      fetchMoviesByQwery();
    }
  }, [searchFilmName]);
  const { items, error, loading } = state;
  return (
    <>
      <SearchForm onSubmit={fetchFilms} />
      {error && (
        <p className={s.error}>We are sorry, a server error occurred</p>
      )}
      {loading && <p className={s.error}>loading...</p>}
      {items.length > 0 && <MovieList items={items} />}
    </>
  );
};
export default SearchMovies;
