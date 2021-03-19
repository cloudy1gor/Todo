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
    term: "",
    filter: "", // active, all, done
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

  search(items, search) {
    if (search.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }

  onSearchChange = (term) => {
    this.setState({ term });
  };

  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "done":
        return items.filter((item) => item.done);

      default:
        return items;
    }
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { todoData, term, filter } = this.state;
    const visibleItems = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter((el) => el.done).length;
    const toDoCount = todoData.length - doneCount;
    return (
      <div className="todo">
        <TodoHeader toDo={toDoCount} done={doneCount} />
        <div className="todo__menu">
          <TodoInput onSearchChange={this.onSearchChange} />
          <TodoFilter filter={filter} onFilterChange={this.onFilterChange} />
        </div>
        <TodoList
          todos={visibleItems}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onItemAdd={this.onItemAdd} />
      </div>
    );
  }
}
