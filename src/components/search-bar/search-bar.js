import { useState } from 'react'

import './search-bar.css'

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  const clear = () => {
    setQuery('')
    onSearch('')
  }

  const onTypeQuery = e => {
    setQuery(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <div className="d-flex input-group search-bar">
      <input type="text"
        className="form-control"
        placeholder="Napište sem pro vyhledávání"
        onChange={onTypeQuery}
        value={query}
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary"
          onClick={clear}
        >
          <i className="fa fa-times" />
        </button>
      </div>
    </div>
  )
}
