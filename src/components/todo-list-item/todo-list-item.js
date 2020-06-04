import React, { Component } from 'react'

import './todo-list-item.css'

export default class TodoListItem extends Component {
    state = {
        done: false,
        important: false
    }

    onLabelClick = () => {
        this.setState({ done: !this.state.done })
    }

    onClickImportant = () => {
        this.setState({ important: !this.state.important })
    }

    render() {
        const { label } = this.props
        const { done, important } = this.state

        const itemClasses = 'todo-list-item' +
            (done ? ' done' : '') +
            (important ? ' important' : '')

        return (
            <span className={itemClasses}>
                <span className="todo-list-item-label"
                    onClick={this.onLabelClick}>
                    {label}
                </span>
                <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={this.onClickImportant}>
                    <i className="fa fa-exclamation" />
                </button>
                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        )
    }
}
