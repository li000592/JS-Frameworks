import React from 'react'
import {Link} from 'react-router-dom'
import './ItemForm.css'

export default function ItemForm() {
   return (
      <div className='newItemContent'>
         <div className='left'>
            <div className='inputs'>
               <p>Framework Name</p>
               <input></input>
            </div>
            <div className='inputs'>
               <p>Docs URL</p>
               <input></input>
            </div>
            <div className='inputs'>
               <p>Lead by</p>
               <input></input>
            </div>
         </div>
         <div className='buttons'>
            <Link to='/'>SAVE</Link>
            <Link to='/'>CANCEL</Link>
         </div>
      </div>
   )
}
