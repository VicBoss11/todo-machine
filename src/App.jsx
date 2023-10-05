import TodoCounter from './components/TodoCounter/TodoCounter.jsx'
import TodoSearch from './components/TodoSearch/TodoSearch.jsx'
import TodoList from './components/TodoList/TodoList.jsx'
import TodoItem from './components/TodoItem/TodoItem.jsx'
import TodoModal from './components/TodoModal/TodoModal.jsx'
import TodoForm from './components/TodoForm/TodoForm.jsx'
import CreateTodoButton from './components/CreateTodoButton/CreateTodoButton.jsx'
import { useState } from 'react'
import { useEffect } from 'react'
import { Spinner } from 'flowbite-react'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [todos, setTodos] = useState([])
  const [isOpenModal, setIsOpenModal] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      const storedTodos = localStorage.getItem('todos_v1')

      if (!storedTodos) {
        localStorage.setItem('todos_v1', '[]')
      } else {
        setTodos(JSON.parse(storedTodos))
      }

      setLoading(false)
    }, 2000);
  }, [setLoading])

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  const [searchValue, setSearchValue] = useState('')

  const searchedTodos = todos.filter(todo => {
    const todoLowerCaseText = todo.text.toLowerCase()
    const lowerCaseSearchText = searchValue.toLowerCase()

    return todoLowerCaseText.includes(lowerCaseSearchText)
  })

  const storeTodos = (todos) => {
    localStorage.setItem('todos_v1', JSON.stringify(todos))

    setTodos(todos)
  }

  const tooggleCompletedTodo = (key) => {
    const newTodos = [...todos]
    const foundTodo = newTodos.find(todo => todo.text === key)

    foundTodo.completed = !foundTodo.completed;

    storeTodos(newTodos)
  }

  const addTodo = (text) => {
    const newTodos = [...todos]

    newTodos.push({
      text,
      completed: false
    })

    storeTodos(newTodos)
  }

  const deleteTodo = (key) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text === key)

    newTodos.splice(todoIndex, 1)

    storeTodos(newTodos)
  }

  if (loading) {
    return (
      <Spinner size='xl' />
    )
  }

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onToggleCompleted={() => tooggleCompletedTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton setOpenModal={setIsOpenModal} />

      {isOpenModal && (
        <TodoModal>
          <TodoForm setIsOpenModal={setIsOpenModal} addTodo={addTodo} />
        </TodoModal>
      )}
    </>
  )
}

export default App