import { useState } from 'react';
import './css/register.css'
import banner from './Images/banner.png'
import { register } from './restCalls.js'
import { useHistory } from 'react-router-dom';
import PopupI from './Component/popup2'
import PopupH from './Component/popup2'
import infoText from "./text"

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [university, setUniversity] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [popupH, setPopupH] = useState(false);
  const [popupI, setPopupI] = useState(false);

  const history = useHistory()

  const routeToLogin = () => {
    history.push("/")
  }

  function errorHandle() {
    if (username === "" || password === "" || confirmation === "" || name === "" || email === "" || university === ""){
      document.getElementById("alert").innerHTML = "Please fill out register form."
      document.getElementById("alert").style.display = "block"
      return true
    }

    if (password !== confirmation){
      document.getElementById("alert").innerHTML = "Password and Confirmation must match."
      document.getElementById("alert").style.display = "block"
      return true
    }

    return false
  }

  function registerFail(){
    document.getElementById("alert").innerHTML = "Username already exists."
    document.getElementById("alert").style.display = "block"
  }

  function registerSucess(){
    document.getElementById("alert2").innerHTML = "Registration successful."
    document.getElementById("alert2").style.display = "block"
  }

  function registerManager(e){
    e.preventDefault()
    document.getElementById("alert").style.display = "none"
    document.getElementById("alert2").style.display = "none"
    if (!errorHandle())
      register(username, name, email, university, password).then(val => {if (val) registerSucess(); else registerFail()})
  }

  const close = () =>{
    document.getElementById("alert").style.display = "none";
  }

  const close2 = () =>{
    document.getElementById("alert2").style.display = "none";
  }

  return (
    <><div className='banner'><img src ={banner} alt='Newshak'/></div>
    <div id="alert" className="alertR" onClick={close}></div> 
    <div id="alert2" className="alert2" onClick={close2}></div>
    <div className = "register">
        <label>Tell us something about yourself:</label>
        <div className='cols'>
          <div className = 'col1'>
            <input className='inputRegUser'
              type="text" 
              required 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder = "Username"
            />
            <input
              type="text" 
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder = "Name"
            />
            <input className='inputRegEmail'
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder = "Email"
            />
          </div>
          <div className = 'col2'>
            <input className='inputRegUser'
              type="text" 
              required 
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              placeholder = "University"
            />
            <input
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder = "Password"
            />
            <input className='inputRegEmail'
              type="password" 
              required 
              value={confirmation}
              onChange={(e) => setConfirmation(e.target.value)}
              placeholder = "Confirm Password"
            />
          </div>
        </div>
        <button className='reg2' onClick={(e) => { registerManager(e); } }>Register</button>
        <button className='log2' onClick={routeToLogin}>Login</button>
        <button className='help2' onClick={() => {setPopupH(true)}}>?</button>
        <button className='info2' onClick={() => {setPopupI(true)}}>i</button>
    </div>
    <div>
    <PopupI trigger = {popupI} setTrigger={setPopupI}>
            <h3 className='inf'>{infoText}</h3>
        </PopupI>
        <PopupH trigger = {popupH} setTrigger={setPopupH}>
          <h3>Having any problems? Contacts us at:</h3>
          <br></br>
          <h3 className='hel'>Email: support.new@newshak.com</h3>
          <h3 className='hel'>Facebook: facebook.com/Newshak/</h3>
        </PopupH>  
    </div></>
  )
}

export default Register;