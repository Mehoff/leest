import { useState } from "react";
import styles from "./App.module.css";

import ITodo from "./interfaces/ITodo";
import TodoList from "./components/todo-list";
import CreateTodoItem from "./components/create-todo-form";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  return (
    <div className={styles.App}>
      <h1 className={styles.Logo}>Leest</h1>
      <CreateTodoItem todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
