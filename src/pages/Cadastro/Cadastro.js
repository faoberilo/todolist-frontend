import React from "react";
import "./Cadastro.css";
import Api from '../../api/api';
import { useNavigate, Link } from 'react-router-dom';

const Cadastro = () => {
  const navigate = useNavigate();
;

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const titulo=evento.target.titulo.value;
    const descricao=evento.target.descricao.value;
    const prioridade=evento.target.prioridade.value;
    const status=evento.target.status.value;
    const prazo=evento.target.prazo.value;
   
    const tarefa = {
      titulo,
      descricao,
      prioridade,
      status,
      prazo
    }
    const request = await Api.fetchPost(tarefa);
    if(request.status === 500) {
      alert('ERRO NO SERVIDOR')
    }
    const result = await request.json();
    if(result.error) {
      console.log(result.error);
    }else {
      alert(result.message);
      navigate('/');
    }
  }
  return (
    <div class="cadastro">
      <h3>Adicionar Tarefa</h3>
      <form onSubmit={handleSubmit}>
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="titulo" name="titulo" placeholder="titulo" required/>
        <label for="titulo">Título</label>
      </div>
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="descricao" name="descricao" placeholder="descricao" required/>
        <label for="capa">Descrição</label>
      </div>
      <div class="form-floating mb-3">
  <select class="form-select mb-3" id="prioridade" name="prioridade" aria-label="prioridade" required>
    <option selected></option>
    <option value="Baixa">Baixa</option>
    <option value="Media">Media</option>
    <option value="Alta">Alta</option>
  </select>
  <label for="floatingSelect">Prioridade</label>
    </div>
    <div class="form-floating mb-3">
  <select class="form-select mb-3" id="status" name="status" aria-label="status" required>
    <option selected></option>
    <option value="Fazer">Fazer</option>
    <option value="Fazendo">Fazendo</option>
    <option value="Feito">Feito</option>
  </select>
  <label for="floatingSelect">Status</label>
    </div>
    <div class="form-floating mb-3">
        <input type="date" min="2021-11-22"class="form-control" id="prazo" name ="prazo"placeholder="prazo" required/>
        <label for="prazo">Prazo</label>
      </div>
      
      <button class="btn btn-light" type="submit">Adicionar</button>
      <Link to='/'><button type="button" className="btn btn-light"> Voltar</button></Link>

    </form>
    </div>
  );
};

export default Cadastro;
