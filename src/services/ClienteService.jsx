import axios from "axios";

const Cliente_BASE_REST_API_URL = "http://localhost:8080/api/v1/clientes";

class ClienteService {
    getAllClientes() {
        return axios.get(Cliente_BASE_REST_API_URL, {
            headers: {
                "Access-Control-Allow-Headers": "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
            }
        });
    }

    createCliente(cliente) {
        return axios.post(Cliente_BASE_REST_API_URL, cliente, {
            headers: {
                "Access-Control-Allow-Headers": "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
            }
        });
    }

    getClienteById(clienteId) {
        return axios.get(Cliente_BASE_REST_API_URL + "/" + clienteId, {
            headers: {
                "Access-Control-Allow-Headers": "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
            }
        });
    }

    updateCliente(clienteId, cliente) {
        return axios.put(Cliente_BASE_REST_API_URL + "/" + clienteId, cliente, {
            headers: {
                "Access-Control-Allow-Headers": "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
            }
        });
    }

    deleteCliente(clienteId) {
        return axios.delete(Cliente_BASE_REST_API_URL + "/" + clienteId, {
            headers: {
                "Access-Control-Allow-Headers": "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
            }
        });
    }
}

export default new ClienteService();
