export const config_T = {  // enter correct details here
  IDENTITY_SERVER: process.env.IDENTITY_SERVER || 'eu1.cloud.thethings.network',
  NETWORK_SERVER: process.env.NETWORK_SERVER || 'nam1.cloud.thethings.network',
  APPLICATION_SERVER: process.env.APPLICATION_SERVER || 'nam1.cloud.thethings.network',
  JOIN_SERVER: process.env.JOIN_SERVER || 'nam1.cloud.thethings.network',
  API_KEY: process.env.API_KEY || 'enter-your-api-key'
};

export const config_F = {  // enter wrong details here
  IDENTITY_SERVER: process.env.IDENTITY_SERVER || 'eu1.cloud.thethings.network',
  NETWORK_SERVER: process.env.NETWORK_SERVER || 'nam1.cloud.thethings.network',
  APPLICATION_SERVER: process.env.APPLICATION_SERVER || 'nam1.cloud.thethings.network',
  JOIN_SERVER: process.env.JOIN_SERVER || 'nam1.cloud.thethings.network',
  API_KEY: process.env.API_KEY || 'wrong-api-key',
};

export const createApplicationPayloadForUser_T = {
  application_id: 'meetx',
  name: 'meet',
  description: '',
  // collaborator: {
  //     user_ids: { user_id: "meetsavaj", email: "", },
  // },
};

export const createApplicationPayloadForUser_F = {
  application_id: 'meet68',
  name: 'meet',
  description: '',
  // collaborator: {
  //     user_ids: { user_id: "meetsavaj", email: "", },
  // },
};

export const createApplicationPayloadForOrg_T = {
  application_id: 'meety',
  name: 'meet',
  description: '',

  // collaborator: {
  //     organization_ids: { organization_id: "" },
  // },
};

export const createApplicationPayloadForOrg_F = {
  application_id: 'meet68',
  name: 'meet',
  description: '',

  // collaborator: {
  //     organization_ids: { organization_id: "" },
  // },
};

export const getApplicationPayload_T = {
  application_id: 'meet69',
};

export const getApplicationPayload_F = {
  application_id: 'meet60',
};

export const getApplicationListPayload_T = {
  order: '-created_at',
  limit: 20,
  page: 1,
};

export const getApplicationListPayload_F = {
  order: '-created_',
  limit: 20,
  page: 1,
};

export const updateApplicationPayload_T = {
  name: 'meet',
  description: '',
  attributes: { hello: 'world', hello2: 'world2' },
};

export const updateApplicationPayload_F = {
  name: 'meet',
  description: '',
  attributes: { hello: 'world', hello2: 'world2' },
};

export const deleteApplicationPayload = {
  application_id: 'meet68',
};

export const restoreApplicationPayload = {
  application_id: 'meet68',
};

export const purgeApplicationPayload = {
  application_id: 'meet68',
};

export const getApplicationRightUserPayload = {
  application_id: 'meet68',
};

export const createAPIKeyPayloadForApplication = {
  name: 'meet',
  rights: [
    'RIGHT_APPLICATION_TRAFFIC_DOWN_WRITE',
    'RIGHT_APPLICATION_DEVICES_WRITE_KEYS',
    'RIGHT_APPLICATION_DEVICES_READ',
  ],
  expires_at: null,
};

export const createAPIKeyPayloadForUser = {
  mail: '',
  name: 'meet',
  rights: [
    'RIGHT_APPLICATION_TRAFFIC_DOWN_WRITE',
    'RIGHT_APPLICATION_DEVICES_WRITE_KEYS',
    'RIGHT_APPLICATION_DEVICES_READ',
  ],
  expires_at: null,
};

export const createAPIKeyPayloadForOrg = {
  name: 'meet',
  rights: [
    'RIGHT_APPLICATION_TRAFFIC_DOWN_WRITE',
    'RIGHT_APPLICATION_DEVICES_WRITE_KEYS',
    'RIGHT_APPLICATION_DEVICES_READ',
  ],
  expires_at: null,
};

export const getAPIKeyList_T = {
  order: '-created_at',
  limit: 1,
  page: 20,
};

