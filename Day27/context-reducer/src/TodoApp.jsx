import React, { createContext } from "react";
import { useReducer } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import todosReducer from "./todosReducer";
const initialTodos = [
  { id: 1, text: "Learn Javascript", done: true },
  { id: 2, text: "Build Spotify Clone using Javascript", done: false },
  { id: 3, text: "Learn React", done: false },
];

export const TodosContext = createContext(null);
export const TodosDispatchContext = createContext(null);


export default function TodoApp() {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  
  return (
    <TodosContext.Provider value={todos}>
    <TodosDispatchContext.Provider value={dispatch}>
      <h2>Todos</h2>
      <AddTodo />
      <TodoList />
    </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
}