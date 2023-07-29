import React, { useState } from 'react';
import ClienteService from '../services/ClienteService';
import { useNavigate, Link, useParams } from 'react-router-dom';

import { useEffect } from 'react';
function AddClienteComponent() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
const {id} = useParams (); 

  const saveOrUpdateCliente = (e) => {
    e.preventDefault();
    const cliente = { nombre, apellido, email }

    if (id) {
      ClienteService.updateCliente(id,cliente).then((response) => {

        navigate("/clientes");
      }).catch(error => {
        console.log(error)
      })
    }
    else {
      ClienteService.createCliente(cliente).then((response) => {

        navigate("/clientes");
      }).catch(error => {
        console.log(error)
      })
    }
    

  }
  

  useEffect(() => {

    ClienteService.getClienteById(id).then((response) => { 
    setNombre(response.data.nombre);
    setApellido(response.data.apellido);
    setEmail(response.data.email);

    }).catch(error=> {
      console.log(error);
    })
  },[id])
  
  const title = () => {
    if (id)  {
    return <h2 className='text-center'>Actualizar cliente</h2>;
  } 
   else {
    return  <h2 className='text-center'>Agregar cliente</h2>;
  }
  }
  return (

    <div>
      <div className='container'>
        <div className='row'>

          <div className='card col-md-6 offset-dd3 offset-dd3'>
            <h2 className='text-center'>
              {
                title()
              }
            </h2>
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
                <button className='btn btn-success' onClick={(e) => saveOrUpdateCliente(e)}>Guardar</button>
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
