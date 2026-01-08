import React, { useState } from 'react';
import { useTodos } from '../context/TodoContext.jsx'; // <-- Corrected path (../)

function AddTodoForm() {
  const [text, setText] = useState('');
  const { addTodo } = useTodos(); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const trimmedText = text.trim();
    if (!trimmedText) return;

    addTodo(trimmedText);
    setText('');
  };

  return (
    <form id="add-todo-container" onSubmit={handleSubmit}>
      <input
        type="text"
        id="todo-input"
        placeholder="Enter a todo and press Add or Enter"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button id="add-btn" type="submit">
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;