import { useState, ChangeEvent } from "react";
import styles from "./create-todo-form.module.css";

import ITodo from "../../interfaces/ITodo";

interface CreateTodoItemProps {
  addTodo: (todo: ITodo) => void;
}

const CreateTodoItem: React.FC<CreateTodoItemProps> = ({ addTodo }) => {
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
    const todo: ITodo = {
      header: header.trim(),
      description: description.trim(),
      isFinised: false,
    };

    addTodo(todo);
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
