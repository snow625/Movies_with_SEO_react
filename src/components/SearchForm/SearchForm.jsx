import { useState } from "react";
import PropTypes from "prop-types";
import s from "./searchForm.module.css";
import sprite from "../../images/svg/sprite.svg";

const SearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({ search: "" });

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(state.search.trim());
    setState({ search: "" });
  };

  const { search } = state;
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        className={s.input}
        type="text"
        name="search"
        value={search}
        placeholder="movie name..."
        required
      />
      <button className={s.button} type="sumbit" aria-label="button-search">
        <svg className={s.icon}>
          <use href={sprite + "#icon-search"} />
        </svg>
      </button>
    </form>
  );
};
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
