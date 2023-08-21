import axios from 'axios';
import { ApiConnectionOptions } from "../interfaces/config.interface";

/**
 * @classdesc The APICall class is a class that sends an API request to a server and returns the response.
 * @class
 */
export class APICall {
    /**
     * It takes in an object with a url, method, data, and headers property, and returns a promise that
     * resolves to the data from the response, or rejects with the error from the response.
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