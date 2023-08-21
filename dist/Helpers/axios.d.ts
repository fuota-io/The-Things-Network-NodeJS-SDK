import { ApiConnectionOptions } from "../interfaces/config.interface";
/**
 * @classdesc The APICall class is a class that sends an API request to a server and returns the response.
 * @class
 */
export declare class APICall {
    /**
     * It takes in an object with a url, method, data, and headers property, and returns a promise that
     * resolves to the data from the response, or rejects with the error from the response.
     */
    send(params: ApiConnectionOptions): Promise<any>;
}
