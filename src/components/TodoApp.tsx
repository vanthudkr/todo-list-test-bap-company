import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createTodoRequest,
  deleteTodoRequest,
  fetchTodoRequest,
  updateTodoRequest,
} from "../store/todo/actions";
import {
  getPendingSelector,
  getTodosSelector,
  getErrorSelector,
} from "../store/todo/selectors";
import { ITodo } from "../store/todo/types";
import Loading from "./Loading";

const TodoApp = () => {
  const [inputText, setInputText] = useState("");
  const [todoData, setTodoData] = useState<any>(null);
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const todos = useSelector(getTodosSelector);
  const error = useSelector(getErrorSelector);

  const handleAddTodo = () => {
    dispatch(createTodoRequest({ title: inputText }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    setTodoData({ ...todoData, title: e.target.value });
  };

  const handleToggleComplete = (e: any, id: number) => {
    dispatch(updateTodoRequest({ completed: true, id: id }));
    e.stopPropagation();
  };

  const handleDeleteTodo = (e: any, id: number) => {
    dispatch(deleteTodoRequest({ id: id }));
    e.stopPropagation();
  };

  const handleTodoData = (todo: ITodo) => {
    console.log("todo", todo);
    setTodoData(todo);
    setInputText(`${todo.title}`);
  };

  const handleUpdateTodo = () => {
    dispatch(updateTodoRequest(todoData));
    setInputText("");
    setTodoData(null);
  };

  useEffect(() => {
    dispatch(fetchTodoRequest());
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center py-10">
      {pending ? (
        <Loading />
      ) : error ? (
        <div className="text-2xl font-bold text-white">Something error</div>
      ) : (
        <div className="max-w-lg w-full mx-4 p-4 bg-gray-800 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-white mb-4">TaskMaster</h1>
          <div className="flex mb-4">
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              className="flex-grow bg-gray-700 text-white placeholder-gray-400 border-gray-400 border-2 p-2 rounded-l-md focus:outline-none"
              placeholder="Add a new todo..."
            />
            <button
              disabled={inputText ? false : true}
              onClick={handleAddTodo}
              className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600 focus:outline-none disabled:bg-blue-300"
            >
              Add
            </button>
            <button
              disabled={todoData?.id ? false : true}
              onClick={handleUpdateTodo}
              className="ml-2 bg-blue-500 text-white px-4 rounded-md hover:bg-blue-600 focus:outline-none disabled:bg-blue-300"
            >
              Update
            </button>
          </div>
          <ul className="space-y-2">
            {todos.map((todo: ITodo) => (
              <li
                key={todo.id}
                className={`flex items-center bg-gray-700 p-3 rounded-md`}
                onClick={() =>
                  handleTodoData({ title: todo.title, id: todo.id })
                }
              >
                <span
                  className={`flex-grow ${
                    todo.completed ? "line-through text-gray-500" : "text-white"
                  }`}
                >
                  {todo.title}
                </span>
                {!todo.completed ? (
                  <button
                    onClick={(e) => handleToggleComplete(e, Number(todo.id))}
                    className="text-green-500 hover:text-green-600 ml-2 focus:outline-none"
                  >
                    ✓
                  </button>
                ) : null}
                <button
                  onClick={(e) => handleDeleteTodo(e, Number(todo.id))}
                  className="text-red-500 hover:text-red-600 ml-2 focus:outline-none"
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-white">
            <p>
              Total Todos: {todos.length} | Completed Todos:{" "}
              {todos.filter((item) => item.completed === true).length}
            </p>
            <p className="mt-2">
              <em>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                ea numquam ut animi, omnis vero! Accusamus, eius qui? Distinctio
                inventore doloremque perferendis repudiandae tempora, labore vel
                cupiditate obcaecati aspernatur ducimus.
              </em>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoApp;
