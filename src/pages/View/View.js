import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import Api from '../../api/api';
import './View.css';
import ReactDOM from 'react-dom';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';




const View = () => {
  const navigate = useNavigate();

  const [tarefa,setTarefa] = useState({}); 
  useEffect(() => {
      getTarefaById();
  }, []);

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);


  const { id } = useParams();
  
    const getTarefaById = async () => {
    const request = await Api.fetchGetById(id);
    const tarefa = await request.json();
    setTarefa(tarefa);
  }

  const handleDelete = async() => {
    const response = await Api.fetchDelete(id);
    if(response.status === 500) {
      alert('ERRO NO SERVIDOR')
    }
    const result = await response.json();
    if(result.error) {
      console.log(result.error);
    }else {
      alert(result.message);
      navigate('/');
    }
  }

 

  return (
    <div class="caixa1">
    <div class="caixa2">
            <h1 ><b>Titulo: </b>{tarefa.titulo}</h1>
            <h3 ><b>Descricao: </b>{tarefa.descricao}</h3>
            <h4 ><b>Prioridade: </b> {tarefa.prioridade}</h4>
            <h5 ><b>Status: </b>{tarefa.status}</h5>
            <h5 ><b>Prazo: </b>{tarefa.prazo}</h5>
            <h6 ><b>Data de Criação: </b>{tarefa.dataCriacao}</h6>
            <div className="btn-group mt-3">
            <Link to={`/editar/${tarefa._id}`} className="btn btn-light">Editar</Link>
            <button className="btn btn-danger" onClick={onOpenModal}>Excluir</button>        
    </div>
    </div>
    <Modal open={open} onClose={onCloseModal} center showCloseIcon={false} >
   
        <h2> Deseja Realmente Excluir ?</h2>
        <div class="caixa3">
          <button className="btn btn-danger" onClick={onCloseModal}>Não</button>
          <button className="btn btn-success" onClick={handleDelete}>Sim</button>
        
        </div>
                      
    </Modal>
    </div>
  )
}

export default View;