import axios from "axios";
let baseURL = "https://projectdaisy.herokuapp.com/";

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    baseURL = "http://localhost:3000/"
} 

// making axios rq to base URL
const localApi = axios.create({
  baseURL
});


localApi.interceptors.request.use((request) => {
  const { token } = localStorage;
  // if user has token set as in headers as bearer token for auth
  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }

  return request;
});

export default localApi;
