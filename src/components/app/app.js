import React, { useState, useCallback } from 'react'

import Header from '../header'
import SearchBar from '../search-bar'
import StatusFilter from '../status-filter'
import TodoList from '../todo-list'
import AddItemForm from '../add-item-form/add-item-form'

import './app.css'

function useTodos() {
  const [todos, setTodos] = useState([
    createItem(1, 'Nic nedělat'),
    createItem(2, 'Jíst'),
    createItem(3, 'Spát'),
  ])

  const removeItem = useCallback((id) => {
    setTodos(prevTodos => prevTodos.filter(item => item.id !== id))
  }, [])

  const addItem = useCallback((label) => {
    setTodos(prevTodos => {
      const id = generateNewId(prevTodos)
      return [...prevTodos, createItem(id, label)]
    })
  }, [])

  const toggleImportant = useCallback((id) => {
    setTodos(prevTodos =>
      prevTodos.map(item =>
        item.id === id
          ? { ...item, important: !item.important }
          : item
      )
    )
  }, [])

  const toggleDone = useCallback((id) => {
    setTodos(prevTodos =>
      prevTodos.map(item =>
        item.id === id
          ? { ...item, done: !item.done }
          : item
      )
    )
  }, [])

  return {
    todos,
    removeItem,
    addItem,
    toggleImportant,
    toggleDone
  }
}

// Helper functions (could be moved to separate utils file)
function createItem(id, label) {
  return { id, label, important: false, done: false }
}

function generateNewId(data) {
  if (data.length === 0) return 1
  const maxId = Math.max(...data.map(item => item.id))
  return maxId + 1
}

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
