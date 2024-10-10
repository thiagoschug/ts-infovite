import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'; // Importar BrowserRouter
import Barraderolagem from './Components/Barraderolagem';
import Botaocontato from './Components/Botaocontato';
import PaginaInicio from './Components/PaginaInicio';
import Pagina1 from './Components/Pagina1';
import Header from './Components/Header'
import Pagina2 from './Components/Pagina2';



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header /> {/* Certifique-se de que o Header está dentro do BrowserRouter */}
        <Barraderolagem />
        <Botaocontato />
        <PaginaInicio />
        <Pagina1 />
        <Pagina2/>
      </BrowserRouter>
    </div>
  );
}

export default App;