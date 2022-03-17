import * as React from "react";
import styles from "./todo-item.module.css";

import ITodo from "../../interfaces/ITodo";

interface TodoItemProps {
  todo: ITodo;
}
const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <div
      className={`${styles.Wrapper} ${
        todo.header ? styles.IsFinished : styles.NotFinished
      }`}
    >
      <p>
        <h2>{todo.header}</h2>
        <h3>{todo.description}</h3>
      </p>
    </div>
  );
};

export default TodoItem;
