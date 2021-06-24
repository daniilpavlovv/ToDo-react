import React from 'react'

import { Field } from './components/Field'
import { Task } from './components/Task'

function App() {
  const [tasks, setTasks] = React.useState([])

  const onToggleCompleted = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, curIdx) =>
        index === curIdx ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  const onRemoveTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, curIdx) => index !== curIdx))
  }

  const onAddTask = (text) => {
    setTasks((prevTasks) => [
      {
        text,
        completed: false,
      },
      ...prevTasks,
    ])
  }

  return (
    <div className="todo">
      <header className="todo__header">
        <h1 className="todo__header-title">ToDo list</h1>
      </header>
      <main className="todo__main">
        <Field onAddTask={onAddTask} />
        <div className="todo__tasks">
          {tasks.map((task, index) => (
            <Task
              key={index}
              index={index}
              text={task.text}
              completed={task.completed}
              onToggleCompleted={onToggleCompleted}
              onRemoveTask={onRemoveTask}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
