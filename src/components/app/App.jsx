import React, { Component } from "react";

import TodoHeader from "../todo-header/TodoHeader";
import TodoInput from "../todo-input/TodoInput";
import TodoList from "../todo-list/TodoList";
import TodoFilter from "../todo-filter/TodoFilter";
import ItemAddForm from "../item-add-form/itemAddForm";

import "./App.css";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("Learn React"),
      this.createTodoItem("Create React App"),
      this.createTodoItem("Drink a cup of tea"),
    ],
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);

      const before = todoData.slice(0, index);
      const after = todoData.slice(index + 1);

      const newArray = [...before, ...after];

      return {
        todoData: newArray,
      };
    });
    console.log(id);
  };

  onItemAdd = (text) => {
    //генерируем =id
    const newItem = this.createTodoItem(text);

    // добавляем новый item в массив
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];

      return {
        todoData: newArr,
      };
    });

    console.log("Added", text);
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done"),
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important"),
      };
    });
  };

  render() {
    return (
      <div className="todo">
        <TodoHeader toDo={1} done={3} />
        <div className="todo__menu">
          <TodoInput />
          <TodoFilter />
        </div>
        <TodoList
          todos={this.state.todoData}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onItemAdd={this.onItemAdd} />
      </div>
    );
  }
}
