import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { fetchTodoRequest } from "./store/todo/actions";
import NavBar from "./components/NavBar";
import TodoApp from "./components/TodoApp";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodoRequest());
  }, []);
  return (
    <>
      <NavBar />
      <TodoApp />
      <Footer />
    </>
  );
}

export default App;
