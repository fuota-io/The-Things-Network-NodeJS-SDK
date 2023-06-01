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
export declare const createApplicationPayloadForUser_T: {
    application_id: string;
    name: string;
    description: string;
};
export declare const createApplicationPayloadForUser_F: {
    application_id: string;
    name: string;
    description: string;
};
export declare const createApplicationPayloadForOrg_T: {
    application_id: string;
    name: string;
    description: string;
};
export declare const createApplicationPayloadForOrg_F: {
    application_id: string;
    name: string;
    description: string;
};
export declare const getApplicationPayload_T: {
    application_id: string;
};
export declare const getApplicationPayload_F: {
    application_id: string;
};
export declare const getApplicationListPayloadForUser: {
    user_id: string;
};
export declare const getApplicationListPayloadForOrg: {
    organization_id: string;
};
export declare const updateApplicationPayload_T: {
    name: string;
    description: string;
    attributes: {
        hello: string;
        hello2: string;
    };
};
export declare const updateApplicationPayload_F: {
    name: string;
    description: string;
    attributes: {
        hello: string;
        hello2: string;
    };
};
export declare const deleteApplicationPayload: {
    application_id: string;
};
export declare const restoreApplicationPayload: {
    application_id: string;
};
export declare const purgeApplicationPayload: {
    application_id: string;
};
export declare const getApplicationRightUserPayload: {
    application_id: string;
};
export declare const createAPIKeyPayloadForApplication: {
    name: string;
    rights: string[];
    expires_at: null;
};
export declare const createAPIKeyPayloadForUser: {
    mail: string;
    name: string;
    rights: string[];
    expires_at: null;
};
export declare const createAPIKeyPayloadForOrg: {
    name: string;
    rights: string[];
    expires_at: null;
};
export declare const getAPIKeyListForApplication: {
    order: string;
    limit: number;
    page: number;
};
export declare const getAPIKeyListForUser: {
    order: string;
    limit: number;
    page: number;
};
export declare const getAPIKeyListForOrg: {
    order: string;
    limit: number;
    page: number;
};
export declare const getAPIKeyInfoPayloadForApplication_T: {
    key_id: string;
};
export declare const getAPIKeyInfoPayloadForApplication_F: {
    key_id: string;
};
export declare const getAPIKeyInfoPayloadForUser_T: {
    key_id: string;
};
export declare const getAPIKeyInfoPayloadForUser_F: {
    key_id: string;
};
export declare const getAPIKeyInfoPayloadForOrganization_T: {
    key_id: string;
};
export declare const getAPIKeyInfoPayloadForOrganization_F: {
    key_id: string;
};
export declare const updateAPIKeyUserPayloadForApplication_T: {
    api_key_id: string;
    api_key_name: string;
    api_key_rights: string[];
    expires_at: null;
};
export declare const updateAPIKeyUserPayloadForApplication_F: {
    api_key_id: string;
    api_key_name: string;
    api_key_rights: string[];
    expires_at: null;
};
export declare const updateAPIKeyUserPayloadForUser_T: {
    email: string;
    api_key_id: string;
    api_key_name: string;
    api_key_rights: string[];
    expires_at: null;
};
export declare const updateAPIKeyUserPayloadForUser_F: {
    email: string;
    api_key_id: string;
    api_key_name: string;
    api_key_rights: string[];
    expires_at: null;
};
export declare const updateAPIKeyUserPayloadForOrg_T: {
    api_key_id: string;
    api_key_name: string;
    api_key_rights: string[];
    expires_at: null;
};
export declare const updateAPIKeyUserPayloadForOrg_F: {
    api_key_id: string;
    api_key_name: string;
    api_key_rights: string[];
    expires_at: null;
};
export declare const getCollaboratorInfoPayloadForApplication_User_T: {
    user_id: string;
    email: string;
};
export declare const getCollaboratorInfoPayloadForApplication_User_F: {
    user_id: string;
    email: string;
};
export declare const getCollaboratorInfoPayloadForApplication_Org_T: {
    organization_id: string;
};
export declare const getCollaboratorInfoPayloadForApplication_Org_F: {
    organization_id: string;
};
export declare const getCollaboratorInfoPayloadForOrg_T: {
    user_id: string;
};
export declare const getCollaboratorInfoPayloadForOrg_F: {
    user_id: string;
};
export declare const setCollaboratorPayloadForApplication_User_T: {
    user_id: string;
    email: string;
    rights: string[];
};
export declare const setCollaboratorPayloadForApplication_User_F: {
    user_id: string;
    email: string;
    rights: string[];
};
export declare const setCollaboratorPayloadForApplication_Org_T: {
    organization_id: string;
    rights: string[];
};
export declare const setCollaboratorPayloadForApplication_Org_F: {
    organization_id: string;
    rights: string[];
};
export declare const setCollaboratorPayloadForOrg_T: {
    user_id: string;
    email: string;
    rights: string[];
};
export declare const setCollaboratorPayloadForOrg_F: {
    user_id: string;
    email: string;
    rights: string[];
};
export declare const getCollaboratorListUserPayload: {
    order: string;
    limit: number;
    page: number;
};
export declare const issueDevEUIPayload: {
    application_id: string;
};
export declare const createGatewayPayload: {
    gateway: {
        ids: {
            gateway_id: string;
            eui: string;
        };
        name: string;
        description: string;
        gateway_server_address: string;
        frequency_plan_id: string;
        status_public: boolean;
        location_public: boolean;
        enforce_duty_cycle: boolean;
        schedule_anytime_delay: string;
        require_authenticated_connection: boolean;
    };
};
export declare const updateGatewayPayload: {
    gateway: {
        attributes: {
            dfhdf: string;
        };
        description: string;
    };
};
export declare const createAPIKeyPayloadForGateway: {
    name: string;
    rights: string[];
    expires_at: null;
};
export declare const getAPIKeyListForGateway: {
    order: string;
    limit: number;
    page: number;
};
export declare const getAPIKeyInfoPayloadForGateway_T: {
    key_id: string;
};
export declare const getAPIKeyInfoPayloadForGateway_F: {
    key_id: string;
};
export declare const updateAPIKeyUserPayloadForGateway_T: {
    api_key_id: string;
    api_key_name: string;
    api_key_rights: string[];
    expires_at: null;
};
export declare const updateAPIKeyUserPayloadForGateway_F: {
    api_key_id: string;
    api_key_name: string;
    api_key_rights: string[];
    expires_at: null;
};
export declare const getCollaboratorInfoPayloadForGateway_User_T: {
    user_id: string;
    email: string;
};
export declare const getCollaboratorInfoPayloadForGateway_User_F: {
    user_id: string;
    email: string;
};
export declare const getCollaboratorInfoPayloadForGateway_Org_T: {
    organization_id: string;
};
export declare const getCollaboratorInfoPayloadForGateway_Org_F: {
    organization_id: string;
};
export declare const setCollaboratorPayloadForGateway_User_T: {
    user_id: string;
    email: string;
    rights: string[];
};
export declare const setCollaboratorPayloadForGateway_User_F: {
    user_id: string;
    email: string;
    rights: string[];
};
export declare const setCollaboratorPayloadForGateway_Org_T: {
    organization_id: string;
    rights: string[];
};
export declare const setCollaboratorPayloadForGateway_Org_F: {
    organization_id: string;
    rights: string[];
};
