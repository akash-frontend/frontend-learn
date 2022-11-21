import React from "react";
import { useReducer } from "react";
import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
// import todosReducer from "./todosReducer";

function todosReducer(todos, action) {
    const { type } = action;
    switch (type) {
        case "add":
            const { id, text } = action;
            return [...todos, { id, text, done: false }];
        case "change":
            const updatedTodo = action.todo;
            return todos.map((existingTodo) => {
                if (existingTodo.id === updatedTodo.id) {
                    return updatedTodo;
                } else {
                    return existingTodo;
                }
            });
        case "remove":
            const todoId = action.id;
            return todos.filter((todo) => todo.id !== todoId);
    }
}


let nextId = 4;
const initialTodos = [
  { id: 1, text: "Learn Javascript", done: true },
  { id: 2, text: "Build Spotify Clone using Javascript", done: false },
  { id: 3, text: "Learn React", done: false },
];

export default function TodoApp() {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  function handleAddTodo(text) {
    dispatch({
      type: "add",
      id: nextId++,
      text,
    });
  }
  function handleTodoChange(updatedTodo) {
    dispatch({
      type: "change",
      todo: updatedTodo,
    });
  }
  function handleTodoDelete(todoId) {
    dispatch({
      type: "remove",
      id: todoId,
    });
  }
  return (
    <>
      <h2>Todos</h2>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onTodoChange={handleTodoChange} onTodoDelete={handleTodoDelete} />
    </>
  );
}

 
// Todo using reducer 

// Logic of modifying the state is move out of the component