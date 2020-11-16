import cuid from 'cuid'
import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import './ItemForm.css'
export default function ItemForm(props) {
   let path = useLocation().pathname
   function clickSave() {
      const name = document.querySelector('.form-name').value
      const url = document.querySelector('.form-url').value
      const lead = document.querySelector('.form-lead').value
      const newId = cuid()
      const newForm = {
         id: newId,
         name: name,
         url: url,
         lead: lead,
      }
      props.setFrameworks(frameworks => frameworks.concat(newForm))
   }

   function editForm() {
      const name = document.querySelector(`#${props.pickedId} .form-name`).value
      const url = document.querySelector(`#${props.pickedId} .form-url`).value
      const lead = document.querySelector(`#${props.pickedId} .form-lead`).value
      const newForm = {
         id: props.pickedId,
         name: name,
         url: url,
         lead: lead,
      }
      props.setFrameworks(frameworks =>
         frameworks.map(i => (i.id === props.pickedId ? {...newForm} : i)),
      )
   }
   return (
      <div className='newItemContent'>
         <div className='left'>
            <div className='inputs'>
               <p>Framework Name</p>
               <input className='form-name'></input>
            </div>
            <div className='inputs'>
               <p>Docs URL</p>
               <input className='form-url'></input>
            </div>
            <div className='inputs'>
               <p>Lead by</p>
               <input className='form-lead'></input>
            </div>
         </div>
         <div className='buttons'>
            <button>
               <Link to='/' onClick={path == '/newItem' ? clickSave : editForm}>
                  SAVE
               </Link>
            </button>
            <button>
               <Link
                  to='/'
                  onClick={document
                     .querySelectorAll('.editFrom')
                     .forEach(element => element.classList.add('hidden'))}
               >
                  CANCEL
               </Link>
            </button>
         </div>
      </div>
   )
}
