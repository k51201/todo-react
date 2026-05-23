import { useState } from 'react'

import { useTodos } from '../../hooks'
import Header from '../header'
import SearchBar from '../search-bar'
import StatusFilter from '../status-filter'
import TodoList from '../todo-list'
import AddItemForm from '../add-item-form/add-item-form'

import './app.css'

export default function App() {
  const { todos, removeItem, addItem, toggleImportant, toggleDone } = useTodos()
  const [searchQuery, setSearchQuery] = useState('')
  const [filter, setFilter] = useState('all')

  const visibleTodos = todos.filter(({ label, done }) => {
    const matchesSearch = label.toLowerCase().includes(searchQuery.toLowerCase())

    switch (filter) {
      case 'active': return !done && matchesSearch
      case 'done': return done && matchesSearch
      default: return matchesSearch
    }
  })

  const doneCount = todos.filter(item => item.done).length
  const toDoCount = todos.length - doneCount

  return (
    <div className="todo-app">
      <Header toDo={toDoCount} done={doneCount} />
      <div className="top-panel d-flex">
        <SearchBar onSearch={setSearchQuery} />
        <StatusFilter selected={filter} changeFilter={setFilter} />
      </div>
      <TodoList
        data={visibleTodos}
        removeItem={removeItem}
        toggleImportant={toggleImportant}
        toggleDone={toggleDone}
      />
      <AddItemForm onAddItem={addItem} />
    </div>
  )
}
