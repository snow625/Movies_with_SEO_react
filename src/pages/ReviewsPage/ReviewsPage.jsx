import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviewsById } from "../../shared/serveces/themoviedb";

import s from "./reviewsPage.module.css";

const ReviewsPage = () => {
  const [state, setState] = useState({
    items: [],
    error: null,
    loading: false,
  });

  const { id: StrId } = useParams();
  const id = Number(StrId);

  useEffect(() => {
    const fetchReviewsById = async () => {
      setState((prevState) => {
        return { ...prevState, loading: true, error: false };
      });
      try {
        const data = await getMovieReviewsById(id);

        setState((prevState) => {
          return { ...prevState, loading: false, items: data.results };
        });
      } catch (error) {
        setState((prevState) => {
          return { ...prevState, loading: false, error };
        });
      }
    };
    if (id) {
      fetchReviewsById();
    }
  }, [id]);

  const { items, error, loading } = state;

  const elements = items.map(({ id, author, content }) => {
    return (
      <li key={id}>
        <p>{`Author: ${author} `}</p>
        <p>{content}</p>
      </li>
    );
  });

  return (
    <div className={s.reviewsWrapper}>
      <h2>Reviews</h2>
      {error && (
        <p className={s.error}>We are sorry, a server error occurred</p>
      )}
      {loading && <p className={s.error}>loading...</p>}
      {elements.length > 0 ? <ul>{elements}</ul> : <p>no found Reviews</p>}
    </div>
  );
};

export default ReviewsPage;
