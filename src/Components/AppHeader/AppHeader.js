import React from 'react'
import logo from './javascript.svg'
import {Link} from 'react-router-dom'
import './AppHeader.css'

function AppHeader() {
   return (
      <header className='App-header'>
         <Link to='/'>
            <img src={logo} className='App-logo' alt='React logo' />
         </Link>
         <Link to='/'>
            <h1>JS Frameworks</h1>
         </Link>

         <Link to='/newItem'>
            <h1>+</h1>
         </Link>
      </header>
   )
}

export default AppHeader
