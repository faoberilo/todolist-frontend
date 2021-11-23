import './App.css';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import {Route, Routes} from 'react-router';
import Home from './pages/Home/Home'
import Cadastro from './pages/Cadastro/Cadastro';
import View from './pages/View/View';
import Editar from './pages/Editar/Editar';
function App() {
  return (
    <div >
    <Header/>
    <Routes> 
    <Route path='/' element={<Home/>}/>
    <Route path='/cadastro' element={<Cadastro/>}/>
    <Route path='/view/:id' element={<View/>}/>
    <Route path='/editar/:id' element={<Editar/>}/>

    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
