import React from 'react'
import './NewItemView.css'
import ItemFrom from './ItemForm'

function NewItemView() {
   return (
      <div className='newItemView'>
         <h3>Add a new framework</h3>
         <ItemFrom />
      </div>
   )
}

export default NewItemView
