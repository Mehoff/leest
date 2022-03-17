import * as React from "react";

interface CreateTodoButtonProps {
  text: string;
}
const CreateTodoButton: React.FC<CreateTodoButtonProps> = ({ text }) => {
  return <button>{text}</button>;
};

export default CreateTodoButton;
