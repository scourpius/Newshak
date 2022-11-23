import { useState } from 'react';
import './css/register.css'
import { register } from './restCalls.js'
import { useHistory } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [university, setUniversity] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const history = useHistory()

  const routeToLogin = () => {
    history.push("/")
  }

  function registerManager(e){
    e.preventDefault()
    if (confirmation === password)
      register(username, name, email, university, password).then(val => {if (val) routeToLogin(); else console.log("nope")})
    else
      console.log("Mismatch")
  }

  return (
    <div className = "register">
      <form>
        <label>Diga-nos algo sobre si:</label>
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
            placeholder = "Nome"
          />
          <input className='inputRegEmail'
            type="text" 
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder = "Username"
          />
          <input
            type="text" 
            required 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder = "Nome"
          />
          <input className='inputRegEmail'
            type="text" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder = "Email"
          />
        </div>
        <button className='log2' onClick={(e) => { registerManager(e) }}>Confirmar</button>
        <button className='reg2' onClick={routeToLogin}>Fazer Login</button>
      </form>
    </div>
  )
}

export default Register;