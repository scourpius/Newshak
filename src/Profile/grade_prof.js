import './grade_p.css';
import gradient from './resources/gradient2.jpg';
import perfil from './resources/perfil_prof.png';
import exitIcon from './resources/exit.png';
import { useNavigate } from 'react-router-dom';



function Grade_prof() {

    const navigate = useNavigate();

  const navigatePerfilProf = () => {
    navigate('/profProf');
  };

  const navigateProjetosProf = () => {
    navigate('/teacher');
  };

  const navigateCadeirasProf = () => {
    navigate('/gradeProf')
  }

  const navigateOpcoesProf = () => {
    navigate('/opcoesProf')
  }

  const navigateOutProf = () => {
    navigate('/')
  }


    let project = [{"cadeira":"Programação 22/23","Alunos":"85",
        "projetos":"2", "media":"135"},

        {"cadeira":"AC 22/23","Alunos":"25",
        "projetos":"1", "media":"142"},
        {"cadeira":"Base de Dados 22/23","Alunos":"70",
        "projetos":"0", "media":"-"}]
    const listProjectCadeiras = project.map((project) =>
        <div style={{listStyle: 'none',paddingBlock: 20, paddingRight: 140, color: "black", fontWeight: "bold", width: "auto", margin:"left",  fontStyle: "italic"}}>
            {project.cadeira}</div>);
    const listProjectAlunos = project.map((project) =>
        <div style={{listStyle: 'none',paddingBlock: 20, paddingRight: 200, color: "black", fontWeight: "bold", width: "auto", margin:"auto",  fontStyle: "italic"}}>
            {project.Alunos}</div>);
    const listProjectProjetos = project.map((project) =>
        <div style={{listStyle: 'none',paddingBlock: 20, paddingRight: 235  , color: "black", fontWeight: "bold", width: "auto", margin:"auto",  fontStyle: "italic"}}>
            {project.projetos}</div>);
    const listProjectMedia = project.map((project) =>
        <div style={{listStyle: 'none',paddingBlock: 20, paddingRight: 95, color: "black", fontWeight: "bold", width: "auto", margin:"auto",  fontStyle: "italic"}}>
            {project.media}</div>);



    const listProject = project.map((project) =>
        <div>
        <div style={{display: "flex", justifyContent: 'center',
            alignItems: 'center',
            gridTemplateColumns: "repeat(4, 1fr)", paddingTop: 20, paddingBottom: 20}}>

            <div style={{listStyle: 'none', paddingRight: 100, margin:"auto", color: "black"}}>
                {project.projeto}</div>
            <div style={{listStyle: 'none', paddingRight: 70, margin:"auto", color: "black"}}>
                {project.equipa}</div>

        </div>
        <div className="seperatorProjects"></div>
    </div>
    );

    return (
        <div className="AppGProf">
            <header className="App-headerGProf">
                <img style={{ width: "100%", height: 160 }} src={gradient} alt="Gradient" />
                <div style={{display: "flex", gridTemplateColumns: "repeat(2, 1fr)"}}>
                    <div style = {{marginLeft: 160, marginTop: 40}}>
                        <div style={{display: "flex", justifyContent: 'center',
                            alignItems: 'center',
                            gridTemplateColumns: "repeat(2, 1fr)"}}>
                            <img className="perfilImageGProf" src={perfil} alt="Perfil" />
                            <span className="perfilTextGProf">s.gomes</span>
                        </div>
                        <div className="menuGProf">
                            <div style={{paddingLeft: 15, marginTop: 12, marginBottom: 12}} onClick={navigateProjetosProf}>Manage Projects</div>
                            <div className="seperatorMenuGProf"></div>
                            <div style={{paddingLeft: 15, marginTop: 12, marginBottom: 12}} onClick={navigatePerfilProf}>Profile</div>
                            <div className="seperatorMenuGProf"></div>
                            <div style={{paddingLeft: 15,color: 'black', fontWeight: "bold", marginTop: 12, marginBottom: 12,} } onClick={navigateCadeirasProf}>My Courses</div>
                            <div className="seperatorMenuGProf"></div>
                            <div style={{paddingLeft: 15, marginTop: 12, marginBottom: 12}} >Options</div>
                        </div>
                        <div className="exitGProf" onClick={navigateOutProf}>
                            <img style={{width: 30, height: 25, paddingTop: 6}} src={exitIcon} alt="ExitIcon" />
                        </div>
                    </div>
                    <div style = {{marginLeft: 80}}>
                        <div style={{display: "flex", justifyContent: 'center',
                            alignItems: 'center',
                            gridTemplateColumns: "repeat(2, 1fr)"}}>
                            <span className="TituloGProf">Grades</span>
                        </div>
                        <div className="barraGProf">
                            <p style={{color: "white"}}>Course</p>
                            <p style={{color: "white"}}>Sudents</p>
                            <p style={{color: "white"}}>Finished Projects</p>
                            <p style={{color: "white"}}>Average Grade</p>
                        </div>
                        <div className="projetosGProf">
                            <div style={{display: "flex", justifyContent: 'center',
                                alignItems: 'center',
                                gridTemplateColumns: "repeat(4, 1fr)", paddingTop: 20, paddingBottom: 20}}>
                                <div>{listProjectCadeiras}</div>
                                <div>{listProjectAlunos}</div>
                                <div>{listProjectProjetos}</div>
                                <div>{listProjectMedia}</div>
                            </div>
                        </div>
                    </div>
                </div>



            </header>




        </div>
    );
}

export default Grade_prof;