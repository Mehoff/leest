import { useState, ChangeEvent } from "react";
import styles from "./create-todo-form.module.css";

import ITodo from "../../interfaces/ITodo";

interface CreateTodoItemProps {
  todos: ITodo[];
  setTodos: (todos: ITodo[]) => void;
}

const CreateTodoItem: React.FC<CreateTodoItemProps> = ({ todos, setTodos }) => {
  const [header, setHeader] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const text = e.target.value;
    setHeader(text);
  };

  const onTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const text = e.target.value;
    setDescription(text);
  };

  const onAddTodoClick = () => {
    const h = header.trim();
    if (!h) return;

    const d = description.trim();

    const todo: ITodo = {
      header: h,
      description: d,
      isFinised: false,
    };

    setTodos([...todos, todo]);
    setHeader("");
    setDescription("");
  };

  return (
    <>
      <div>
        <input
          className={styles.HeaderInput}
          name="header"
          id="todo-header"
          placeholder="Bring Mary her book back"
          value={header}
          onChange={onInputChange}
        ></input>
      </div>
      <div>
        <textarea
          className={styles.DescriptionTextArea}
          name="description"
          id="todo-description"
          placeholder="It should be done before it is too late"
          value={description}
          onChange={onTextAreaChange}
        ></textarea>
      </div>
      <button className={styles.AddTodoButton} onClick={onAddTodoClick}>
        Add
      </button>
    </>
  );
};

export default CreateTodoItem;
