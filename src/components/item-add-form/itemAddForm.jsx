import React, { Component } from "react";

import "./itemAddForm.css";

export default class ItemAddForm extends Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdd(this.state.label);
    this.setState({
      label: "",
    });
  };

  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input
          className="add-form__input"
          type="text"
          onChange={this.onLabelChange}
          placeholder="What you want to do?"
          value={this.state.label}
        />
        <button
          className="add-form__btn"
          type="button"
          onClick={(this.onLabelChange, this.onSubmit)}
        >
          Add item
        </button>
      </form>
    );
  }
}
