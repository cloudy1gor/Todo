import React, { Component } from "react";
import "./TodoInput.css";

export default class TodoInput extends Component {
  state = {
    term: "",
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <input
        type="text"
        className="input"
        placeholder="Search"
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    );
  }
}
