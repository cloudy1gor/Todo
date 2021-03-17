import React from "react";
import TodoListItem from "../todo-list-item/TodoListItem";
import "./TodoList.css";

const TodoList = ({ todos, onDelete }) => {
  const elements = todos.map((item) => {
    return (
      <li className="item" key={item.id}>
        <TodoListItem
          label={item.label}
          important={item.important}
          id={item.id}
          onDelete={() => {
            onDelete(item.id);
            console.log("deleted");
          }}
        />
      </li>
    );
  });

  return <ul className="list">{elements}</ul>;
};

export default TodoList;
