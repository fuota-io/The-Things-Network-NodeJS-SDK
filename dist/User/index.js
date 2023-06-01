"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const index_1 = require("../index");
/**
 * @classdesc The User class is a child class of the SetConfig class. The User class has a constructor that takes
 * in a userID and a config object. The User class has a bunch of methods that make API calls to the Identity Server.
 * @extends SetConfig
 */
class User extends index_1.SetConfig {
    /**
     * The constructor function is a special function that is called when an object is created from a
     * class
     * @param {string} userID - The user ID of the user you want to get the profile of.
     * @type {import("../dist/Interfaces/Doc Common/doc.interface").Config}
     * @param {Config} config - Config - This is the configuration object that is passed to the constructor of the base class.
     */
    constructor(userID, config) {
        super(config);
        this.API = new index_1.APICall();
        this.USER_ID = userID;
    }
    /**
     * It creates an application for the user.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-CreateApplication}
     * @param {Input-CreateApplication} payload - Input-CreateApplication
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-CreateApplication}
     * The response from the API.
     * @example
     * const createApplicationPayloadForUser = {
        application_id: 'meet59',
        name: 'meet',
        description: '',  };
     *
     * const user = new User('meetsavaj', config);
     * const response = await user.createApplication(createApplicationPayloadForUser);
     */
    createApplication(payload) {
        const apiPayload = {
            application: {
                ids: { application_id: payload.application_id },
                name: payload.name,
                description: payload.description,
            },
        };
        return this.API.send({
            method: 'POST',
            url: `${this.IDENTITY_SERVER}/users/${this.USER_ID}/applications`,
            headers: this.headers,
            data: apiPayload,
        });
    }
    /**
     * It returns the list of applications that have been created by the user.
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetApplicationList}
     * The response from the API.
     */
    getApplicationList() {
        return this.API.send({
            method: 'GET',
            url: `${this.IDENTITY_SERVER}/users/${this.USER_ID}/applications`,
            headers: this.headers,
            data: {},
        });
    }
    /**
     * It creates an api key for the user.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-CreateAPIKeyForUser}
     * @param {Input-CreateAPIKeyForUser} payload - Input-CreateAPIKeyForUser
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-CreateAPIKey}
     * The response from the API.
     */
    createAPIKey(payload) {
        // const apiPayload: CreateAPIKeyPayload = {
        //   name: payload.name,
        //   rights: payload.rights,
        //   expires_at: payload.expires_at,
        // };
        return this.API.send({
            method: 'POST',
            url: `${this.IDENTITY_SERVER}/users/${this.USER_ID}/api-keys`,
            headers: this.headers,
            data: payload,
        });
    }
    /**
     * It returns the list of api keys that have been created by the user.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").cGetAPIKeyList}
     * @param {Input-GetAPIKeyList} payload - Input-GetAPIKeyList
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetAPIKeyList}
     * The response from the API.
     */
    getAPIKeyList(payload) {
        return this.API.send({
            method: 'GET',
            url: `${this.IDENTITY_SERVER}/users/${this.USER_ID}/api-keys`,
            headers: this.headers,
            data: payload,
        });
    }
    /**
     * It returns the information of the api key that has been created by the user.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-GetAPIKeyInfo}
     * @param {Input-GetAPIKeyInfo} payload - Input-GetAPIKeyInfo
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetAPIKeyInfo}
     * The response from the API.
     */
    getAPIKeyInfo(payload) {
        return this.API.send({
            method: 'GET',
            url: `${this.IDENTITY_SERVER}/users/${this.USER_ID}/api-keys/${payload.key_id}`,
            headers: this.headers,
            data: {},
        });
    }
    /**
     * It returns the information of the api key that has been created by the user.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-UpdateAPIKeyOfUser}
     * @param {Input-UpdateAPIKeyOfUser} payload - Input-UpdateAPIKeyOfUser
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-UpdateAPIKey}
     * The response from the API.
     */
    updateAPIKey(payload) {
        const receievePayload = {
            name: payload.api_key_name,
            rights: payload.api_key_rights,
            expires_at: payload.expires_at,
        };
        const extractPayload = JSON.parse(JSON.stringify(receievePayload));
        const paths = Object.keys(extractPayload);
        const apiPayload = {
            api_key: {
                id: payload.api_key_id,
                name: payload.api_key_name,
                rights: payload.api_key_rights,
                expires_at: payload.expires_at,
            },
            field_mask: {
                paths: paths,
            },
        };
        return this.API.send({
            method: 'PUT',
            url: `${this.IDENTITY_SERVER}/users/${this.USER_ID}/api-keys/${payload.api_key_id}`,
            headers: this.headers,
            data: apiPayload,
        });
    }
    /**
     * It creates a gateway for the user.
     * @param {Input-CreateGateway} payload - {@link https://www.thethingsindustries.com/docs/reference/api/gateway/#message:CreateGatewayRequest CreateGateway}
     * @returns {Output-CreateGateway}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/gateway/#message:Gateway CreateGateway}
     */
    createGateway(payload) {
        return this.API.send({
            method: 'POST',
            url: `${this.IDENTITY_SERVER}/users/${this.USER_ID}/gateways`,
            headers: this.headers,
            data: payload,
        });
    }
    /**
     * It returns the list of gateways that have been created by the user.
     * @returns {Output-GetGatewayList}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/gateway/#message:Gateways GetGatewayList}
     */
    getGatewayList() {
        return this.API.send({
            method: 'GET',
            url: `${this.IDENTITY_SERVER}/users/${this.USER_ID}/gateways`,
            headers: this.headers,
            data: {},
        });
    }
}
exports.User = User;
