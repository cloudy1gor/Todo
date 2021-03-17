import React, { Component } from "react";
import "./TodoListItem.css";

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false,
  };

  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done,
      };
    });
    console.log(`click: ${this.props.label}`);
  };

  onImportantClick = () => {
    this.setState(({ important }) => {
      return {
        important: !important,
      };
    });
  };

  render() {
    const { label } = this.props;
    const { done, important } = this.state;

    let classNames = "item__label";
    if (done) {
      classNames += " item--done";
    }

    if (important) {
      classNames += " item--important";
    }

    return (
      <span className={classNames}>
        <span className="item__name" onClick={this.onLabelClick}>
          {label}
        </span>

        <button
          className="item__btn item__btn--important"
          type="button"
          onClick={this.onImportantClick}
        ></button>
        <button className="item__btn item__btn--delete" type="button"></button>
      </span>
    );
  }
}
