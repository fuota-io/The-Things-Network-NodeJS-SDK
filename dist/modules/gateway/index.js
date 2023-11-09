"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gateway = void 0;
const axios_1 = require("../../helpers/axios");
const config_1 = require("../../helpers/config");
const utils_1 = require("../../helpers/utils");
/**
 * @classdesc The Gateway class is a child class of the SetConfig class. The Gateway class has a constructor that takes in a
 * applicationID and a config object. The Gateway class has a bunch of methods that make API calls to the Identity Server.
 * @extends SetConfig
 */
class Gateway extends config_1.SetConfig {
    /**
     * The constructor function is a special function that is called when an object is created from a
     * class
     * @param {string} gatewayID - The ID of the gateway you want to get the list of users from.
     * @param {Config} config - This is the configuration object that is passed to the constructor of the base class.
     */
    constructor(gatewayID, config) {
        super(config);
        this.API = new axios_1.APICall();
        this.paths = [];
        this.GATEWAY_ID = gatewayID;
    }
    /**
     * It returns the gateway information.
     * @returns {Output-GetGatewayInfo}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/gateway/#message:Gateway CreateGateway}
     */
    getGatewayInfo() {
        return this.API.send({
            method: 'GET',
            url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}`,
            headers: this.headers,
            data: {},
        });
    }
    /**
     * It returns the list of gateways.
     * @param {Input-GetGatewayList} [payload] - Input-GetGatewayList
     * @returns {Output-GetGatewayList}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/gateway/#message:Gateways GetGatewayList}
     */
    getGatewayList(payload) {
        let page = 1, limit = 20, order = '-created_at';
        if (payload) {
            page = payload.page ? payload.page : 1;
            limit = payload.limit ? payload.limit : 20;
            order = payload.order ? payload.order : '-created_at';
        }
        return this.API.send({
            method: 'GET',
            url: `${this.IDENTITY_SERVER}/gateways?page=${page}&limit=${limit}&order=${order}&field_mask=name,description,frequency_plan_ids,gateway_server_address`,
            headers: this.headers,
            data: {},
        });
    }
    /**
     * It updates the gateway.
     * @param {Input-UpdateGateway} payload - {@link https://www.thethingsindustries.com/docs/reference/api/gateway/#message:UpdateGatewayRequest UpdateGateway}
     * @returns {Output-UpdateGateway}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/gateway/#message:Gateways UpdateGateway}
     */
    updateGateway(payload) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        const recpaths = (0, utils_1.getAllKeys)(payload);
        const tempArr = recpaths.toString().replaceAll('gateway.', '').split(',');
        const tempPaths = tempArr.filter((el) => el.includes('attributes.'));
        if (tempPaths.length != 0) {
            this.paths = tempArr.toString().replaceAll(tempPaths.toString(), 'attributes').split(',');
        }
        else {
            this.paths = tempArr;
        }
        const paths = this.paths;
        const apiPayload = {
            gateway: {
                name: payload.gateway.name,
                description: payload.gateway.description,
                attributes: payload.gateway.attributes,
                version_ids: {
                    brand_id: (_a = payload.gateway.version_ids) === null || _a === void 0 ? void 0 : _a.brand_id,
                    model_id: (_b = payload.gateway.version_ids) === null || _b === void 0 ? void 0 : _b.model_id,
                    hardware_version: (_c = payload.gateway.version_ids) === null || _c === void 0 ? void 0 : _c.hardware_version,
                    firmware_version: (_d = payload.gateway.version_ids) === null || _d === void 0 ? void 0 : _d.firmware_version,
                },
                gateway_server_address: payload.gateway.gateway_server_address,
                auto_update: payload.gateway.auto_update,
                update_channel: payload.gateway.update_channel,
                frequency_plan_id: payload.gateway.frequency_plan_id,
                frequency_plan_ids: payload.gateway.frequency_plan_ids,
                antennas: payload.gateway.antennas,
                status_public: payload.gateway.status_public,
                location_public: payload.gateway.location_public,
                schedule_downlink_late: payload.gateway.schedule_downlink_late,
                enforce_duty_cycle: payload.gateway.enforce_duty_cycle,
                downlink_path_constraint: payload.gateway.downlink_path_constraint,
                schedule_anytime_delay: payload.gateway.schedule_anytime_delay,
                update_location_from_status: payload.gateway.update_location_from_status,
                lbs_lns_secret: {
                    key_id: (_e = payload.gateway.lbs_lns_secret) === null || _e === void 0 ? void 0 : _e.key_id,
                    value: (_f = payload.gateway.lbs_lns_secret) === null || _f === void 0 ? void 0 : _f.value,
                },
                claim_authentication_code: {
                    secret: {
                        key_id: (_h = (_g = payload.gateway.claim_authentication_code) === null || _g === void 0 ? void 0 : _g.secret) === null || _h === void 0 ? void 0 : _h.key_id,
                        value: (_k = (_j = payload.gateway.claim_authentication_code) === null || _j === void 0 ? void 0 : _j.secret) === null || _k === void 0 ? void 0 : _k.value,
                    },
                    valid_from: (_l = payload.gateway.claim_authentication_code) === null || _l === void 0 ? void 0 : _l.valid_from,
                    valid_to: (_m = payload.gateway.claim_authentication_code) === null || _m === void 0 ? void 0 : _m.valid_to,
                },
                target_cups_uri: payload.gateway.target_cups_uri,
                target_cups_key: {
                    key_id: (_o = payload.gateway.target_cups_key) === null || _o === void 0 ? void 0 : _o.key_id,
                    value: (_p = payload.gateway.target_cups_key) === null || _p === void 0 ? void 0 : _p.value,
                },
                require_authenticated_connection: payload.gateway.require_authenticated_connection,
                lrfhss: { supported: (_q = payload.gateway.lrfhss) === null || _q === void 0 ? void 0 : _q.supported },
                disable_packet_broker_forwarding: payload.gateway.disable_packet_broker_forwarding,
            },
            field_mask: {
                paths: paths,
            },
        };
        return this.API.send({
            method: 'PUT',
            url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}`,
            headers: this.headers,
            data: apiPayload,
        });
    }
    /**
     * It deletes the gateway.
     * @returns {Output-EmptyPayload}
     * The response from the API.
     */
    deleteGateway() {
        return this.API.send({
            method: 'DELETE',
            url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}`,
            headers: this.headers,
            data: {},
        });
    }
    /**
     * It restores the gateway.
     * @returns {Output-EmptyPayload}
     * The response from the API.
     */
    restoreGateway() {
        return this.API.send({
            method: 'POST',
            url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}/restore`,
            headers: this.headers,
            data: {},
        });
    }
    /**
     * It purges the gateway.
     * @returns {Output-EmptyPayload}
     * The response from the API.
     */
    purgeGateway() {
        return this.API.send({
            method: 'DELETE',
            url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}/purge`,
            headers: this.headers,
            data: {},
        });
    }
    /**
     * It searches the gateway.
     * @returns {Output-SearchGateway}
     * The response from the API.
     */
    searchGateway() {
        return this.API.send({
            method: 'GET',
            url: `${this.IDENTITY_SERVER}/search/gateways`,
            headers: this.headers,
            data: {},
        });
    }
    /**
     * It returns the gateway rights.
     * @returns {Output-GetGatewayRight}
     * The response from the API.
     */
    getGatewayRight() {
        return this.API.send({
            method: 'GET',
            url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}/rights`,
            headers: this.headers,
            data: {},
        });
    }
    /**
     * It creates an API key for the gateway.
     * @param {Input-CreateAPIKeyForUser} payload - Input-CreateAPIKeyForUser
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
            url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}/api-keys`,
            headers: this.headers,
            data: payload,
        });
    }
    /**
     * It returns the list of API keys for the gateway.
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
            url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}/api-keys?page=${page}&limit=${limit}&order=${order}`,
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
            url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}/api-keys/${payload.key_id}`,
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
            url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}/api-keys/${payload.api_key_id}`,
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
            url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}/collaborator/user/${payload.user_id}`,
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
            url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}/collaborator/organization/${payload.organization_id}`,
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
            url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}/collaborators`,
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
            url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}/collaborators`,
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
            url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}/collaborators?page=${page}&limit=${limit}&order=${order}`,
            headers: this.headers,
            data: payload,
        });
    }
}
exports.Gateway = Gateway;
