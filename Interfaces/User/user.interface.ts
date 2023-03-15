export interface CreateApplicationUserPayload {
  application_id: string;
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
  //     user_ids: { user_id: string, email: string },
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
  attributes: { [key: string]: string };
  contact_info: string[];
  administrative_contact: {
    user_ids: {
      user_id: string;
    };
  };
  technical_contact: {
    user_ids: {
      user_id: string;
    };
  };
  network_server_address: string;
  application_server_address: string;
  join_server_address: string;
  dev_eui_counter: number;
  end_device_limit: null;
}

export interface GetApplicationList {
  application: {
    ids: { application_id: string };
    created_at: string;
    updated_at: string;
  }[];
}

export interface CreateAPIKeyUserPayload {
  email?: string;
  name: string;
  rights: string[];
  expires_at?: any;
}

export interface CreateAPIKeyPayload {
  user_ids: { user_id: string; email?: string };
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

export interface GetAPIKeyList {
  api_keys: {
    id: string;
    key: string;
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

export interface GetAPIKeyInfo extends CreateAPIKey {}

export interface UpdateAPIKeyUserPayload {
  email?: string;
  api_key_id: string;
  api_key_name?: string;
  api_key_rights?: string[];
  expires_at?: any;
}

export interface UpdateAPIKeyPayload {
  user_ids: { user_id: string; email?: string };
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
