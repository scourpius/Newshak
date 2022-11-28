import './Project.css';
import gradient from './resources/gradient2.jpg';
import perfil from './resources/chamucas.jpg';
import exitIcon from './resources/exit.png';
import sendArrow from './resources/arrow.png';
import { BrowserRouter as Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import ReactDOM from 'react-dom/client';



const Project = () => {
    const [message, setMessage] = useState("");
    const [file, setFile] = useState("");
    const [score, setScore] = useState("0");
    const [tests, setTests] = useState("0");
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
                alert("Sucess!");
                setScore(200);
                setFile("");
                setTests(10);
            } else {
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
    const listProfessors = professors.map((member) =>  <li style={{listStyle: 'none', paddingBottom: 5, paddingTop: 5, fontStyle: "italic"}}>{member}</li>);
    const listOnlineMembers = onlineMembers.map((member) =>  <li style={{listStyle: 'none', paddingBottom: 5, paddingTop: 5}}>{member}</li>);
    const listOfflineMembers = offlineMembers.map((member) =>  <li style={{listStyle: 'none', paddingBottom: 5, paddingTop: 5, color: "lightgray"}}>{member}</li>);
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


    <div className="App">


      <header className="App-header">
        <img style={{ width: "100%", height: 160 }} src={gradient} alt="Gradient" />
          <div style={{display: "flex", gridTemplateColumns: "repeat(2, 1fr)"}}>
              <div style = {{marginLeft: 160, marginTop: 40}}>
                  <div style={{display: "flex", justifyContent: 'center',
                      alignItems: 'center',
                      gridTemplateColumns: "repeat(2, 1fr)"}}>
                      <img className="perfilImage" src={perfil} alt="Perfil" />
                      <span className="perfilText">{username}</span>
                  </div>
                  <div className="menu">
                      <div style={{ paddingLeft: 15, marginTop: 12, marginBottom: 12}}>Projetos</div>
                      <div className="seperatorMenu"></div>
                      <div style={{paddingLeft: 15, marginTop: 12, marginBottom: 12}}>Perfil</div>
                      <div className="seperatorMenu"></div>
                      <div style={{paddingLeft: 15, marginTop: 12, marginBottom: 12}}>Notas</div>
                      <div className="seperatorMenu"></div>
                      <div style={{paddingLeft: 15, marginTop: 12, marginBottom: 12}}>Opções</div>
                  </div>
                  <div className="exit">
                      <img style={{width: 30, height: 25, paddingTop: 6}} src={exitIcon} alt="ExitIcon" />
                  </div>
              </div>
              <div style = {{marginLeft: 80}}>
                  <div style={{display: "flex",
                      gridTemplateColumns: "repeat(2, 1fr)"}}>
                      <div style={{display: "flex", justifyContent: 'left',
                          alignItems: 'left',
                          gridTemplateColumns: "repeat(2, 1fr)"}}>
                          <span className="Titulo">Programação 22/23 - Project 1: Water System</span>
                          <span className="Relogio">{current.toLocaleTimeString("pt-PT")}</span>
                      </div>
                  </div>
                  <div className="barra">
                      <div className="container">
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
                              <div className="uploadbox">
                                  <div className="upload">
                                      <form onSubmit={handleSubmitFile} style={{width: 200, paddingLeft: 20,margin: "auto", overflow: "clip"}}>
                                          <label>
                                              <div style={{paddingTop: 20, paddingBottom: 20, fontStyle: "italic"}}>Drag your file here!</div>
                                              <input

                                                  type="file"
                                                  value={file}
                                                  onChange={(e) => setFile(e.target.value)}
                                              />
                                          </label>
                                          <input style={{marginTop: 20}} type="submit" value={"Avaliar?"} />
                                      </form>

                                  </div>
                              </div>
                              <div className="submissions">
                                      <div style={{fontSize: 20, fontWeight: 'bold', color: "black"}}>{score}/200</div>
                                      <div>{tests} tests answered</div>
                                      <div className="seperatorResults"></div>
                                      <div className="timer">22:13:46</div>
                                      <div>21/12/22 - 17:00</div>
                                      <div style={{fontSize: 15, color: "white", paddingTop:15, paddingBottom: 14}}>Previous Submissions</div>
                                      <div className="seperatorMenu"></div>
                                      <div style={{fontSize: 15, color: "white", paddingTop:14, paddingBottom: 14}}>Project Details</div>
                              </div>
                          </div>
                      </div>
                      <div className="chat">
                          <div className="chatBoard">
                              {listMessages}
                          </div>
                          <form onSubmit={handleSubmit} style={{width: 200, paddingLeft: 20,margin: "auto"}}>
                              <label>
                                  <input
                                      type="text"
                                      value={message}
                                      onChange={(e) => setMessage(e.target.value)}
                                  />
                              </label>
                              <input type="submit" value={" 〉"} />
                          </form>
                      </div>
                      <div className="members">
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




    </div>
  );
}

export default Project;