export const getAPIKeyList_F = {
  order: '-created_',
  limit: 1,
  page: 20,
};

export const getAPIKeyInfoPayloadForApplication_T = {
  key_id: 'LF3NHTHJ5CHL5QT2XP3KTBZRETK2QUKHAW7METY',
};

export const getAPIKeyInfoPayloadForApplication_F = {
  key_id: '6KOWWPN5CEA7QYVMWPFNNWZO3XZQRCJ3W2KK7V',
};

export const getAPIKeyInfoPayloadForUser_T = {
  key_id: '2FWUMYHE5AQVFTNG4HKP54M73CVSCKVYVM2WCGY',
};

export const getAPIKeyInfoPayloadForUser_F = {
  key_id: '2FWUMYHE5AQVFTNG4HKP54M73CVSCKVYVM2WCG',
};

export const getAPIKeyInfoPayloadForOrganization_T = {
  key_id: '4V3TUAG6SHJQDEKFR6JE4QLZYTUXWGORMJWHWAA',
};

export const getAPIKeyInfoPayloadForOrganization_F = {
  key_id: '4V3TUAG6SHJQDEKFR6JE4QLZYTUXWGORMJWHWA',
};

export const updateAPIKeyUserPayloadForApplication_T = {
  api_key_id: 'LF3NHTHJ5CHL5QT2XP3KTBZRETK2QUKHAW7METY',
  api_key_name: 'meet',
  api_key_rights: [
    'RIGHT_APPLICATION_TRAFFIC_DOWN_WRITE',
    'RIGHT_APPLICATION_DEVICES_WRITE_KEYS',
    'RIGHT_APPLICATION_DEVICES_READ',
  ],
  expires_at: null,
};

export const updateAPIKeyUserPayloadForApplication_F = {
  api_key_id: '6KOWWPN5CEA7QYVMWPFNNWZO3XZQRCJ3W2KK7V',
  api_key_name: 'meet',
  api_key_rights: [
    'RIGHT_APPLICATION_TRAFFIC_DOWN_WRITE',
    'RIGHT_APPLICATION_DEVICES_WRITE_KEYS',
    'RIGHT_APPLICATION_DEVICES_READ',
  ],
  expires_at: null,
};

