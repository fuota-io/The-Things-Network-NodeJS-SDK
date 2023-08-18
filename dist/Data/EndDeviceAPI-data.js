"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeUpLinkEventUserPayload = exports.subscribeDownLinkEventUserPayload = exports.downlinkQueuePushUserPayload = exports.configDownlink = exports.deleteEndDeviceASUserPayload = exports.deleteEndDeviceNSUserPayload = exports.deleteEndDeviceJSUserPayload = exports.deleteEndDeviceISUserPayload = exports.updateEndDeviceUserPayload = exports.getEndDeviceInfoUserPayload_F = exports.getEndDeviceInfoUserPayload_T = exports.setEndDeviceASUserPayload = exports.setEndDeviceNSUserPayload = exports.setEndDeviceJSUserPayload = exports.createEndDeviceISUserPayload = exports.config_F = exports.config_T = void 0;
exports.config_T = {
    IDENTITY_SERVER: process.env.IDENTITY_SERVER || 'eu1.cloud.thethings.network/api/v3',
    NETWORK_SERVER: process.env.NETWORK_SERVER || 'nam1.cloud.thethings.network',
    APPLICATION_SERVER: process.env.APPLICATION_SERVER || 'nam1.cloud.thethings.network',
    JOIN_SERVER: process.env.JOIN_SERVER || 'nam1.cloud.thethings.network',
    API_KEY: process.env.API_KEY || '',
};
exports.config_F = {
    IDENTITY_SERVER: process.env.IDENTITY_SERVER || 'eu1.cloud.thethings.network/api/v3',
    NETWORK_SERVER: process.env.NETWORK_SERVER || 'nam1.cloud.thethings.network',
    APPLICATION_SERVER: process.env.APPLICATION_SERVER || 'nam1.cloud.thethings.network',
    JOIN_SERVER: process.env.JOIN_SERVER || 'nam1.cloud.thethings.network',
    API_KEY: process.env.API_KEY || '',
};
exports.createEndDeviceISUserPayload = {
    end_device: {
        ids: {
            join_eui: 'DDFFDDFDFFDFDFDF',
            dev_eui: '70B3D57ED005B59E',
            device_id: 'eui-70b3d57ed005b59e',
            application_ids: {
                application_id: 'meet69',
            },
        },
        version_ids: {
            brand_id: 'moko',
            model_id: 'lw003',
            hardware_version: '2.1',
            firmware_version: '2.0',
            band_id: 'AS_923',
        },
        network_server_address: 'nam1.cloud.thethings.network',
        application_server_address: 'nam1.cloud.thethings.network',
        join_server_address: 'nam1.cloud.thethings.network',
    },
};
exports.setEndDeviceJSUserPayload = {
    end_device: {
        ids: {
            join_eui: 'DDFFDDFDFFDFDFDF',
            dev_eui: '70B3D57ED005B59E',
            device_id: 'eui-70b3d57ed005b59e',
            application_ids: {
                application_id: 'meet69',
            },
        },
        network_server_address: 'nam1.cloud.thethings.network',
        application_server_address: 'nam1.cloud.thethings.network',
        root_keys: {
            app_key: {
                key: '9227E703A429BF5EF8F69E8937FAE025',
            },
        },
    },
};
exports.setEndDeviceNSUserPayload = {
    end_device: {
        version_ids: {
            brand_id: 'moko',
            model_id: 'lw003-b',
            hardware_version: '2.1',
            firmware_version: '2.0',
            band_id: 'AS_923',
        },
        frequency_plan_id: 'AS_920_923_TTN_JP_3_LAND_MOBILE',
        supports_join: true,
        supports_class_c: true,
        multicast: true,
        lorawan_version: 'MAC_V1_0_3',
        lorawan_phy_version: 'PHY_V1_0_3_REV_A',
        mac_settings: {
            class_c_timeout: '60s',
            supports_32_bit_f_cnt: true,
        },
        ids: {
            join_eui: 'DDFFDDFDFFDFDFDF',
            dev_eui: '70B3D57ED005B59E',
            device_id: 'eui-70b3d57ed005b59e',
            application_ids: {
                application_id: 'meet69',
            },
        },
        mac_state: {
            current_parameters: {
                rx2_data_rate_index: '12',
            },
            desired_parameters: {
                rx2_data_rate_index: '12',
            }
        }
    },
};
exports.setEndDeviceASUserPayload = {
    end_device: {
        version_ids: {
            brand_id: 'moko',
            model_id: 'lw003-b',
            hardware_version: '2.1',
            firmware_version: '2.0',
            band_id: 'AS_923',
        },
        formatters: {
            up_formatter: 'FORMATTER_REPOSITORY',
            down_formatter: 'FORMATTER_REPOSITORY',
        },
        ids: {
            join_eui: 'DDFFDDFDFFDFDFDF',
            dev_eui: '70B3D57ED005B59E',
            device_id: 'eui-70b3d57ed005b59e',
            application_ids: {
                application_id: 'meet69',
            },
        },
    },
};
exports.getEndDeviceInfoUserPayload_T = {
    device_id: 'eui-70b3d57ed005b59e',
};
exports.getEndDeviceInfoUserPayload_F = {
    device_id: 'eui-70b3d57ed005b59z',
};
exports.updateEndDeviceUserPayload = {
    end_device: {
        ids: {
            device_id: 'eui-70b3d57ed005b59e',
        },
        name: 'device',
        network_server_address: 'nam1.cloud.thethings.network',
        application_server_address: 'nam1.cloud.thethings.network',
        join_server_address: 'nam1.cloud.thethings.network',
        attributes: {
            hello: 'device',
        },
    },
};
exports.deleteEndDeviceISUserPayload = { device_id: 'eui-70b3d57ed005b59e' };
exports.deleteEndDeviceJSUserPayload = { device_id: 'eui-70b3d57ed005b59e' };
exports.deleteEndDeviceNSUserPayload = { device_id: 'eui-70b3d57ed005b59e' };
exports.deleteEndDeviceASUserPayload = { device_id: 'eui-70b3d57ed005b59e' };
exports.configDownlink = {
    IDENTITY_SERVER: process.env.IDENTITY_SERVER || 'eu1.cloud.thethings.network/api/v3',
    NETWORK_SERVER: process.env.NETWORK_SERVER || 'nam1.cloud.thethings.network',
    APPLICATION_SERVER: process.env.APPLICATION_SERVER || 'nam1.cloud.thethings.network',
    JOIN_SERVER: process.env.JOIN_SERVER || 'nam1.cloud.thethings.network',
    API_KEY: process.env.API_KEY || '*****',
    TENANT_ID: process.env.TENANT_ID || 'ttn',
};
var x = new Uint8Array(2);
x[0] = 17;
exports.downlinkQueuePushUserPayload = {
    device_id: 'cgr-otaa-08ac',
    payload: 'hello',
    payload_type: 'string',
    port_no: 10,
    request_type: 'push',
    confirmed_downlink: false,
};
exports.subscribeDownLinkEventUserPayload = {
    device_id: 'eui-62af62f0385b5257',
    down_type: '#',
    host: process.env.HOST || 'nam1.cloud.thethings.network',
    port: Number(process.env.PORT) || 8883,
    username: process.env.USERNAME || '*****',
    callback_downlink_event: (data) => {
        console.log('downlinkEvent', data.toString('utf8'));
    },
    callback_subscribe_disconnect: (data) => {
        console.log('subscribeDisconnect', data.toString('utf8'));
    },
    callback_subscribe_error: (data) => {
        console.log('subscribeError', data.toString('utf8'));
    },
};
exports.subscribeUpLinkEventUserPayload = {
    device_id: 'eui-62af62f0385b5257',
    host: process.env.HOST || 'nam1.cloud.thethings.network',
    port: Number(process.env.PORT) || 8883,
    username: process.env.USERNAME || '*****',
    callback_uplink_event: (data) => {
        console.log('downlinkEvent', data.toString('utf8'));
    },
    callback_subscribe_disconnect: (data) => {
        console.log('subscribeDisconnect', data.toString('utf8'));
    },
    callback_subscribe_error: (data) => {
        console.log('subscribeError', data.toString('utf8'));
    },
};
