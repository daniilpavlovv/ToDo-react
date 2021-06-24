import React from 'react'

export const Task = ({ index, text, completed, onToggleCompleted, onRemoveTask }) => {
  const toggleCompleted = () => {
    onToggleCompleted(index)
  }

  const removeTask = () => {
    onRemoveTask(index)
  }

  return (
    <div className="todo__task">
      <button
        onClick={toggleCompleted}
        className={`button button-check ${completed ? 'completed' : ''}`}>
        <span className="ripple"></span>
        <svg className="unselected" height="24" width="24">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M19 5v14H5V5h14m0-2H5a2 2 0 00-2 2v14c0 1.1.9 2 2 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" />
        </svg>
        <svg className="selected" height="24" width="24">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M19 3H5a2 2 0 00-2 2v14c0 1.1.9 2 2 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 16H5V5h14v14zM18 9l-1.4-1.4-6.6 6.6-2.6-2.6L6 13l4 4z" />
        </svg>
      </button>
      <p>{text}</p>
      <button onClick={removeTask} className="button button-delete">
        <span className="ripple"></span>
        <svg height="24" width="24">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8a2 2 0 002-2V7z" />
        </svg>
      </button>
    </div>
  )
}
