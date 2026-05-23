import TodoListItem from '../todo-list-item'

import './todo-list.css'

export default function TodoList({ data, removeItem, toggleImportant, toggleDone }) {
    const items = data.map(({ id, ...props }) => {
        return (
            <li key={id} className="list-group-item todo-list">
                <TodoListItem
                    onRemoveItem={() => removeItem(id)}
                    onToggleImportant={() => toggleImportant(id)}
                    onToggleDone={() => toggleDone(id)}
                    {...props}
                />
            </li>
        )
    })

    return <ul className="list-group">{items}</ul>
}
