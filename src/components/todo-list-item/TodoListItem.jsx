import React, { Component } from "react";
import "./TodoListItem.css";

export default class TodoListItem extends Component {
  render() {
    const {
      label,
      onDelete,
      onToggleImportant,
      onToggleDone,
      done,
      important,
    } = this.props;

    let classNames = "item__label";
    if (done) {
      classNames += " item--done";
    }

    if (important) {
      classNames += " item--important";
    }

    return (
      <span className={classNames}>
        <span className="item__name" onClick={onToggleDone}>
          {label}
        </span>

        <button
          className="item__btn item__btn--important"
          type="button"
          onClick={onToggleImportant}
        >
          !
        </button>
        <button
          className="item__btn item__btn--delete"
          type="button"
          onClick={onDelete}
        >
          X
        </button>
      </span>
    );
  }
}
