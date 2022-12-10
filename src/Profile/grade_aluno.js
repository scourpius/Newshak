import './grades_a.css';
import gradient from './resources/gradient2.jpg';
import perfil from './resources/chamucas.jpg';
import exitIcon from './resources/exit.png';
import { useNavigate } from 'react-router-dom';



function Grade_aluno() {
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


    let projects = [{"cadeira":"Programação 22/23","Grades":"170, 130",
        "media":"150"},

        {"cadeira":"AC 22/23","Grades":"110",
            "media":"110"}]
    const listProjectsCadeiras = projects.map((project) =>
        <div style={{listStyle: 'none',paddingBlock: 20, paddingRight:150, color: "black", fontWeight: "bold", width: "auto", margin:"left",  fontStyle: "italic"}}>
            {project.cadeira}</div>);
    const listProjectsProjects = projects.map((project) =>
        <div style={{listStyle: 'none',paddingBlock: 20, paddingRight: 230, color: "black", fontWeight: "bold", width: "auto", margin:"auto",  fontStyle: "italic"}}>
            {project.Grades}</div>);
    const listProjectsTeams = projects.map((project) =>
        <div style={{listStyle: 'none',paddingBlock: 20, paddingRight: 10, color: "black", fontWeight: "bold", width: "auto", margin:"auto",  fontStyle: "italic"}}>
            {project.media}</div>);



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
        <div className="seperatorProjectsGAluno"></div>
    </div>
    );

    return (

        <div className="AppGAluno">


            <header className="App-headerGAluno">
                <img style={{ width: "100%", height: 160 }} src={gradient} alt="Gradient" />
                <div style={{display: "flex", gridTemplateColumns: "repeat(2, 1fr)"}}>
                    <div style = {{marginLeft: 160, marginTop: 40}}>
                        <div style={{display: "flex", justifyContent: 'center',
                            alignItems: 'center',
                            gridTemplateColumns: "repeat(2, 1fr)"}}>
                            <img className="perfilImageGAluno" src={perfil} alt="Perfil" />
                            <span className="perfilTextGAluno">t.sequeira</span>
                        </div>
                        <div className="menuGAluno">
                            <div style={{paddingLeft: 15, marginTop: 12, marginBottom: 12}} onClick={navigateProjetosAluno}>Projects</div>
                            <div className="seperatorMenuGAluno"></div>
                            <div style={{paddingLeft: 15, marginTop: 12, marginBottom: 12}} onClick={navigatePerfilAluno}>Profile</div>
                            <div className="seperatorMenuGAluno"></div>
                            <div style={{paddingLeft: 15,color: 'black', fontWeight: "bold", marginTop: 12, marginBottom: 12,} } onClick={navigateCadeirasAluno}>Grades</div>
                            <div className="seperatorMenuGAluno"></div>
                            <div style={{paddingLeft: 15, marginTop: 12, marginBottom: 12}} >Options</div>
                        </div>
                        <div className="exitGAluno" onClick={navigateOutAluno}>
                            <img style={{width: 30, height: 25, paddingTop: 6}} src={exitIcon} alt="ExitIcon" />
                        </div>
                    </div>
                    <div style = {{marginLeft: 80}}>
                        <div style={{display: "flex", justifyContent: 'center',
                            alignItems: 'center',
                            gridTemplateColumns: "repeat(2, 1fr)"}}>
                            <span className="TituloGAluno">Grades</span>
                        </div>
                        <div className="barraGAluno">
                            <p style={{color: "white"}}>Course</p>
                            <p style={{color: "white"}}>Grades</p>
                            <p style={{color: "white"}}>Average</p>
                        </div>
                        <div className="projetosGAluno">
                            <div style={{display: "flex", justifyContent: 'center',
                                alignItems: 'center',
                                gridTemplateColumns: "repeat(4, 1fr)", paddingTop: 20, paddingBottom: 20}}>
                                <div>{listProjectsCadeiras}</div>
                                <div>{listProjectsProjects}</div>
                                <div>{listProjectsTeams}</div>
                            </div>
                        </div>
                    </div>
                </div>



            </header>




        </div>
    );
}

export default Grade_aluno;