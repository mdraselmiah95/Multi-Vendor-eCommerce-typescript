import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 15000,
};

const instance: AxiosInstance = axios.create(axiosConfig);

// instance.get("/product").then((res) => res.data);

class Request {
  get(url: string) {
    return instance.get(url);
  }
  post(url: string, body) {
    return instance.post(url, body);
  }
  update(url: string, body) {
    return instance.patch(url, body);
  }
  delete(url: string) {
    return instance.delete(url);
  }
}

const httpReq = new Request();

export default httpReq;
