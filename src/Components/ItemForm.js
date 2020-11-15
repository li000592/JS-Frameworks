import cuid from 'cuid'
import React from 'react'
import {Link} from 'react-router-dom'
import './ItemForm.css'

export default function ItemForm(props) {
   function clickSave() {
      const name = document.getElementById('form-name').value
      const url = document.getElementById('form-url').value
      const lead = document.getElementById('form-lead').value
      const newId = cuid()
      const newForm = {
         id: newId,
         key: newId,
         name: name,
         url: url,
         leader: lead,
      }
      props.setFrameworks(frameworks => frameworks.concat(newForm))
   }
   return (
      <div className='newItemContent'>
         <div className='left'>
            <div className='inputs'>
               <p>Framework Name</p>
               <input id='form-name'></input>
            </div>
            <div className='inputs'>
               <p>Docs URL</p>
               <input id='form-url'></input>
            </div>
            <div className='inputs'>
               <p>Lead by</p>
               <input id='form-lead'></input>
            </div>
         </div>
         <div className='buttons'>
            <Link to='/' onClick={clickSave}>
               SAVE
            </Link>
            <Link to='/'>CANCEL</Link>
         </div>
      </div>
   )
}
