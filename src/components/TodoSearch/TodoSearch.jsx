import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}) {
  return (
    <input
      className='todo-search'
      placeholder="Cortar cebolla"
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
    />
  )
}

export default TodoSearch