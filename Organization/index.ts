import { APICall } from '../index';
import { ApiConnectionOptions, Config } from '../Interfaces/Config/config.interface';
import {
  CreateApplicationPayload,
  CreateApplication,
  CreateApplicationUserPayload,
  getApplicationList,
  CreateAPIKeyUserPayload,
  CreateAPIKey,
  CreateAPIKeyPayload,
  GetAPIKeyListUserPayload,
  GetAPIKeyList,
  GetAPIKeyInfoUserPayload,
  GetAPIKeyInfo,
  UpdateAPIKeyUserPayload,
  UpdateAPIKey,
  UpdateAPIKeyPayload,
  GetCollaboratorInfo,
  GetCollaboratorInfoUserPayload,
  SetCollaboratorUserPayload,
  SetCollaboratorPayload,
} from '../Interfaces/Organization/organization.interface';

export class Organization {
  private APPLICATION_ID: string;
  private COLLAB_ID: string;
  private IDENTITY_SERVER: string;
  private JOIN_SERVER: string;
  private NETWORK_SERVER: string;
  private APPLICATION_SERVER: string;
  private API_KEY: string;
  private API: APICall = new APICall();

  constructor(config: Config) {
    this.APPLICATION_ID = config.APPLICATION_ID;
    this.COLLAB_ID = config.COLLAB_ID;
    this.IDENTITY_SERVER = config.IDENTITY_SERVER;
    this.JOIN_SERVER = config.JOIN_SERVER;
    this.APPLICATION_SERVER = config.APPLICATION_SERVER;
    this.NETWORK_SERVER = config.NETWORK_SERVER;
    this.API_KEY = config.API_KEY;
  }

  get headers() {
    const headers = { AUTHORIZATION: `Bearer ${this.API_KEY}` };
    return headers;
  }

  createApplication(payload: CreateApplicationUserPayload): Promise<CreateApplication> {
    const apiPayload: CreateApplicationPayload = {
      application: {
        ids: { application_id: this.APPLICATION_ID },
        name: payload.name,
        description: payload.description,
      },
    };
    return this.API.send({
      method: 'POST',
      url: `${this.IDENTITY_SERVER}/organizations/${this.COLLAB_ID}/applications`,
      headers: this.headers,
      data: apiPayload,
    });
  }

  getApplicationList(): Promise<getApplicationList> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/users/${this.COLLAB_ID}/applications`,
      headers: this.headers,
      data: {},
    });
  }

  createAPIKey(payload: CreateAPIKeyUserPayload): Promise<CreateAPIKey> {
    const apiPayload: CreateAPIKeyPayload = {
      organization_ids: { organization_id: this.COLLAB_ID },
      name: payload.name,
      rights: payload.rights,
      expires_at: payload.expires_at,
    };
    return this.API.send({
      method: 'POST',
      url: `${this.IDENTITY_SERVER}/organizations/${this.COLLAB_ID}/api-keys`,
      headers: this.headers,
      data: apiPayload,
    });
  }

  getAPIKeyList(payload: GetAPIKeyListUserPayload): Promise<GetAPIKeyList> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/organizations/${this.COLLAB_ID}/api-keys`,
      headers: this.headers,
      data: payload,
    });
  }

  getAPIKeyInfo(payload: GetAPIKeyInfoUserPayload): Promise<GetAPIKeyInfo> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/organizations/${this.COLLAB_ID}/api-keys/${payload.key_id}`,
      headers: this.headers,
      data: payload,
    });
  }

  updateAPIKey(payload: UpdateAPIKeyUserPayload): Promise<UpdateAPIKey> {
    const extractPayload = {
      name: payload.api_key_name,
      rights: payload.api_key_rights,
      expires_at: payload.expires_at,
    };

    const paths = Object.keys(extractPayload);

    const apiPayload: UpdateAPIKeyPayload = {
      organization_ids: { organization_id: this.COLLAB_ID },
      api_key: {
        id: payload.api_key_id,
        name: payload.api_key_name,
        rights: payload.api_key_rights,
        expires_at: payload.expires_at,
      },
      field_mask: {
        paths: paths,
      },
    };
    return this.API.send({
      method: 'PUT',
      url: `${this.IDENTITY_SERVER}/organizations/${this.COLLAB_ID}/api-keys/${payload.api_key_id}`,
      headers: this.headers,
      data: apiPayload,
    });
  }

  getCollaboratorInfo(payload: GetCollaboratorInfoUserPayload): Promise<GetCollaboratorInfo> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/organizations/${this.COLLAB_ID}/collaborator/user/${payload.user_id}`,
      headers: this.headers,
      data: payload,
    });
  }

  setCollaborator(payload: SetCollaboratorUserPayload): Promise<any> {
    const apiPayload: SetCollaboratorPayload = {
      organization_ids: { organization_id: this.COLLAB_ID },
      collaborator: {
        ids: {
          user_ids: { user_id: payload.user_id, email: payload.email },
        },
        rights: payload.rights,
      },
    };
    return this.API.send({
      method: 'PUT',
      url: `${this.IDENTITY_SERVER}/organizations/${this.COLLAB_ID}/collaborators`,
      headers: this.headers,
      data: apiPayload,
    });
  }
}
