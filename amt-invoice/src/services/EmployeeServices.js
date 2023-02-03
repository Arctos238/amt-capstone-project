import { getApi, postApi, putApi, deleteApi} from "../https/HttpRequest";

const GetAllEmployees = async () => { 
    const data = await getApi('http://70.77.64.68:8083/api/employees');
    return data
}
const GetEmployeeByUsername = async (username) => {
    const data = await getApi('http://70.77.64.68:8083/api/employees/' + username);
    return data
}
const DeleteEmployeeByUsername = async (username) => {
    const data = await deleteApi('http://70.77.64.68:8083/api/employees/' + username);
    return data
}
const CreateNewEmployee = async (obj) => {
    const data = await postApi('http://70.77.64.68:8083/api/employees', obj);
    return data
}
const UpdateEmployee = async (obj) => {
    const data = await putApi('http://70.77.64.68:8083/api/employees', obj);
    return data
}

export {
    GetAllEmployees,
    GetEmployeeByUsername,
    DeleteEmployeeByUsername,
    CreateNewEmployee,
    UpdateEmployee
} 
