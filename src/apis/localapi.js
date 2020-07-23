import axios from "axios";

const localApi = axios.create({
  baseURL: "http://localhost:3000/",
});

localApi.interceptors.request.use((request) => {
  const { token } = localStorage.get;

  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }

  return request;
});

export default localApi;
