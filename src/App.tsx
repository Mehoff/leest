import styles from "./App.module.css";

import TodoItem from "./components/todo-item/todo-item";
import ITodo from "./interfaces/ITodo";

function App() {
  const todo: ITodo = {
    header: "Header",
    description: "descrtasdmkamsd",
    isFinised: false,
  };

  return (
    <div className={styles.App}>
      <TodoItem todo={todo}></TodoItem>
    </div>
  );
}

export default App;
