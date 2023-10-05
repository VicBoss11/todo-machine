import './TodoCounter.css'

function TodoCounter({ completed, total }) {
  if (completed === total && total !== 0) {
    return (
      <h1 className='todo-counter'>¡Has completado todos los TODOs! 🥳</h1>
    )
  }

  return (
    <h1 className='todo-counter'>
      Has completado <span>{completed}</span> de <span>{total}</span> TODOS
    </h1>
  )
}

export default TodoCounter