import React from 'react'
import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
  const tarefa = props.data;
  return (
    
      <Link to={`/view/${tarefa._id}`}>
        <div class="card">
          <h5>{tarefa.titulo}</h5>
        </div>
      </Link>
    
    
  )
} 

export default Card