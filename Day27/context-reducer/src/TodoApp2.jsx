import React from "react";
import AddTodo from "./AddTodo2";
import CompletedTodos from "./CompletedTodos";
import TodoList from "./TodoList2";
import TodosProvider from "./TodosContext";

export default function TodoApp() {
  return (
    <TodosProvider>
      <h2>Todos</h2>
      <AddTodo />
      <TodoList />
      <CompletedTodos />
    </TodosProvider>
  );
}




