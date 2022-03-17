import { useState } from "react";
import styles from "./App.module.css";

import ITodo from "./interfaces/ITodo";

import TodoList from "./components/todo-list";
import CreateTodoItem from "./components/create-todo-form";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (todo: ITodo): void => {
    setTodos([...todos, todo]);
  };

  return (
    <div className={styles.App}>
      <TodoList todos={todos} />
      <CreateTodoItem addTodo={addTodo} />
    </div>
  );
}

export default App;
