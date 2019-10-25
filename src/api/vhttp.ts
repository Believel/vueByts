import axios, { AxiosError } from 'axios';

axios.defaults.baseURL = '/v1/api';
axios.interceptors.response.use(function(response) {
  return response;
}, function(error: AxiosError) {
  return Promise.reject(error);
});

export default axios;
