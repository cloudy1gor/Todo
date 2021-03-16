import React from "react";
import ReactDOM from "react-dom";

import TodoHeader from "./components/todo-header/TodoHeader";
import TodoInput from "./components/todo-input/TodoInput";
import TodoList from "./components/todo-list/TodoList";

const todoData = [
  { label: "Learn React", important: false, id: 1 },
  { label: "Create React App", important: true, id: 2 },
  { label: "Drink a cup of tea", important: false, id: 3 },
];

const App = () => {
  return (
    <div>
      <TodoHeader />
      <TodoInput />
      <TodoList todos={todoData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
