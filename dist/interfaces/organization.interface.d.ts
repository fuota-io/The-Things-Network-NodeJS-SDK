export interface Pagination {
    limit?: number;
    page?: number;
    order?: string;
}
export interface CreateApplicationUserPayload {
    application_id: string;
    name: string;
    description: string;
}
export interface CreateApplicationPayload {
    application: {
        ids: {
            application_id: string;
        };
        name: string;
        description: string;
    };
}
export interface CreateApplication {
    ids: {
        application_id: string;
    };
    created_at: any;
    updated_at: any;
    deleted_at: any;
    name: string;
    description: string;
    attributes: {
        [key: string]: string;
    };
    contact_info: string[];
    administrative_contact: {
        organization_ids: {
            organization_id: string;
        };
    };
    technical_contact: {
        organization_ids: {
            organization_id: string;
        };
    };
    network_server_address: string;
    application_server_address: string;
    join_server_address: string;
    dev_eui_counter: 0;
    end_device_limit: null;
}
export interface GetApplicationListUserPayload extends Pagination {
}
export interface GetApplicationList {
    applications: {
        ids: {
            application_id: string;
        };
        name: string;
        description: string;
        created_at: string;
        updated_at: string;
        network_server_address: string;
        application_server_address: string;
        join_server_address: string;
    }[];
}
export interface CreateAPIKeyPayload {
    name: string;
    rights: string[];
    expires_at?: any;
}
export interface CreateAPIKey {
    id: string;
    key: string;
    name: string;
    rights: string[];
    created_at: string;
    updated_at: string;
    expires_at: any;
}
export interface GetAPIKeyListUserPayload extends Pagination {
}
export interface GetAPIKeyList {
    api_keys: {
        id: string;
        name: string;
        rights: string[];
        created_at: string;
        updated_at: string;
        expires_at: any;
    }[];
}
export interface GetAPIKeyInfoUserPayload {
    key_id: string;
}
export interface GetAPIKeyInfo extends CreateAPIKey {
}
export interface UpdateAPIKeyUserPayload {
    api_key_id: string;
    api_key_name?: string;
    api_key_rights?: string[];
    expires_at?: any;
}
export interface UpdateAPIKeyPayload {
    api_key: {
        id: string;
        name?: string;
        rights?: string[];
        expires_at?: any;
    };
    field_mask: {
        paths: string[];
    };
}
export interface UpdateAPIKey extends CreateAPIKey {
}
export interface GetCollaboratorInfoUserPayload {
    user_id: string;
}
export interface GetCollaboratorInfo {
    ids: {
        user_ids: {
            user_id: string;
            email: string;
        };
    };
    rights: string[];
}
export interface SetCollaboratorUserPayload {
    user_id: string;
    email?: string;
    rights: string[];
}
export interface SetCollaboratorPayload {
    collaborator: {
        ids: {
            user_ids: {
                user_id: string;
                email?: string;
            };
        };
        rights: string[];
    };
}
export interface CreateGatewayUserPayload {
    gateway: {
        ids: {
            gateway_id: string;
            eui?: string;
        };
        name?: string;
        description?: string;
        attributes?: {
            [key: string]: string;
        };
        version_ids?: {
            brand_id: string;
            model_id: string;
            hardware_version: string;
            firmware_version: string;
        };
        gateway_server_address?: string;
        auto_update?: boolean;
        update_channel?: string;
        frequency_plan_id: string;
        frequency_plan_ids?: string[];
        antennas?: string[];
        status_public?: boolean;
        location_public?: boolean;
        schedule_downlink_late?: boolean;
        enforce_duty_cycle?: boolean;
        downlink_path_constraint?: string;
        schedule_anytime_delay?: string;
        update_location_from_status?: boolean;
        lbs_lns_secret?: {
            key_id: string;
            value: string;
        };
        claim_authentication_code?: {
            secret: {
                key_id: string;
                value: string;
            };
            valid_from: string;
            valid_to: string;
        };
        target_cups_uri?: string;
        target_cups_key?: {
            key_id: string;
            value: string;
        };
        require_authenticated_connection?: boolean;
        lrfhss?: {
            supported: boolean;
        };
        disable_packet_broker_forwarding?: boolean;
    };
}
export interface CreateGatewayPayload {
    gateway: {
        ids: {
            gateway_id: string;
            eui?: string;
        };
        name?: string;
        description?: string;
        attributes?: {
            [key: string]: string;
        };
        version_ids?: {
            brand_id: string;
            model_id: string;
            hardware_version: string;
            firmware_version: string;
        };
        gateway_server_address?: string;
        auto_update?: boolean;
        update_channel?: string;
        frequency_plan_id: string;
        frequency_plan_ids?: string[];
        antennas?: string[];
        status_public?: boolean;
        location_public?: boolean;
        schedule_downlink_late?: boolean;
        enforce_duty_cycle?: boolean;
        downlink_path_constraint?: string;
        schedule_anytime_delay?: string;
        update_location_from_status?: boolean;
        lbs_lns_secret?: {
            key_id: string;
            value: string;
        };
        claim_authentication_code?: {
            secret: {
                key_id: string;
                value: string;
            };
            valid_from: string;
            valid_to: string;
        };
        target_cups_uri?: string;
        target_cups_key?: {
            key_id: string;
            value: string;
        };
        require_authenticated_connection?: boolean;
        lrfhss?: {
            supported: boolean;
        };
        disable_packet_broker_forwarding?: boolean;
    };
}
export interface CreateGateway {
    ids: {
        gateway_id: string;
        eui: string;
    };
    created_at: any;
    updated_at: any;
    deleted_at: any;
    name: string;
    description: string;
    attributes: {
        [key: string]: string;
    };
    contact_info: {
        contact_type: string;
        contact_method: string;
        value: string;
        public: boolean;
        validated_at: string;
    }[];
    administrative_contact: {
        organization_ids: {
            organization_id: string;
        };
        user_ids: {
            user_id: string;
            email: string;
        };
    };
    technical_contact: {
        organization_ids: {
            organization_id: string;
        };
        user_ids: {
            user_id: string;
            email: string;
        };
    };
    version_ids: {
        brand_id: string;
        model_id: string;
        hardware_version: string;
        firmware_version: string;
    };
    gateway_server_address: string;
    auto_update: boolean;
    update_channel: string;
    frequency_plan_id: string;
    frequency_plan_ids: string[];
    antennas: string[];
    status_public: boolean;
    location_public: boolean;
    schedule_downlink_late: boolean;
    enforce_duty_cycle: boolean;
    downlink_path_constraint: string;
    schedule_anytime_delay: string;
    update_location_from_status: boolean;
    lbs_lns_secret: {
        key_id: string;
        value: string;
    };
    claim_authentication_code: {
        secret: {
            key_id: string;
            value: string;
        };
        valid_from: string;
        valid_to: string;
    };
    target_cups_uri: string;
    target_cups_key: {
        key_id: string;
        value: string;
    };
    require_authenticated_connection: boolean;
    lrfhss: {
        supported: boolean;
    };
    disable_packet_broker_forwarding: boolean;
}
export interface GetGatewayListUserPayload extends Pagination {
}
export interface GetGatewayList {
    gateways: CreateGateway[];
}
