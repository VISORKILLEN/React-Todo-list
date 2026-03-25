import React, { useState } from "react";

function TodoInput({addTodo}) {
  //state to mange the text inside the input field
  const [inputValue, setInputValue] = useState("");

  const handleSumbit = (e) => {
    // Prevents browser för refreshing
    e.preventDefault();

    // checks if input isent empyt spaces, then sends it and empties it for new task
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSumbit} className="todo-input-form">
      <input
        //Binds the input to state, then updates per character written
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Skriv en ny todo"
      />
      <button type="submit">LÄGG TILL</button>
    </form>
  );
}

export default TodoInput;
