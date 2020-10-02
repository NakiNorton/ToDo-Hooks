import React from 'react';
import './ToDo.css'

const ToDo = ({ todo, index, completeToDo, removeToDo }) => {
  return (
    <div className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeToDo(index)}>Complete</button>
        <button onClick={() => removeToDo(index)}>X</button>
      </div>
    </div>
  );
};

export default ToDo