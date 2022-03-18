import { TodoState, TodoAction, TodoActions } from "../../types/todo";
import { v4 as uuidv4 } from "uuid";

const initialState: TodoState = {
  todos: [
    {
      id: uuidv4(),
      header: "Hello from initial state",
      description: "I am learning redux",
      isFinised: false,
    },
  ],
};

const todoReducer = (
  state: TodoState = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TodoActions.ADD_TODO:
      state.todos = [...state.todos, action.payload];
      return state;
    default:
      return state;
  }
};

export default todoReducer;
