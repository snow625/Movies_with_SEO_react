import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import s from "./movieList.module.css";

const MovieList = ({ items }) => {
  const from = useLocation();
  const elements = items.map((el) => {
    const { id, title, poster_path } = el;
    return (
      <li className={s.item} key={id}>
        <Link to={`/movies/${id}`} state={{ from }} className={s.link}>
          <img
            className={s.poster}
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`}
            alt="title"
            width="250"
            height="370"
          />
          <h3 className={s.title}>{title}</h3>
        </Link>
      </li>
    );
  });

  return <ul className={s.list}>{elements}</ul>;
};

MovieList.defaultProps = {
  items: [],
};

MovieList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};

export default MovieList;
