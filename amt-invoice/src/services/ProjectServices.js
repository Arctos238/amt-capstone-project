import { getApi, postApi, putApi, deleteApi } from "../https/HttpRequest";

const GetAllProjects = async () => { 
    const data = await getApi('http://70.77.64.68:8083/api/projects');
    return data
}
const GetProjectByClientId = async (id) => {
    const data = await getApi('http://70.77.64.68:8083/api/projects/' + id);
    return data
}
const GetProjectById = async (id) => {
    const data = await getApi('http://70.77.64.68:8083/api/projects/' + id);
    return data
}
const DeleteProjectById = async (id) => {
    const data = await deleteApi('http://70.77.64.68:8083/api/projects/id/' + id);
    return data
}
const CreateNewProject = async (obj) => {
    const data = await postApi('http://70.77.64.68:8083/api/projects/', obj);
    return data
}
const UpdateProject = async (obj) => {
    const data = await putApi('http://70.77.64.68:8083/api/projects/', obj);
    return data
}

export {
    GetAllProjects,
    GetProjectByClientId,
    GetProjectById,
    DeleteProjectById,
    CreateNewProject,
    UpdateProject
} 
