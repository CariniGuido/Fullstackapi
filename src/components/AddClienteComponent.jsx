import React, { useState } from 'react';
import ClienteService from '../services/ClienteService';
import { useNavigate, Link } from 'react-router-dom';

function AddClienteComponent() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();


  const saveCliente = (e) => {
    e.preventDefault();
    const cliente = { nombre, apellido, email }
    ClienteService.createCliente(cliente).then((response) => {

      navigate("/clientes");
    }).catch(error => {
      console.log(error)
    })
  }
  return (

    <div>
      <div className='container'>
        <div className='row'>

          <div className='card col-md-6 offset-dd3 offset-dd3'>
            <h2 className='text-center'>Registro de clientes</h2>
            <div card-body>


              <form >
                <div className='form-group mb-2'>
                  <label className='form-label'>Nombre</label>
                  <input type="text" placeholder='digite su nombre'
                    name='nombre'
                    className='form-control'
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>

                <div className='form-group mb-2'>
                  <label className='form-label'>Apellido</label>
                  <input type="text" placeholder='digite su apellido'
                    name='apellido'
                    className='form-control'
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                  />
                </div>

                <div className='form-group mb-2'>
                  <label className='form-label'>Email</label>
                  <input type="email" placeholder='digite su email'
                    name='email'
                    className='form-control'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button className='btn btn-success' onClick={(e) => saveCliente(e)}>Guardar</button>
                &nbsp; &nbsp;
                 <Link to="/clientes" className='btn btn-danger'> Cancelar </Link>


              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddClienteComponent
