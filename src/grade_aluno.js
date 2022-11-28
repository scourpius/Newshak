import './grades_a.css';
import gradient from './resources/gradient2.jpg';
import perfil from './resources/chamucas.jpg';
import exitIcon from './resources/exit.png';



function Projects() {
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
        <div className="seperatorProjects"></div>
    </div>
    );

    return (

        <div className="App">


            <header className="App-header">
                <img style={{ width: "100%", height: 160 }} src={gradient} alt="Gradient" />
                <div style={{display: "flex", gridTemplateColumns: "repeat(2, 1fr)"}}>
                    <div style = {{marginLeft: 160, marginTop: 40}}>
                        <div style={{display: "flex", justifyContent: 'center',
                            alignItems: 'center',
                            gridTemplateColumns: "repeat(2, 1fr)"}}>
                            <img className="perfilImage" src={perfil} alt="Perfil" />
                            <span className="perfilText">t.sequeira</span>
                        </div>
                        <div className="menu">
                            <div style={{paddingLeft: 15, marginTop: 12, marginBottom: 12}}>Projects</div>
                            <div className="seperatorMenu"></div>
                            <div style={{paddingLeft: 15, marginTop: 12, marginBottom: 12}}>Profile</div>
                            <div className="seperatorMenu"></div>
                            <div style={{paddingLeft: 15,color: 'black', fontWeight: "bold", marginTop: 12, marginBottom: 12,} }>Grades</div>
                            <div className="seperatorMenu"></div>
                            <div style={{paddingLeft: 15, marginTop: 12, marginBottom: 12}}>Options</div>
                        </div>
                        <div className="exit">
                            <img style={{width: 30, height: 25, paddingTop: 6}} src={exitIcon} alt="ExitIcon" />
                        </div>
                    </div>
                    <div style = {{marginLeft: 80}}>
                        <div style={{display: "flex", justifyContent: 'center',
                            alignItems: 'center',
                            gridTemplateColumns: "repeat(2, 1fr)"}}>
                            <span className="Titulo">Grades</span>
                        </div>
                        <div className="barra">
                            <p style={{color: "white"}}>Course</p>
                            <p style={{color: "white"}}>Grades</p>
                            <p style={{color: "white"}}>Average</p>
                        </div>
                        <div className="projetos">
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

export default Projects;