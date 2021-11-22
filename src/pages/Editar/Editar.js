import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Api from "../../api/api";


const Editar = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [tarefa, setTarefa] = useState({});

  useEffect(() => {
    getTarefaById();
  }, [])

  const getTarefaById = async () => {
    const request = await Api.fetchGetById(id);
    const tarefa = await request.json();
    setTarefa(tarefa);
  };

  const handleFieldsChange = (evento) => {
    const campos = { ...tarefa }

    campos[evento.target.name] = evento.target.value;

    setTarefa(campos);

  }

  const handleSubmit= async (evento)=>{
    evento.preventDefault();
    const request = await Api.fetchPut(tarefa,id);
    if(request.status === 500) {
      alert('ERRO NO SERVIDOR')
    }
    const result = await request.json();
    if(result.error) {
      console.log(result.error);
    }else {
      alert(result.message);
      navigate(`/view/${id}`);
    }
  }
  return (
    <div class="cadastro">
      <h3>Editar Tarefa</h3>
      <form onSubmit={handleSubmit}>
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="titulo" name="titulo" placeholder="titulo" onChange={handleFieldsChange} value={tarefa.titulo} required/>
        <label for="titulo">Título</label>
      </div>
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="descricao" name="descricao" placeholder="descricao" onChange={handleFieldsChange} value={tarefa.descricao} required/>
        <label for="capa">Descrição</label>
      </div>
      <div class="form-floating mb-3">
  <select class="form-select mb-3" id="prioridade" name="prioridade" aria-label="prioridade" onChange={handleFieldsChange} value={tarefa.prioridade} required>
    <option selected>Prioridade</option>
    <option value="Baixa">Baixa</option>
    <option value="Media">Media</option>
    <option value="Alta">Alta</option>
  </select>
  <label for="floatingSelect">Prioridade</label>
    </div>
    <div class="form-floating mb-3">
  <select class="form-select mb-3" id="status" name="status" aria-label="status" onChange={handleFieldsChange} value={tarefa.status} required>
    <option selected>Status</option>
    <option value="Fazer">Fazer</option>
    <option value="Fazendo">Fazendo</option>
    <option value="Feito">Feito</option>
  </select>
  <label for="floatingSelect">Status</label>
    </div>
    <div class="form-floating mb-3">
        <input type="date" class="form-control" id="prazo" name ="prazo" placeholder="prazo" onChange={handleFieldsChange} value={tarefa.prazo} required/>
        <label for="prazo">Prazo</label>
      </div>
      
      <button class="btn btn-light" type="submit">Editar</button>
      <Link to={`/view/${id}`}><button type="button" className="btn btn-light"> Voltar</button></Link>
      
    </form>
    </div>
  );
};

export default Editar;