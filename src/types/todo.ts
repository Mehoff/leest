import ITodo from "../interfaces/ITodo";

export enum TodoActions {
  ADD_TODO = "ADD_TODO",
}

export interface TodoState {
  todos: ITodo[];
}

export interface AddTodoAction {
  type: TodoActions.ADD_TODO;
  payload: ITodo;
}

export type TodoAction = AddTodoAction;
