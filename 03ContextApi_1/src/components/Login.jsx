import React,{useState, useContext} from 'react';
import UserContext from '../context/UserContext';

function Login() {
    const [ userName, setUserName ] = useState('');
    const [password, setPassword ] = useState('');
    const { setUser } = useContext(UserContext);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({userName,password});
    }
  return (
    <div>
        <h1>Login</h1>
        <input type="text" placeholder='UseName' value={userName} onChange={(e)=>{setUserName(e.target.value)} } /> <br />
        <input type="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)} } /> <br />
        <button onClick={(e)=>{
            handleSubmit(e)
        }}></button>

    </div>
  )
}

export default Login