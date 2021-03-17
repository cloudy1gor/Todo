import React, { Component } from "react";
import "./TodoFilter.css";

export default class TodoFilter extends Component {
  render() {
    return (
      <div className="filter">
        <button className="filter__btn filter__btn--active" type="button">
          All
        </button>
        <button className="filter__btn" type="button">
          Active
        </button>
        <button className="filter__btn" type="button">
          Done
        </button>
      </div>
    );
  }
}
