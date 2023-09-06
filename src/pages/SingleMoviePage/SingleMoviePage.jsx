import {
  useParams,
  useNavigate,
  useLocation,
  Outlet,
  NavLink,
  useSearchParams,
} from "react-router-dom";
import { useEffect, useState } from "react";

import MovieCard from "../../components/MovieCard/MovisCard";

import { getMovieById } from "../../shared/serveces/themoviedb";

import s from "./singlePage.module.css";
import { Helmet } from "react-helmet-async";

const SingleMoviePage = () => {
  const { id: StrId } = useParams();
  const id = Number(StrId);

  const [state, setState] = useState({
    item: {},
    error: null,
    loading: false,
  });

  useEffect(() => {
    const fetchMovie = async () => {
      setState((prevState) => {
        return { ...prevState, loading: true, error: false };
      });
      try {
        const data = await getMovieById(id);

        setState((prevState) => {
          return { ...prevState, loading: false, item: { ...data } };
        });
      } catch (error) {
        setState((prevState) => {
          return { ...prevState, loading: false, error };
        });
      }
    };
    if (id) {
      fetchMovie();
    }
  }, [id]);

  const navigate = useNavigate();
  const location = useLocation();
  const prevPageLocation = location.state?.from || "/";

  const goBack = () => navigate(prevPageLocation);

  const { item, error, loading } = state;

  // const [_, title] = location.search.split("?name=");
  // console.log(location.search);
  // console.log(title);
  const [searchParams] = useSearchParams();

  // const title = searchParams.get("title");
  const title = id;

  console.log(`title`, title);
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{`${title} | Greether`}</title>
        <meta name="title" content={title} />
        <meta
          name="description"
          content={`GE helps women travel safer by connecting them to local Greeters they can book to navigate ${title}  'Mexico city', ${title}  'Mexico'
         in an authentic and safe way. We provide you with your local best friend!`}
        />
      </Helmet>
      <div className={s.wrapper}>
        <button className={s.btnBack} type="button" onClick={goBack}>
          Back
        </button>
        {error && <p className={s.error}>We are sorry, a server error occurred</p>}
        {loading && <p className={s.error}>loading...</p>}
        {item?.id && <MovieCard item={item} />}
        <div className={s.linkWrapper}>
          <NavLink
            className={({ isActive }) => (isActive ? `${s.activeLink}` : `${s.link}`)}
            to={`/movies/${id}/reviews`}
          >
            Reviews
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? `${s.activeLink}` : `${s.link}`)}
            to={`/movies/${id}/cast`}
          >
            Cast
          </NavLink>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default SingleMoviePage;
