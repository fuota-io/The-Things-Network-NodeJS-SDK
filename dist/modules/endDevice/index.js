"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndDevice = void 0;
// import { client } from '../Helpers/mqtt';
const mqtt_1 = require("../../helpers/mqtt");
const utils_1 = require("../../helpers/utils");
const axios_1 = require("../../helpers/axios");
const config_1 = require("../../helpers/config");
/**
 * @classdesc The EndDevice class is used to create an end device for the application.
 * @extends SetConfig
 */
class EndDevice extends config_1.SetConfig {
    /**
     * The constructor function is a special function that is called when an object is created from a
     * class.
     * @param {string} applicationID - The ID of the application you want to use.
     * @param {Config} config - This is the configuration object that is passed to the constructor of the base class.
     */
    constructor(applicationID, config) {
        super(config);
        this.API = new axios_1.APICall();
        this.paths = [];
        this.APPLICATION_ID = applicationID;
    }
    /**
     * It creates an end device for the application.
     * @param {Input-CreateEndDeviceIS} payload - {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:CreateEndDeviceRequest CreateEndDeviceIS}
     * @returns {Output-CreateEndDeviceIS}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDevice CreateEndDeviceIS}
     */
    createEndDeviceIS(payload) {
        var _a, _b, _c, _d, _e;
        const recpaths = (0, utils_1.getAllKeys)(payload);
        const paths = recpaths.toString().replaceAll('end_device.', '').split(',');
        const apiPayload = {
            end_device: {
                ids: {
                    join_eui: payload.end_device.ids.join_eui,
                    dev_eui: payload.end_device.ids.dev_eui,
                    device_id: payload.end_device.ids.device_id,
                    dev_addr: payload.end_device.ids.dev_addr,
                    application_ids: {
                        application_id: this.APPLICATION_ID,
                    },
                },
                version_ids: {
                    brand_id: (_a = payload.end_device.version_ids) === null || _a === void 0 ? void 0 : _a.brand_id,
                    model_id: (_b = payload.end_device.version_ids) === null || _b === void 0 ? void 0 : _b.model_id,
                    hardware_version: (_c = payload.end_device.version_ids) === null || _c === void 0 ? void 0 : _c.hardware_version,
                    firmware_version: (_d = payload.end_device.version_ids) === null || _d === void 0 ? void 0 : _d.firmware_version,
                    band_id: (_e = payload.end_device.version_ids) === null || _e === void 0 ? void 0 : _e.band_id,
                },
                network_server_address: payload.end_device.network_server_address,
                application_server_address: payload.end_device.application_server_address,
                join_server_address: payload.end_device.join_server_address,
            },
            field_mask: {
                paths: paths,
            },
        };
        return this.API.send({
            method: 'POST',
            url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/devices`,
            headers: this.headers,
            data: apiPayload,
        });
    }
    /**
     * It sets an end device for the application in the Join Server.
     * @param {Input-SetEndDeviceJS} payload - {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:SetEndDeviceRequest SetEndDeviceJS}
     * @returns {Output-SetEndDeviceJS}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDevice SetEndDeviceJS}
     */
    setEndDeviceJS(payload) {
        const recpaths = (0, utils_1.getAllKeys)(payload);
        const paths = recpaths.toString().replaceAll('end_device.', '').split(',');
        const apiPayload = {
            end_device: {
                ids: {
                    join_eui: payload.end_device.ids.join_eui,
                    dev_eui: payload.end_device.ids.dev_eui,
                    device_id: payload.end_device.ids.device_id,
                    application_ids: {
                        application_id: this.APPLICATION_ID,
                    },
                },
                network_server_address: payload.end_device.network_server_address,
                application_server_address: payload.end_device.application_server_address,
                root_keys: {
                    app_key: {
                        key: payload.end_device.root_keys.app_key.key,
                    },
                },
            },
            field_mask: {
                paths: paths,
            },
        };
        return this.API.send({
            method: 'PUT',
            url: `${this.JOIN_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.end_device.ids.device_id}`,
            headers: this.headers,
            data: apiPayload,
        });
    }
    /**
     * It sets an end device for the application in the Network Server.
     * @param {Input-SetEndDeviceNS} payload - {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:SetEndDeviceRequest SetEndDeviceNS}
     * @returns {Output-SetEndDeviceNS}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDevice SetEndDeviceNS}
     */
    setEndDeviceNS(payload) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        const recpaths = (0, utils_1.getAllKeys)(payload);
        const tempPaths = recpaths.toString().replaceAll('end_device.', '').split(',');
        const items = ['ids.dev_addr'];
        const paths = tempPaths.filter((item) => !items.includes(item));
        const apiPayload = {
            end_device: {
                version_ids: {
                    brand_id: (_a = payload.end_device.version_ids) === null || _a === void 0 ? void 0 : _a.brand_id,
                    model_id: (_b = payload.end_device.version_ids) === null || _b === void 0 ? void 0 : _b.model_id,
                    hardware_version: (_c = payload.end_device.version_ids) === null || _c === void 0 ? void 0 : _c.hardware_version,
                    firmware_version: (_d = payload.end_device.version_ids) === null || _d === void 0 ? void 0 : _d.firmware_version,
                    band_id: (_e = payload.end_device.version_ids) === null || _e === void 0 ? void 0 : _e.band_id,
                },
                frequency_plan_id: payload.end_device.frequency_plan_id,
                supports_join: payload.end_device.supports_join,
                supports_class_c: payload.end_device.supports_class_c,
                supports_class_b: payload.end_device.supports_class_b,
                multicast: (_f = payload.end_device) === null || _f === void 0 ? void 0 : _f.multicast,
                lorawan_version: payload.end_device.lorawan_version,
                lorawan_phy_version: payload.end_device.lorawan_phy_version,
                mac_settings: {
                    class_c_timeout: (_g = payload.end_device.mac_settings) === null || _g === void 0 ? void 0 : _g.class_c_timeout,
                    supports_32_bit_f_cnt: (_h = payload.end_device.mac_settings) === null || _h === void 0 ? void 0 : _h.supports_32_bit_f_cnt,
                },
                ids: {
                    join_eui: payload.end_device.ids.join_eui,
                    dev_eui: payload.end_device.ids.dev_eui,
                    device_id: payload.end_device.ids.device_id,
                    dev_addr: payload.end_device.ids.dev_addr,
                    application_ids: {
                        application_id: this.APPLICATION_ID,
                    },
                },
            },
            field_mask: {
                paths: paths,
            },
        };
        if (payload.end_device.supports_join == false) {
            const session = {
                dev_addr: (_j = payload.end_device.session) === null || _j === void 0 ? void 0 : _j.dev_addr,
                keys: {
                    f_nwk_s_int_key: {
                        key: (_m = (_l = (_k = payload.end_device.session) === null || _k === void 0 ? void 0 : _k.keys) === null || _l === void 0 ? void 0 : _l.f_nwk_s_int_key) === null || _m === void 0 ? void 0 : _m.key,
                    },
                },
            };
            const mac_state = {
                current_parameters: {
                    rx2_data_rate_index: (_p = (_o = payload.end_device.mac_state) === null || _o === void 0 ? void 0 : _o.current_parameters) === null || _p === void 0 ? void 0 : _p.rx2_data_rate_index,
                },
                desired_parameters: {
                    rx2_data_rate_index: (_r = (_q = payload.end_device.mac_state) === null || _q === void 0 ? void 0 : _q.current_parameters) === null || _r === void 0 ? void 0 : _r.rx2_data_rate_index,
                },
            };
            apiPayload.end_device.session = session;
            apiPayload.end_device.mac_state = mac_state;
        }
        return this.API.send({
            method: 'PUT',
            url: `${this.NETWORK_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.end_device.ids.device_id}`,
            headers: this.headers,
            data: apiPayload,
        });
    }
    /**
     * It sets an end device for the application in the Application Server.
     * @param {Input-SetEndDeviceAS} payload - {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:SetEndDeviceRequest SetEndDeviceAS}
     * @returns {Output-SetEndDeviceAS}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDevice SetEndDeviceAS}
     */
    setEndDeviceAS(payload) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const recpaths = (0, utils_1.getAllKeys)(payload);
        const tempPaths = recpaths.toString().replaceAll('end_device.', '').split(',');
        const items = ['ids.dev_addr'];
        const paths = tempPaths.filter((item) => !items.includes(item));
        const apiPayload = {
            end_device: {
                version_ids: {
                    brand_id: (_a = payload.end_device.version_ids) === null || _a === void 0 ? void 0 : _a.brand_id,
                    model_id: (_b = payload.end_device.version_ids) === null || _b === void 0 ? void 0 : _b.model_id,
                    hardware_version: (_c = payload.end_device.version_ids) === null || _c === void 0 ? void 0 : _c.hardware_version,
                    firmware_version: (_d = payload.end_device.version_ids) === null || _d === void 0 ? void 0 : _d.firmware_version,
                    band_id: (_e = payload.end_device.version_ids) === null || _e === void 0 ? void 0 : _e.band_id,
                },
                formatters: {
                    up_formatter: (_f = payload.end_device.formatters) === null || _f === void 0 ? void 0 : _f.up_formatter,
                    down_formatter: (_g = payload.end_device.formatters) === null || _g === void 0 ? void 0 : _g.down_formatter,
                },
                ids: {
                    join_eui: payload.end_device.ids.join_eui,
                    dev_eui: payload.end_device.ids.dev_eui,
                    device_id: payload.end_device.ids.device_id,
                    dev_addr: payload.end_device.ids.dev_addr,
                    application_ids: {
                        application_id: this.APPLICATION_ID,
                    },
                },
                session: {
                    dev_addr: (_h = payload.end_device.session) === null || _h === void 0 ? void 0 : _h.dev_addr,
                    keys: {
                        app_s_key: {
                            key: (_l = (_k = (_j = payload.end_device.session) === null || _j === void 0 ? void 0 : _j.keys) === null || _k === void 0 ? void 0 : _k.app_s_key) === null || _l === void 0 ? void 0 : _l.key,
                        },
                    },
                },
            },
            field_mask: {
                paths: paths,
            },
        };
        return this.API.send({
            method: 'PUT',
            url: `${this.APPLICATION_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.end_device.ids.device_id}`,
            headers: this.headers,
            data: apiPayload,
        });
    }
    /**
     * It returns the end device information for the application in the Identity Server.
     * @param {Input-GetEndDeviceInfo} payload - {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:GetEndDeviceRequest GetEndDeviceInfo}
     * @returns {Output-GetEndDeviceInfo}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDevice GetEndDeviceInfo}
     */
    getEndDeviceInfoIS(payload) {
        return this.API.send({
            method: 'GET',
            url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.device_id}?field_mask=name,version_ids,last_seen_at,network_server_address,application_server_address,join_server_address,locations,claim_authentication_code,attributes`,
            headers: this.headers,
            data: {},
        });
    }
    /**
     * It returns the end device information for the application in the Join Server.
     * @param {Input-GetEndDeviceInfo} payload - {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:GetEndDeviceRequest GetEndDeviceInfo}
     * @returns {Output-GetEndDeviceInfo}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDevice GetEndDeviceInfo}
     */
    getEndDeviceInfoJS(payload) {
        return this.API.send({
            method: 'GET',
            url: `${this.JOIN_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.device_id}?field_mask=resets_join_nonces,network_server_address,application_server_address,net_id,application_server_id,application_server_kek_label,network_server_kek_label,root_keys`,
            headers: this.headers,
            data: {},
        });
    }
    /**
     * It returns the end device information for the application in the Network Server.
     * @param {Input-GetEndDeviceInfo} payload - {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:GetEndDeviceRequest GetEndDeviceInfo}
     * @returns {Output-GetEndDeviceInfo}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDevice GetEndDeviceInfo}
     */
    getEndDeviceInfoNS(payload) {
        return this.API.send({
            method: 'GET',
            url: `${this.NETWORK_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.device_id}?field_mask=version_ids,frequency_plan_id,mac_settings,supports_class_b,supports_class_c,supports_join,lorawan_version,lorawan_phy_version,multicast,session,pending_session`,
            headers: this.headers,
            data: {},
        });
    }
    /**
     * It returns the end device information for the application in the Application Server.
     * @param {Input-GetEndDeviceInfo} payload - {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:GetEndDeviceRequest GetEndDeviceInfo}
     * @returns {Output-GetEndDeviceInfo}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDevice GetEndDeviceInfo}
     */
    getEndDeviceInfoAS(payload) {
        return this.API.send({
            method: 'GET',
            url: `${this.APPLICATION_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.device_id}?field_mask=version_ids,formatters,skip_payload_crypto_override,session,pending_session`,
            headers: this.headers,
            data: {},
        });
    }
    /**
     * It returns the list of end devices for the application in the Identity Server.
     * @param {Input-GetEndDeviceList} [payload] - Input-GetCollabortorList
     * @returns {Output-GetEndDeviceList}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDevices GetEndDeviceList}
     */
    getEndDeviceList(payload) {
        let page = 1, limit = 20, order = '-created_at';
        if (payload) {
            page = payload.page ? payload.page : 1;
            limit = payload.limit ? payload.limit : 20;
            order = payload.order ? payload.order : '-created_at';
        }
        return this.API.send({
            method: 'GET',
            url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/devices?page=${page}&limit=${limit}&order=${order}&field_mask=name,application_server_address,network_server_address,join_server_address,last_seen_at`,
            headers: this.headers,
            data: {},
        });
    }
    /**
     * It updates the end device information for the application.
     * @param {Input-UpdateEndDevice} payload - {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:UpdateEndDeviceRequest UpdateEndDevice}
     * @returns {Output-UpdateEndDevice}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDevice UpdateEndDevice}
     */
    updateEndDevice(payload) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
        const recpaths = (0, utils_1.getAllKeys)(payload);
        const newKeys = recpaths.toString().replaceAll('end_device.', '').split(',');
        /*This function removes some keys which are not meant to be passed.*/
        const filterKeys = (keys) => {
            var newArray = [];
            for (var i = 0; i < keys.length; i++) {
                if (keys[i] !== 'ids.device_id' &&
                    keys[i] !== 'ids.application_ids.application_id' &&
                    keys[i] !== 'ids.dev_eui' &&
                    keys[i] !== 'ids.join_eui' &&
                    keys[i] !== 'ids.dev_addr') {
                    newArray.push(keys[i]);
                }
            }
            return newArray;
        };
        const tempArr = filterKeys(newKeys);
        const tempPaths = tempArr.filter((el) => el.includes('attributes.'));
        if (tempPaths.length != 0) {
            this.paths = tempArr.toString().replaceAll(tempPaths.toString(), 'attributes').split(',');
        }
        else {
            this.paths = tempArr;
        }
        const paths = this.paths;
        const apiPayload = {
            end_device: {
                ids: {
                    device_id: payload.end_device.ids.device_id,
                    application_ids: {
                        application_id: this.APPLICATION_ID,
                    },
                    dev_eui: (_a = payload.end_device.ids) === null || _a === void 0 ? void 0 : _a.dev_eui,
                    join_eui: (_b = payload.end_device.ids) === null || _b === void 0 ? void 0 : _b.join_eui,
                    dev_addr: (_c = payload.end_device.ids) === null || _c === void 0 ? void 0 : _c.dev_addr,
                },
                name: payload.end_device.name,
                description: payload.end_device.description,
                attributes: payload.end_device.attributes,
                version_ids: {
                    brand_id: (_d = payload.end_device.version_ids) === null || _d === void 0 ? void 0 : _d.brand_id,
                    model_id: (_e = payload.end_device.version_ids) === null || _e === void 0 ? void 0 : _e.model_id,
                    hardware_version: (_f = payload.end_device.version_ids) === null || _f === void 0 ? void 0 : _f.hardware_version,
                    firmware_version: (_g = payload.end_device.version_ids) === null || _g === void 0 ? void 0 : _g.firmware_version,
                    band_id: (_h = payload.end_device.version_ids) === null || _h === void 0 ? void 0 : _h.band_id,
                },
                service_profile_id: payload.end_device.service_profile_id,
                network_server_address: payload.end_device.network_server_address,
                network_server_kek_label: payload.end_device.network_server_kek_label,
                application_server_address: payload.end_device.application_server_address,
                application_server_kek_label: payload.end_device.application_server_kek_label,
                application_server_id: payload.end_device.application_server_id,
                join_server_address: payload.end_device.join_server_address,
                locations: payload.end_device.locations,
                picture: {
                    embedded: {
                        mime_type: (_k = (_j = payload.end_device.picture) === null || _j === void 0 ? void 0 : _j.embedded) === null || _k === void 0 ? void 0 : _k.mime_type,
                        data: (_m = (_l = payload.end_device.picture) === null || _l === void 0 ? void 0 : _l.embedded) === null || _m === void 0 ? void 0 : _m.data,
                    },
                    sizes: (_o = payload.end_device.picture) === null || _o === void 0 ? void 0 : _o.sizes,
                },
                supports_class_b: payload.end_device.supports_class_b,
                supports_class_c: payload.end_device.supports_class_c,
                lorawan_version: payload.end_device.lorawan_version,
                lorawan_phy_version: payload.end_device.lorawan_phy_version,
                frequency_plan_id: payload.end_device.frequency_plan_id,
                min_frequency: payload.end_device.min_frequency,
                max_frequency: payload.end_device.max_frequency,
                supports_join: payload.end_device.supports_join,
                resets_join_nonces: payload.end_device.resets_join_nonces,
                root_keys: {
                    root_key_id: (_p = payload.end_device.root_keys) === null || _p === void 0 ? void 0 : _p.root_key_id,
                    app_key: (_q = payload.end_device.root_keys) === null || _q === void 0 ? void 0 : _q.app_key,
                    nwk_key: (_r = payload.end_device.root_keys) === null || _r === void 0 ? void 0 : _r.app_key,
                },
                net_id: payload.end_device.net_id,
                mac_settings: payload.end_device.mac_settings,
                mac_state: payload.end_device.mac_state,
                pending_mac_state: payload.end_device.mac_state,
                session: payload.end_device.session,
                pending_session: payload.end_device.session,
                last_dev_nonce: payload.end_device.last_dev_nonce,
                used_dev_nonces: payload.end_device.used_dev_nonces,
                last_join_nonce: payload.end_device.last_join_nonce,
                last_rj_count_0: payload.end_device.last_rj_count_0,
                last_rj_count_1: payload.end_device.last_rj_count_1,
                last_dev_status_received_at: payload.end_device.last_dev_status_received_at,
                power_state: payload.end_device.power_state,
                battery_percentage: payload.end_device.battery_percentage,
                downlink_margin: payload.end_device.downlink_margin,
                queued_application_downlinks: payload.end_device.queued_application_downlinks,
                formatters: {
                    up_formatter: (_s = payload.end_device.formatters) === null || _s === void 0 ? void 0 : _s.up_formatter,
                    up_formatter_parameter: (_t = payload.end_device.formatters) === null || _t === void 0 ? void 0 : _t.up_formatter_parameter,
                    down_formatter: (_u = payload.end_device.formatters) === null || _u === void 0 ? void 0 : _u.down_formatter,
                    down_formatter_parameter: (_v = payload.end_device.formatters) === null || _v === void 0 ? void 0 : _v.down_formatter_parameter,
                },
                provisioner_id: payload.end_device.provisioner_id,
                provisioning_data: payload.end_device.provisioning_data,
                multicast: payload.end_device.multicast,
                claim_authentication_code: {
                    value: (_w = payload.end_device.claim_authentication_code) === null || _w === void 0 ? void 0 : _w.value,
                    valid_from: (_x = payload.end_device.claim_authentication_code) === null || _x === void 0 ? void 0 : _x.valid_from,
                    valid_to: (_y = payload.end_device.claim_authentication_code) === null || _y === void 0 ? void 0 : _y.valid_to,
                },
                skip_payload_crypto: payload.end_device.skip_payload_crypto,
                skip_payload_crypto_override: payload.end_device.skip_payload_crypto_override,
                serial_number: payload.end_device.serial_number,
                lora_alliance_profile_ids: {
                    vendor_id: (_z = payload.end_device.lora_alliance_profile_ids) === null || _z === void 0 ? void 0 : _z.vendor_id,
                    vendor_profile_id: (_0 = payload.end_device.lora_alliance_profile_ids) === null || _0 === void 0 ? void 0 : _0.vendor_profile_id,
                },
            },
            field_mask: {
                paths: paths,
            },
        };
        return this.API.send({
            method: 'PUT',
            url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.end_device.ids.device_id}`,
            headers: this.headers,
            data: apiPayload,
        });
    }
    /**
     * It deletes the end device in the identity server.
     * @param {Input-DeleteEndDeviceIS} payload - {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDeviceIdentifiers DeleteEndDeviceIS}
     * @returns {Output-EmptyPayload}
     * The response from the API.
     */
    deleteEndDeviceIS(payload) {
        return this.API.send({
            method: 'DELETE',
            url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.device_id}`,
            headers: this.headers,
            data: {},
        });
    }
    /**
     * It deletes the end device in the join server.
     * @param {Input-DeleteEndDeviceJS} payload - {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDeviceIdentifiers DeleteEndDeviceJS}
     * @returns {Output-EmptyPayload}
     * The response from the API.
     */
    deleteEndDeviceJS(payload) {
        return this.API.send({
            method: 'DELETE',
            url: `${this.JOIN_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.device_id}`,
            headers: this.headers,
            data: {},
        });
    }
    /**
     * It deletes the end device in the network server.
     * @param {Input-DeleteEndDeviceNS} payload - {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDeviceIdentifiers DeleteEndDeviceNS}
     * @returns {Output-EmptyPayload}
     * The response from the API.
     */
    deleteEndDeviceNS(payload) {
        return this.API.send({
            method: 'DELETE',
            url: `${this.NETWORK_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.device_id}`,
            headers: this.headers,
            data: {},
        });
    }
    /**
     * It deletes the end device in the application server.
     * @param {Input-DeleteEndDeviceAS} payload - {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDeviceIdentifiers DeleteEndDeviceAS}
     * @returns {Output-EmptyPayload}
     * The response from the API.
     */
    deleteEndDeviceAS(payload) {
        return this.API.send({
            method: 'DELETE',
            url: `${this.APPLICATION_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.device_id}`,
            headers: this.headers,
            data: {},
        });
    }
    /**
     * It returns DevEUIs that are available for use.
     * @returns {Output-IssueDevEUI}
     * The response from the API.
     */
    issueDevEUI() {
        return this.API.send({
            method: 'POST',
            url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/dev-eui`,
            headers: this.headers,
            data: {},
        });
    }
    /**
     * It push or replace the downlink queue in the application server.
     * @param {Input-DownlinkQueue} payload - Input-DownlinkQueue
     */
    downlinkQueue(payload) {
        /* Converting the payload into a base64 string. */
        const mssgPayload = (0, utils_1.getBase64)(payload.payload_type, payload.payload);
        const apiPayload = {
            downlinks: [
                {
                    f_port: payload.port_no,
                    frm_payload: mssgPayload,
                    confirmed: payload.confirmed_downlink,
                },
            ],
        };
        let gateways = [];
        if (payload.gateway_id) {
            for (let i = 0; i < payload.gateway_id.length; i++) {
                gateways.push({
                    gateway_ids: {
                        gateway_id: payload.gateway_id[i],
                    },
                });
            }
            apiPayload.downlinks[0].class_b_c = {
                gateways: gateways,
            };
        }
        return this.API.send({
            method: 'POST',
            url: `${this.APPLICATION_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.device_id}/down/${payload.request_type}`,
            headers: this.headers,
            data: apiPayload,
        });
    }
    // /**
    //  * It simulate the uplink queue in the application server.
    //  * @param {Input-UplinkQueue} payload - Input-UplinkQueue
    //  * @returns It simulate the uplink queue in the application server.
    //  */
    // uplinkQueue(payload: uplinkQueueUserPayload): Promise<any> {
    //   /* Converting the payload into a base64 string. */
    //   const mssgPayload = getBase64(payload.payload_type, payload.payload);
    //   const apiPayload: uplinkQueue = {
    //     downlinks: [
    //       {
    //         f_port: payload.port_no,
    //         frm_payload: mssgPayload,
    //         confirmed: payload.confirmed_downlink,
    //       },
    //     ],
    //   };
    //   return this.API.send({
    //     method: 'POST',
    //     url: `${this.APPLICATION_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.device_id}/up/simulate`,
    //     headers: this.headers,
    //     data: apiPayload,
    //   });
    // }
    /**
     * It subscribes downlink event topic.
     * @param {Input-SubscribeDownLinkEvent} payload - Input-SubscribeDownLinkEvent
     * @returns {Output-SubscribeDownLinkEvent} It returns client object and topic.
     */
    subscribeDownLinkEvent(payload) {
        return new Promise((resolve, reject) => {
            try {
                this.conn = new mqtt_1.Mqtt(payload.host, payload.port, payload.username, this.API_KEY);
                this.topic = payload.device_id ?
                    `v3/${this.APPLICATION_ID}@${this.TENANT_ID}/devices/${payload.device_id}/down/${payload.down_type}` :
                    `v3/${this.APPLICATION_ID}@${this.TENANT_ID}/devices/+/down/${payload.down_type}`;
                this.conn.client.on('connect', () => {
                    this.conn.client.subscribe([this.topic], (err) => {
                        if (err) {
                            reject(err); // reject the promise if an error occurs
                        }
                        else {
                            const clientObj = {
                                client: this.conn.client,
                                topic: this.topic,
                            };
                            resolve(clientObj);
                        }
                    });
                });
                this.conn.client.on('message', (topic, mqtt_payload) => {
                    try {
                        payload.callback_downlink_event(mqtt_payload);
                    }
                    catch (e) {
                        reject(e); // reject the promise if an error occurs in the callback
                    }
                });
                this.conn.client.on('disconnect', (mqtt_payload) => {
                    payload.callback_subscribe_disconnect(mqtt_payload);
                });
                this.conn.client.on('error', (err) => {
                    payload.callback_subscribe_error(err); // reject the promise if an error event is emitted
                });
            }
            catch (e) {
                reject(e); // reject the promise if an error occurs
            }
        });
    }
    /**
     * It subscribes uplink event topic.
     * @param {Input-SubscribeUpLinkEvent} payload - Input-SubscribeUpLinkEvent
     * @returns {Output-SubscribeUpLinkEvent} It returns client object and topic.
     */
    subscribeUpLinkEvent(payload) {
        return new Promise((resolve, reject) => {
            try {
                this.conn = new mqtt_1.Mqtt(payload.host, payload.port, payload.username, this.API_KEY);
                this.topic = payload.device_id ?
                    `v3/${this.APPLICATION_ID}@${this.TENANT_ID}/devices/${payload.device_id}/up` :
                    `v3/${this.APPLICATION_ID}@${this.TENANT_ID}/devices/+/up`;
                this.conn.client.on('connect', () => {
                    this.conn.client.subscribe([this.topic], (err) => {
                        if (err) {
                            reject(err); // reject the promise if an error occurs
                        }
                        else {
                            const clientObj = {
                                client: this.conn.client,
                                topic: this.topic,
                            };
                            resolve(clientObj);
                        }
                    });
                });
                this.conn.client.on('message', (topic, mqtt_payload) => {
                    try {
                        payload.callback_uplink_event(mqtt_payload);
                    }
                    catch (e) {
                        reject(e); // reject the promise if an error occurs in the callback
                    }
                });
                this.conn.client.on('disconnect', (mqtt_payload) => {
                    payload.callback_subscribe_disconnect(mqtt_payload);
                });
                this.conn.client.on('error', (err) => {
                    payload.callback_subscribe_error(err); // reject the promise if an error event is emitted
                });
            }
            catch (e) {
                reject(e); // reject the promise if an error occurs
            }
        });
    }
    /**
     * It unsubscribes event topic.
     * @param {mqtt_connection_object} payload - MQTT Connection Object
     */
    unsubscribeEvent(client, topic) {
        return new Promise((resolve, reject) => {
            client.unsubscribe(topic, (err) => {
                if (err) {
                    // Handle the error if unsubscribe fails
                    reject(new Error(`Failed to unsubscribe from topic ${topic}: ${err.message}`));
                }
                else {
                    resolve(`Successfully unsubscribed from topic ${topic}`);
                }
            });
        });
    }
}
exports.EndDevice = EndDevice;
