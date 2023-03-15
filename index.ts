import axios from 'axios';
import { ApiConnectionOptions, Config } from './Interfaces/Config/config.interface';

/**
 * @classdesc The APICall class is a class that sends an API request to a server and returns the response.
 * @class
 */
export class APICall {
  /**
   * It takes in an object with a url, method, data, and headers property, and returns a promise that
   * resolves to the data from the response, or rejects with the error from the response.
   * @type {import("../dist/Interfaces/Doc Common/doc.interface").ApiConnectionOptions}
   * @param {ApiConnectionOptions} params - ApiConnectionOptions
   * @returns The response.data is being returned.
   */
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

/**
 * @classdesc The SetConfig class is a class that takes a Config object and sets the properties of the SetConfig
 * class to the properties of the Config object.
 * @class
 * @abstract
 */
export class SetConfig {
  IDENTITY_SERVER: string;
  JOIN_SERVER: string;
  NETWORK_SERVER: string;
  APPLICATION_SERVER: string;
  API_KEY: string;

  /**
   * The above function is a constructor function that takes in a config object and assigns the values
   * of the config object to the class properties.
   * @constructor
   * @type {import("../dist/Interfaces/Doc Common/doc.interface").Config}
   * @param {Config} config - Config
   */
  constructor(config: Config) {
    this.IDENTITY_SERVER = config.IDENTITY_SERVER;
    this.JOIN_SERVER = config.JOIN_SERVER;
    this.APPLICATION_SERVER = config.APPLICATION_SERVER;
    this.NETWORK_SERVER = config.NETWORK_SERVER;
    this.API_KEY = config.API_KEY;
  }

  /**
   * The headers function returns an object with a key of AUTHORIZATION and a value of Bearer + the
   * API_KEY.
   * @returns The headers object.
   */
  get headers() {
    const headers = { AUTHORIZATION: `Bearer ${this.API_KEY}` };
    return headers;
  }
}

//************** To Extract Nested Object Keys ******************
//***************************************************************
export function getAllKeys(obj: { [x: string]: any }): string[] {
  let keys = [];
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      keys.push(...getAllKeys(obj[key]).map((subKey: string) => `${key}.${subKey}`));
    } else {
      keys.push(key);
    }
  }
  const newKeys = keys.toString().replaceAll('end_device.', '').split(',');
  return newKeys;
}
