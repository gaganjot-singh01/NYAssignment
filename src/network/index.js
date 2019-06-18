import axios from 'axios';
import { BASE_URL } from '../utils/constants/apiEndpoints';

const TIMEOUT = 30000;

const AxiosServer = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
});

/**
 * Network utility to access REST Endpoints
 * @param {*} config refer https://github.com/axios/axios#request-config
 * makeNetworkCall({ method: 'get', url: '/posts' })
 */
async function makeNetworkCall(config) {
  console.log('Config', config);
  const response = await AxiosServer(config);
  console.log('response', response);

  return response;
}
export { makeNetworkCall };
