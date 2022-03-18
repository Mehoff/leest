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
        todo.isFinised ? styles.NotFinished : styles.IsFinished
      }`}
    >
      <h2 className={styles.Header}>{todo.header}</h2>
      <h3 className={styles.Description}>{todo.description}</h3>
    </div>
  );
};

export default TodoItem;
