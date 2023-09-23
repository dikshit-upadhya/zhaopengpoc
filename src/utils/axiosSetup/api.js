import axios from 'axios';
const httpClient = axios.create();
httpClient.defaults.timeout = 5 * 60 * 1000;

const httpClientWithoutAuth = axios.create();
httpClient.defaults.timeout = 5 * 60 * 1000;

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, POST, DELETE, OPTIONS',
  },
};

const configData = {
  headers: {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, POST, DELETE, OPTIONS',
  },
};
class Api {
  POST(url, payload = {}, config = axiosConfig) {
    return httpClient.post(url, payload, config).catch(function (error) {});
  }
  POST_WITHOUT_AUTH(url, payload = {}, config = axiosConfig) {
    return httpClientWithoutAuth.post(url, payload, config).catch(function (error) {});
  }
  GET(url, config = axiosConfig) {
    return httpClient.get(url, config).catch(function (error) {});
  }
  GET_WITHOUT_AUTH(url, config = axiosConfig) {
    return httpClientWithoutAuth.get(url, config).catch(function (error) {});
  }
  PUT(url, payload = {}, config = axiosConfig) {
    return httpClient.put(url, payload, config).catch(function (error) {});
  }
  POST_FORM_DATA(url, payload = {}, config = configData) {
    return httpClient.post(url, payload, config).catch(function (error) {});
  }
}
export { httpClient };
export default new Api();
