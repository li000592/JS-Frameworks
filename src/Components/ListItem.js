import React from 'react'
import './ListItem.css'

function ListItem() {
  return (
    <div className='listItem'>
      <div className='left'>
        <h3>Vue</h3>
        <div className='bot'>
          <p>Lead by Evan You</p>
          <a>Offical Docs</a>
        </div>
      </div>
      <div className='buttons'>
        <button>EDIT</button>
        <button>DELETE</button>
      </div>
    </div>
  )
}

export default ListItem
