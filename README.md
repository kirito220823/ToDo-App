# React Todo List App

## Overview

This is a simple Todo List application built using React and Vite. It allows users to add, edit, delete, and mark tasks as complete. The app uses React Context API for state management and stores data locally in the browser using `localStorage`.

## Features

- **Add Todo**: Easily add new tasks to your list.
- **Edit Todo**: Double-click to edit existing tasks.
- **Delete Todo**: Remove tasks you no longer need.
- **Mark Complete**: Check off tasks as done.
- **Persistent Data**: Todos are saved in your browser even after a refresh.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd your-project-folder
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the app:
   ```bash
   npm run dev
   ```

## Project Structure

- `src/`: Contains all the source code.
  - `components/`: React components like `AddTodoForm`, `TodoItem`, `TodoList`.
  - `context/`: Contains the `TodoContext` for state management.
- `public/`: Public assets like `index.html`.
- `style.css`: Styling for the application.

## Contributing

Feel free to fork the repository and submit pull requests. For any issues, please open an issue on GitHub.

## License

This project is licensed under the MIT License.

