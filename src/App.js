import './App.css';
import gradient from './resources/gradient2.jpg';
import perfil from './resources/chamucas.jpg';
import exitIcon from './resources/exit.png';



function App() {
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
                  <menu className="menu">
                      <p>Projetos</p>
                      <p>Perfil</p>
                      <p>Notas</p>
                      <p>Opções</p>
                  </menu>
                  <div className="exit">
                      <img style={{width: 30, height: 25, paddingTop: 6}} src={exitIcon} alt="ExitIcon" />
                  </div>
              </div>
              <div style = {{marginLeft: 80}}>
                  <div style={{display: "flex", justifyContent: 'center',
                      alignItems: 'center',
                      gridTemplateColumns: "repeat(2, 1fr)"}}>
                      <span className="title-text-shadow">Projetos</span>
                  </div>
                  <div className="barra">
                      <p style={{color: "white"}}>Projetos</p>
                      <p style={{color: "white"}}>Perfil</p>
                      <p style={{color: "white"}}>Cadeiras</p>
                      <p style={{color: "white"}}>Opções</p>
                  </div>
                  <div className="projetos"></div>
              </div>
          </div>



      </header>




    </div>
  );
}

export default App;
