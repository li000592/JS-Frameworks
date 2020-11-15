import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import AppHeader from './Components/AppHeader/AppHeader'
import NewItemView from './Components/NewItemView'
import ListView from './Components/ListView'
import useLocalStorageState from './useLocalStorageState'
import './App.css'
import cuid from 'cuid'

const initialData = [
   {id: cuid(), name: 'Vue', url: 'https://vuejs.org/', lead: 'Evan You'},
   {
      id: cuid(),
      name: 'react',
      url: 'https://www.react.com',
      lead: 'Facebook',
   },
   {
      id: cuid(),
      name: 'Angular',
      url: 'https://Angular.com',
      lead: 'Google',
   },
]

function App() {
   const [frameworks, setFrameworks] = useLocalStorageState(
      'frameworks',
      initialData,
   )
   React.useEffect(() => {
      console.log('upgrade list')
   }, [setFrameworks])

   return (
      <div className='App'>
         <Router>
            <AppHeader />
            <main>
               <Switch>
                  <Route exact path='/'>
                     <ListView
                        frameworks={frameworks}
                        setFrameworks={setFrameworks}
                     />
                  </Route>
                  <Route exact path='/newItem'>
                     <NewItemView setFrameworks={setFrameworks} />
                  </Route>
               </Switch>
            </main>
         </Router>
      </div>
   )
}

export default App
// function changeFrameworks(action, id, newForm) {
//    if (action == 'delete') {
//       setFrameworks(frameworks.filter(obj => obj.id !== id))
//    } else if (action == 'edit') {
//       const index = frameworks.findIndex(obj => obj.id == id)
//       setFrameworks((frameworks[index] = newForm))
//    }
// }
