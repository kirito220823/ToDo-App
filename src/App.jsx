import React from 'react';
import TodoList from './components/TodoList.jsx';
import AddTodoForm from './components/AddTodoForm.jsx';

function App() {
  return (
    <>
      <h1>Simple Todo List</h1>
      <p>Welcome to this todo list. Double click to edit the todo</p>
      
      <AddTodoForm />
      <TodoList />
    </>
  );
}

export default App;