import './perfil_a.css';
import gradient from './resources/gradient2.jpg';
import perfil from './resources/chamucas.jpg';
import exitIcon from './resources/exit.png';
import edit from './resources/edit_pic.png';
import { useNavigate } from 'react-router-dom';


function Perfil_aluno() {
    
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
        <div className="seperatorProjectsPAluno"></div>
    </div>
    );

    return (

        <div className="AppPAluno">


            <header className="App-headerPAluno">
                <img style={{ width: "100%", height: 160 }} src={gradient} alt="Gradient" />
                <div style={{display: "flex", gridTemplateColumns: "repeat(2, 1fr)"}}>
                    <div style = {{marginLeft: 160, marginTop: 40}}>
                        <div style={{display: "flex", justifyContent: 'center',
                            alignItems: 'center',
                            gridTemplateColumns: "repeat(2, 1fr)"}}>
                            <img className="perfilImagePAluno" src={perfil} alt="Perfil" />
                            <span className="perfilTextPAluno">t.sequeira</span>
                        </div>
                        <div className="menuPAluno">
                            <div style={{paddingLeft: 15, marginTop: 12, marginBottom: 12}} onClick={navigateProjetosAluno}>Projects</div>
                            <div className="seperatorMenuPAluno"></div>
                            <div style={{paddingLeft: 15, color: 'black', fontWeight: "bold",marginTop: 12, marginBottom: 12}} onClick={navigatePerfilAluno}>Profile</div>
                            <div className="seperatorMenuPAluno"></div>
                            <div style={{paddingLeft: 15, marginTop: 12, marginBottom: 12,} } onClick={navigateCadeirasAluno}>Grades</div>
                            <div className="seperatorMenuPAluno"></div>
                            <div style={{paddingLeft: 15, marginTop: 12, marginBottom: 12}} >Options</div>
                        </div>
                        <div className="exitPAluno" onClick={navigateOutAluno}>
                            <img style={{width: 30, height: 25, paddingTop: 6}} src={exitIcon} alt="ExitIcon" />
                        </div>
                    </div>
                    <div style = {{marginLeft: 80}}>
                        <div style={{display: "flex", justifyContent: 'center',
                            alignItems: 'center',
                            gridTemplateColumns: "repeat(2, 1fr)"}}>
                            <span className="TituloPAluno">Profile</span>
                        </div>
                        <div className="barraPAluno">
                            <p style={{color: "white"}}></p>
                        </div>
                        <div className="projetosPAluno">
                        <span className="perfilText2PAluno">t.sequeira</span>
                        <h3>Name:</h3>
                        <h4>Tiago Sequeira</h4>
                        <h3>E-mail:</h3>
                        <h4>t.sequeira@campus.fct.unl.pt</h4>
                        <h3>University:</h3>
                        <h4>NOVA School of Science and Technology</h4>
                        <span><img style={{width: 30, height: 30, marginLeft: 30}} src={edit} alt="edit" /></span>
                        <span className="perfilText3PAluno">Edite Profile </span>  
                        <text className = "alling_rightPAluno">Change Password?</text>   
                        </div>
                    </div>
                </div>



            </header>




        </div>
    );
}

export default Perfil_aluno;