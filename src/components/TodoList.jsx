import React from 'react';
import { useTodos } from '../context/TodoContext.jsx';
import TodoItem from './TodoItem.jsx'; // <-- THIS IS THE CORRECT PATH

function TodoList() {
  const { todos } = useTodos(); // Get the todos array from context

  return (
    <ul id="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;