import React from "react";
import "./App.css";

import Button from "@mui/material/Button";
import TodoItem from "./components/todo-item/todo-item";
// import TodoList from "./components/todo-list/todo-list";

function App() {
  //TODO: Cover with List
  return (
    <div className="App">
      <TodoItem
        header={"Buy milk"}
        description={"Prostokvashino, 1L"}
        isFinised={false}
      ></TodoItem>
      <TodoItem
        header={"Buy car"}
        description={"Porshe Carrera, very cool"}
        isFinised={false}
      ></TodoItem>
      <TodoItem
        header={"Text to mum"}
        description={"Tell her how cool she is"}
        isFinised={true}
      ></TodoItem>

      <Button variant="contained">Click me!</Button>
    </div>
  );
}

export default App;
