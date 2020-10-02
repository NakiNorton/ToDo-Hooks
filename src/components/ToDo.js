import React from 'react';
import './ToDo.css'

const ToDo = ({ todo, index, completeToDo }) => {
  return (
    <div className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeToDo(index)}>Complete</button>
      </div>
    </div>
  );
};

export default ToDo