import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './Login-Register/login';
import Register from './Login-Register/register';
import Teacher from './Teacher/teacher';
import CreateProjProf from "./Teacher/teacher.js";
import Grade_prof from './Profile/grade_prof';
import ProfileProf from './Profile/perfil_prof';
import Perfil_aluno from './Profile/perfil_aluno';
import Grade_aluno from './Profile/grade_aluno';
import DashboardStudent from './StudentDashboard/DashboardStudent';
import ProjectStudent from './StudentDashboard/ProjectStudent';


function App() {
  return (
  <Router>
      <div>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/*" element={<CreateProjProf />} />
          <Route path="/gradeProf" element={<Grade_prof />} />
          <Route path="/profProf" element={<ProfileProf />} />
          {/* aluno    */}
          <Route path="/student" element={<Perfil_aluno/>}></Route>
          <Route path="/gradeAluno" element={<Grade_aluno/>}></Route>
          <Route path="/projsAluno" element={<DashboardStudent/>}></Route>
          <Route path="/progamacao" element={<ProjectStudent/>}></Route>
          <Route path="/*" element={<ProjectStudent/>}></Route>
        </Routes> 
      </div>
    </Router>
  )
}

export default App;
