import './Project.css';
import gradient from './resources/gradient2.jpg';
import perfil from './resources/chamucas.jpg';
import exitIcon from './resources/exit.png';
import sendArrow from './resources/arrow.png';
import { BrowserRouter as Link } from "react-router-dom";



const Project = () => {

    const professors = ["s.gomes", "r.simões"]
    const onlineMembers = ["j.paio", "d.machado", "m.mota", "t.sequeira", "d.gomes"];
    const offlineMembers = ["t.duarte", "m.correia", "r.shamsudin", "m.barros", "t.gonçalves", "p.diogo"]
    let messages = [[{"name":"j.paio"},{"message":"@s.gomes boa noite professora, estou com uma dúvida no resultado da questão 5."}],
        [{"name":"s.gomes"},{"message":"teremos um tempo dedicado para responder a questões na próxima aula prática."}],
        [{"name":"d.machado"},{"message":"Eu tive um problema também no valor da questão 3, alguém sabe se é para usar o valor indicado?"}]]

    const listProfessors = professors.map((member) =>  <li style={{listStyle: 'none', paddingBottom: 5, paddingTop: 5, fontStyle: "italic"}}>{member}</li>);
    const listOnlineMembers = onlineMembers.map((member) =>  <li style={{listStyle: 'none', paddingBottom: 5, paddingTop: 5}}>{member}</li>);
    const listOfflineMembers = offlineMembers.map((member) =>  <li style={{listStyle: 'none', paddingBottom: 5, paddingTop: 5, color: "lightgray"}}>{member}</li>);
    const listMessages = messages.map((messages) =>
        <div>
            <li style={{listStyle: 'none', margin: "auto", paddingLeft: 10, paddingBottom: 0, paddingTop: 5, color: "black", fontWeight: "bold", fontStyle: "italic"}}>
        {messages[0].name}</li>
                <li style={{listStyle: 'none', paddingBottom: 15, paddingLeft: 5, paddingTop: 0, color: "black"}}>
                    {messages[1].message}</li></div>);
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
                          <span className="Relogio">15215135</span>
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
                                      <div style={{paddingTop: 50, fontStyle: "italic"}}>Arraste os seus ficheiros para aqui!</div>
                                  </div>
                              </div>
                              <div className="submissions">
                                      <div style={{fontSize: 20, fontWeight: 'bold', color: "black"}}>0/200</div>
                                      <div>0 tests answered</div>
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
                          <div style={{display: "inline-flex",
                              gridTemplateColumns: "repeat(2, 1fr)"}}>
                              <div className="chatField"></div>
                              <div className="sendChat">
                                  <img style={{width: 30, height: 25,
                                      paddingLeft: 12,paddingBottom: 20, paddingTop: 8, marginBottom: 100}} src={sendArrow} alt="SendArrow" />
                              </div>
                          </div>
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
