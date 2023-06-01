import { ApiConnectionOptions, Config } from './Interfaces/Config/config.interface';
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
/**
 * @classdesc The SetConfig class is a class that takes a Config object and sets the properties of the SetConfig
 * class to the properties of the Config object.
 * @class
 * @abstract
 */
export declare class SetConfig {
    IDENTITY_SERVER: string;
    JOIN_SERVER: string;
    NETWORK_SERVER: string;
    APPLICATION_SERVER: string;
    API_KEY: string;
    /**
     * The above function is a constructor function that takes a config object as a parameter and assigns
     * the values of the config object to the class properties.
     * @param {Config} config - Config
     */
    constructor(config: Config);
    /**
     * The headers function returns an object with a key of AUTHORIZATION and a value of Bearer + the
     * API_KEY.
     * @returns The headers object.
     */
    get headers(): {
        AUTHORIZATION: string;
    };
}
