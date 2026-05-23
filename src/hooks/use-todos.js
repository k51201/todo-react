import { useState, useCallback } from "react";


export function useTodos() {
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
        setTodos(prevTodos => prevTodos.map(item => item.id === id
            ? { ...item, important: !item.important }
            : item
        )
        )
    }, [])

    const toggleDone = useCallback((id) => {
        setTodos(prevTodos => prevTodos.map(item => item.id === id
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

function createItem(id, label) {
    return { id, label, important: false, done: false }
}

function generateNewId(data) {
    if (data.length === 0) return 1
    const maxId = Math.max(...data.map(item => item.id))
    return maxId + 1
}
