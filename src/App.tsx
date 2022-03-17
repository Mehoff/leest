import { ChangeEvent, useEffect, useState } from "react";
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
  const [header, setHeader] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    setTodos(TODOS);
  }, []);

  const addTodo = (): void => {
    const todo: ITodo = {
      header: header.trim(),
      description: description.trim(),
      isFinised: false,
    };

    setTodos([...todos, todo]);
    setHeader("");
    setDescription("");
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const text = e.target.value;
    setHeader(text);
  };

  const onTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const text = e.target.value;
    setDescription(text);
  };

  return (
    <div className={styles.App}>
      <TodoList todos={todos} />
      <div>
        <label htmlFor="header">Header</label>
        <input
          name="header"
          id="todo-header"
          placeholder="Bring Mary her book back"
          value={header}
          onChange={onInputChange}
        ></input>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="todo-description"
          placeholder="It should be done before it is too late"
          value={description}
          onChange={onTextAreaChange}
        ></textarea>
        <button onClick={addTodo}>Add todo</button>
      </div>
    </div>
  );
}

export default App;
