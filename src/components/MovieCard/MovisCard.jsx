import PropTypes from "prop-types";
import s from "./movieCard.module.css";
const MovieCard = ({ item }) => {
  const {
    title,
    poster_path,
    genres: genresArr,
    release_date,
    vote_average,
    overview,
  } = item;
  const poster = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`;
  const date = release_date.slice(0, 4);
  const userScore = vote_average * 10;
  const genres =
    genresArr.length > 0
      ? genresArr.map(({ name }) => name).join(", ")
      : "no Ganres";
  const description = overview ? overview : "no overview ";

  return (
    <div className={s.wrapper}>
      <img
        className={s.poster}
        src={poster}
        alt={title}
        width="360"
        height="540"
      />
      <div className={s.wraperDescripton}>
        <p className={s.title}>{`${title} (${date})`}</p>
        <p className={s.userScore}>{`User Score: ${userScore}%`}</p>
        <p className={s.Overviev}>Overviev</p>
        <p className={s.OvervievText}>{description}</p>
        <p className={s.Overviev}>Genres</p>
        <p className={s.OvervievText}>{genres}</p>
      </div>
    </div>
  );
};
MovieCard.defaultProps = {
  item: { genres: [{ name: "" }] },
};

MovieCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }),
};

export default MovieCard;
