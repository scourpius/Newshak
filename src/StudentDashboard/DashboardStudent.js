import './DashboardStudent.css';
import gradient from '../Teacher/resources/gradient2.jpg'
import perfil from '../Teacher/resources/chamucas.jpg';
import exitIcon from '../Teacher/resources/exit.png';
import { useNavigate } from 'react-router-dom';



function DashboardStudent() {
    const navigate = useNavigate();
  
    const navigatePerfilAluno = () => {
        navigate('/student');
    };

    const navigateProjetosAluno = () => {
        navigate('/projsAluno');
    };

    const navigateCadeirasAluno = () => {
        navigate('/gradeAluno')
    }

    const navigateOpcoesAluno = () => {
        navigate('/opcoesAluno')
    }

    const navigateOutAluno = () => {
        navigate('/')
    }

    const navigateProject = () => {
        navigate('/progamacao')
    }

    let projects = [{"cadeira":"Programação 22/23","projeto":"ProjectStudent 1: Water System",
        "equipa":"individual","time":"22:13:46","date":"21/12/22 17:00"},

        {"cadeira":"AC 22/23","projeto":"ProjectStudent Determination 2",
            "equipa":"Team 2","time":"3 dias e 12 horas","date":"24/12/22 7:00"}]

    let selected = "Programação 22/23/ProjectStudent 1: Water System";
    const listProjectsCadeiras = projects.map((project)=>

        <div>
            <div style={{listStyle: 'none', paddingLeft: 60,  paddingTop: 10, paddingRight: 40, color: "black", fontWeight: "bold", width: "auto", margin:"auto",  fontStyle: "italic"}}>
            {project.cadeira}</div>
            <div className="seperatorProjectsdash" style={{marginTop: 16}}></div>
        </div>);
    const listProjectsProjects = projects.map((project) =>
        <div>
            <div style={{listStyle: 'none', paddingRight: 70,  paddingTop: 10, color: "black", fontWeight: "bold", width: "auto", margin:"auto",  fontStyle: "italic"}}>
            {project.projeto}</div>
            <div className="seperatorProjectsdash" style={{marginTop: 16}}></div>
        </div>);
    const listProjectsTeams = projects.map((project) =>
        <div>
            <div style={{listStyle: 'none', paddingRight: 40, paddingTop: 10, color: "black", fontWeight: "bold", width: "auto", margin:"auto",  fontStyle: "italic"}}>
            {project.equipa}</div>
            <div className="seperatorProjectsdash" style={{marginTop: 16}}></div>
        </div>);
    const listProjectsTime = projects.map((project) =>
        <div>
        <div style={{display: "table", paddingLeft: 30, width: "auto",alignItems: "center", margin:"auto", gridTemplateColumns: "repeat(2, 1fr)"}}>
            <div className="timerdash" style={{ width: 200, margin:"auto"}}>{project.time}</div>
            <div style={{listStyle: 'none', color: "black"}}>
                {project.date}</div>
        </div>
            <div className="seperatorProjectsdash"></div>
        </div>);



    const listProjects = projects.map((project) =>
        <div>
        <div style={{display: "flex", justifyContent: 'center',
            alignItems: 'center',
            gridTemplateColumns: "repeat(4, 1fr)", paddingTop: 20, paddingBottom: 20}}>

            <div style={{listStyle: 'none', paddingRight: 100, margin:"auto", color: "black"}}>
                {project.projeto}</div>
            <div style={{listStyle: 'none', paddingRight: 70, margin:"auto", color: "black"}}>
                {project.equipa}</div>

        </div>
        <div className="seperatorProjectsdash"></div>
    </div>
    );

    return (

        <div className="Appdash">


            <header className="App-headerdash">
                <img style={{ width: "100%", height: 160 }} src={gradient} alt="Gradient" />
                <div style={{display: "flex", gridTemplateColumns: "repeat(2, 1fr)"}}>
                    <div style = {{marginLeft: 160, marginTop: 40}}>
                        <div style={{display: "flex", justifyContent: 'center',
                            alignItems: 'center',
                            gridTemplateColumns: "repeat(2, 1fr)"}}>
                            <img className="perfilImagedash" src={perfil} alt="Perfil" />
                            <span className="perfilTextdash">t.sequeira</span>
                        </div>
                        <div className="menudash">
                            <div style={{paddingLeft: 15, color: 'black', fontWeight: "bold", marginTop: 12, marginBottom: 12}} onClick={navigateProjetosAluno}>Projects</div>
                            <div className="seperatorMenudash"></div>
                            <div style={{paddingLeft: 15, marginTop: 12, marginBottom: 12}} onClick={navigatePerfilAluno}>Profile</div>
                            <div className="seperatorMenudash"></div>
                            <div style={{paddingLeft: 15, marginTop: 12, marginBottom: 12}} onClick={navigateCadeirasAluno}>Grades</div>
                            <div className="seperatorMenudash"></div>
                            <div style={{paddingLeft: 15, marginTop: 12, marginBottom: 12}} >Options</div>
                        </div>
                        <div className="exitdash" onClick={navigateOutAluno}>
                            <img style={{width: 30, height: 25, paddingTop: 6}} src={exitIcon} alt="ExitIcon" />
                        </div>
                    </div>
                    <div style = {{marginLeft: 80}}>
                        <div style={{display: "flex", justifyContent: 'center',
                            alignItems: 'center',
                            gridTemplateColumns: "repeat(2, 1fr)"}}>
                            <span className="Titulodash">Projects</span>
                        </div>
                        <div className="barradash">
                            <p style={{color: "white", paddingLeft:50}}>Course</p>
                            <p style={{color: "white"}}>Project</p>
                            <p style={{color: "white"}}>Team</p>
                            <p style={{color: "white", paddingRight:60}}>Time</p>
                        </div>
                        <div className="projetosdash" onClick={navigateProject}>
                            <div style={{display: "flex", justifyContent: 'center',
                                alignItems: 'center',
                                gridTemplateColumns: "repeat(4, 1fr)"}}>
                                <div>{listProjectsCadeiras}</div>
                                <div>{listProjectsProjects}</div>
                                <div>{listProjectsTeams}</div>
                                <div>{listProjectsTime}</div>
                            </div>
                        </div>
                    </div>
                </div>



            </header>




        </div>
    );
}

export default DashboardStudent;