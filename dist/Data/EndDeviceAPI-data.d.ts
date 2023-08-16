import { subscribeDownLinkEventPayload, subscribeUpLinkEventPayload } from '../Interfaces/Device/device.interface';
export declare const config_T: {
    IDENTITY_SERVER: string;
    NETWORK_SERVER: string;
    APPLICATION_SERVER: string;
    JOIN_SERVER: string;
    API_KEY: string;
};
export declare const config_F: {
    IDENTITY_SERVER: string;
    NETWORK_SERVER: string;
    APPLICATION_SERVER: string;
    JOIN_SERVER: string;
    API_KEY: string;
};
export declare const createEndDeviceISUserPayload: {
    end_device: {
        ids: {
            join_eui: string;
            dev_eui: string;
            device_id: string;
            application_ids: {
                application_id: string;
            };
        };
        version_ids: {
            brand_id: string;
            model_id: string;
            hardware_version: string;
            firmware_version: string;
            band_id: string;
        };
        network_server_address: string;
        application_server_address: string;
        join_server_address: string;
    };
};
export declare const setEndDeviceJSUserPayload: {
    end_device: {
        ids: {
            join_eui: string;
            dev_eui: string;
            device_id: string;
            application_ids: {
                application_id: string;
            };
        };
        network_server_address: string;
        application_server_address: string;
        root_keys: {
            app_key: {
                key: string;
            };
        };
    };
};
export declare const setEndDeviceNSUserPayload: {
    end_device: {
        version_ids: {
            brand_id: string;
            model_id: string;
            hardware_version: string;
            firmware_version: string;
            band_id: string;
        };
        frequency_plan_id: string;
        supports_join: boolean;
        supports_class_c: boolean;
        multicast: boolean;
        lorawan_version: string;
        lorawan_phy_version: string;
        mac_settings: {
            class_c_timeout: string;
            supports_32_bit_f_cnt: boolean;
        };
        ids: {
            join_eui: string;
            dev_eui: string;
            device_id: string;
            application_ids: {
                application_id: string;
            };
        };
    };
};
export declare const setEndDeviceASUserPayload: {
    end_device: {
        version_ids: {
            brand_id: string;
            model_id: string;
            hardware_version: string;
            firmware_version: string;
            band_id: string;
        };
        formatters: {
            up_formatter: string;
            down_formatter: string;
        };
        ids: {
            join_eui: string;
            dev_eui: string;
            device_id: string;
            application_ids: {
                application_id: string;
            };
        };
    };
};
export declare const getEndDeviceInfoUserPayload_T: {
    device_id: string;
};
export declare const getEndDeviceInfoUserPayload_F: {
    device_id: string;
};
export declare const updateEndDeviceUserPayload: {
    end_device: {
        ids: {
            device_id: string;
        };
        name: string;
        network_server_address: string;
        application_server_address: string;
        join_server_address: string;
        attributes: {
            hello: string;
        };
    };
};
export declare const deleteEndDeviceISUserPayload: {
    device_id: string;
};
export declare const deleteEndDeviceJSUserPayload: {
    device_id: string;
};
export declare const deleteEndDeviceNSUserPayload: {
    device_id: string;
};
export declare const deleteEndDeviceASUserPayload: {
    device_id: string;
};
export declare const configDownlink: {
    IDENTITY_SERVER: string;
    NETWORK_SERVER: string;
    APPLICATION_SERVER: string;
    JOIN_SERVER: string;
    API_KEY: string;
    TENANT_ID: string;
};
export declare const downlinkQueuePushUserPayload: {
    device_id: string;
    payload: string;
    payload_type: string;
    port_no: number;
    request_type: string;
    confirmed_downlink: boolean;
};
export declare const subscribeDownLinkEventUserPayload: subscribeDownLinkEventPayload;
export declare const subscribeUpLinkEventUserPayload: subscribeUpLinkEventPayload;
