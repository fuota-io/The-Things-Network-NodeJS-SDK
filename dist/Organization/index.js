"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
const index_1 = require("../index");
/**
 * @classdesc The Organization class is a child class of the SetConfig class. The Organization class has a constructor that takes
 * in a organizationID and a config object. The Organization class has a bunch of methods that make API calls to the Identity Server.
 * @extends SetConfig
 */
class Organization extends index_1.SetConfig {
    /**
     * The constructor function is a special function that is called when an object is created from a
     * class
     * @param {string} organizationID - The ID of the organization you want to get the list of users from.
     * @type {import("../dist/Interfaces/Doc Common/doc.interface").Config}
     * @param {Config} config - This is the configuration object that is passed to the constructor of the base class.
     */
    constructor(organizationID, config) {
        super(config);
        this.API = new index_1.APICall();
        this.ORGANIZATION_ID = organizationID;
    }
    /**
     * It creates an application for the organization.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-CreateApplication}
     * @param {Input-CreateApplication} payload - Input-CreateApplication
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-CreateApplication}
     * The response from the API.
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
            url: `${this.IDENTITY_SERVER}/organizations/${this.ORGANIZATION_ID}/applications`,
            headers: this.headers,
            data: apiPayload,
        });
    }
    /**
     * It returns the list of applications that have been created by the organization.
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetApplicationList}
     * The response from the API.
     */
    getApplicationList() {
        return this.API.send({
            method: 'GET',
            url: `${this.IDENTITY_SERVER}/organizations/${this.ORGANIZATION_ID}/applications`,
            headers: this.headers,
            data: {},
        });
    }
    /**
     * It creates an api key for the organization.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-CreateAPIKeyForOrg}
     * @param {Input-CreateAPIKeyForOrg} payload - Input-CreateAPIKeyForOrg
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
            url: `${this.IDENTITY_SERVER}/organizations/${this.ORGANIZATION_ID}/api-keys`,
            headers: this.headers,
            data: payload,
        });
    }
    /**
     * It returns the list of api keys that have been created by the organization.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-GetAPIKeyList}
     * @param {Input-GetAPIKeyList} payload - Input-GetAPIKeyList
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetAPIKeyList}
     * The response from the API.
     */
    getAPIKeyList(payload) {
        return this.API.send({
            method: 'GET',
            url: `${this.IDENTITY_SERVER}/organizations/${this.ORGANIZATION_ID}/api-keys`,
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
            url: `${this.IDENTITY_SERVER}/organizations/${this.ORGANIZATION_ID}/api-keys/${payload.key_id}`,
            headers: this.headers,
            data: payload,
        });
    }
    /**
     * It returns the information of the api key that has been created by the user.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-UpdateAPIKeyOfOrg}
     * @param {Input-UpdateAPIKeyOfOrg} payload - Input-UpdateAPIKeyOfOrg
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
            url: `${this.IDENTITY_SERVER}/organizations/${this.ORGANIZATION_ID}/api-keys/${payload.api_key_id}`,
            headers: this.headers,
            data: apiPayload,
        });
    }
    /**
     * It returns rights of the collaborator (member) of the application.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-GetCollaboratorInfo}
     * @param {Input-GetCollaboratorInfo} payload - Input-GetCollaboratorInfo
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetCollaboratorInfo}
     * The response from the API.
     */
    getCollaboratorInfo(payload) {
        return this.API.send({
            method: 'GET',
            url: `${this.IDENTITY_SERVER}/organizations/${this.ORGANIZATION_ID}/collaborator/user/${payload.user_id}`,
            headers: this.headers,
            data: payload,
        });
    }
    /**
     * It sets the rights of a collaborator (member) on the application.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-SetCollaborator}
     * @param {Input-SetCollaborator} payload - Input-SetCollaborator
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-EmptyPayload}
     * The response from the API.
     */
    setCollaborator(payload) {
        const apiPayload = {
            collaborator: {
                ids: {
                    user_ids: { user_id: payload.user_id, email: payload.email },
                },
                rights: payload.rights,
            },
        };
        return this.API.send({
            method: 'PUT',
            url: `${this.IDENTITY_SERVER}/organizations/${this.ORGANIZATION_ID}/collaborators`,
            headers: this.headers,
            data: apiPayload,
        });
    }
    /**
     * It creates a gateway for the organization.
     * @param {Input-CreateGateway} payload - {@link https://www.thethingsindustries.com/docs/reference/api/gateway/#message:CreateGatewayRequest CreateGateway}
     * @returns {Output-CreateGateway}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/gateway/#message:Gateway CreateGateway}
     */
    createGateway(payload) {
        return this.API.send({
            method: 'POST',
            url: `${this.IDENTITY_SERVER}/organizations/${this.ORGANIZATION_ID}/gateways`,
            headers: this.headers,
            data: payload,
        });
    }
    /**
     * It returns the list of gateways that have been created by the organization.
     * @returns {Output-GetGatewayList}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/gateway/#message:Gateways GetGatewayList}
     */
    getGatewayList() {
        return this.API.send({
            method: 'GET',
            url: `${this.IDENTITY_SERVER}/organizations/${this.ORGANIZATION_ID}/gateways`,
            headers: this.headers,
            data: {},
        });
    }
}
exports.Organization = Organization;
