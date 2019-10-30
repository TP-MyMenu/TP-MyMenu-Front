import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: '0.0.0.0:8000/',
    timeout: 5000,
    // headers: { 'x-auth-token': token }
  });  
};
