"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetConfig = void 0;
/**
 * @classdesc The SetConfig class is a class that takes a Config object and sets the properties of the SetConfig
 * class to the properties of the Config object.
 * @class
 * @abstract
 */
class SetConfig {
    /**
     * The above function is a constructor function that takes a config object as a parameter and assigns
     * the values of the config object to the class properties.
     * @param {Config} config - Config
     */
    constructor(config) {
        this.IDENTITY_SERVER = `https://${config.IDENTITY_SERVER}/api/v3`;
        this.JOIN_SERVER = `https://${config.JOIN_SERVER}/api/v3/js`;
        this.APPLICATION_SERVER = `https://${config.APPLICATION_SERVER}/api/v3/as`;
        this.NETWORK_SERVER = `https://${config.NETWORK_SERVER}/api/v3/ns`;
        this.API_KEY = config.API_KEY;
        this.TENANT_ID = config.TENANT_ID;
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
exports.SetConfig = SetConfig;
