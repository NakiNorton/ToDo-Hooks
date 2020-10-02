import React, { useState, useEffect } from 'react';
// alt, instead of { useState }, could access method w. React.useState() 
import './App.css';
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'



const App = () => {
  const [count, setCount] = useState(3)
  const [todos, setTodos] = useState([
    // first parameter 'todos' is the name of your state
    // second parameter 'setToDos' is what you use to set the state
    // useState is what React uses to hook into the lifecycle of the component 
    { text: "Book vacation to Hawaii",
      isCompleted: false },
    { text: "Hike a fourteener",
      isCompleted: false  },
    { text: "Learn React Hooks",
      isCompleted: false  }
  ])

    const addToDo = (text) => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
    setCount(count + 1)
  }

  const completeToDo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
    setCount(count - 1)
  }

  const removeToDo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos)
    setCount(count - 1)
  }

  useEffect(() => {
    document.title = `${count} active tasks!`
  })

  return (
    <div className="app">
      <h1>Your Todo List!</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <ToDo
            key={index}
            index={index}
            todo={todo}
            completeToDo={completeToDo}
            removeToDo={removeToDo}
          />
        ))}
        <ToDoForm addToDo={addToDo} />
      </div>
    </div>
  );
}

export default App;
