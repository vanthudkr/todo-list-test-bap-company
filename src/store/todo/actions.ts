import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_FAILURE,
  FETCH_TODO_SUCCESS,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  CREATE_TODO_REQUEST,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAILURE,
} from "./actionTypes";
import {
  FetchTodoRequest,
  FetchTodoSuccess,
  FetchTodoSuccessPayload,
  FetchTodoFailure,
  FetchTodoFailurePayload,
  UpdateTodoSuccessPayload,
  UpdateTodoSuccess,
  UpdateTodoFailure,
  UpdateTodoFailurePayload,
  ITodo,
  DeleteTodoSuccessPayload,
  DeleteTodoSuccess,
  DeleteTodoFailurePayload,
  DeleteTodoFailure,
  CreateTodoSuccess,
  CreateTodoSuccessPayload,
  CreateTodoFailurePayload,
  CreateTodoFailure,
} from "./types";

export const fetchTodoRequest = (): FetchTodoRequest => ({
  type: FETCH_TODO_REQUEST,
});
export const fetchTodoSuccess = (
  payload: FetchTodoSuccessPayload
): FetchTodoSuccess => ({
  type: FETCH_TODO_SUCCESS,
  payload,
});
export const fetchTodoFailure = (
  payload: FetchTodoFailurePayload
): FetchTodoFailure => ({
  type: FETCH_TODO_FAILURE,
  payload,
});

// action update todo
export const updateTodoRequest = (payload: ITodo) => ({
  type: UPDATE_TODO_REQUEST,
  payload,
});
export const updateTodoSuccess = (
  payload: UpdateTodoSuccessPayload
): UpdateTodoSuccess => ({
  type: UPDATE_TODO_SUCCESS,
  payload,
});
export const updateTodoFailure = (
  payload: UpdateTodoFailurePayload
): UpdateTodoFailure => ({
  type: UPDATE_TODO_FAILURE,
  payload,
});

// action delete todo
export const deleteTodoRequest = (payload: ITodo) => ({
  type: DELETE_TODO_REQUEST,
  payload,
});
export const deleteTodoSuccess = (
  payload: DeleteTodoSuccessPayload
): DeleteTodoSuccess => ({
  type: DELETE_TODO_SUCCESS,
  payload,
});
export const deleteTodoFailure = (
  payload: DeleteTodoFailurePayload
): DeleteTodoFailure => ({
  type: DELETE_TODO_FAILURE,
  payload,
});

// action create todo
export const createTodoRequest = (payload: ITodo) => ({
  type: CREATE_TODO_REQUEST,
  payload,
});
export const createTodoSuccess = (
  payload: CreateTodoSuccessPayload
): CreateTodoSuccess => ({
  type: CREATE_TODO_SUCCESS,
  payload,
});
export const createTodoFailure = (
  payload: CreateTodoFailurePayload
): CreateTodoFailure => ({
  type: CREATE_TODO_FAILURE,
  payload,
});
