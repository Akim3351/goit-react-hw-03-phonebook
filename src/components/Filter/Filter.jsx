import React from "react";
import propTypes from "prop-types";
import css from "./Filter.module.css";

const Filter = ({ filter, onSearch }) => {
  return (
    <label className={css.search__label}>
      Find contacts by name
      <input onChange={onSearch} type="text" value={filter} />
    </label>
  );
};

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  onSearch: propTypes.func.isRequired,
};

export default Filter;
