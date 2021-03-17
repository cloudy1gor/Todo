import React, { Component } from "react";

import TodoHeader from "../todo-header/TodoHeader";
import TodoInput from "../todo-input/TodoInput";
import TodoList from "../todo-list/TodoList";
import TodoFilter from "../todo-filter/TodoFilter";
import ItemAddForm from "../item-add-form/itemAddForm";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      { label: "Learn React", important: false, id: 1 },
      { label: "Create React App", important: true, id: 2 },
      { label: "Drink a cup of tea", important: false, id: 3 },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id == id);

      const before = todoData.splice(0, index);
      const after = todoData.splice(index + 1);

      const newArray = [...before, ...after];

      return {
        todoData: newArray,
      };
    });
    console.log(id);
  };

  onItemAdd = (text) => {
    //генерируем =id
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++,
    };

    // добавляем новый item в массив
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];

      return {
        todoData: newArr,
      };
    });

    console.log("Added", text);
  };

  render() {
    return (
      <div className="todo">
        <TodoHeader toDo={1} done={3} />
        <div className="todo__menu">
          <TodoInput />
          <TodoFilter />
        </div>
        <TodoList todos={this.state.todoData} onDelete={this.deleteItem} />
        <ItemAddForm onItemAdd={this.onItemAdd} />
      </div>
    );
  }
}
