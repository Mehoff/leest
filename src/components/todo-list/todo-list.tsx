import * as React from "react";
import ITodo from "../../interfaces/ITodo";
import TodoItem from "../todo-item";
import styles from "./todo-list.module.css";

interface TodoListProps {
  todos: ITodo[];
  setTodos: (todos: ITodo[]) => void;
}

const TodoList: React.FC<TodoListProps> = (props: TodoListProps) => {
  const finishedCount = props.todos.filter((t) => t.isFinised).length;

  return (
    <div className={styles.Wrapper}>
      {props.todos.length ? (
        <div className={styles.Counter}>
          <span>
            Done {finishedCount} of {props.todos.length}
          </span>
        </div>
      ) : (
        <></>
      )}
      <ul>
        {props.todos.map((todo: ITodo, key: number) => {
          return (
            <li key={key}>
              <TodoItem
                todo={todo}
                todos={props.todos}
                setTodos={props.setTodos}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
