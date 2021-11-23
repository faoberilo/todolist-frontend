import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import Api from '../../api/api';
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
    <div className="container w-50 mt-5 mr-25">
    <div className="contanier">
    <div className="card text-center text-white bg-dark mb-3">
      <h1 className="text-center my-4"><b>Título: </b>{tarefa.titulo}</h1>
      <h3 className="text-center"><b>Descricao: </b>{tarefa.descricao}</h3>
      <h4 className="text-center"><b>Prioridade: </b> {tarefa.prioridade}</h4>
      <h5 className="text-center"><b>Prazo: </b>{tarefa.prazo}</h5>
      <h6 className="text-center"><b>Data de Criação: </b>{tarefa.dataCriacao}</h6>
      <div className="text-center ">
      <div className="btn-group text-center mt-3 w-50 my-5" role="group">
            <Link to={`/editar/${tarefa._id}`} className="btn btn-light">Editar</Link>
            <button className="btn btn-danger" onClick={onOpenModal}>Excluir</button>        
      </div>
      </div>
    </div>    
    </div>
  

    
    <Modal open={open} onClose={onCloseModal} center showCloseIcon={false} >
   
        <h2> Deseja Realmente Excluir ?</h2>
        <div className="d-flex w-50 mx-auto justify-content-around">
          <button className="btn btn-danger" onClick={onCloseModal}>Não</button>
          <button className="btn btn-success" onClick={handleDelete}>Sim</button>
        
        </div>
                      
    </Modal>
    </div>
  )
}

export default View;