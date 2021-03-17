import React, { Component } from "react";
import "./itemAddForm.css";

export default class ItemAddForm extends Component {
  render() {
    return (
      <div className="add-form">
        <button type="button" onClick={() => this.props.onItemAdd("item add")}>
          Add item
        </button>
      </div>
    );
  }
}
