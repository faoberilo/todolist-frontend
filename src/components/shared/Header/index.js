import React from "react";
import './Header.css';
import {Link} from 'react-router-dom';

const Header = (props) => {
  
    return(
        <header>
            <Link to='/'><button type="button" class="btn btn-outline-light">Home</button></Link>
            <h1>Lista de Tarefas</h1>
            <Link to='/cadastro'><button type="button" class="btn btn-outline-light">Cadastro</button></Link>
         </header>
    )
}

export default Header;
