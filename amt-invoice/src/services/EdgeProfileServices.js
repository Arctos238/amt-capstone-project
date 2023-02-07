import { getApi, postApi, putApi, deleteApi } from "../https/HttpRequest";

const GetAllEdgeProfiles = async () => {
  const data = await getApi("http://70.77.64.68:8083/api/edgeprofiles");
  return data;
};
const GetEdgeProfileById = async (id) => {
  const data = await getApi("http://70.77.64.68:8083/api/edgeprofiles/" + id);
  return data;
};
const DeleteEdgeProfileById = async (id) => {
  const data = await deleteApi("http://70.77.64.68:8083/api/edgeprofiles/" + id);
  return data;
};
const CreateNewEdgeProfile = async (obj) => {
  const data = await postApi("http://70.77.64.68:8083/api/edgeprofiles", obj);
  return data;
};
const UpdateEdgeProfile = async (obj) => {
  const data = await putApi("http://70.77.64.68:8083/api/edgeprofiles", obj);
  return data;
};

export {
  GetAllEdgeProfiles,
  GetEdgeProfileById,
  DeleteEdgeProfileById,
  CreateNewEdgeProfile,
  UpdateEdgeProfile,
};