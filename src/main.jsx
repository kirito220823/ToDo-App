import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css'; // Import your new stylesheet
import { TodoProvider } from './context/TodoContext.jsx'; // Import your provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* The Provider wraps your entire App */}
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);