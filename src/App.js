import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './login';
import Register from './register';

function App() {
  return (
  <Router>
      <div>
        <Switch>
          <Route exact path = "/">
            <Login />
          </Route>
          <Route exact path = "/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
