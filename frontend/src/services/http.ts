import Axios, { AxiosResponse } from "axios";

const http = Axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

http.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error) => {
    return Promise.reject({
      error: error,
    });
  }
);

export default http;
