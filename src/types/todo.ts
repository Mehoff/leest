import ITodo from "../interfaces/ITodo";

export enum TodoActions {
  ADD_TODO = "ADD_TODO",
  FINISH_TODO = "FINISH_TODO",
  UNFINISH_TODO = "UNFINISH_TODO",
}

export interface TodoState {
  todos: ITodo[];
}

export interface AddTodoAction {
  type: TodoActions.ADD_TODO;
  payload: ITodo;
}

export interface FinishTodoAction {
  type: TodoActions.FINISH_TODO;
  payload: ITodo;
}

export interface UnfinishTodoAction {
  type: TodoActions.UNFINISH_TODO;
  payload: ITodo;
}

export type TodoAction = AddTodoAction | FinishTodoAction | UnfinishTodoAction;
