import './perfil_p.css';
import gradient from './resources/gradient2.jpg';
import perfil from './resources/perfil_prof.png';
import exitIcon from './resources/exit.png';
import edit from './resources/edit_pic.png';
import { useNavigate } from 'react-router-dom';


function ProfileProf() {

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
        <div className="AppPProf">
            <header className="App-headerPProf">
                <img style={{ width: "100%", height: 160 }} src={gradient} alt="Gradient" />
                <div style={{display: "flex", gridTemplateColumns: "repeat(2, 1fr)"}}>
                    <div style = {{marginLeft: 160, marginTop: 40}}>
                        <div style={{display: "flex", justifyContent: 'center',
                            alignItems: 'center',
                            gridTemplateColumns: "repeat(2, 1fr)"}}>
                            <img className="perfilImagePProf" src={perfil} alt="Perfil" />
                            <span className="perfilTextPProf">s.gomes</span>
                        </div>
                        <div className="menuPProf">
                            <div style={{paddingLeft: 15, marginTop: 12, marginBottom: 12}} onClick={navigateProjetosProf}>Manage Projects</div>
                            <div className="seperatorMenuPProf"></div>
                            <div style={{paddingLeft: 15, color: 'black', fontWeight: "bold",marginTop: 12, marginBottom: 12} } onClick={navigatePerfilProf}>Profile</div>
                            <div className="seperatorMenuPProf"></div>
                            <div style={{paddingLeft: 15, marginTop: 12, marginBottom: 12,} } onClick={navigateCadeirasProf}>My Courses</div>
                            <div className="seperatorMenuPProf"></div>
                            <div style={{paddingLeft: 15, marginTop: 12, marginBottom: 12}} >Options</div>
                        </div>
                        <div className="exitPProf" onClick={navigateOutProf}>
                            <img style={{width: 30, height: 25, paddingTop: 6}} src={exitIcon} alt="ExitIcon" />
                        </div>
                    </div>
                    <div style = {{marginLeft: 80}}>
                        <div style={{display: "flex", justifyContent: 'center',
                            alignItems: 'center',
                            gridTemplateColumns: "repeat(2, 1fr)"}}>
                            <span className="TituloPProf">Profile</span>
                        </div>
                        <div className="barraPProf">
                            <p style={{color: "white"}}></p>
                        </div>
                        <div className="projetosPProf">
                        <span className="perfilText2">s.gomes</span>
                        <h3>Name:</h3>
                        <h4>Sara Gomes</h4>
                        <h3>E-mail:</h3>
                        <h4>s.gomes@campus.fct.unl.pt</h4>
                        <h3>University:</h3>
                        <h4>NOVA School of Science and Technology</h4>
                        <span><img style={{width: 30, height: 30, marginLeft: 30}} src={edit} alt="edit" /></span>
                        <span className="perfilText3">Edit Profile </span>  
                        <text className = "alling_right">Change Password?</text>            
                        </div>
                    </div>
                </div>



            </header>




        </div>
    );
}

export default ProfileProf;