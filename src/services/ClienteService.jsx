import axios from "axios";

const Cliente_BASE_REST_API_URL = "http://localhost:8080/api/v1/clientes";

class ClienteService {
getAllClientes () {

    return axios.get (Cliente_BASE_REST_API_URL)
}

}

export default new ClienteService ();