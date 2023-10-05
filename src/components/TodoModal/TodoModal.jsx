import { createPortal } from 'react-dom'
import './TodoModal.css'

function TodoModal({ children, closeModal }) {
  return createPortal(
    <div className='todo-modal' onClick={closeModal}>
      {children}
    </div>,
    document.getElementById('todo-modal')
  )
}

export default TodoModal