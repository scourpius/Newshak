import './perfil_a.css';
import gradient from './resources/gradient2.jpg';
import perfil from './resources/chamucas.jpg';
import exitIcon from './resources/exit.png';
import edit from './resources/edit_pic.png';



function Projects() {
    let projects = [{"dados":"Name:", "parametro":"Tiago Sequeira" },
    {"dados":"E.mail:", "parametro":"t.sequeira@campus.fct.unl.pt" },
    {"dados":"University:", "parametro":"NOVA School of Science and Technology" }
    ]
    const listProjectsDados = projects.map((project) =>
        <div style={{listStyle: 'none',paddingBlock: 5, paddingRight:100, color: "black", fontWeight: "bold", width: "auto", margin:"left",  fontStyle: "italic",}}>
            {project.dados}</div>);
        const listProjectsParametro = projects.map((project) =>
        <div style={{listStyle: 'none',paddingBlock: 5, paddingRight:100, color: "black", fontWeight: "bold", width: "auto", margin:"left",  fontStyle: "italic",}}>
            {project.parametro}</div>);



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
                            <div style={{paddingLeft: 15, color: 'black', fontWeight: "bold",marginTop: 12, marginBottom: 12}}>Profile</div>
                            <div className="seperatorMenu"></div>
                            <div style={{paddingLeft: 15, marginTop: 12, marginBottom: 12,} }>Grades</div>
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
                            <span className="Titulo">Profile</span>
                        </div>
                        <div className="barra">
                            <p style={{color: "white"}}></p>
                        </div>
                        <div className="projetos">
                        <span className="perfilText2">t.sequeira</span>
                        <h3>Name:</h3>
                        <h4>Tiago Sequeira</h4>
                        <h3>E-mail:</h3>
                        <h4>t.sequeira@campus.fct.unl.pt</h4>
                        <h3>University:</h3>
                        <h4>NOVA School of Science and Technology</h4>
                        <span><img style={{width: 30, height: 30, marginLeft: 30}} src={edit} alt="edit" /></span>
                        <span className="perfilText3">Edite Profile </span>  
                        <text className = "alling_right">Change Password?</text>   
                        </div>
                    </div>
                </div>



            </header>




        </div>
    );
}

export default Projects;