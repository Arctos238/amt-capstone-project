import { getApi, postApi, putApi, deleteApi } from "../https/HttpRequest";

const GetAllInvoices = async () => {
  const data = await getApi("http://70.77.64.68:8083/api/invoices");
  return data;
};
const GetInvoicesByProjectId = async (id) => {
  const data = await getApi("http://70.77.64.68:8083/api/invoices/" + id);
  return data;
};
const GetInvoiceById = async (id) => {
  const data = await getApi("http://70.77.64.68:8083/api/invoices/id/" + id);
  return data;
};
const DeleteInvoiceById = async (id) => {
  const data = await deleteApi("http://70.77.64.68:8083/api/invoices/id/" + id);
  return data;
};
const CreateNewInvoice = async (obj) => {
  const data = await postApi("http://70.77.64.68:8083/api/invoices", obj);
  return data;
};
const UpdateInvoice = async (obj) => {
  const data = await putApi("http://70.77.64.68:8083/api/invoices", obj);
  return data;
};

export {
  GetAllInvoices,
  GetInvoiceById,
  GetInvoicesByProjectId,
  DeleteInvoiceById,
  CreateNewInvoice,
  UpdateInvoice,
};