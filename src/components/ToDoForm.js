import React, { useState } from 'react';

const ToDoForm = ({ addToDo }) => {
  const[value, setValue] = useState("") 
  // initial state is empty
  const handleSubmit = e => {
    e.preventDefault()
    if(!value) return
    addToDo(value)
    setValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
        />
    </form>
  )
}

export default ToDoForm