import './TodoItem.css'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid'

function TodoItem({ text, completed, onToggleCompleted, onDelete }) {
  const isCompleted = completed ? 'todo-item--completed' : ''

  return (
    <li className={`todo-item ${isCompleted}`}>
      <CheckIcon type='button' className='todo-item-check todo-icon' onClick={onToggleCompleted} />

      <p className='todo-item-text'>{text}</p>

      <XMarkIcon type='button' className='todo-item-delete todo-icon' onClick={onDelete} />
    </li>
  )
}

export default TodoItem