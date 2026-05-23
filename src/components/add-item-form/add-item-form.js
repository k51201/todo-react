import { useState } from 'react'

import './add-item-form.css'

export default function AddItemForm({ onAddItem }) {
    const [label, setLabel] = useState('')

    const onLabelChange = (e) => {
        setLabel(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        onAddItem(label)
        setLabel('')
    }

    return (
        <form className="add-item-form d-flex" onSubmit={onSubmit}>
            <input type="text"
                className="form-control"
                onChange={onLabelChange}
                placeholder="Co ještě máte udělat"
                value={label}
            />
            <button className="btn btn-outline-secondary">
                Přidat
            </button>
        </form>
    )
}