import axios from 'axios';
import { ApiConnectionOptions, Config } from './Interfaces/Config/config.interface';

export class APICall {
  async send(params: ApiConnectionOptions) {
    return axios(params.url, {
      method: params.method,
      data: params.data,
      headers: params.headers,
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return Promise.reject(error.response.data);
      });
  }
}

export class SetConfig {
  IDENTITY_SERVER: string;
  JOIN_SERVER: string;
  NETWORK_SERVER: string;
  APPLICATION_SERVER: string;
  API_KEY: string;

  constructor(config: Config) {
    this.IDENTITY_SERVER = config.IDENTITY_SERVER;
    this.JOIN_SERVER = config.JOIN_SERVER;
    this.APPLICATION_SERVER = config.APPLICATION_SERVER;
    this.NETWORK_SERVER = config.NETWORK_SERVER;
    this.API_KEY = config.API_KEY;
  }
  get headers() {
    const headers = { AUTHORIZATION: `Bearer ${this.API_KEY}` };
    return headers;
  }
}
