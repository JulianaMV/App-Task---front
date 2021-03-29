import React, { useEffect, useState } from "react";
import 'regenerator-runtime/runtime'
import api from '../../services/api'


const Card = (props)=> {

    const [task, setTask] = useState(props);

    async function handleDelete (e) {
        e.preventDefault();          
        try{
            console.log(task._id)
            const response = await api.delete(`/task/${task._id}`);
            console.log(response);
        }catch (error){
            console.error(error);
        }  
    }


    useEffect(()=>{
        setTask(props)
    },[props])

      //prencher ou não check

      const [values, setValues] = useState(false);


      async function handleComplet () {         
        try{
            setTask({...task, completed:!task.completed});
            const response = await api.put(`/task/${task._id}`, {completed: !task.completed});
            console.log(response);
        }catch (error){
            console.error(error);
        }
        
    }
    return (
        <div className='conteu' >
              <div className="delete">
                <label>
                <i className="far fa-trash-alt" onClick={handleDelete}></i>
                </label>
            
            </div>
            <label className='showw' htmlFor='delete'>
                    <i
                    onClick={handleComplet}
                    edge="end"
                    >
                     {task.completed ? <i className="far fa-check-square"></i> : <i className="far fa-square"></i>}
                    </i>
                    </label>
            <div className="tit">
                <label>
                    {task.title}
                </label>
            </div>
            <div className="desc">
                <label>
                    {task.description}
                </label>
            </div>
          
        </div>
    );
}
export default Card;