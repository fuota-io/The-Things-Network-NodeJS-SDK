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

/**
 * @classdesc The Application class is a child class of the SetConfig class. The Application class has a constructor that takes
 * in a applicationID and a config object. The Application class has a bunch of methods that make API calls to the Identity Server.
 * @extends SetConfig
 */
export class Application extends SetConfig {
  private APPLICATION_ID: string;
  private API: APICall = new APICall();

  /**
   * The constructor function is a special function that is called when an object is created from a
   * class
   * @param {string} applicationID - The ID of the application you want to use.
   * @param {Config} config - Config
   */
  constructor(applicationID: string, config: Config) {
    super(config);
    this.APPLICATION_ID = applicationID;
  }

  /**
   * It returns the application information.
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").RESP-GetApplication}
   * The response from the API.
   */
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

  /**
   * It returns the list of applications that have been created by both user and organization.
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").RESP-GetApplicationList}
   * The response from the API.
   */
  getApplicationList(): Promise<GetApplicationList> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/applications`,
      headers: this.headers,
      data: {},
    });
  }

  /**
   * It updates the application information.
   * @type {import("../dist/Interfaces/Doc Common/docApp.interface").PL-UpdateApplication}
   * @param {PL-UpdateApplication} payload - PL-UpdateApplication
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").RESP-UpdateApplication}
   * The response from the API.
   */
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

  /**
   * It deletes the application.
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").RESP-EmptyPayload}
   * The response from the API.
   */
  deleteApplication(): Promise<any> {
    return this.API.send({
      method: 'DELETE',
      url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}`,
      headers: this.headers,
      data: {},
    });
  }

  /**
   * It restores the application.
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").RESP-EmptyPayload}
   * The response from the API.
   */
  restoreApplication(): Promise<any> {
    return this.API.send({
      method: 'POST',
      url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/restore`,
      headers: this.headers,
      data: {},
    });
  }

  /**
   * It purges the application.
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").RESP-EmptyPayload}
   * The response from the API.
   */
  purgeApplication(): Promise<any> {
    return this.API.send({
      method: 'DELETE',
      url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/purge`,
      headers: this.headers,
      data: {},
    });
  }

  /**
   * It searches the application.
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").RESP-SearchApplication}
   * The response from the API.
   */
  searchApplication(): Promise<SearchApplication> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/search/applications`,
      headers: this.headers,
      data: {},
    });
  }

  /**
   * It returns the application rights.
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").RESP-GetApplicationRight}
   * The response from the API.
   */
  getApplicationRight(): Promise<GetApplicationRight> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/rights`,
      headers: this.headers,
      data: {},
    });
  }

  /**
   * It creates an API key for the application.
   * @type {import("../dist/Interfaces/Doc Common/docApp.interface").PL-CreateAPIKeyForApplication}
   * @param {PL-CreateAPIKeyForApplication} payload - PL-CreateAPIKeyForApplication
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").RESP-CreateAPIKey}
   * The response from the API.
   */
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

  /**
   * It returns the list of API keys for the application.
   * @type {import("../dist/Interfaces/Doc Common/docApp.interface").PL-GetAPIKeyList}
   * @param {PL-GetAPIKeyList} payload - PL-GetAPIKeyList
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").RESP-GetAPIKeyList}
   * The response from the API.
   */
  getAPIKeyList(payload: GetAPIKeyListUserPayload): Promise<GetAPIKeyList> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/api-keys`,
      headers: this.headers,
      data: payload,
    });
  }

  /**
   * It returns the API key information for the application.
   * @type {import("../dist/Interfaces/Doc Common/docApp.interface").PL-GetAPIKeyInfo}
   * @param {PL-GetAPIKeyInfo} payload - PL-GetAPIKeyInfo
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").RESP-GetAPIKeyInfo}
   * The response from the API.
   */
  getAPIKeyInfo(payload: GetAPIKeyInfoUserPayload): Promise<GetAPIKeyInfo> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/api-keys/${payload.key_id}`,
      headers: this.headers,
      data: payload,
    });
  }

  /**
   * It returns the information of the api key that has been created by the user.
   * @type {import("../dist/Interfaces/Doc Common/docApp.interface").PL-UpdateAPIKeyOfApplication}
   * @param {PL-UpdateAPIKeyOfApplication} payload - PL-UpdateAPIKeyOfApplication
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").RESP-UpdateAPIKey}
   * The response from the API.
   */
  updateAPIKey(payload: UpdateAPIKeyUserPayload): Promise<UpdateAPIKey> {
    const receievePayload = {
      name: payload.api_key_name,
      rights: payload.api_key_rights,
      expires_at: payload.expires_at,
    };

    const extractPayload = JSON.parse(JSON.stringify(receievePayload));
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

  /**
   * It returns rights of the collaborator (member) of the application.
   * @type {import("../dist/Interfaces/Doc Common/docApp.interface").PL-GetCollaboratorInfoOfUser}
   * @param {PL-GetCollaboratorInfoOfUser} payload - PL-GetCollaboratorInfoOfUser
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").RESP-GetCollaboratorInfoOfUser}
   * The response from the API.
   */
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

  /**
   * It returns rights of the collaborator (member) of the application.
   * @type {import("../dist/Interfaces/Doc Common/docApp.interface").PL-GetCollaboratorInfoOfOrg}
   * @param {PL-GetCollaboratorInfoOfOrg} payload - PL-GetCollaboratorInfoOfOrg
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").RESP-GetCollaboratorInfoOfOrg}
   * The response from the API.
   */
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

  /**
   * It sets the rights of a collaborator (member) on the application.
   * @type {import("../dist/Interfaces/Doc Common/docApp.interface").PL-SetCollaboratorOfUser}
   * @param {PL-SetCollaboratorOfUser} payload - PL-SetCollaboratorOfUser
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").RESP-EmptyPayload}
   * The response from the API.
   */
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

  /**
   * It sets the rights of a collaborator (member) on the application.
   * @type {import("../dist/Interfaces/Doc Common/docApp.interface").PL-SetCollaboratorOfOrg}
   * @param {PL-SetCollaboratorOfOrg} payload - PL-SetCollaboratorOfOrg
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").RESP-EmptyPayload}
   * The response from the API.
   */
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

  /**
   * It returns the list of API keys for the application.
   * @type {import("../dist/Interfaces/Doc Common/docApp.interface").PL-GetCollabortorList}
   * @param {PL-GetCollabortorList} payload - PL-GetCollabortorList
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").RESP-GetCollabortorList}
   * The response from the API.
   */
  getCollaboratorList(payload: GetCollabortorListUserPayload): Promise<GetCollabortorList> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/collaborators`,
      headers: this.headers,
      data: payload,
    });
  }
}
