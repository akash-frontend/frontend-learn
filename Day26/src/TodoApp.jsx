import React from "react";
import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
let nextId = 4;
const initialTodos = [
  { id: 1, text: "Learn Javascript", done: true },
  { id: 2, text: "Build Spotify Clone using Javascript", done: false },
  { id: 3, text: "Learn React", done: false },
];

export default function TodoApp() {
  const [todos, setTodos] = useState(initialTodos);
  function handleAddTodo(text) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        text,
        done:false,
      },
    ]);
  }
  
  function handleTodoChange(updatedTodo) {
  setTodos(
    todos.map((existingTodo)=> {
      if(existingTodo.id === updatedTodo.id){
        return updatedTodo;
      }
      else{
        return existingTodo;
      }
    })
  );
  }
  function handleTodoDelete(todoId) {
    setTodos(todos.filter(todo=> todo.id !==todoId))
  }

  return (
    <>
      <h2>Todos</h2>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onTodoChange={handleTodoChange} onTodoDelete={handleTodoDelete} />
    </>
  );
}
