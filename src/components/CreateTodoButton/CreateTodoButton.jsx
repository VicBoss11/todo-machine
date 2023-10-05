import './CreateTodoButton.css'

function CreateTodoButton({ setOpenModal }) {
  return (
    <button className="create-todo-button" onClick={() => setOpenModal(true)}>
      <span>+</span>
    </button>
  )
}

export default CreateTodoButton