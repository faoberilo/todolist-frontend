import React, {useState,useEffect} from "react";
import Card from "../Card";
import Api from '../../../api/api';



const List =()=>{
    const [tarefas,setTarefas] = useState([]); 
    useEffect(()=>{
        getTarefas();
    }, [])

    const getTarefas = async ()=>{
        const request = await Api.fetchGetAll();
        const data = await request.json();
        setTarefas(data);
    }
    return (
      
      <div class="row text-center row-cols-md-3 mt-5 g-3 ">
          {tarefas.map((tarefa) => (
            <Card data={tarefa} key={tarefa._id}/>
          ))}
      </div>
        
      )
}

export default List;