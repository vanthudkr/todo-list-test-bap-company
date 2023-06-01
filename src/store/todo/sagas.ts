// eslint-disable-next-line import/named
import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  createTodoFailure,
  createTodoSuccess,
  deleteTodoFailure,
  deleteTodoSuccess,
  fetchTodoFailure,
  fetchTodoSuccess,
  updateTodoFailure,
  updateTodoSuccess,
} from "./actions";
import {
  CREATE_TODO_REQUEST,
  DELETE_TODO_REQUEST,
  FETCH_TODO_REQUEST,
  UPDATE_TODO_REQUEST,
} from "./actionTypes";
import { ITodo, UpdateTodoSuccessPayload } from "./types";

const getTodos = () =>
  axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos");

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchTodoSaga() {
  try {
    const response: AxiosResponse<ITodo[]> = yield call(getTodos);
    yield put(
      fetchTodoSuccess({
        todos: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchTodoFailure({
        error: e.message,
      })
    );
  }
}

function* updateTodoSaga(action: any) {
  console.log("first", action.payload.id);
  const body = action.payload;
  console.log("body", body);
  try {
    const updateResponse: AxiosResponse<ITodo> = yield call(() =>
      axios.put<ITodo[]>(
        `https://jsonplaceholder.typicode.com/todos/${action.payload.id}`,
        body
      )
    );
    yield put(
      updateTodoSuccess({
        todos: updateResponse.data,
      })
    );
  } catch (e: any) {
    yield put(
      updateTodoFailure({
        error: e.message,
      })
    );
  }
}

function* deleteTodoSaga(action: any) {
  try {
    const response: AxiosResponse<ITodo> = yield call(() =>
      axios.delete<ITodo[]>(
        `https://jsonplaceholder.typicode.com/todos/${action.payload.id}`
      )
    );
    yield put(
      deleteTodoSuccess({
        todos: { id: action.payload.id },
      })
    );
  } catch (e: any) {
    yield put(
      deleteTodoFailure({
        error: e.message,
      })
    );
  }
}

function* CreateTodoSaga(action: any) {
  const body = action.payload;
  console.log("body", body);
  try {
    const response: AxiosResponse<ITodo> = yield call(() =>
      axios.post<ITodo[]>(`https://jsonplaceholder.typicode.com/todos`, body)
    );
    yield put(
      createTodoSuccess({
        todos: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      createTodoFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* todoSaga() {
  yield all([
    takeLatest(FETCH_TODO_REQUEST, fetchTodoSaga),
    takeLatest(UPDATE_TODO_REQUEST, updateTodoSaga),
    takeLatest(DELETE_TODO_REQUEST, deleteTodoSaga),
    takeLatest(CREATE_TODO_REQUEST, CreateTodoSaga),
  ]);
}

export default todoSaga;
