import React from 'react'

import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem
  const deleteList = () => {
    deleteItem(id)
  }

  return (
    <li>
      <div className="items">
        <p className="time">{timeAccessed}</p>
        <img className="img" src={logoUrl} alt="domain logo" />
        <p className="title">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <div>
        <button data-testid="delete" onClick={deleteList}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
