import { useState } from 'react';
import './css/login.css'
import banner from './Images/banner.png'
import { login } from './restCalls.js'
import { useHistory } from 'react-router-dom';
import PopupI from './Component/popup'
import PopupH from './Component/popup'
import infoText from "./text"

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [popupH, setPopupH] = useState(false);
  const [popupI, setPopupI] = useState(false);
  const history = useHistory()

  const routeToRegister = () => {
    history.push("/register")
  }

  function routeToPage() {
    var user = JSON.parse(localStorage.getItem('user'))
    //TODO push page to dashboard
    if (user.role === "Student")
      history.push("/")
    else
      history.push("/")
  }

  function errorHandle() {
    if (username === "" || password === ""){
      document.getElementById("alert").innerHTML = "Please fill out login form."
      document.getElementById("alert").style.display = "block"
      return true
    }

    return false
  }

  function loginFail(){
    document.getElementById("alert").innerHTML = "Username or Password incorrect."
    document.getElementById("alert").style.display = "block"
  }

  function loginManager(e){
    e.preventDefault()
    if (!errorHandle())
      login(username, password).then(res => {if (res) routeToPage(); else loginFail()})
  }

  const close = () =>{
    document.getElementById("alert").style.display = "none";
  }

  return (
    <><div className='banner'><img src ={banner} alt='Newshak'/></div>
     <div id="alert" className="alert" onClick={close}></div> 
    <div className="login">
        <label>Login:</label>
        <input className='inputLogUser'
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username" />
        <input className='inputLogPwd'
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password" />
        <button className='log' onClick={(e) => { loginManager(e); } }>Login</button>
        <button className='reg' onClick={routeToRegister}>Register an Account</button>
        <button className='help' onClick={() => {setPopupH(true)}}>?</button>
        <button className='info' onClick={() => {setPopupI(true)}}>i</button>
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

export default Login;