import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Create the context
const TodoContext = createContext();

// 2. Create a custom hook to make it easy to use the context
export function useTodos() {
  return useContext(TodoContext);
}

// 3. Create the Provider component (which will wrap the app)
export function TodoProvider({ children }) {
  // --- State ---
  // Load initial state from localStorage
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem('todos');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Failed to load todos", e);
      return [];
    }
  });

  // --- Effects ---
  // Save to localStorage whenever 'todos' state changes
  useEffect(() => {
    try {
      localStorage.setItem('todos', JSON.stringify(todos));
    } catch (e) {
      console.error("Failed to save todos", e);
    }
  }, [todos]);

  // --- Functions (Actions) ---
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  // 4. Pass the state and functions to all children
  const value = {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}