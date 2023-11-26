import React from 'react'

export const TodoForm = () => {
  return (
    <form className='TodoForm'>
        <input type='text' className='todo-input' placeholder='What are your plans today? '/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
