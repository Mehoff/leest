import * as React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import ITodo from "../../interfaces/ITodo";
import TodoItem from "../todo-item";
import styles from "./todo-list.module.css";

const TodoList: React.FC = () => {
  const { todos } = useTypedSelector((state) => state.todo);
  const finishedCount = todos.filter((t) => t.isFinised).length;

  return (
    <div className={styles.Wrapper}>
      {todos.length ? (
        <div className={styles.Counter}>
          <span>
            Done {finishedCount} of {todos.length}
          </span>
        </div>
      ) : (
        <></>
      )}
      <ul>
        {todos.map((todo: ITodo, key: number) => {
          return (
            <li key={key}>
              <TodoItem todo={todo} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
