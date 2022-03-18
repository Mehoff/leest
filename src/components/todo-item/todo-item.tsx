import * as React from "react";
import styles from "./todo-item.module.css";

import ITodo from "../../interfaces/ITodo";

interface TodoItemProps {
  todo: ITodo;
  // todos: ITodo[];
  // setTodos: (todos: ITodo[]) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  // const onTodoClick = (): void => {
  //   const _todos = [...todos];

  //   const clickedTodo = _todos.find((t: ITodo) => t.id === todo.id);
  //   if (!clickedTodo) return;

  //   clickedTodo.isFinised = !clickedTodo.isFinised;
  //   setTodos(_todos);
  // };

  return (
    <div
      className={`${styles.Wrapper} ${
        todo.isFinised ? styles.NotFinished : styles.IsFinished
      }`}
      // onClick={onTodoClick}
    >
      <h2 className={styles.Header}>{todo.header}</h2>
      <h3 className={styles.Description}>{todo.description}</h3>
    </div>
  );
};

export default TodoItem;
