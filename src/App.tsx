import React from "react";
import "./App.css";
import TodoItem from "./components/todo-item/todo-item";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <TodoItem
            header={"Buy milk"}
            description={"Prostokvashino, 1L"}
            isFinised={false}
          />
        </li>

        <li>
          <TodoItem
            header={"Buy car"}
            description={"Porshe Carrera, very cool"}
            isFinised={false}
          />
        </li>

        <li>
          <TodoItem
            header={"Text to mum"}
            description={"Tell her how cool she is"}
            isFinised={true}
          />
        </li>
      </ul>
    </div>
  );
}

export default App;
