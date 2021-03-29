import React, { useState } from "react";
import {useHistory } from 'react-router-dom';
import api from '../services/api';

const Register = () => {

    const [msg, setMsg] = useState('');
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const[nome, setNome] = useState()
    const history = useHistory();

    async function handleReg (e) {
        e.preventDefault();
        try{
            const response = await api.post('/auth/register', { nome, email, password});
            console.log(response);
            alert('user criado com sucesso')
            history.push('/login');
        }catch (error){
            console.error(error);
            setMsg("User já cadastrado")
        }
        
    }

    
    return(   
        <div>
            <h1 className="titulo">Cadastro</h1>
            <div className='content'>
            <form>
                    <input
                     required
                     type="text" 
                     name="nome"
                     className="form-control"
                     placeholder="Seu nome" 
                     onChange={e=> setNome(e.target.value)}
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
                     placeholder="Senha" 
                     onChange={e=> setPassword(e.target.value)}
                    />
                    <button type="submit" 
                     className="btn btn-primary" onClick={handleReg}>Cadastrar</button>
                </form>
                {(msg!= "") ? (<div className='message'>{msg}</div>): ""}
            </div>
        </div>
    )
}
export default Register;

