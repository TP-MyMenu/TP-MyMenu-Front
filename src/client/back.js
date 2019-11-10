import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: 'http://0.0.0.0:8000/',
    timeout: 5000,
  });  
};
