import * as React from "react";
import Todo from "../../interfaces/ITodo";
import TodoItem from "../todo-item";
import styles from "./todo-list.module.css";

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = (props: TodoListProps) => {
  return (
    <ul className={styles.Wrapper}>
      {props.todos.map((todo: Todo, key: number) => {
        return (
          <li>
            <h1>Hello world</h1>
            {/* <TodoItem todo={todo} key={key} /> */}
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
