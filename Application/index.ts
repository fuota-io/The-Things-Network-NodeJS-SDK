import { APICall, SetConfig } from '../index';
import { Config } from '../Interfaces/Config/config.interface';
import {
  GetApplicationPayload,
  GetApplication,
  GetApplicationList,
  UpdateApplicationUserPayload,
  UpdateApplication,
  UpdateApplicationPayload,
  SearchApplication,
  GetApplicationRight,
  CreateAPIKeyPayload,
  CreateAPIKey,
  CreateAPIKeyUserPayload,
  GetAPIKeyListUserPayload,
  GetAPIKeyList,
  GetAPIKeyInfoUserPayload,
  GetAPIKeyInfo,
  UpdateAPIKey,
  UpdateAPIKeyUserPayload,
  UpdateAPIKeyPayload,
  GetCollabortorListUserPayload,
  GetCollabortorList,
  GetCollaboratorInfoUserPayload,
  GetCollaboratorInfoOrgPayload,
  SetCollaboratorUserPayloadForUser,
  SetCollaboratorPayloadForUser,
  SetCollaboratorPayloadForOrg,
  SetCollaboratorUserPayloadForOrg,
  GetCollaboratorInfoUser,
  GetCollaboratorInfoOrg,
} from '../Interfaces/Application/application.interface';

export class Application extends SetConfig {
  private APPLICATION_ID: string;
  private API: APICall = new APICall();

  constructor(applicationID: string, config: Config) {
    super(config);
    this.APPLICATION_ID = applicationID;
  }

  getApplicationInfo(): Promise<GetApplication> {
    const apiPayload: GetApplicationPayload = {
      application: {
        ids: { application_id: this.APPLICATION_ID },
      },
    };
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}`,
      headers: this.headers,
      data: apiPayload,
    });
  }

  getApplicationList(): Promise<GetApplicationList> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/applications`,
      headers: this.headers,
      data: {},
    });
  }

  updateApplication(payload: UpdateApplicationUserPayload): Promise<UpdateApplication> {
    const paths = Object.keys(payload);

    const apiPayload: UpdateApplicationPayload = {
      application: {
        ids: { application_id: this.APPLICATION_ID },
        name: payload.name,
        description: payload.description,
        attributes: payload.attributes,
      },
      field_mask: {
        paths: paths,
      },
    };
    return this.API.send({
      method: 'PUT',
      url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}`,
      headers: this.headers,
      data: apiPayload,
    });
  }

  deleteApplication(): Promise<any> {
    return this.API.send({
      method: 'DELETE',
      url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}`,
      headers: this.headers,
      data: {},
    });
  }

  restoreApplication(): Promise<any> {
    return this.API.send({
      method: 'POST',
      url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/restore`,
      headers: this.headers,
      data: {},
    });
  }

  purgeApplication(): Promise<any> {
    return this.API.send({
      method: 'DELETE',
      url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/purge`,
      headers: this.headers,
      data: {},
    });
  }

  searchApplication(): Promise<SearchApplication> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/search/applications`,
      headers: this.headers,
      data: {},
    });
  }

  getApplicationRight(): Promise<GetApplicationRight> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/rights`,
      headers: this.headers,
      data: {},
    });
  }

  createAPIKey(payload: CreateAPIKeyUserPayload): Promise<CreateAPIKey> {
    const apiPayload: CreateAPIKeyPayload = {
      application_ids: { application_id: this.APPLICATION_ID },
      name: payload.name,
      rights: payload.rights,
      expires_at: payload.expires_at,
    };
    return this.API.send({
      method: 'POST',
      url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/api-keys`,
      headers: this.headers,
      data: apiPayload,
    });
  }

  getAPIKeyList(payload: GetAPIKeyListUserPayload): Promise<GetAPIKeyList> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/api-keys`,
      headers: this.headers,
      data: payload,
    });
  }

  getAPIKeyInfo(payload: GetAPIKeyInfoUserPayload): Promise<GetAPIKeyInfo> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/api-keys/${payload.key_id}`,
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
      application_ids: { application_id: this.APPLICATION_ID },
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
      url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/api-keys/${payload.api_key_id}`,
      headers: this.headers,
      data: apiPayload,
    });
  }

  getCollaboratorInfoOfUser(
    payload: GetCollaboratorInfoUserPayload
  ): Promise<GetCollaboratorInfoUser> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/collaborator/user/${payload.user_id}`,
      headers: this.headers,
      data: payload,
    });
  }

  getCollaboratorInfoOfOrg(
    payload: GetCollaboratorInfoOrgPayload
  ): Promise<GetCollaboratorInfoOrg> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/collaborator/organization/${payload.organization_id}`,
      headers: this.headers,
      data: payload,
    });
  }

  setCollaboratorOfUser(payload: SetCollaboratorUserPayloadForUser): Promise<any> {
    const apiPayload: SetCollaboratorPayloadForUser = {
      application_ids: { application_id: this.APPLICATION_ID },
      collaborator: {
        ids: {
          user_ids: { user_id: payload.user_id, email: payload.email },
        },
        rights: payload.rights,
      },
    };
    return this.API.send({
      method: 'PUT',
      url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/collaborators`,
      headers: this.headers,
      data: apiPayload,
    });
  }

  setCollaboratorOfOrg(payload: SetCollaboratorUserPayloadForOrg): Promise<any> {
    const apiPayload: SetCollaboratorPayloadForOrg = {
      application_ids: { application_id: this.APPLICATION_ID },
      collaborator: {
        ids: {
          organization_ids: { organization_id: payload.organization_id },
        },
        rights: payload.rights,
      },
    };
    return this.API.send({
      method: 'PUT',
      url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/collaborators`,
      headers: this.headers,
      data: apiPayload,
    });
  }

  getCollaboratorList(payload: GetCollabortorListUserPayload): Promise<GetCollabortorList> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/collaborators`,
      headers: this.headers,
      data: payload,
    });
  }
}
