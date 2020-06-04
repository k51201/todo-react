import React from 'react'

import './todo-list-item.css'

const TodoListItem = ({ label, important = false }) => {
    const itemStyle = {
        color: important ? 'tomato' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    }

    return (
        <span className="todo-list-item">
            <span className="todo-list-item-label"
                style={itemStyle}>
                {label}
            </span>
            <button type="button"
                className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation" />
            </button>
            <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
            </button>
        </span>
    )
}

export default TodoListItem