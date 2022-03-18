import { TodoState, TodoAction, TodoActions } from "../../types/todo";
import { v4 as uuidv4 } from "uuid";

const initialState: TodoState = {
  todos: [
    {
      id: uuidv4(),
      header: "Hello from initial state",
      description: "I am learning redux",
      isFinished: false,
    },
  ],
};

const todoReducer = (
  state: TodoState = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TodoActions.ADD_TODO:
      return { todos: [...state.todos, action.payload] };

    case TodoActions.FINISH_TODO: {
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, isFinished: true } : todo
        ),
      };
    }

    case TodoActions.UNFINISH_TODO: {
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, isFinished: false } : todo
        ),
      };
    }

    default:
      return state;
  }
};

export default todoReducer;
