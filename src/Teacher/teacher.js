import {Routes, Route, useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import { useRef} from 'react';
import gradient from './resources/gradient2.jpg';
import perfil_prof from './resources/perfil_prof.png';
import exitIcon from './resources/exit.png';
import './teacher.css';
var myListProj = [];
var textAlert = "";



const Teacher = () => {
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

 


  return (
    <div className="App">

  <header className="App-header">

  <img style={{ width: "100%", height: 160 }} src={gradient} alt="Gradient" />


  <div style={{display: "flex", gridTemplateColumns: "repeat(2, 1fr)"}}>


  <div style = {{marginLeft: 160, marginTop: 40}}>

  <div style={{display: "flex", justifyContent: 'center',
                      alignItems: 'center',
                      gridTemplateColumns: "repeat(2, 1fr)"}}>
                      <img className="perfilImage" src={perfil_prof} alt="Perfil" />
                      <span className="perfilText">s.gomes</span>
  </div>


  <div className="menu">
                      <div style={{ paddingLeft: 15, color: 'black', fontWeight: "bold", marginTop: 12, marginBottom: 12}} onClick={navigateProjetosProf}>Manage Projects</div>
                      <div className="seperatorMenu"></div>
                      <div style={{paddingLeft: 15, marginTop: 12, marginBottom: 12}} onClick={navigatePerfilProf}>Profile</div>
                      <div className="seperatorMenu"></div>
                      <div style={{paddingLeft: 15, marginTop: 12, marginBottom: 12}} onClick={navigateCadeirasProf}>My Courses</div>
                      <div className="seperatorMenu"></div>
                      <div style={{paddingLeft: 15, marginTop: 12, marginBottom: 12}} >Options</div>
  </div>


  <div className="exit" onClick={navigateOutProf}>
                      <img style={{width: 30, height: 25, paddingTop: 6}} src={exitIcon} alt="ExitIcon"  />
  </div>

      
   
    
    </div>
    <div  class="leftElem">    
     
                            
     <Routes>
         <Route path="/perfilProf" element={<PerfilProf />} />
         <Route path="/" element={<ProjetosProf />} />
         <Route path="/cadeirasProf" element={<CadeirasProf />} />
         <Route path="/opcoesProf" element={<OpcoesProf />} />
         <Route path="/logoutProf" element={<LogoutProf/>}/>
         <Route path="/createProjProf" element={<CreateProjProf/>}/>
       </Routes>                      
     </div> 
    </div>

    
                    
        
       

  </header>
    </div>
  );
}

function PerfilProf() {
 
  return(
    <div>
      <h2>Perfil</h2>

      <br></br>
      <form>
      Name: 
      <br></br>
      <input type="text" name="name" defaultValue="Teacher 1" style={{width: "370px"}}>
      </input>
      </form>


      <br></br>
      <form>
      E-mail: 
      <br></br>
      <input type="text" name="email" defaultValue="teacher1@fct.unl.pt" style={{width: "370px"}}>
      </input>
      </form>

      <br></br>
      <form>
      University: 
      <br></br>
      <input type="text" name="universidade" defaultValue="Universidade Nova de Lisboa" style={{width: "370px"}}>
      </input>
      </form>

      <br></br>
      <br></br>
      <button>Save</button>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <button>Change Password</button>

    </div>);
}

function ProjetosProf() {

  const navigate = useNavigate();

  const createProjProf = () => {
    navigate('/createProjProf');
  }

  const listItems = myListProj.map((myListProj)=>{   
    return <h5>{myListProj}</h5>;   
});   

  return (
    <div className="projectsToShow">
      <br></br>
      <br></br>
      <br></br>
      <div style={{display: "flex", justifyContent: 'center',
                            alignItems: 'center',
                            gridTemplateColumns: "repeat(2, 1fr)"}}>
                            <span className="TituloGProf">My Projects</span>
                        </div>
      <br></br>
      <button className='buttonNew' onClick={()=>{createProjProf(); textAlert=""}}>Create New Project</button>
      <br></br>
      <br></br>
   

  
    <text> {listItems} </text>
   

    </div>
  );
}

function OpcoesProf() {
  return( <div className="opt">
   <div style={{display: "flex", justifyContent: 'center',
                            alignItems: 'center',
                            gridTemplateColumns: "repeat(2, 1fr)"}}>
                            <span className="TituloGProf">Options</span>
                        </div>
                     
  
  </div>);
}


function CadeirasProf() {
  return (<div> 
    <h2>Courses </h2>
    <br></br>
    Programação 22/23
    <br></br>
    Students: 22
    <br></br>
    Projects Done: 1
    <br></br>
    Average Score: 135
    <br></br>
    <br></br>
    AED 22/23
    <br></br>
    Students: 22
    <br></br>
    Projects Done: 1
    <br></br>
    Average Score: 135
    <br></br> 
    <br></br>
    Base de Dados 22/23
    <br></br>
    Students: 22
    <br></br>
    Projects Done: 1
    <br></br>
    Average Score: 135
    <br></br>
    <br></br>
  </div>);
}

function LogoutProf() {
  const navigate = useNavigate();
  navigate('/');
}

const CreateProjProf = () =>  {

  const navigate = useNavigate();

  const navigateProjetosProf = () => {
    navigate('/teacher');
  };


  <Routes>
    <Route path="/" element={<ProjetosProf />} />
  </Routes>



const inputRefTitle = useRef(null);
const inputRefChair = useRef(null);
const inputRefDesc = useRef(null);
const inputRefHour = useRef(null);
const inputRefMin = useRef(null);
const inputRefDay = useRef(null);
const inputRefMonth = useRef(null);
const inputRefYear = useRef(null);


const [updatedTitle, setUpdatedTitle] = useState('');
const [updatedChair, setUpdatedChair] = useState('');
const [updatedDesc, setUpdatedDesc] = useState('');
const [updatedHour, setUpdatedHour] = useState('');
const [updatedMin, setUpdatedMin] = useState('');
const [updatedDay, setUpdatedDay] = useState('');
const [updatedMonth, setUpdatedMonth] = useState('');
const [updatedYear, setUpdatedYear] = useState('');

const handleClick = () => {
  setUpdatedTitle(inputRefTitle.current.value);
  setUpdatedChair(inputRefChair.current.value);
  setUpdatedDesc(inputRefDesc.current.value);
  setUpdatedHour(inputRefHour.current.value);
  setUpdatedMin(inputRefMin.current.value);
  setUpdatedDay(inputRefDay.current.value);
  setUpdatedMonth(inputRefMonth.current.value);
  setUpdatedYear(inputRefYear.current.value);
  if(inputRefTitle.current.value !== "" && inputRefChair.current.value !== "" && inputRefDesc.current.value !== "" && inputRefDay.current.value > 0 && inputRefDay.current.value <= 31 && inputRefMonth.current.value>0 && inputRefMonth.current.value<=12 && inputRefYear.current.value>0 && inputRefYear.current.value<2200 && inputRefHour.current.value>=0 && inputRefHour.current.value<=23 && inputRefMin.current.value>=0 && inputRefMin.current.value<=59 && inputRefYear.current.value>=2022 ){
  //fevereiro
  if((inputRefMonth.current.value == 2 && inputRefDay.current.value > 29) || (inputRefDay.current.value === 31 && (inputRefMonth.current.value === 4 || inputRefMonth.current.value === 6|| inputRefMonth.current.value === 9||inputRefMonth.current.value === 11) )){
    textAlert="Invalid Date!";
  } else if((inputRefYear.current.value % 4 !== 0 || inputRefYear.current.value % 100 === 0) && inputRefDay.current.value>28 && inputRefMonth.current.value == 2){
    textAlert="Invalid Date!";
  } else {
    myListProj.push("Title: " + inputRefTitle.current.value +", Course: " + inputRefChair.current.value + ", Description: " + inputRefDesc.current.value + ", Delivery Date: " + inputRefHour.current.value + "h:" + inputRefMin.current.value + "m " + inputRefDay.current.value + "/" + inputRefMonth.current.value + "/" + inputRefYear.current.value );
    navigateProjetosProf();} 
  }
  else{
    textAlert="Missing Parameters!";
  }
   
};

  return (

    
    <div className="createProj">
      <br></br>
      <br></br>
      <br></br>
      <div style={{display: "flex", justifyContent: 'center',
                            alignItems: 'center',
                            gridTemplateColumns: "repeat(2, 1fr)"}}>
                            <span className="TituloGProf">New Project</span>
                        </div>
      <br></br>
      <form>
      Title: 
      <br></br>
      <input type="text" name="title" style={{width: "370px"}} ref={inputRefTitle}>
      </input>
      </form>
      <br></br>

 {/*     <form>
      Cadeira: 
      <br></br>
      <input type="text" name="chair" style={{width: "370px"}} ref={inputRefChair}>
      </input>
      </form>
      <br></br>
  */}

    <form>
      Course:
    <br></br>
      < select name="chair" ref={inputRefChair}>
        <option value="Programação 22/23">Programação 22/23</option>
        <option value="AED 22/23">AED 22/23</option>
        <option value="Bases de Dados 22/23">Bases de Dados 22/23</option>
      </select>
      <br></br>
      <br></br>
    </form>




      <form>
      Delivery Date: 
      <br></br>
      <select type="text" name="hour" defaultValue="hh" ref={inputRefHour}>
        <option value="hh">hh</option>
        <option value="00">00</option>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>



      </select>
      <span>&nbsp;</span>:<span>&nbsp;</span>
      <select type="text" name="min" defaultValue="mm" ref={inputRefMin}>
        <option value="mm">mm</option>
        <option value="00">00</option>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
        <option value="32">32</option>
        <option value="33">33</option>
        <option value="34">34</option>
        <option value="35">35</option>
        <option value="36">36</option>
        <option value="37">37</option>
        <option value="38">38</option>
        <option value="39">39</option>
        <option value="40">40</option>
        <option value="41">41</option>
        <option value="42">42</option>
        <option value="43">43</option>
        <option value="44">44</option>
        <option value="45">45</option>
        <option value="46">46</option>
        <option value="47">47</option>
        <option value="48">48</option>
        <option value="49">49</option>
        <option value="50">50</option>
        <option value="51">51</option>
        <option value="52">52</option>
        <option value="53">53</option>
        <option value="54">54</option>
        <option value="55">55</option>
        <option value="56">56</option>
        <option value="57">57</option>
        <option value="58">58</option>
        <option value="59">59</option>
      </select>

      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <select type="text" name="day" defaultValue="DD" ref={inputRefDay}>
        <option value="DD">DD</option>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
      </select>
      &nbsp;/&nbsp;


      <select type="text" name="month" defaultValue="MM" ref={inputRefMonth}>
        <option value="MM">MM</option>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      &nbsp;/&nbsp;
      <select type="text" name="year" defaultValue="YYYY" ref={inputRefYear}>
        <option value="YYYY">YYYY</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2025">2026</option>
        <option value="9999">9999</option>
      </select>
      </form>
      <br></br>


      <form>
      Description/Project Rules/File URLs: 
      <br></br>
      <textarea type="text" name="addText"  style={{width: "370px", height: "170px"}} ref={inputRefDesc}>
      </textarea>
      </form>

      <br></br>
      <text style={{ color: 'red' }}>{textAlert}<br></br></text>

      <button className='newProjButton' onClick={()=> {handleClick()}}>Create New Project</button>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <button className='newCancelButton' onClick={navigateProjetosProf}>Cancel</button>


{/*
      <h2>Updated: {updatedTitle}</h2>
      <h2>Updated: {updatedChair}</h2>
      <h2>Updated: {updatedDesc}</h2>
      <h2>Updated: {updatedHour}:{updatedMin}  {updatedDay}/{updatedMonth}/{updatedYear}</h2>
*/}      
    </div>

  );
}

export default Teacher;