import axios from 'axios';

axios.defaults.baseURL = 'https://contact.herokuapp.com/';
// axios.defaults.headers = {
//   'Content-Type': 'application/json',
//   Accept: 'application/json',
// };
axios.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    return config;
  },
  error => {
    return error;
  },
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return error;
  },
);

const apiGET = (url, reqBody) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, reqBody)
      .then(res => {
        resolve(JSON.stringify(res?.data?.data));
      })
      .catch(err => {
        reject(err);
      });
  });
};
const apiPOST = (url, reqBody) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, reqBody)
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};
const apiPUT = (url, reqBody) => {
  return new Promise((resolve, reject) => {
    axios
      .put(url, reqBody)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
const apiDEL = url => {
  return new Promise((resolve, reject) => {
    axios
      .delete(url)
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export default {
  ApiGet: apiGET,
  ApiPost: apiPOST,
  ApiPut: apiPUT,
  ApiDel: apiDEL,
};
