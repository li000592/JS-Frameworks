import cuid from 'cuid'
import AppHeader from './Components/AppHeader/AppHeader'
// import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import ListItem from './Components/ListItem'

function App() {
  console.log(cuid())
  return (
    <div className='App'>
      <AppHeader />
      <ListItem />
      <Router>
        <main>
          <Switch>
            <Route exact path='/123'>
              <ListItem />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  )
}

export default App
{
  /* <Route exact path='/posts/:id'>
            
</Route>
<Route exact path='/todos/:id'></Route>
<Route exact path='/'></Route> */
}

{
  /* <Route>
<React.Fragment>
  <h1 className='loading'>Loading Users</h1>
</React.Fragment>
</Route> */
}
