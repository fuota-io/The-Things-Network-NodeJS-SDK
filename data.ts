export const config = {
  COLLAB_ID: 'meetsavaj',
  IDENTITY_SERVER: 'https://eu1.cloud.thethings.network/api/v3',
  NETWORK_SERVER: 'https://nam1.cloud.thethings.network',
  APPLICATION_SERVER: 'https://nam1.cloud.thethings.network',
  JOIN_SERVER: 'https://nam1.cloud.thethings.network',
  API_KEY:
    'NNSXS.BGVLXTTMUZDIIFY7EDSKFKB3R2AROYP7XDKUYOQ.SGAC24PFU6KMGEYUOQ3IDFYIUF55C4ZZQN4E2DNFWYHGY7EKPTHQ',
};

export const appID = { APPLICATION_ID: 'meet59' };

export const createApplicationPayloadForUser = {
  name: 'meet',
  description: '',
  // collaborator: {
  //     user_ids: { user_id: "meetsavaj", email: "", },
  // },
};

export const createApplicationPayloadForOrg = {
  name: 'meet',
  description: '',

  // collaborator: {
  //     organization_ids: { organization_id: "" },
  // },
};

// export const getApplicationPayload = {
//   application_id: 'meet59',
// };

// export const getApplicationListPayloadForUser = {
//   user_id: 'meetsavaj',
// };

// export const getApplicationListPayloadForOrg = {
//   organization_id: 'organ1',
// };

export const updateApplicationPayload = {
  name: 'meet',
  description: '',
  attributes: { hello: 'world', hello2: 'world2' },
};

// export const deleteApplicationPayload = {
//   application_id: 'meet59',
// };

// export const restoreApplicationPayload = {
//   application_id: 'meet59',
// };

// export const purgeApplicationPayload = {
//   application_id: 'meet59',
// };

// export const getApplicationRightUserPayload = {
//   application_id: 'meet59',
// };

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

export const getAPIKeyListForApplication = {
  order: '',
  limit: 0,
  page: 0,
};

export const getAPIKeyListForUser = {
  order: '',
  limit: 0,
  page: 0,
};

export const getAPIKeyListForOrg = {
  order: '',
  limit: 0,
  page: 0,
};

export const getAPIKeyInfoPayloadForApplication = {
  key_id: '6KOWWPN5CEA7QYVMWPFNNWZO3XZQRCJ3W2KK7VI',
};

export const getAPIKeyInfoPayloadForUser = {
  key_id: '2FWUMYHE5AQVFTNG4HKP54M73CVSCKVYVM2WCGY',
};

export const getAPIKeyInfoPayloadForOrganization = {
  key_id: '4V3TUAG6SHJQDEKFR6JE4QLZYTUXWGORMJWHWAA',
};

export const updateAPIKeyUserPayloadForApplication = {
  api_key_id: '6KOWWPN5CEA7QYVMWPFNNWZO3XZQRCJ3W2KK7VI',
  api_key_name: 'meet',
  api_key_rights: [
    'RIGHT_APPLICATION_TRAFFIC_DOWN_WRITE',
    'RIGHT_APPLICATION_DEVICES_WRITE_KEYS',
    'RIGHT_APPLICATION_DEVICES_READ',
  ],
  expires_at: null,
};

export const updateAPIKeyUserPayloadForUser = {
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

export const updateAPIKeyUserPayloadForOrg = {
  api_key_id: '4V3TUAG6SHJQDEKFR6JE4QLZYTUXWGORMJWHWAA',
  api_key_name: 'meet',
  api_key_rights: [
    'RIGHT_APPLICATION_TRAFFIC_DOWN_WRITE',
    'RIGHT_APPLICATION_DEVICES_WRITE_KEYS',
    'RIGHT_APPLICATION_DEVICES_READ',
  ],
  expires_at: null,
};

export const getCollaboratorInfoPayloadForApplication = {
  user_id: 'meetsavaj',
  email: '',
};

export const getCollaboratorInfoPayloadForOrg = {
  user_id: 'meetsavaj',
};

export const setCollaboratorPayloadForApplication_User = {
  user_id: 'meetsavaj',
  email: '',
  rights: ['RIGHT_ALL'],
};

export const setCollaboratorPayloadForApplication_Org = {
  organization_id: 'organ4',
  rights: ['RIGHT_APPLICATION_ALL'],
};

export const setCollaboratorPayloadForOrg = {
  user_id: 'organ1',
  email: '',
  rights: ['RIGHT_ALL'],
};

export const getCollaboratorListUserPayload = {
  order: '',
  limit: 0,
  page: 0,
};

export const issueDevEUIPayload = {
  application_id: 'meet50',
};
