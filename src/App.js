import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './Login-Register/login';
import Register from './Login-Register/register';
import Teacher from './Teacher/teacher';
import CreateProjProf from "./Teacher/teacher.js";

function App() {
  return (
  <Router>
      <div>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/*" element={<CreateProjProf />} />
        </Routes> 
      </div>
    </Router>
  )
}

export default App;
