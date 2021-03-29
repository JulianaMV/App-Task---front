import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import api from '../services/api';
import {login} from '../services/auth';



const Login = () => {
    const [msg, setMsg] = useState('');

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();

    async function handleLogin (e) {
        e.preventDefault();
        try{
            const response = await api.post('/auth/authenticate', { email, password});
            login(response.data.token)
            history.push('/tasks');
        }catch (error){
            console.error(error);
            setMsg("Inválido")
        }
        
    }

    //mostrar ou não senha

    const [values, setValues] = useState({
        password: '',
        showPassword: false,
      });

      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    

    return(
        <div>
            <h1 className="titulo">login</h1>
            <div className='conteudo'>
                <form>
                    <input 
                    required
                     type="email" 
                     name="email"
                     id="email"
                     className="form-control"
                     placeholder="Seu email" 
                     onChange={e=> setEmail(e.target.value)}
                    />
                    <label className='show' htmlFor='password'>
                    <i
                    onClick={handleClickShowPassword}
                    edge="end"
                    >
                     {values.showPassword ? <i className="far fa-eye"/> : <i className="far fa-eye-slash"/>}
                    </i>
                        
                    </label>
                    <input
                    required
                     name="password"
                     id="password"
                     className="form-control"
                     placeholder="Senha" 
                     onChange={e=> setPassword(e.target.value)}
                     type={values.showPassword ? 'text' : 'password'}
                    />
                    <button type="submit" 
                     className="btn btn-primary" onClick={handleLogin}>Login</button>
                </form>
                {(msg!= "") ? (<div className='message'>{msg}</div>): ""}
                <div>
                    <Link to="/forgotpassword" className='forgotPassword'>Esqueci minha senha!</Link>
                </div>
             </div>
        </div>
    )
}
export default Login;

