import { getApi, postApi, deleteApi } from "../https/HttpRequest";

const GetImageById = async (id) => {
  const data = await getApi("http://70.77.64.68:8083/api/images/id/" + id);
  return data;
};
const DeleteImageById = async (id) => {
  const data = await deleteApi("http://70.77.64.68:8083/api/images/id/" + id);
  return data;
};
const CreateNewImage = async (formData) => {
  const data = await postApi("http://70.77.64.68:8083/api/images", formData);
  return data;
};

export {
  GetImageById,
  DeleteImageById,
  CreateNewImage
};