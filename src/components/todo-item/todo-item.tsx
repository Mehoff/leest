import * as React from "react";
import TodoItemProps from "../../interfaces/todo-item-props.interface";
import styles from "./todo-item.module.css";

const TodoItem: React.FC<TodoItemProps> = (props) => {
  return (
    <div
      className={`${styles.Wrapper} ${
        props.isFinised ? styles.IsFinished : styles.NotFinished
      }`}
    >
      <p className={styles.Header}>{props.header}</p>
      <span> &gt;{props.description}</span>
    </div>
  );
};

export default TodoItem;
