import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
  const tarefa = props.data;
  return (    
      <Link to={`/view/${tarefa._id}`}>
        <div class="btn btn-dark w-50">
          <h5>{tarefa.titulo}</h5>
        </div>
      </Link>    
  )
} 

export default Card