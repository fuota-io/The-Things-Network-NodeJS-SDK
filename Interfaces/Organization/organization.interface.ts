export interface CreateApplicationUserPayload {
  name: string;
  description: string;
}

export interface CreateApplicationPayload {
  application: {
    ids: { application_id: string };
    name: string;
    description: string;
  };
  // collaborator: {
  //     organization_ids: { organization_id: string },
  // },
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
  attributes: any;
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

export interface getApplicationUserPayload {
  organization_id: string;
}

export interface getApplicationListPayload {
  collaborator: {
    organization_ids: { organization_id: string; email: string };
    rights: string[];
  };
  field_mask: {};
  order: string;
  limit: number;
  page: number;
  deleted: boolean;
}

export interface getApplicationList {
  application: [
    {
      ids: { application_id: string };
      created_at: string;
      updated_at: string;
    }
  ];
}

export interface CreateAPIKeyUserPayload {
  name: string;
  rights: string[];
  expires_at?: any;
}

export interface CreateAPIKeyPayload {
  organization_ids: { organization_id: string };
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

export interface GetAPIKeyListUserPayload {
  order?: string;
  limit?: number;
  page?: number;
}

export interface GetAPIKeyListPayload {
  organization_ids: { organization_id: string };
  order?: string;
  limit?: number;
  page?: number;
}

export interface GetAPIKeyList {
  api_keys: [
    {
      id: string;
      key: string;
      name: string;
      rights: string[];
      created_at: string;
      updated_at: string;
      expires_at: any;
    }
  ];
}

export interface GetAPIKeyInfoUserPayload {
  key_id: string;
}

export interface GetAPIKeyInfoPayload {
  organization_ids: { organization_id: string };
  key_id: string;
}

export interface GetAPIKeyInfo extends CreateAPIKey {}

export interface UpdateAPIKeyUserPayload {
  api_key_id: string;
  api_key_name?: string;
  api_key_rights?: string[];
  expires_at?: any;
}

export interface UpdateAPIKeyPayload {
  organization_ids: { organization_id: string };
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

export interface UpdateAPIKey extends CreateAPIKey {}

export interface GetCollaboratorInfoUserPayload {
  user_id: string;
}

export interface GetCollaboratorInfoPayload {
  organization_ids: { organization_id: string };
  collaborator: {
    organization_ids: {
      organization_id: string;
    };
  };
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
  organization_ids: { organization_id: string };
  collaborator: {
    ids: {
      user_ids: { user_id: string; email?: string };
    };
    rights: string[];
  };
}
