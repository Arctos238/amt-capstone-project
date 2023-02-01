import useDelete from '../hooks/DeleteHttpRequest';
import useGet  from '../hooks/GetHttpRequest';
import usePost from '../hooks/PostHttpRequest';
import usePut from '../hooks/PutHttpRequest';

const GetAllProjects = () => { 
    const {data, loading, error} = useGet('http://70.77.64.68:8083/api/projects');
    return {data, loading, error}
}
const GetProjectByClientId = (id) => {
    const {data, loading, error} = useGet('http://70.77.64.68:8083/api/projects/' + id);
    return {data, loading, error}
}
const GetProjectById = (id) => {
    const {data, loading, error} = useGet('http://70.77.64.68:8083/api/projects/' + id);
    return {data, loading, error}
}
const DeleteProjectById = (id) => {
    const {data, loading, error} = useDelete('http://70.77.64.68:8083/api/projects/id/' + id);
    return {data, loading, error}
}
const CreateNewProject = (obj) => {
    const {data, loading, error} = usePost('http://70.77.64.68:8083/api/projects/', obj);
    return {data, loading, error}
}
const UpdateProject = (obj) => {
    const {data, loading, error} = usePut('http://70.77.64.68:8083/api/projects/', obj);
    return {data, loading, error}
}

const ProjectServices = {
    GetAllProjects,
    GetProjectByClientId,
    GetProjectById,
    DeleteProjectById,
    CreateNewProject,
    UpdateProject
} 

export default ProjectServices;