import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";

export interface HttpClientConfig {
  baseUrl: string;
  headers?: Record<string, any>;
}

const httpClient = (config: HttpClientConfig): AxiosInstance => {
  const axiosConfig: CreateAxiosDefaults = {
    baseURL: config.baseUrl,
    headers: config.headers,
  };

  return axios.create(axiosConfig);
};

export default httpClient;
