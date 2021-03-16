import React from "react";
import "./TodoFilter.css";

const TodoFilter = () => {
  return (
    <div className="filter">
      <button className="filter__btn" type="button">
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
};

export default TodoFilter;
