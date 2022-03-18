import * as React from "react";
import styles from "./todo-item.module.css";

import ITodo from "../../interfaces/ITodo";
import { useActions } from "../../hooks/useActions";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { FinishTodo, UnfinishTodo } = useActions();

  const onTodoClick = () => {
    todo.isFinished ? UnfinishTodo(todo) : FinishTodo(todo);
  };

  return (
    <div
      className={`${styles.Wrapper} ${
        todo.isFinished ? styles.NotFinished : styles.IsFinished
      }`}
      onClick={onTodoClick}
    >
      <h2 className={styles.Header}>{todo.header}</h2>
      <h3 className={styles.Description}>{todo.description}</h3>
    </div>
  );
};

export default TodoItem;
