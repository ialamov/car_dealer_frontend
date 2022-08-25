import axios from 'axios';

const api = axios.request({
  baseURL: 'http://localhost:3000'
});

export default api;