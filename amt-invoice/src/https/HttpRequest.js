import axios from "axios";

const getApi = async function (url) {
  let res = await axios.get(url);
  let data = res.data;
  return data;
};

const postApi = async function (url, obj) {
  let res = await axios.post(url, obj);
  let data = res.data;
  return data;
};

const putApi = async function (url, obj) {
  let res = await axios.put(url, obj);
  let data = res.data;
  return data;
};

const deleteApi = async function (url) {
  let res = await axios.delete(url);
  let data = res.data;
  return data;
};

export { getApi, putApi, postApi, deleteApi };