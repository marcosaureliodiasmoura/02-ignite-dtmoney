import axios from 'axios';

export const api = axios.create({ //criando uma instância do axios
  baseURL: 'http://localhost:3000/api',

});