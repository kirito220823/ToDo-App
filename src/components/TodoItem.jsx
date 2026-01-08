import React, { useState } from 'react';
import { useTodos } from '../context/TodoContext.jsx'; // <-- THIS IS THE CORRECT PATH

function TodoItem({ todo }) {
  const { deleteTodo, toggleTodo, editTodo } = useTodos();

  // Local state just for this component (to track editing)
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    const trimmedText = editText.trim();
    if (trimmedText) {
      editTodo(todo.id, trimmedText);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setEditText(todo.text); // Reset text
      setIsEditing(false);
    }
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      {isEditing ? (
        <input
          type="text"
          className="edit-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleSave} // Save when user clicks away
          onKeyDown={handleKeyDown} // Save on Enter, cancel on Escape
          autoFocus // Automatically focus the input
        />
      ) : (
        <span onDoubleClick={() => setIsEditing(true)}>
          {todo.text}
        </span>
      )}

      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;