import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { BASE_URL }from '@/config/constants';

export const apiInstance = (config: Partial<AxiosRequestConfig> = {}): AxiosInstance => {
  const AxiosConfig: AxiosRequestConfig = {
    baseURL: config.baseURL ?? BASE_URL,
  }

  const axiosInstance = axios.create(AxiosConfig);

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.request && error.request.status) {
        if (error.request.status === 401) {
          console.error('Unauthorized')
        }
      }

      return Promise.reject([error.message]);
    }
  );

  return axiosInstance;
};
