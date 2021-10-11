import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './views/Home'
import Activity from './views/Activity'
import ActivityNew from './views/ActivityNew'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar data-cy="navbar"/>
      <div 
        className="
          px-5
          w-full
          md:max-w-2xl
          lg:max-w-5xl
          mx-auto
        ">
        <Switch>
          <Route exact path="/">
            <Home data-cy="view-home"/>
          </Route>
          <Route path="/new">
            <ActivityNew data-cy="view-activity-new"/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
