import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Projects from './Projects';
import Project from './Project';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path = "/">
                        <Projects />
                    </Route>
                    <Route exact path = "/Project">
                        <Project />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;