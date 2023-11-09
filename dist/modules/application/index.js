"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const axios_1 = require("../../helpers/axios");
const config_1 = require("../../helpers/config");
/**
 * @classdesc The Application class is a child class of the SetConfig class. The Application class has a constructor that takes
 * in a applicationID and a config object. The Application class has a bunch of methods that make API calls to the Identity Server.
 * @extends SetConfig
 */
class Application extends config_1.SetConfig {
    /**
     * The constructor function is a special function that is called when an object is created from a
     * class
     * @param {string} applicationID - The ID of the application you want to use.
     * @param {Config} config - This is the configuration object that is passed to the constructor of the base class.
     */
    constructor(applicationID, config) {
        super(config);
        this.API = new axios_1.APICall();
        this.APPLICATION_ID = applicationID;
    }
    /**
     * It returns the application information.
     * @returns {Output-GetApplication}
     * The response from the API.
     */
    getApplicationInfo() {
        const apiPayload = {
            application: {
                ids: { application_id: this.APPLICATION_ID },
            },
        };
        return this.API.send({
            method: 'GET',
            url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}`,
            headers: this.headers,
            data: apiPayload,
        });
    }
    /**
     * It returns the list of applications that have been created by both user and organization (Default returns ).
     * @param {Input-GetApplicationList} [payload] - Input-GetApplicationList
     * @returns {Output-GetApplicationList}
     * The response from the API.
     */
    getApplicationList(payload) {
        let page = 1, limit = 20, order = '-created_at';
        if (payload) {
            page = payload.page ? payload.page : 1;
            limit = payload.limit ? payload.limit : 20;
            order = payload.order ? payload.order : '-created_at';
        }
        return this.API.send({
            method: 'GET',
            url: `${this.IDENTITY_SERVER}/applications?page=${page}&limit=${limit}&order=${order}&field_mask=name,description,network_server_address,application_server_address,join_server_address`,
            headers: this.headers,
            data: {},
        });
    }
    /**
     * It updates the application information.
     * @param {Input-UpdateApplication} payload - Input-UpdateApplication
     * @returns {Output-UpdateApplication}
     * The response from the API.
     */
    updateApplication(payload) {
        const paths = Object.keys(payload);
        const apiPayload = {
            application: {
                name: payload.name,
                description: payload.description,
                attributes: payload.attributes,
            },
            field_mask: {
                paths: paths,
            },
        };
        return this.API.send({
            method: 'PUT',
            url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}`,
            headers: this.headers,
            data: apiPayload,
        });
    }
    /**
     * It deletes the application.
     * @returns {Output-EmptyPayload}
     * The response from the API.
     */
    deleteApplication() {
        return this.API.send({
            method: 'DELETE',
            url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}`,
            headers: this.headers,
            data: {},
        });
    }
    /**
     * It restores the application.
     * @returns {Output-EmptyPayload}
     * The response from the API.
     */
    restoreApplication() {
        return this.API.send({
            method: 'POST',
            url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/restore`,
            headers: this.headers,
            data: {},
        });
    }
    /**
     * It purges the application.
     * @returns {Output-EmptyPayload}
     * The response from the API.
     */
    purgeApplication() {
        return this.API.send({
            method: 'DELETE',
            url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/purge`,
            headers: this.headers,
            data: {},
        });
    }
    /**
     * It searches the application.
     * @returns {Output-SearchApplication}
     * The response from the API.
     */
    searchApplication() {
        return this.API.send({
            method: 'GET',
            url: `${this.IDENTITY_SERVER}/search/applications`,
            headers: this.headers,
            data: {},
        });
    }
    /**
     * It returns the application rights.
     * @returns {Output-GetApplicationRight}
     * The response from the API.
     */
    getApplicationRight() {
        return this.API.send({
            method: 'GET',
            url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/rights`,
            headers: this.headers,
            data: {},
        });
    }
    /**
     * It creates an API key for the application.
     * @param {Input-CreateAPIKeyForApplication} payload - Input-CreateAPIKeyForApplication
     * @returns {Output-CreateAPIKey}
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
            url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/api-keys`,
            headers: this.headers,
            data: payload,
        });
    }
    /**
     * It returns the list of API keys for the application.
     * @param {Input-GetAPIKeyList} [payload] - Input-GetAPIKeyList
     * @returns {Output-GetAPIKeyList}
     * The response from the API.
     */
    getAPIKeyList(payload) {
        let page = 1, limit = 20, order = '-created_at';
        if (payload) {
            page = payload.page ? payload.page : 1;
            limit = payload.limit ? payload.limit : 20;
            order = payload.order ? payload.order : '-created_at';
        }
        return this.API.send({
            method: 'GET',
            url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/api-keys?page=${page}&limit=${limit}&order=${order}`,
            headers: this.headers,
            data: payload,
        });
    }
    /**
     * It returns the API key information for the application.
     * @param {Input-GetAPIKeyInfo} payload - Input-GetAPIKeyInfo
     * @returns {Output-GetAPIKeyInfo}
     * The response from the API.
     */
    getAPIKeyInfo(payload) {
        return this.API.send({
            method: 'GET',
            url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/api-keys/${payload.key_id}`,
            headers: this.headers,
            data: payload,
        });
    }
    /**
     * It returns the information of the api key that has been created by the user.
     * @param {Input-UpdateAPIKeyOfApplication} payload - Input-UpdateAPIKeyOfApplication
     * @returns {Output-UpdateAPIKey}
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
            url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/api-keys/${payload.api_key_id}`,
            headers: this.headers,
            data: apiPayload,
        });
    }
    /**
     * It returns rights of the collaborator (member) of the application.
     * @param {Input-GetCollaboratorInfoOfUser} payload - Input-GetCollaboratorInfoOfUser
     * @returns {Output-GetCollaboratorInfoOfUser}
     * The response from the API.
     */
    getCollaboratorInfoOfUser(payload) {
        return this.API.send({
            method: 'GET',
            url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/collaborator/user/${payload.user_id}`,
            headers: this.headers,
            data: payload,
        });
    }
    /**
     * It returns rights of the collaborator (member) of the application.
     * @param {Input-GetCollaboratorInfoOfOrg} payload - Input-GetCollaboratorInfoOfOrg
     * @returns {Output-GetCollaboratorInfoOfOrg}
     * The response from the API.
     */
    getCollaboratorInfoOfOrg(payload) {
        return this.API.send({
            method: 'GET',
            url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/collaborator/organization/${payload.organization_id}`,
            headers: this.headers,
            data: payload,
        });
    }
    /**
     * It sets the rights of a collaborator (member) on the application.
     * @param {Input-SetCollaboratorOfUser} payload - Input-SetCollaboratorOfUser
     * @returns {Output-EmptyPayload}
     * The response from the API.
     */
    setCollaboratorOfUser(payload) {
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
            url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/collaborators`,
            headers: this.headers,
            data: apiPayload,
        });
    }
    /**
     * It sets the rights of a collaborator (member) on the application.
     * @param {Input-SetCollaboratorOfOrg} payload - Input-SetCollaboratorOfOrg
     * @returns {Output-EmptyPayload}
     * The response from the API.
     */
    setCollaboratorOfOrg(payload) {
        const apiPayload = {
            collaborator: {
                ids: {
                    organization_ids: { organization_id: payload.organization_id },
                },
                rights: payload.rights,
            },
        };
        return this.API.send({
            method: 'PUT',
            url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/collaborators`,
            headers: this.headers,
            data: apiPayload,
        });
    }
    /**
     * It returns the list of collaborators (members) of the application.
     * @param {Input-GetCollabortorList} [payload] - Input-GetCollabortorList
     * @returns {Output-GetCollabortorList}
     * The response from the API.
     */
    getCollaboratorList(payload) {
        let page = 1, limit = 20, order = '-id';
        if (payload) {
            page = payload.page ? payload.page : 1;
            limit = payload.limit ? payload.limit : 20;
            order = payload.order ? payload.order : '-id';
        }
        return this.API.send({
            method: 'GET',
            url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/collaborators?page=${page}&limit=${limit}&order=${order}`,
            headers: this.headers,
            data: payload,
        });
    }
}
exports.Application = Application;
