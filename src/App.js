import React from 'react';
import './App.css';
import ListClientesComponent from './components/ListClientesComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddClienteComponent from './components/AddClienteComponent';

function App() {
  return (
    <BrowserRouter> {/* Envuelve todo el componente App con BrowserRouter */}
      <div>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route exact path="/" element={<ListClientesComponent />} />
            <Route path="/clientes" element={<ListClientesComponent />} />
            <Route path="/add-cliente" element={<AddClienteComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;