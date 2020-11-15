import React from 'react'
import './ListItem.css'

function ListItem(props) {
   console.log(props)
   const clickDelete = ev => {
      const id = ev.currentTarget.getAttribute('a-key')
      props.setFrameworks(frameworks => frameworks.filter(obj => obj.id !== id))
   }
   const clickEdit = ev => {
      const id = ev.currentTarget.getAttribute('a-key')
      //props.setFrameworks(frameworks =>  )
      console.log(id)
   }

   return (
      <div className='listItem'>
         <div className='left'>
            <h3>{props.name}</h3>
            <div className='bot'>
               <p>Lead by {props.name}</p>
               <a href={`https://${props.url}`}>Offical Docs</a>
            </div>
         </div>
         <div className='buttons'>
            <button a-key={props.id} onClick={clickEdit}>
               EDIT
            </button>
            <button
               className='delelte-btn'
               onClick={clickDelete}
               a-key={props.id}
            >
               DELETE
            </button>
         </div>
      </div>
   )
}

export default ListItem
