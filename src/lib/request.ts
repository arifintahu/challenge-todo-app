import Axios, { AxiosInstance } from 'axios';
import { API_URL } from '../constants';

const instance: AxiosInstance = Axios.create({
  baseURL: API_URL
});

export default instance;
