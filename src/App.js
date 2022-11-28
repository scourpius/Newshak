import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './Login-Register/login';
import Register from './Login-Register/register';
import Teacher from './Teacher/teacher';

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
          <Route exact path = "/teacher">
            <Teacher />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
