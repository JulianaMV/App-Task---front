import React, { useState } from "react";
import {useHistory } from 'react-router-dom';
import api from '../services/api';

const Reset = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const[token, setToken] = useState()
    const history = useHistory();

    async function handleReset (e) {
        e.preventDefault();
        try{
            const response = await api.post('/auth/reset_password', {email, password, token});
            console.log(response);
            history.push('/login');
        }catch (error){
            console.error(error);
        }
        
    }

    
    return(   
        <div>
            <h1 className="titulo">Definição de nova senha</h1>
            <div className='content'>
            <form>
                    <input
                     required
                     type="text" 
                     name="token"
                     className="form-control"
                     placeholder="Token" 
                     onChange={e=> setToken(e.target.value)}
                    /> 
                    <input 
                     required
                     type="email" 
                     name="email"
                     className="form-control"
                     placeholder="Seu email" 
                     onChange={e=> setEmail(e.target.value)}
                    />                   
                    <input 
                     required
                     type="password" 
                     name="password"
                     className="form-control"
                     placeholder="Nova Senha" 
                     onChange={e=> setPassword(e.target.value)}
                    />
                    <button type="submit" 
                     className="btn btn-primary" onClick={handleReset}>Redefinir senha</button>
                </form>
            </div>
        </div>
    )
}
export default Reset;