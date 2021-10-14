import Axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = Axios.create({
  baseURL: 'https://api.todo.dev.gethired.id'
});

export default instance;
