import useDelete from '../hooks/DeleteHttpRequest';
import useGet  from '../hooks/GetHttpRequest';
import usePost from '../hooks/PostHttpRequest';
import usePut from '../hooks/PutHttpRequest';

const GetAllEmployees = () => { 
    const {data, loading, error} = useGet('http://70.77.64.68:8083/api/employees');
    return {data, loading, error}
}
const GetEmployeeByUsername = (username) => {
    const {data, loading, error} = useGet('http://70.77.64.68:8083/api/employees/' + username);
    return {data, loading, error}
}
const DeleteEmployeeByUsername = (username) => {
    const {data, loading, error} = useDelete('http://70.77.64.68:8083/api/employees/' + username);
    return {data, loading, error}
}
const CreateNewEmployee = (obj) => {
    const {data, loading, error} = usePost('http://70.77.64.68:8083/api/employees', obj);
    return {data, loading, error}
}
const UpdateEmployee = (obj) => {
    const {data, loading, error} = usePut('http://70.77.64.68:8083/api/employees', obj);
    return {data, loading, error}
}

const EmployeeServices = {
    GetAllEmployees,
    GetEmployeeByUsername,
    DeleteEmployeeByUsername,
    CreateNewEmployee,
    UpdateEmployee
} 

export default EmployeeServices;