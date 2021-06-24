import React from 'react'

export const Field = ({ onAddTask }) => {
  const [text, setText] = React.useState('')

  const handleInputChange = (event) => {
    const value = event.currentTarget.value
    setText(value)
  }

  const addTask = () => {
    if (text) {
      onAddTask(text)
      setText('')
    }
  }

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      addTask()
    }
  }

  return (
    <div className="todo__main__add-field">
      <input
        value={text}
        onChange={handleInputChange}
        onKeyUp={handleKeyUp}
        className="todo__main__add-field-input"
        type="text"
        placeholder="Enter task"
      />
      <button onClick={addTask} className="button button-add">
        <span className="ripple"></span>
        <svg height="24" width="24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </button>
    </div>
  )
}
