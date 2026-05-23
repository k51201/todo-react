import './status-filter.css'

export default function StatusFilter({ selected, changeFilter }) {
    const buttons = [
        { key: 'all', label: 'Všechny' },
        { key: 'active', label: 'Aktivní' },
        { key: 'done', label: 'Dokončené' },
    ]

    const renderButton = ({ key, label }) => {
        const className = `btn ${selected === key ? ' btn-info' : ' btn-outline-secondary'}`
        return (
            <button type="button" key={key}
                className={className}
                onClick={() => changeFilter(key)}
            >
                {label}
            </button>
        )
    }

    return <div className="btn-group">{buttons.map(renderButton)}</div>
}
