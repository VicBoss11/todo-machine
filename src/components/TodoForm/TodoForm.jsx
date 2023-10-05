import { XMarkIcon } from '@heroicons/react/24/solid'
import './TodoForm.css'
import { useState } from 'react'

function TodoForm({ setIsOpenModal, addTodo }) {
  const [newTodoValue, setTodoValue] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    
    addTodo(newTodoValue)
    setIsOpenModal(false)
  }

  const onTextareaChange = (event) => {
    setTodoValue(event.target.value)
  }

  const closeModal = () => setIsOpenModal(false)

  return (
    <form className='todo-form' onSubmit={onSubmit}>
      <XMarkIcon type='button' className='todo-form-close todo-icon' onClick={closeModal} />

      <label className='todo-form-label'>Escribe un nuevo TODO</label>

      <textarea
        className='todo-form-textarea'
        placeholder='Cortar cebolla...'
        required
        value={newTodoValue}
        onChange={onTextareaChange}
      ></textarea>

      <div className='todo-form-buttons'>
        <button
          type='button'
          className='todo-form-button todo-form-button--cancel'
          onClick={closeModal}
        >
          Cancelar
        </button>

        <button type='submit' className='todo-form-button todo-form-button--add'>Añadir</button>
      </div>
    </form>
  )
}

export default TodoForm