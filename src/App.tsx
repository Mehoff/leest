import styles from "./App.module.css";
import CreateTodoItem from "./components/create-todo-form";

import TodoList from "./components/todo-list";

function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.Logo}>Leest</h1>
      <CreateTodoItem />
      <TodoList />
    </div>
  );
}

export default App;
