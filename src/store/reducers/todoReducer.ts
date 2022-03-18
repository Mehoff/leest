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
      return { todos: [...state.todos, action.payload] };

    // Dude, refactor this bullshit - mutation error is a madness
    case TodoActions.FINISH_TODO: {
      const _state: TodoState = { todos: [] };
      for (const todo of state.todos) {
        const t = Object.assign({}, todo);
        if (t.id === action.payload.id) {
          t.isFinised = true;
        }
        _state.todos.push(t);
      }
      return _state;
    }

    case TodoActions.UNFINISH_TODO: {
      const _state: TodoState = { todos: [] };
      for (const todo of state.todos) {
        const t = Object.assign({}, todo);
        if (t.id === action.payload.id) {
          t.isFinised = false;
        }
        _state.todos.push(t);
      }
      return _state;
    }

    default:
      return state;
  }
};

export default todoReducer;
