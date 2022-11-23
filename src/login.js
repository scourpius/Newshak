import { useState } from 'react';
import './css/login.css'
import { login } from './restCalls.js'
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory()

  const routeToRegister = () => {
    history.push("/register")
  }

  function loginManager(e){
    e.preventDefault()
    login(username, password).then(val => {if (val) routeToRegister(); else console.log("nope")})
  }

  return (
    <div className = "login">
      <form>
        <label>Faça Login:</label>
        <input className='inputLogUser'
          type="text" 
          required 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder = "Username"
        />
        <input className='inputLogPwd'
          type="password" 
          required 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder = "Password"
        />
        <button className='log' onClick={(e) => { loginManager(e) }}>Iniciar Sessão</button>
        <button className='reg' onClick={routeToRegister}>Criar Conta</button>
      </form>
    </div>
  )
}

export default Login;