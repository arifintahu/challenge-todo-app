import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './views/Home'
import Activity from './views/Activity'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
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
            <Home />
          </Route>
          <Route path="/activity">
            <Activity />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
