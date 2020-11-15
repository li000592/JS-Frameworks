import React from 'react'
import ItemForm from './ItemForm'
import './ListItem.css'

function ListItem(props) {
   console.log(props)
   const clickDelete = ev => {
      const id = ev.currentTarget.getAttribute('a-key')
      props.setFrameworks(frameworks => frameworks.filter(obj => obj.id !== id))
   }
   const clickEdit = ev => {
      //document.querySelectorAll('.editFrom').classList.add('hidden')
      document
         .querySelectorAll('.editFrom')
         .forEach(element => element.classList.add('hidden'))
      console.log(document.querySelectorAll('.editFrom'))
      const id = ev.currentTarget.getAttribute('a-key')
      const showForm = document.getElementById(id)
      console.log(showForm)
      showForm.classList.remove('hidden')
      console.log(showForm)
      //props.setFrameworks(frameworks =>  )
      console.log(id)
   }

   return (
      <div>
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
         <div className='editFrom hidden' id={props.id}>
            <ItemForm pickedId={props.id} setFrameworks={props.setFrameworks} />
         </div>
      </div>
   )
}

export default ListItem
