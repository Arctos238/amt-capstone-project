import useDelete from '../hooks/DeleteHttpRequest';
import useGet  from '../hooks/GetHttpRequest';
import usePost from '../hooks/PostHttpRequest';
import usePut from '../hooks/PutHttpRequest';

const GetAllClients = () => { 
    const {data, loading, error} = useGet('http://70.77.64.68:8083/api/clients');
    return {data, loading, error}
}
const GetClientByFirstName = (username) => {
    const {data, loading, error} = useGet('http://70.77.64.68:8083/api/clients/' + username);
    return {data, loading, error}
}
const GetClientById = (id) => {
    const {data, loading, error} = useGet('http://70.77.64.68:8083/api/clients/id/' + id);
    return {data, loading, error}
}
const DeleteClientById = (id) => {
    const {data, loading, error} = useDelete('http://70.77.64.68:8083/api/clients/id/' + id);
    return {data, loading, error}
}
const CreateNewClient = (obj) => {
    const {data, loading, error} = usePost('http://70.77.64.68:8083/api/clients/', obj);
    return {data, loading, error}
}
const UpdateClient = (obj) => {
    const {data, loading, error} = usePut('http://70.77.64.68:8083/api/clients/', obj);
    return {data, loading, error}
}

const ClientServices = {
    GetAllClients,
    GetClientById,
    GetClientByFirstName,
    DeleteClientById,
    CreateNewClient,
    UpdateClient
} 

export default ClientServices;