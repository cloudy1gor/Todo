import React from "react";

import TodoListItem from "../todo-list-item/TodoListItem";
import "./TodoList.css";

const TodoList = ({ todos, onDelete, onToggleImportant, onToggleDone }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li className="item" key={id}>
        <TodoListItem
          {...itemProps}
          // label={item.label}
          // important={item.important}
          // id={item.id}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  return <ul className="list">{elements}</ul>;
};

export default TodoList;
