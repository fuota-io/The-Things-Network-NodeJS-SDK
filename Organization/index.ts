import { APICall, SetConfig } from '../index';
import { Config } from '../Interfaces/Config/config.interface';
import {
  CreateApplicationPayload,
  CreateApplication,
  CreateApplicationUserPayload,
  GetApplicationList,
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

/**
 * @classdesc The Organization class is a child class of the SetConfig class. The Organization class has a constructor that takes
 * in a organizationID and a config object. The Organization class has a bunch of methods that make API calls to the Identity Server.
 * @extends SetConfig
 */
export class Organization extends SetConfig {
  private ORGANIZATION_ID: string;
  private API: APICall = new APICall();

  /**
   * The constructor function is a special function that is called when an object is created from a
   * class
   * @param {string} organizationID - The ID of the organization you want to get the list of users from.
   * @param {Config} config - Config - This is the configuration object that is passed to the
   * constructor of the base class.
   */
  constructor(organizationID: string, config: Config) {
    super(config);
    this.ORGANIZATION_ID = organizationID;
  }

  /**
   * It creates an application for the organization.
   * @type {import("../dist/Interfaces/Doc Common/doc.interface").PL-CreateApplication}
   * @param {PL-CreateApplication} payload - PL-CreateApplication
   * @returns {import("../dist/Interfaces/Doc Common/doc.interface").RESP-CreateApplication}
   * The response from the API.
   */
  createApplication(payload: CreateApplicationUserPayload): Promise<CreateApplication> {
    const apiPayload: CreateApplicationPayload = {
      application: {
        ids: { application_id: payload.application_id },
        name: payload.name,
        description: payload.description,
      },
    };
    return this.API.send({
      method: 'POST',
      url: `${this.IDENTITY_SERVER}/organizations/${this.ORGANIZATION_ID}/applications`,
      headers: this.headers,
      data: apiPayload,
    });
  }

  /**
   * It returns the list of applications that have been created by the organization.
   * @returns {import("../dist/Interfaces/Doc Common/doc.interface").RESP-GetApplicationList}
   * The response from the API.
   */
  getApplicationList(): Promise<GetApplicationList> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/organizations/${this.ORGANIZATION_ID}/applications`,
      headers: this.headers,
      data: {},
    });
  }

  /**
   * It creates an api key for the organization.
   * @type {import("../dist/Interfaces/Doc Common/doc.interface").PL-CreateAPIKeyOfOrg}
   * @param {PL-CreateAPIKeyOfOrg} payload - PL-CreateAPIKeyOfOrg
   * @returns {import("../dist/Interfaces/Doc Common/doc.interface").RESP-CreateAPIKey}
   * The response from the API.
   */
  createAPIKey(payload: CreateAPIKeyUserPayload): Promise<CreateAPIKey> {
    const apiPayload: CreateAPIKeyPayload = {
      organization_ids: { organization_id: this.ORGANIZATION_ID },
      name: payload.name,
      rights: payload.rights,
      expires_at: payload.expires_at,
    };
    return this.API.send({
      method: 'POST',
      url: `${this.IDENTITY_SERVER}/organizations/${this.ORGANIZATION_ID}/api-keys`,
      headers: this.headers,
      data: apiPayload,
    });
  }

  /**
   * It returns the list of api keys that have been created by the organization.
   * @type {import("../dist/Interfaces/Doc Common/doc.interface").PL-GetAPIKeyList}
   * @param {PL-GetAPIKeyList} payload - PL-GetAPIKeyList
   * @returns {import("../dist/Interfaces/Doc Common/doc.interface").RESP-GetAPIKeyList}
   * The response from the API.
   */
  getAPIKeyList(payload: GetAPIKeyListUserPayload): Promise<GetAPIKeyList> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/organizations/${this.ORGANIZATION_ID}/api-keys`,
      headers: this.headers,
      data: payload,
    });
  }

  /**
   * It returns the information of the api key that has been created by the user.
   * @type {import("../dist/Interfaces/Doc Common/doc.interface").PL-GetAPIKeyInfo}
   * @param {PL-GetAPIKeyInfo} payload - PL-GetAPIKeyInfo
   * @returns {import("../dist/Interfaces/Doc Common/doc.interface").RESP-GetAPIKeyInfo}
   * The response from the API.
   */
  getAPIKeyInfo(payload: GetAPIKeyInfoUserPayload): Promise<GetAPIKeyInfo> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/organizations/${this.ORGANIZATION_ID}/api-keys/${payload.key_id}`,
      headers: this.headers,
      data: payload,
    });
  }

  /**
   * It returns the information of the api key that has been created by the user.
   * @type {import("../dist/Interfaces/Doc Common/doc.interface").PL-UpdateAPIKeyOfOrg}
   * @param {PL-UpdateAPIKeyOfOrg} payload - PL-UpdateAPIKeyOfOrg
   * @returns {import("../dist/Interfaces/Doc Common/doc.interface").RESP-UpdateAPIKey}
   * The response from the API.
   */
  updateAPIKey(payload: UpdateAPIKeyUserPayload): Promise<UpdateAPIKey> {
    const extractPayload = {
      name: payload.api_key_name,
      rights: payload.api_key_rights,
      expires_at: payload.expires_at,
    };

    const paths = Object.keys(extractPayload);

    const apiPayload: UpdateAPIKeyPayload = {
      organization_ids: { organization_id: this.ORGANIZATION_ID },
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
      url: `${this.IDENTITY_SERVER}/organizations/${this.ORGANIZATION_ID}/api-keys/${payload.api_key_id}`,
      headers: this.headers,
      data: apiPayload,
    });
  }

  /**
   * It returns rights of the collaborator (member) of the application.
   * @type {import("../dist/Interfaces/Doc Common/doc.interface").PL-GetCollaboratorInfo}
   * @param {PL-GetCollaboratorInfo} payload - PL-GetCollaboratorInfo
   * @returns {import("../dist/Interfaces/Doc Common/doc.interface").RESP-GetCollaboratorInfo}
   * The response from the API.
   */
  getCollaboratorInfo(payload: GetCollaboratorInfoUserPayload): Promise<GetCollaboratorInfo> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/organizations/${this.ORGANIZATION_ID}/collaborator/user/${payload.user_id}`,
      headers: this.headers,
      data: payload,
    });
  }

  /**
   * It sets the rights of a collaborator (member) on the application.
   * @type {import("../dist/Interfaces/Doc Common/doc.interface").PL-SetCollaborator}
   * @param {PL-SetCollaborator} payload - PL-SetCollaborator
   * @returns {import("../dist/Interfaces/Doc Common/doc.interface").RESP-EmptyPayload}
   * The response from the API.
   */
  setCollaborator(payload: SetCollaboratorUserPayload): Promise<any> {
    const apiPayload: SetCollaboratorPayload = {
      organization_ids: { organization_id: this.ORGANIZATION_ID },
      collaborator: {
        ids: {
          user_ids: { user_id: payload.user_id, email: payload.email },
        },
        rights: payload.rights,
      },
    };
    return this.API.send({
      method: 'PUT',
      url: `${this.IDENTITY_SERVER}/organizations/${this.ORGANIZATION_ID}/collaborators`,
      headers: this.headers,
      data: apiPayload,
    });
  }
}
