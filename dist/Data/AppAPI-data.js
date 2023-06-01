"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGatewayPayload = exports.createGatewayPayload = exports.issueDevEUIPayload = exports.getCollaboratorListUserPayload = exports.setCollaboratorPayloadForOrg_F = exports.setCollaboratorPayloadForOrg_T = exports.setCollaboratorPayloadForApplication_Org_F = exports.setCollaboratorPayloadForApplication_Org_T = exports.setCollaboratorPayloadForApplication_User_F = exports.setCollaboratorPayloadForApplication_User_T = exports.getCollaboratorInfoPayloadForOrg_F = exports.getCollaboratorInfoPayloadForOrg_T = exports.getCollaboratorInfoPayloadForApplication_Org_F = exports.getCollaboratorInfoPayloadForApplication_Org_T = exports.getCollaboratorInfoPayloadForApplication_User_F = exports.getCollaboratorInfoPayloadForApplication_User_T = exports.updateAPIKeyUserPayloadForOrg_F = exports.updateAPIKeyUserPayloadForOrg_T = exports.updateAPIKeyUserPayloadForUser_F = exports.updateAPIKeyUserPayloadForUser_T = exports.updateAPIKeyUserPayloadForApplication_F = exports.updateAPIKeyUserPayloadForApplication_T = exports.getAPIKeyInfoPayloadForOrganization_F = exports.getAPIKeyInfoPayloadForOrganization_T = exports.getAPIKeyInfoPayloadForUser_F = exports.getAPIKeyInfoPayloadForUser_T = exports.getAPIKeyInfoPayloadForApplication_F = exports.getAPIKeyInfoPayloadForApplication_T = exports.getAPIKeyListForOrg = exports.getAPIKeyListForUser = exports.getAPIKeyListForApplication = exports.createAPIKeyPayloadForOrg = exports.createAPIKeyPayloadForUser = exports.createAPIKeyPayloadForApplication = exports.getApplicationRightUserPayload = exports.purgeApplicationPayload = exports.restoreApplicationPayload = exports.deleteApplicationPayload = exports.updateApplicationPayload_F = exports.updateApplicationPayload_T = exports.getApplicationListPayloadForOrg = exports.getApplicationListPayloadForUser = exports.getApplicationPayload_F = exports.getApplicationPayload_T = exports.createApplicationPayloadForOrg_F = exports.createApplicationPayloadForOrg_T = exports.createApplicationPayloadForUser_F = exports.createApplicationPayloadForUser_T = exports.config_F = exports.config_T = void 0;
exports.setCollaboratorPayloadForGateway_Org_F = exports.setCollaboratorPayloadForGateway_Org_T = exports.setCollaboratorPayloadForGateway_User_F = exports.setCollaboratorPayloadForGateway_User_T = exports.getCollaboratorInfoPayloadForGateway_Org_F = exports.getCollaboratorInfoPayloadForGateway_Org_T = exports.getCollaboratorInfoPayloadForGateway_User_F = exports.getCollaboratorInfoPayloadForGateway_User_T = exports.updateAPIKeyUserPayloadForGateway_F = exports.updateAPIKeyUserPayloadForGateway_T = exports.getAPIKeyInfoPayloadForGateway_F = exports.getAPIKeyInfoPayloadForGateway_T = exports.getAPIKeyListForGateway = exports.createAPIKeyPayloadForGateway = void 0;
exports.config_T = {
    IDENTITY_SERVER: 'https://eu1.cloud.thethings.network/api/v3',
    NETWORK_SERVER: 'https://nam1.cloud.thethings.network',
    APPLICATION_SERVER: 'https://nam1.cloud.thethings.network',
    JOIN_SERVER: 'https://nam1.cloud.thethings.network',
    API_KEY: 'NNSXS.BGVLXTTMUZDIIFY7EDSKFKB3R2AROYP7XDKUYOQ.SGAC24PFU6KMGEYUOQ3IDFYIUF55C4ZZQN4E2DNFWYHGY7EKPTHQ',
};
exports.config_F = {
    IDENTITY_SERVER: 'https://eu1.cloud.thethings.network/api/v3',
    NETWORK_SERVER: 'https://nam1.cloud.thethings.network',
    APPLICATION_SERVER: 'https://nam1.cloud.thethings.network',
    JOIN_SERVER: 'https://nam1.cloud.thethings.network',
    API_KEY: 'NNSXS.BGVLXTTMUZDIIFY7EDSKFKB3R2AROYP7XDKUYOQ.SGAC24PFU6KMGEYUOQ3IDFYIUF55C4ZZQN4E2DNFWYHGY7EKPTH',
};
exports.createApplicationPayloadForUser_T = {
    application_id: 'meetx',
    name: 'meet',
    description: '',
    // collaborator: {
    //     user_ids: { user_id: "meetsavaj", email: "", },
    // },
};
exports.createApplicationPayloadForUser_F = {
    application_id: 'meet68',
    name: 'meet',
    description: '',
    // collaborator: {
    //     user_ids: { user_id: "meetsavaj", email: "", },
    // },
};
exports.createApplicationPayloadForOrg_T = {
    application_id: 'meety',
    name: 'meet',
    description: '',
    // collaborator: {
    //     organization_ids: { organization_id: "" },
    // },
};
exports.createApplicationPayloadForOrg_F = {
    application_id: 'meet68',
    name: 'meet',
    description: '',
    // collaborator: {
    //     organization_ids: { organization_id: "" },
    // },
};
exports.getApplicationPayload_T = {
    application_id: 'meet69',
};
exports.getApplicationPayload_F = {
    application_id: 'meet60',
};
exports.getApplicationListPayloadForUser = {
    user_id: 'meetsavaj',
};
exports.getApplicationListPayloadForOrg = {
    organization_id: 'organ1',
};
exports.updateApplicationPayload_T = {
    name: 'meet',
    description: '',
    attributes: { hello: 'world', hello2: 'world2' },
};
exports.updateApplicationPayload_F = {
    name: 'meet',
    description: '',
    attributes: { hello: 'world', hello2: 'world2' },
};
exports.deleteApplicationPayload = {
    application_id: 'meet68',
};
exports.restoreApplicationPayload = {
    application_id: 'meet68',
};
exports.purgeApplicationPayload = {
    application_id: 'meet68',
};
exports.getApplicationRightUserPayload = {
    application_id: 'meet68',
};
exports.createAPIKeyPayloadForApplication = {
    name: 'meet',
    rights: [
        'RIGHT_APPLICATION_TRAFFIC_DOWN_WRITE',
        'RIGHT_APPLICATION_DEVICES_WRITE_KEYS',
        'RIGHT_APPLICATION_DEVICES_READ',
    ],
    expires_at: null,
};
exports.createAPIKeyPayloadForUser = {
    mail: '',
    name: 'meet',
    rights: [
        'RIGHT_APPLICATION_TRAFFIC_DOWN_WRITE',
        'RIGHT_APPLICATION_DEVICES_WRITE_KEYS',
        'RIGHT_APPLICATION_DEVICES_READ',
    ],
    expires_at: null,
};
exports.createAPIKeyPayloadForOrg = {
    name: 'meet',
    rights: [
        'RIGHT_APPLICATION_TRAFFIC_DOWN_WRITE',
        'RIGHT_APPLICATION_DEVICES_WRITE_KEYS',
        'RIGHT_APPLICATION_DEVICES_READ',
    ],
    expires_at: null,
};
exports.getAPIKeyListForApplication = {
    order: '',
    limit: 0,
    page: 0,
};
exports.getAPIKeyListForUser = {
    order: '',
    limit: 0,
    page: 0,
};
exports.getAPIKeyListForOrg = {
    order: '',
    limit: 0,
    page: 0,
};
exports.getAPIKeyInfoPayloadForApplication_T = {
    key_id: 'LF3NHTHJ5CHL5QT2XP3KTBZRETK2QUKHAW7METY',
};
exports.getAPIKeyInfoPayloadForApplication_F = {
    key_id: '6KOWWPN5CEA7QYVMWPFNNWZO3XZQRCJ3W2KK7V',
};
exports.getAPIKeyInfoPayloadForUser_T = {
    key_id: '2FWUMYHE5AQVFTNG4HKP54M73CVSCKVYVM2WCGY',
};
exports.getAPIKeyInfoPayloadForUser_F = {
    key_id: '2FWUMYHE5AQVFTNG4HKP54M73CVSCKVYVM2WCG',
};
exports.getAPIKeyInfoPayloadForOrganization_T = {
    key_id: '4V3TUAG6SHJQDEKFR6JE4QLZYTUXWGORMJWHWAA',
};
exports.getAPIKeyInfoPayloadForOrganization_F = {
    key_id: '4V3TUAG6SHJQDEKFR6JE4QLZYTUXWGORMJWHWA',
};
exports.updateAPIKeyUserPayloadForApplication_T = {
    api_key_id: 'LF3NHTHJ5CHL5QT2XP3KTBZRETK2QUKHAW7METY',
    api_key_name: 'meet',
    api_key_rights: [
        'RIGHT_APPLICATION_TRAFFIC_DOWN_WRITE',
        'RIGHT_APPLICATION_DEVICES_WRITE_KEYS',
        'RIGHT_APPLICATION_DEVICES_READ',
    ],
    expires_at: null,
};
exports.updateAPIKeyUserPayloadForApplication_F = {
    api_key_id: '6KOWWPN5CEA7QYVMWPFNNWZO3XZQRCJ3W2KK7V',
    api_key_name: 'meet',
    api_key_rights: [
        'RIGHT_APPLICATION_TRAFFIC_DOWN_WRITE',
        'RIGHT_APPLICATION_DEVICES_WRITE_KEYS',
        'RIGHT_APPLICATION_DEVICES_READ',
    ],
    expires_at: null,
};
exports.updateAPIKeyUserPayloadForUser_T = {
    email: '',
    api_key_id: '2FWUMYHE5AQVFTNG4HKP54M73CVSCKVYVM2WCGY',
    api_key_name: 'meet',
    api_key_rights: [
        'RIGHT_APPLICATION_TRAFFIC_DOWN_WRITE',
        'RIGHT_APPLICATION_DEVICES_WRITE_KEYS',
        'RIGHT_APPLICATION_DEVICES_READ',
    ],
    expires_at: null,
};
exports.updateAPIKeyUserPayloadForUser_F = {
    email: '',
    api_key_id: '2FWUMYHE5AQVFTNG4HKP54M73CVSCKVYVM2WCG',
    api_key_name: 'meet',
    api_key_rights: [
        'RIGHT_APPLICATION_TRAFFIC_DOWN_WRITE',
        'RIGHT_APPLICATION_DEVICES_WRITE_KEYS',
        'RIGHT_APPLICATION_DEVICES_READ',
    ],
    expires_at: null,
};
exports.updateAPIKeyUserPayloadForOrg_T = {
    api_key_id: '4V3TUAG6SHJQDEKFR6JE4QLZYTUXWGORMJWHWAA',
    api_key_name: 'meet',
    api_key_rights: [
        'RIGHT_APPLICATION_TRAFFIC_DOWN_WRITE',
        'RIGHT_APPLICATION_DEVICES_WRITE_KEYS',
        'RIGHT_APPLICATION_DEVICES_READ',
    ],
    expires_at: null,
};
exports.updateAPIKeyUserPayloadForOrg_F = {
    api_key_id: '4V3TUAG6SHJQDEKFR6JE4QLZYTUXWGORMJWHWA',
    api_key_name: 'meet',
    api_key_rights: [
        'RIGHT_APPLICATION_TRAFFIC_DOWN_WRITE',
        'RIGHT_APPLICATION_DEVICES_WRITE_KEYS',
        'RIGHT_APPLICATION_DEVICES_READ',
    ],
    expires_at: null,
};
exports.getCollaboratorInfoPayloadForApplication_User_T = {
    user_id: 'meetsavaj',
    email: '',
};
exports.getCollaboratorInfoPayloadForApplication_User_F = {
    user_id: 'meetsava',
    email: '',
};
exports.getCollaboratorInfoPayloadForApplication_Org_T = {
    organization_id: 'organ1',
};
exports.getCollaboratorInfoPayloadForApplication_Org_F = {
    organization_id: 'orgsdbh',
};
exports.getCollaboratorInfoPayloadForOrg_T = {
    user_id: 'meetsavaj',
};
exports.getCollaboratorInfoPayloadForOrg_F = {
    user_id: 'meetsava',
};
exports.setCollaboratorPayloadForApplication_User_T = {
    user_id: 'meetsavaj',
    email: '',
    rights: ['RIGHT_ALL'],
};
exports.setCollaboratorPayloadForApplication_User_F = {
    user_id: 'meetsava',
    email: '',
    rights: ['RIGHT_ALL'],
};
exports.setCollaboratorPayloadForApplication_Org_T = {
    organization_id: 'organ4',
    rights: ['RIGHT_APPLICATION_ALL'],
};
exports.setCollaboratorPayloadForApplication_Org_F = {
    organization_id: 'organ4asfas',
    rights: ['RIGHT_APPLICATION_ALL'],
};
exports.setCollaboratorPayloadForOrg_T = {
    user_id: 'meetsavaj',
    email: '',
    rights: ['RIGHT_ALL'],
};
exports.setCollaboratorPayloadForOrg_F = {
    user_id: 'organ1amsbjas',
    email: '',
    rights: ['RIGHT_ALL'],
};
exports.getCollaboratorListUserPayload = {
    order: '',
    limit: 0,
    page: 0,
};
exports.issueDevEUIPayload = {
    application_id: 'meet69',
};
exports.createGatewayPayload = {
    gateway: {
        ids: { gateway_id: 'eui-ee34634e6ada3425', eui: 'EE34634E6ADA3425' },
        name: 'gateway',
        description: 'ssdsdad',
        gateway_server_address: 'nam1.cloud.thethings.network',
        frequency_plan_id: 'US_902_928_FSB_3',
        status_public: true,
        location_public: true,
        enforce_duty_cycle: true,
        schedule_anytime_delay: '0.530s',
        require_authenticated_connection: true,
    },
};
exports.updateGatewayPayload = {
    gateway: {
        attributes: {
            dfhdf: 'dfhdfh',
        },
        description: 'fghfh',
    },
};
exports.createAPIKeyPayloadForGateway = {
    name: 'meet',
    rights: [
        'RIGHT_APPLICATION_TRAFFIC_DOWN_WRITE',
        'RIGHT_APPLICATION_DEVICES_WRITE_KEYS',
        'RIGHT_APPLICATION_DEVICES_READ',
    ],
    expires_at: null,
};
exports.getAPIKeyListForGateway = {
    order: '',
    limit: 0,
    page: 0,
};
exports.getAPIKeyInfoPayloadForGateway_T = {
    key_id: '2YCXSFCMCADRZZKHVH723AE7K7SGA365KJS374I',
};
exports.getAPIKeyInfoPayloadForGateway_F = {
    key_id: '2YCXSFCMCADRZZKHVH723AE7K7SGA365KJS374',
};
exports.updateAPIKeyUserPayloadForGateway_T = {
    api_key_id: '2YCXSFCMCADRZZKHVH723AE7K7SGA365KJS374I',
    api_key_name: 'meet',
    api_key_rights: ['RIGHT_APPLICATION_ALL'],
    expires_at: null,
};
exports.updateAPIKeyUserPayloadForGateway_F = {
    api_key_id: '2YCXSFCMCADRZZKHVH723AE7K7SGA365KJS374',
    api_key_name: 'meet',
    api_key_rights: ['RIGHT_APPLICATION_ALL'],
    expires_at: null,
};
exports.getCollaboratorInfoPayloadForGateway_User_T = {
    user_id: 'meetsavaj',
    email: '',
};
exports.getCollaboratorInfoPayloadForGateway_User_F = {
    user_id: 'meetsava',
    email: '',
};
exports.getCollaboratorInfoPayloadForGateway_Org_T = {
    organization_id: 'organ1',
};
exports.getCollaboratorInfoPayloadForGateway_Org_F = {
    organization_id: 'orgsdbh',
};
exports.setCollaboratorPayloadForGateway_User_T = {
    user_id: 'meetsavaj',
    email: '',
    rights: ['RIGHT_ALL'],
};
exports.setCollaboratorPayloadForGateway_User_F = {
    user_id: 'meetsava',
    email: '',
    rights: ['RIGHT_ALL'],
};
exports.setCollaboratorPayloadForGateway_Org_T = {
    organization_id: 'organ4',
    rights: ['RIGHT_APPLICATION_ALL'],
};
exports.setCollaboratorPayloadForGateway_Org_F = {
    organization_id: 'organ4asfas',
    rights: ['RIGHT_APPLICATION_ALL'],
};
