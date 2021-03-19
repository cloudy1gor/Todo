import React, { Component } from "react";
import "./TodoFilter.css";

export default class TodoFilter extends Component {
  filterButtons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.filterButtons.map(({ name, label }) => {
      const isActive = filter === name;
      const className = isActive ? "filter__btn--active" : "";

      return (
        <button
          key={name}
          type="button"
          onClick={() => onFilterChange(name)}
          className={`filter__btn ${className}`}
        >
          {label}
        </button>
      );
    });

    return <div className="filter">{buttons}</div>;
  }
}
