import React, { Component } from "react";
import propTypes from "prop-types";
import css from "./Filter.module.css";

class Filter extends Component {
  render() {
    return (
      <label className={css.search__label}>
        Find contacts by name
        <input
          onChange={this.props.onSearch}
          type="text"
          value={this.props.filter}
        />
      </label>
    );
  }
}

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  onSearch: propTypes.func.isRequired,
};

export default Filter;
