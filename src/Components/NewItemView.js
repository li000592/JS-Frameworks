import React from 'react'
import './NewItemView.css'
import ItemFrom from './ItemForm'

function NewItemView(props) {
   return (
      <div className='newItemView'>
         <h3>Add a new framework</h3>
         <ItemFrom setFrameworks={props.setFrameworks} />
      </div>
   )
}

export default NewItemView
