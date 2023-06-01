import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
  UPDATE_TODO_FAILURE,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_REQUEST,
  DELETE_TODO_FAILURE,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  CREATE_TODO_FAILURE,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_REQUEST,
} from "./actionTypes";

import { TodoActions, TodoState } from "./types";

const initialState: TodoState = {
  pending: false,
  todos: [],
  error: null,
};

export default (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case FETCH_TODO_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        pending: false,
        todos: action.payload.todos,
        error: null,
      };
    case FETCH_TODO_FAILURE:
      return {
        ...state,
        pending: false,
        todos: [],
        error: action.payload.error,
      };

    case UPDATE_TODO_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        pending: false,
        todos: state.todos.map((item) =>
          item.id === action.payload.todos.id
            ? {
                ...item,
                completed: action.payload.todos.completed || item.completed,
                title: action.payload.todos.title || item.title,
              }
            : item
        ),
        error: null,
      };
    case UPDATE_TODO_FAILURE:
      return {
        ...state,
        pending: false,
        todos: [],
        error: action.payload.error,
      };

    case DELETE_TODO_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        pending: false,
        todos: state.todos.filter(
          (item) => item.id !== action.payload.todos.id
        ),
        error: null,
      };
    case DELETE_TODO_FAILURE:
      return {
        ...state,
        pending: false,
        todos: [],
        error: action.payload.error,
      };

    case CREATE_TODO_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case CREATE_TODO_SUCCESS:
      const tempTodo = state.todos;
      tempTodo.push(action.payload.todos);
      return {
        ...state,
        pending: false,
        todos: tempTodo,
        error: null,
      };
    case CREATE_TODO_FAILURE:
      return {
        ...state,
        pending: false,
        todos: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
