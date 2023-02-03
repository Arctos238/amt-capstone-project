import {getApi, postApi, putApi, deleteApi}  from "../https/HttpRequest";

const GetAllClients = async () => { 
    const data = await getApi('http://70.77.64.68:8083/api/clients');
    return data
}
const GetClientByFirstName = async (username) => {
    const data = await getApi('http://70.77.64.68:8083/api/clients/' + username);
    return data
}
const GetClientById = async (id) => {
    const data = await getApi('http://70.77.64.68:8083/api/clients/id/' + id);
    return data
}
const DeleteClientById = async (id) => {
    const data = await deleteApi('http://70.77.64.68:8083/api/clients/id/' + id);
    return data
}
const CreateNewClient = async (obj) => {
    const data = await postApi('http://70.77.64.68:8083/api/clients/', obj);
    return data
}
const UpdateClient = async (obj) => {
    const data = await putApi('http://70.77.64.68:8083/api/clients/', obj);
    return data
}

export {
    GetAllClients,
    GetClientById,
    GetClientByFirstName,
    DeleteClientById,
    CreateNewClient,
    UpdateClient
} 