export const updateAPIKeyUserPayloadForUser_T = {
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

export const updateAPIKeyUserPayloadForUser_F = {
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

export const updateAPIKeyUserPayloadForOrg_T = {
  api_key_id: '4V3TUAG6SHJQDEKFR6JE4QLZYTUXWGORMJWHWAA',
  api_key_name: 'meet',
  api_key_rights: [
    'RIGHT_APPLICATION_TRAFFIC_DOWN_WRITE',
    'RIGHT_APPLICATION_DEVICES_WRITE_KEYS',
    'RIGHT_APPLICATION_DEVICES_READ',
  ],
  expires_at: null,
};

export const updateAPIKeyUserPayloadForOrg_F = {
  api_key_id: '4V3TUAG6SHJQDEKFR6JE4QLZYTUXWGORMJWHWA',
  api_key_name: 'meet',
  api_key_rights: [
    'RIGHT_APPLICATION_TRAFFIC_DOWN_WRITE',
    'RIGHT_APPLICATION_DEVICES_WRITE_KEYS',
    'RIGHT_APPLICATION_DEVICES_READ',
  ],
  expires_at: null,
};

export const getCollaboratorInfoPayloadForApplication_User_T = {
  user_id: 'meetsavaj',
  email: '',
};

export const getCollaboratorInfoPayloadForApplication_User_F = {
  user_id: 'meetsava',
  email: '',
};

export const getCollaboratorInfoPayloadForApplication_Org_T = {
  organization_id: 'organ1',
};

export const getCollaboratorInfoPayloadForApplication_Org_F = {
  organization_id: 'orgsdbh',
};

export const getCollaboratorInfoPayloadForOrg_T = {
  user_id: 'meetsavaj',
};

export const getCollaboratorInfoPayloadForOrg_F = {
  user_id: 'meetsava',
};

export const setCollaboratorPayloadForApplication_User_T = {
  user_id: 'meetsavaj',
  email: '',
  rights: ['RIGHT_ALL'],
};

export const setCollaboratorPayloadForApplication_User_F = {
  user_id: 'meetsava',
  email: '',
  rights: ['RIGHT_ALL'],
};

export const setCollaboratorPayloadForApplication_Org_T = {
  organization_id: 'organ4',
  rights: ['RIGHT_APPLICATION_ALL'],
};

export const setCollaboratorPayloadForApplication_Org_F = {
  organization_id: 'organ4asfas',
  rights: ['RIGHT_APPLICATION_ALL'],
};

export const setCollaboratorPayloadForOrg_T = {
  user_id: 'meetsavaj',
  email: '',
  rights: ['RIGHT_ALL'],
};

export const setCollaboratorPayloadForOrg_F = {
  user_id: 'organ1amsbjas',
  email: '',
  rights: ['RIGHT_ALL'],
};

export const getCollaboratorListUserPayload_T = {
  order: '-id',
  limit: 1,
  page: 20,
};

export const getCollaboratorListUserPayload_F = {
  order: '-i',
  limit: 1,
  page: 20,
};

export const issueDevEUIPayload = {
  application_id: 'meet69',
};

export const createGatewayPayload = {
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

export const updateGatewayPayload = {
  gateway: {
    attributes: {
      dfhdf: 'dfhdfh',
    },
    description: 'fghfh',
  },
};

export const createAPIKeyPayloadForGateway = {
  name: 'meet',
  rights: [
    'RIGHT_APPLICATION_TRAFFIC_DOWN_WRITE',
    'RIGHT_APPLICATION_DEVICES_WRITE_KEYS',
    'RIGHT_APPLICATION_DEVICES_READ',
  ],
  expires_at: null,
};

export const getAPIKeyListForGateway_T = {
  order: '-created_at',
  limit: 20,
  page: 1,
};

export const getAPIKeyListForGateway_F = {
  order: '-created',
  limit: 20,
  page: 1,
};

export const getAPIKeyInfoPayloadForGateway_T = {
  key_id: '2YCXSFCMCADRZZKHVH723AE7K7SGA365KJS374I',
};

export const getAPIKeyInfoPayloadForGateway_F = {
  key_id: '2YCXSFCMCADRZZKHVH723AE7K7SGA365KJS374',
};

export const updateAPIKeyUserPayloadForGateway_T = {
  api_key_id: '2YCXSFCMCADRZZKHVH723AE7K7SGA365KJS374I',
  api_key_name: 'meet',
  api_key_rights: ['RIGHT_APPLICATION_ALL'],
  expires_at: null,
};

export const updateAPIKeyUserPayloadForGateway_F = {
  api_key_id: '2YCXSFCMCADRZZKHVH723AE7K7SGA365KJS374',
  api_key_name: 'meet',
  api_key_rights: ['RIGHT_APPLICATION_ALL'],
  expires_at: null,
};

export const getCollaboratorInfoPayloadForGateway_User_T = {
  user_id: 'meetsavaj',
  email: '',
};

export const getCollaboratorInfoPayloadForGateway_User_F = {
  user_id: 'meetsava',
  email: '',
};

export const getCollaboratorInfoPayloadForGateway_Org_T = {
  organization_id: 'organ1',
};

export const getCollaboratorInfoPayloadForGateway_Org_F = {
  organization_id: 'orgsdbh',
};

export const setCollaboratorPayloadForGateway_User_T = {
  user_id: 'meetsavaj',
  email: '',
  rights: ['RIGHT_ALL'],
};

export const setCollaboratorPayloadForGateway_User_F = {
  user_id: 'meetsava',
  email: '',
  rights: ['RIGHT_ALL'],
};

export const setCollaboratorPayloadForGateway_Org_T = {
  organization_id: 'organ4',
  rights: ['RIGHT_APPLICATION_ALL'],
};

export const setCollaboratorPayloadForGateway_Org_F = {
  organization_id: 'organ4asfas',
  rights: ['RIGHT_APPLICATION_ALL'],
};

export const getGatewayList_T = {
  order: '-created_at',
  limit: 1,
  page: 20,
};

export const getGatewayList_F = {
  order: '-created_at',
  limit: 1,
  page: 20,
};

