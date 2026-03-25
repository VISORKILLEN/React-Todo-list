import React from "react";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    //if the todo is done, the CSS class for that is added
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {/* Click area to toogle status done or pending */}
      <div className="todo-text" onClick={() => toggleTodo(todo.id)}>
        <span className="checkbox">
          {todo.completed ? "[Klar]" : "[Väntar]"}
        </span>
        {todo.text}
      </div>
      {/* Button to remove task from the list */}
      <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
        Radera todo
      </button>
    </div>
  );
}

export default TodoItem;