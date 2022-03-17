import { useEffect, useState } from "react";
import styles from "./App.module.css";

import TodoList from "./components/todo-list";
import ITodo from "./interfaces/ITodo";

const TODOS: ITodo[] = [
  {
    header: "Header1",
    description: "descrtasdmkamsd",
    isFinised: false,
  },
  {
    header: "Header2",
    description: "descrtasdmkamsd",
    isFinised: false,
  },
  {
    header: "Header3",
    description: "descrtasdmkamsd",
    isFinised: false,
  },
  {
    header: "Header4",
    description: "descrtasdmkamsd",
    isFinised: false,
  },
];

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    setTodos(TODOS);
  }, []);

  return (
    <div className={styles.App}>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
