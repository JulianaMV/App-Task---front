import React, { useState, useEffect} from "react";
import Card from "./card.js";
import 'regenerator-runtime/runtime'
import api from '../../services/api'


const Tasks = () => {
    
    const [data, setData] = useState([]);

        async function getTasks() {
            try{
                const response = await api.get('/task')
                setData([...response.data.tasks])
            }catch(error){
                console.error(error);
            }
        }

        useEffect(()=>{
            getTasks();
        },) //[]só execulta quando montar

    
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    async function handleTask (e) {
        e.preventDefault();
        try{
            const response = await api.post('/task', { title, description});
            console.log(response.data.task);
        }catch (error){
            console.error(error);
        }
       

    }

    return(
        <div>
            <h1 className="titulo">Tarefas</h1>
            <div className="cont" >
            <form className='formm'>
                    <input 
                    required
                     type="text" 
                     name="title"
                     id="title"
                     className="form-control"
                     placeholder="Tarefa" 
                     onChange={e=> setTitle(e.target.value)}
                    />
                    <input
                    required
                     type="text" 
                     name="description"
                     id="description"
                     className="form-control"
                     placeholder="Descrição" 
                     onChange={e=> setDescription(e.target.value)}
                    />
                    <button type="submit" 
                     className="btn btn-primary" onClick={handleTask}>Criar tarefa</button>
                </form>
                <div id='itens'>
                    { 
                    data &&
                    data.map((task) => (
                        <Card  
                            key={task._id}
                            title={task.title}
                            description={task.description}
                            _id={task._id}
                            completed={task.completed}
                        />
                    )) }
                </div>
            </div>
        </div>
    )
}

export default Tasks;