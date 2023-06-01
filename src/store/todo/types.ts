import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  CREATE_TODO_FAILURE,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_REQUEST,
} from "./actionTypes";

export interface ITodo {
  userId?: number;
  id?: number;
  title?: string;
  completed?: boolean;
}

export interface TodoState {
  pending: boolean;
  todos: ITodo[];
  error: string | null;
}

// interface fetch todo
export interface FetchTodoSuccessPayload {
  todos: ITodo[];
}
export interface FetchTodoFailurePayload {
  error: string;
}
export interface FetchTodoRequest {
  type: typeof FETCH_TODO_REQUEST;
}
export type FetchTodoSuccess = {
  type: typeof FETCH_TODO_SUCCESS;
  payload: FetchTodoSuccessPayload;
};
export type FetchTodoFailure = {
  type: typeof FETCH_TODO_FAILURE;
  payload: FetchTodoFailurePayload;
};

// interface update todo
export interface UpdateTodoSuccessPayload {
  todos: ITodo;
}
export interface UpdateTodoFailurePayload {
  error: string;
}
export interface UpdateTodoRequest {
  type: typeof UPDATE_TODO_REQUEST;
}
export type UpdateTodoSuccess = {
  type: typeof UPDATE_TODO_SUCCESS;
  payload: UpdateTodoSuccessPayload;
};
export type UpdateTodoFailure = {
  type: typeof UPDATE_TODO_FAILURE;
  payload: UpdateTodoFailurePayload;
};

// interface update todo
export interface DeleteTodoSuccessPayload {
  todos: ITodo;
}
export interface DeleteTodoFailurePayload {
  error: string;
}
export interface DeleteTodoRequest {
  type: typeof DELETE_TODO_REQUEST;
}
export type DeleteTodoSuccess = {
  type: typeof DELETE_TODO_SUCCESS;
  payload: DeleteTodoSuccessPayload;
};
export type DeleteTodoFailure = {
  type: typeof DELETE_TODO_FAILURE;
  payload: DeleteTodoFailurePayload;
};

// interface update todo
export interface CreateTodoSuccessPayload {
  todos: ITodo;
}
export interface CreateTodoFailurePayload {
  error: string;
}
export interface CreateTodoRequest {
  type: typeof CREATE_TODO_REQUEST;
}
export type CreateTodoSuccess = {
  type: typeof CREATE_TODO_SUCCESS;
  payload: CreateTodoSuccessPayload;
};
export type CreateTodoFailure = {
  type: typeof CREATE_TODO_FAILURE;
  payload: CreateTodoFailurePayload;
};

export type TodoActions =
  | FetchTodoRequest
  | FetchTodoSuccess
  | FetchTodoFailure
  | UpdateTodoRequest
  | UpdateTodoSuccess
  | UpdateTodoFailure
  | DeleteTodoRequest
  | DeleteTodoSuccess
  | DeleteTodoFailure
  | CreateTodoRequest
  | CreateTodoSuccess
  | CreateTodoFailure;
