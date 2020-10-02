import React from 'react';

const ToDo = ({ todo }) => {
  return (
    <div className="todo">
      {todo.text}
    </div>
  );
};

export default ToDo