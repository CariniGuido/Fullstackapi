import axios from "axios";

const Cliente_BASE_REST_API_URL = "http://localhost:8080/api/v1/clientes";

class ClienteService {
    getAllClientes() {

        return axios.get(Cliente_BASE_REST_API_URL)
    }

    createCliente(cliente) {
        return axios.post(Cliente_BASE_REST_API_URL, cliente);
    }
    getClienteById(clienteId) {
        return axios.get(Cliente_BASE_REST_API_URL + "/" + clienteId);
    }

    updateCliente(clienteId,cliente) {
        return axios.put(Cliente_BASE_REST_API_URL + "/" + clienteId, cliente);
    }
    deleteCliente (clienteId){
        return axios.delete(Cliente_BASE_REST_API_URL + "/" + clienteId);

    }
}

export default new ClienteService();