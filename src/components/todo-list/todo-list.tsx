import * as React from "react";
import ITodo from "../../interfaces/ITodo";
import TodoItem from "../todo-item";
import styles from "./todo-list.module.css";

interface TodoListProps {
  todos: ITodo[];
}

const TodoList: React.FC<TodoListProps> = (props: TodoListProps) => {
  return (
    <ul className={styles.Wrapper}>
      {props.todos.map((todo: ITodo, key: number) => {
        return (
          <li key={key}>
            <TodoItem todo={todo} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
