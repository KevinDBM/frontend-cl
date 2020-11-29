import axios from 'axios';

const getConfigAxios = () => {
  return {
    baseURL : 'http://localhost:9250/api/v1',
    timeout: 110000,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('userToken')}`
    }
  };
};

const instanceProxyBase = () => {
  return axios.create(getConfigAxios());
};

export default instanceProxyBase;
