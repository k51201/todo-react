import classNames from 'classnames'

import './todo-list-item.css'

export default function TodoListItem(
    { label, onRemoveItem, onToggleImportant, onToggleDone, done, important }
) {
    const itemClasses = classNames('todo-list-item', {
        'done': done,
        'important': important
    })

    return (
        <span className={itemClasses}>
            <span className="todo-list-item-label"
                onClick={onToggleDone}>
                {label}
            </span>
            <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onToggleImportant}>
                <i className="fa fa-exclamation" />
            </button>
            <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onRemoveItem}>
                <i className="fa fa-trash-o" />
            </button>
        </span>
    )
}
