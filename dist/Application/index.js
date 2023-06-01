"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const index_1 = require("../index");
/**
 * @classdesc The Application class is a child class of the SetConfig class. The Application class has a constructor that takes
 * in a applicationID and a config object. The Application class has a bunch of methods that make API calls to the Identity Server.
 * @extends SetConfig
 */
class Application extends index_1.SetConfig {
    /**
     * The constructor function is a special function that is called when an object is created from a
     * class
     * @param {string} applicationID - The ID of the application you want to use.
     * @type {import("../dist/Interfaces/Doc Common/doc.interface").Config}
     * @param {Config} config - This is the configuration object that is passed to the constructor of the base class.
     */
    constructor(applicationID, config) {
        super(config);
        this.API = new index_1.APICall();
        this.APPLICATION_ID = applicationID;
    }
    /**
     * It returns the application information.
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetApplication}
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
     * It returns the list of applications that have been created by both user and organization.
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetApplicationList}
     * The response from the API.
     */
    getApplicationList() {
        return this.API.send({
            method: 'GET',
            url: `${this.IDENTITY_SERVER}/applications`,
            headers: this.headers,
            data: {},
        });
    }
    /**
     * It updates the application information.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-UpdateApplication}
     * @param {Input-UpdateApplication} payload - Input-UpdateApplication
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-UpdateApplication}
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
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-EmptyPayload}
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
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-EmptyPayload}
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
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-EmptyPayload}
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
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-SearchApplication}
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
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetApplicationRight}
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
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-CreateAPIKeyForApplication}
     * @param {Input-CreateAPIKeyForApplication} payload - Input-CreateAPIKeyForApplication
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
            url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/api-keys`,
            headers: this.headers,
            data: payload,
        });
    }
    /**
     * It returns the list of API keys for the application.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-GetAPIKeyList}
     * @param {Input-GetAPIKeyList} payload - Input-GetAPIKeyList
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetAPIKeyList}
     * The response from the API.
     */
    getAPIKeyList(payload) {
        return this.API.send({
            method: 'GET',
            url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/api-keys`,
            headers: this.headers,
            data: payload,
        });
    }
    /**
     * It returns the API key information for the application.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-GetAPIKeyInfo}
     * @param {Input-GetAPIKeyInfo} payload - Input-GetAPIKeyInfo
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetAPIKeyInfo}
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
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-UpdateAPIKeyOfApplication}
     * @param {Input-UpdateAPIKeyOfApplication} payload - Input-UpdateAPIKeyOfApplication
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
            url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/api-keys/${payload.api_key_id}`,
            headers: this.headers,
            data: apiPayload,
        });
    }
    /**
     * It returns rights of the collaborator (member) of the application.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-GetCollaboratorInfoOfUser}
     * @param {Input-GetCollaboratorInfoOfUser} payload - Input-GetCollaboratorInfoOfUser
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetCollaboratorInfoOfUser}
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
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-GetCollaboratorInfoOfOrg}
     * @param {Input-GetCollaboratorInfoOfOrg} payload - Input-GetCollaboratorInfoOfOrg
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetCollaboratorInfoOfOrg}
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
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-SetCollaboratorOfUser}
     * @param {Input-SetCollaboratorOfUser} payload - Input-SetCollaboratorOfUser
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-EmptyPayload}
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
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-SetCollaboratorOfOrg}
     * @param {Input-SetCollaboratorOfOrg} payload - Input-SetCollaboratorOfOrg
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-EmptyPayload}
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
     * It returns the list of API keys for the application.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-GetCollabortorList}
     * @param {Input-GetCollabortorList} payload - Input-GetCollabortorList
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetCollabortorList}
     * The response from the API.
     */
    getCollaboratorList(payload) {
        return this.API.send({
            method: 'GET',
            url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/collaborators`,
            headers: this.headers,
            data: payload,
        });
    }
}
exports.Application = Application;
