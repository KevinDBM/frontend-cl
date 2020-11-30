import axios from 'axios';
import {getToken} from '../utils/token'

const getConfigAxios = () => {
  return {
    baseURL : 'http://localhost:9250/api/v1',
    timeout: 110000,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  };
};


const instanceProxyBase = () => {
  return axios.create(getConfigAxios());
};

export default instanceProxyBase;
