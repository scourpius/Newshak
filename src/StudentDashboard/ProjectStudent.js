import './ProjectStudent.css';
import gradient from '../Teacher/resources/gradient2.jpg';
import perfil from '../Teacher/resources/chamucas.jpg';
import exitIcon from '../Teacher/resources/exit.png';
import PopupS from './popupProject'
import PopupE from './popupProject'
import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";



function ProjectStudent() {
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



    const [message, setMessage] = useState("");
    const [file, setFile] = useState("");
    const [submissions, setSubmissions] = useState([]);
    const [score, setScore] = useState("0");
    const [tests, setTests] = useState("0");
    const [popupS, setPopupS] = useState(false);
    const [popupE, setPopupE] = useState(false);
    const username = "t.sequeira";
    const handleSubmit = (event) => {
        event.preventDefault();
        if (message !== '') {
            messagesL.push([{"name":username}, {"message":message}]);
            setMessage("");
        }
    }
    const handleSubmitFile = (event) => {
        event.preventDefault();
        if (file !== '') {
            if(file.split('\\')[file.split('\\').length-1] == ("solution.txt")) {
                submissionsL.push({"status":"✅ Success","name":file.split('\\')[file.split('\\').length-1],
                    "time":current.toLocaleTimeString("pt-PT"), "tests":10, "username":username})
                alert("Sucess!");
                setScore(200);
                setFile("");
                setTests(10);
            } else {
                submissionsL.push({"status":"❌ Failure", "name":file.split('\\')[file.split('\\').length-1],
                    "time":current.toLocaleTimeString("pt-PT"), "tests":0, "username":username})
                alert("Failed! Number of tests still to pass: 10.");
                setFile("");
            }
        }
    }
    const professors = ["s.gomes", "r.simões"]
    const onlineMembers = ["j.paio", "d.machado", "m.mota", "t.sequeira", "d.gomes"];
    const offlineMembers = ["t.duarte", "m.correia", "r.shamsudin", "m.barros", "t.gonçalves", "p.diogo"]
    let messages = [[{"name":"j.paio"},{"message":"@s.gomes boa noite professora, estou com uma dúvida no resultado da questão 5."}],
        [{"name":"s.gomes"},{"message":"teremos um tempo dedicado para responder a questões na próxima aula prática."}],
        [{"name":"d.machado"},{"message":"Eu tive um problema também no valor da questão 3, alguém sabe se é para usar o valor indicado?"}]]
    const current = new Date();
    const [messagesL] = useState(messages);
    const [submissionsL] = useState(submissions);
    const listProfessors = professors.map((member) =>  <li style={{listStyle: 'none', paddingBottom: 5, paddingTop: 5, fontStyle: "italic"}}>{member}</li>);
    const listOnlineMembers = onlineMembers.map((member) =>  <li style={{listStyle: 'none', paddingBottom: 5, paddingTop: 5}}>{member}</li>);
    const listOfflineMembers = offlineMembers.map((member) =>  <li style={{listStyle: 'none', paddingBottom: 5, paddingTop: 5, color: "lightgray"}}>{member}</li>);
    const listSubmissions = submissionsL.map((submission) =>
        <div>
            <li style={{listStyle: 'none', fontSize: 13, margin: "auto", paddingLeft: 10, paddingBottom: 0, paddingTop: 5, color: "black", fontStyle: "italic"}}>
                {submission.status + " - " + submission.tests + "/10 - [" + submission.time + "]: " + submission.name + " - " + submission.username }</li></div>);
    const listMessages = messagesL.map((messages) =>
        <div>
            <li style={{listStyle: 'none', margin: "auto", paddingLeft: 10, paddingBottom: 0, paddingTop: 5, color: "black", fontWeight: "bold", fontStyle: "italic"}}>
        {messages[0].name}</li>
                <li style={{listStyle: 'none', paddingBottom: 15, paddingLeft: 5, paddingTop: 0, color: "black"}}>
                    {"- " + messages[1].message}</li></div>);
    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 1000);
    }, []);
    return (


    <div className="App_d2">


      <header className="App-header_d2">
        <img style={{ width: "100%", height: 160 }} src={gradient} alt="Gradient" />
          <div style={{display: "flex", gridTemplateColumns: "repeat(2, 1fr)"}}>
              <div style = {{marginLeft: 160, marginTop: 40}}>
                  <div style={{display: "flex", justifyContent: 'center',
                      alignItems: 'center',
                      gridTemplateColumns: "repeat(2, 1fr)"}}>
                      <img className="perfilImage_d2" src={perfil} alt="Perfil" />
                      <span className="perfilText_d2">{username}</span>
                  </div>
                  <div className="menu_d2">
                      <div style={{ paddingLeft: 15, marginTop: 12, marginBottom: 12}} onClick={navigateProjetosAluno}>Projects</div>
                      <div className="seperatorMenu_d2"></div>
                      <div style={{paddingLeft: 15, marginTop: 12, marginBottom: 12}} onClick={navigatePerfilAluno}>Profile</div>
                      <div className="seperatorMenu_d2"></div>
                      <div style={{paddingLeft: 15, marginTop: 12, marginBottom: 12}} onClick={navigateCadeirasAluno}>Grades</div>
                      <div className="seperatorMenu_d2"></div>
                      <div style={{paddingLeft: 15, marginTop: 12, marginBottom: 12}}>Options</div>
                  </div>
                  <div className="exit_d2" onClick={navigateOutAluno}>
                      <img style={{width: 30, height: 25, paddingTop: 6}} src={exitIcon} alt="ExitIcon" />
                  </div>
              </div>
              <div style = {{marginLeft: 80}}>
                  <div style={{display: "flex",
                      gridTemplateColumns: "repeat(2, 1fr)"}}>
                      <div style={{display: "flex", justifyContent: 'left',
                          alignItems: 'left',
                          gridTemplateColumns: "repeat(2, 1fr)"}}>
                          <span className="Titulo_d2">Programação 22/23 - Project 1: Water System</span>
                          <span className="Relogio_d2">{current.toLocaleTimeString("pt-PT")}</span>
                      </div>
                  </div>
                  <div className="barra_d2">
                      <div className="container_d2">
                          <p style={{marginLeft: 120,marginRight: 0, color: "white"}}>Upload</p>
                          <p style={{marginLeft: 320,marginRight: 150, color: "white"}}>Chat</p>
                          <p style={{marginLeft: 140,marginRight: 95,  color: "white"}}>Members</p>
                      </div>
                  </div>
                  <div style={{display: "flex",
                      gridTemplateColumns: "repeat(3, 1fr)"}}>
                      <div>
                          <div style={{display: "inline",
                              gridTemplateColumns: "repeat(2, 1fr)", paddingLeft: 200, paddingRight: 120}}>
                              <div className="uploadbox_d2">
                                  <div className="upload_d2">
                                      <form onSubmit={handleSubmitFile} style={{width: 200, paddingLeft: 20,margin: "auto", overflow: "clip"}}>
                                          <label>
                                              <div style={{paddingTop: 20, paddingBottom: 20, fontStyle: "italic"}}>Drag your file here!</div>
                                              <input
                                                    style={{cursor:"pointer"}}
                                                  type="file"
                                                  value={file}
                                                  onChange={(e) => setFile(e.target.value)}
                                                  
                                              />
                                          </label>
                                          <input style={{marginTop: 20, cursor:"pointer"}} type="submit" value={"Evaluate?"} />
                                      </form>

                                  </div>
                              </div>
                              <div className="submissions_d2">
                                      <div style={{fontSize: 20, fontWeight: 'bold', color: "black"}}>{score}/200</div>
                                      <div>{tests} tests answered</div>
                                      <div className="seperatorResults_d2"></div>
                                      <div className="timer_d2">22:13:46</div>
                                      <div>21/12/22 - 17:00</div>
                                      <br></br>
                                      <div onClick={() => {setPopupS(true)}} style={{fontSize: 15, color: "white", paddingTop:15, paddingBottom: 14, cursor:"pointer", textShadow:"2px 2px black"}}>Previous Submissions</div>
                                      <div className="seperatorMenu_d2"></div>
                                      <div onClick={() => {setPopupE(true)}} style={{fontSize: 15, color: "white", paddingTop:14, paddingBottom: 14, cursor:"pointer", textShadow:"2px 2px black"}}>Project Details</div>
                              </div>
                          </div>
                      </div>
                      <div className="chat_d2">
                          <div className="chatBoard_d2">
                              {listMessages}
                          </div>
                          <form onSubmit={handleSubmit} style={{width: 200, paddingLeft: 20,margin: "auto"}}>
                            
                              <label>
                                  <input
                                      type="text_d2"
                                      value={message}
                                      onChange={(e) => setMessage(e.target.value)}
                                  />
                              </label>
                              <input style={{cursor:"pointer"}} type="submit" value={" 〉"} />
                          </form>
                      </div>
                      <div className="members_d2">
                          <div style={{width: 100, paddingTop: 20, margin: "auto", fontSize:17, color: "white"}}>
                              {listProfessors}
                              <div style={{height: 2, background: "white"}}></div>
                              {listOnlineMembers}
                              {listOfflineMembers}
                          </div>
                      </div>
                  </div>
              </div>
          </div>



      </header>

        <PopupS trigger = {popupS} setTrigger={setPopupS}>
            <div style={{fontWeight:"bold", fontStyle:"italic", paddingBottom:10}}>Here is your submission history:</div>
            {listSubmissions}
        </PopupS>
        <PopupE trigger = {popupE} setTrigger={setPopupE}>
            <div style={{paddingBottom:30}}>Your job is to make a Water System in C# using shader tecnology. JK, just deliver a .txt file named solution and we should be good!</div>
            <a href='./resources/project.txt' download>Click here to download project guide!</a>
        </PopupE>


    </div>
  );
}

export default ProjectStudent;
