import React from "react";


const Home = () => 
<div>
    <h1 className="titulo">App Tarefas</h1>
    <div className="conteudo" >
        <div className='button'>
            <a className="btn btn-primary" href='/login' role="button">Login</a>
        </div>
        <div className='button'>
        <a className="btn btn-primary" href='/register' role="button">Register</a>
        </div>
    </div>
</div>

export default Home;

