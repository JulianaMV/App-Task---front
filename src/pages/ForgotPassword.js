import React, { useState } from "react";
import 'regenerator-runtime/runtime'
import api from '../services/api'


const ForgotPassword = () => {

    const [email, setEmail] = useState();

    async function handleForg (e) {
        e.preventDefault();
        try{
            const response = await api.post('/auth/forgot_password', { email});
            console.log(response);
        }catch (error){
            console.error(error);
        }
        
    }

    return(
        <div>
            <h1 className="titulo">Recuperação de senha</h1>
            <div className="conteudo" >
                <form>
                    <input 
                     type="email" 
                     name="email"
                     className="form-control"
                     placeholder="Seu email" 
                     onChange={e=> setEmail(e.target.value)}
                    /> 
                    <button type="submit" 
                     className="btn btn-primary" onClick={handleForg}>Enviar email de recuperação</button>
                </form>  
            </div>
        </div>
    )
}

export default ForgotPassword;

