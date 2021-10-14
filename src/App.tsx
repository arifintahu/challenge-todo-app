import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Detail from './views/Detail';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar data-cy="navbar" />
      <div
        className="
          px-5
          w-full
          md:max-w-2xl
          lg:max-w-5xl
          mx-auto
        "
      >
        <Switch>
          <Route exact path="/">
            <Home data-cy="view-home" />
          </Route>
          <Route path="/detail/:id">
            <Detail data-cy="view-detail" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
