import { getApi, postApi, putApi, deleteApi } from "../https/HttpRequest";

const GetAllInvoiceItems = async () => {
  const data = await getApi("http://70.77.64.68:8083/api/invoiceitems");
  return data;
};
const GetInvoiceItemsByInvoiceId = async (id) => {
  const data = await getApi("http://70.77.64.68:8083/api/invoiceitems/" + id);
  return data;
};
const GetInvoiceItemById = async (id) => {
  const data = await getApi("http://70.77.64.68:8083/api/invoiceitems/id/" + id);
  return data;
};
const DeleteInvoiceItemById = async (id) => {
  const data = await deleteApi("http://70.77.64.68:8083/api/invoiceitems/id/" + id);
  return data;
};
const CreateNewInvoiceItem = async (obj) => {
  const data = await postApi("http://70.77.64.68:8083/api/invoiceitems", obj);
  return data;
};
const UpdateInvoiceItem = async (obj) => {
  const data = await putApi("http://70.77.64.68:8083/api/invoiceitems", obj);
  return data;
};

export {
  GetAllInvoiceItems,
  GetInvoiceItemById,
  GetInvoiceItemsByInvoiceId,
  DeleteInvoiceItemById,
  CreateNewInvoiceItem,
  UpdateInvoiceItem,
};