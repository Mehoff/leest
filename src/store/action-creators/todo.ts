import { Dispatch } from "react";
import ITodo from "../../interfaces/ITodo";
import { TodoAction, TodoActions } from "../../types/todo";

export const AddTodo = (todo: ITodo) => {
  return (dispatch: Dispatch<TodoAction>) => {
    dispatch({ type: TodoActions.ADD_TODO, payload: todo });
  };
};
