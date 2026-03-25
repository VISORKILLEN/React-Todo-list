import { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import "../App.css";

function TodoList() {
  // Check if there is any old list saved
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todo-list-data");

    // Parse the JSON string back into an array, or start with an empty array
    return saved ? JSON.parse(saved) : [];
  });

  // This hook saves the list to localstorage
  useEffect(() => {
    localStorage.setItem("todo-list-data", JSON.stringify(todos));
  }, [todos]);

  // Function that creats new task and adds to list
  const addTodo = (text) => {
    const newTodo = {
      // Give task unique Id, adds text user wrote, sett new task as not complete
      id: crypto.randomUUID(),
      text: text,
      completed: false,
    };

    // updates the list and keep the old ones.
    setTodos([...todos, newTodo]);
  };

  // Function that switches task between done and not done
  const toggleTodo = (id) => {
    // Goes through task in list, if correct task found make it 'completed'
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  // function to remove tsk from list
  const deleteTodo = (id) => {
    // Creates new list that doesn't contain the deleted one
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <header>
        <h1>Todo Lista</h1>
        <div className="scanner-line"></div>
      </header>

      {/* Shows the input field and gives it addTodo function */}
      <TodoInput addTodo={addTodo} />

      <div className="todo-list">
        {/* take list and make every item into row on screen */}
        {todos.map((todo) => (
          <TodoItem
            // react uses a key to keep track of the items
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
