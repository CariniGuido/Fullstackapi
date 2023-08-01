import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClienteService from '../services/ClienteService';

export const ListClientesComponent = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    listarClientes();
  }, []);

  const listarClientes = () => {
    ClienteService.getAllClientes()
      .then(response => {
        setClientes(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const deleteCliente = clienteId => {
    ClienteService.deleteCliente(clienteId)
      .then(response => {
        listarClientes();
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center">Lista de empleados</h2>
      <Link to="/add-cliente" className="btn btn-primary mb-2">
        Agregar cliente
      </Link>
      <table className="table table-borderer table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>APELLIDO</th>
            <th>EMAIL</th>
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(clientes) ? (
            clientes.map(cliente => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nombre}</td>
                <td>{cliente.apellido}</td>
                <td>{cliente.email}</td>
                <td>
                  <Link
                    className="btn btn-info"
                    to={`/edit-cliente/${cliente.id}`}
                  >
                    Actualizar
                  </Link>
                  <button
                    style={{ marginLeft: '10px' }}
                    className="btn btn-danger"
                    onClick={() => deleteCliente(cliente.id)}
                  >
                    Eliminar cliente
                  </button>
                </td>
              </tr>
            ))
          ) : clientes === null ? (
            <tr>
              <td colSpan="5">Cargando...</td>
            </tr>
          ) : (
            <tr>
              <td colSpan="5">Error al cargar los datos.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListClientesComponent;