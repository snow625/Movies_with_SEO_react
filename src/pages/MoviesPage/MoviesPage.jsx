import SearchMovies from "../../modules/SearchMovies";
import { Helmet } from "react-helmet-async";

const MoviesPage = () => {
  return (
    <>
      <Helmet>
        <title>Movies | Search</title>
      </Helmet>
      <SearchMovies />
    </>
  );
};

export default MoviesPage;
