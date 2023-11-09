import { APICall } from '../../helpers/axios'
import { SetConfig } from '../../helpers/config'
import { Config } from '../../interfaces/config.interface'
import {
  CreateApplicationPayload,
  CreateApplication,
  CreateApplicationUserPayload,
  GetApplicationList,
  CreateAPIKey,
  CreateAPIKeyPayload,
  GetAPIKeyListUserPayload,
  GetAPIKeyList,
  GetAPIKeyInfoUserPayload,
  GetAPIKeyInfo,
  UpdateAPIKeyUserPayload,
  UpdateAPIKey,
  UpdateAPIKeyPayload,
  CreateGatewayUserPayload,
  CreateGateway,
  GetGatewayList,
  GetApplicationListUserPayload,
  GetGatewayListUserPayload,
} from '../../interfaces/user.interface';

/**
 * @classdesc The User class is a child class of the SetConfig class. The User class has a constructor that takes
 * in a userID and a config object. The User class has a bunch of methods that make API calls to the Identity Server.
 * @extends SetConfig
 */
export class User extends SetConfig {
  private USER_ID: string;
  private API: APICall = new APICall();

  /**
   * The constructor function is a special function that is called when an object is created from a
   * class
   * @param {string} userID - The user ID of the user you want to get the profile of.
   * @param {Config} config - Config - This is the configuration object that is passed to the constructor of the base class.
   */
  constructor(userID: string, config: Config) {
    super(config);
    this.USER_ID = userID;
  }

  /**
   * It creates an application for the user.
   * @param {Input-CreateApplication} payload - Input-CreateApplication
   * @returns {Output-CreateApplication} 
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
      url: `${this.IDENTITY_SERVER}/users/${this.USER_ID}/applications`,
      headers: this.headers,
      data: apiPayload,
    });
  }

  /**
   * It returns the list of applications that have been created by the user.
   * @param {Input-GetApplicationList} [payload] - Input-GetApplicationList
   * @returns {Output-GetApplicationList}
   * The response from the API.
   */
  getApplicationList(payload?: GetApplicationListUserPayload): Promise<GetApplicationList> {
    let page = 1, limit = 20, order = '-created_at';

    if (payload) {
      page = payload.page ? payload.page : 1;
      limit = payload.limit ? payload.limit : 20;
      order = payload.order ? payload.order : '-created_at';
    }

    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/users/${this.USER_ID}/applications?page=${page}&limit=${limit}&order=${order}&field_mask=name,description,network_server_address,application_server_address,join_server_address`,
      headers: this.headers,
      data: {},
    });
  }

  /**
   * It creates an api key for the user.
   * @param {Input-CreateAPIKeyForUser} payload - Input-CreateAPIKeyForUser
   * @returns {Output-CreateAPIKey}
   * The response from the API.
   */
  createAPIKey(payload: CreateAPIKeyPayload): Promise<CreateAPIKey> {
    // const apiPayload: CreateAPIKeyPayload = {
    //   name: payload.name,
    //   rights: payload.rights,
    //   expires_at: payload.expires_at,
    // };
    return this.API.send({
      method: 'POST',
      url: `${this.IDENTITY_SERVER}/users/${this.USER_ID}/api-keys`,
      headers: this.headers,
      data: payload,
    });
  }

  /**
   * It returns the list of api keys that have been created by the user.
   * @param {Input-GetAPIKeyList} [payload] - Input-GetAPIKeyList
   * @returns {Output-GetAPIKeyList}
   * The response from the API.
   */
  getAPIKeyList(payload?: GetAPIKeyListUserPayload): Promise<GetAPIKeyList> {
    let page = 1, limit = 20, order = '-created_at';

    if (payload) {
      page = payload.page ? payload.page : 1;
      limit = payload.limit ? payload.limit : 20;
      order = payload.order ? payload.order : '-created_at';
    }

    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/users/${this.USER_ID}/api-keys?page=${page}&limit=${limit}&order=${order}`,
      headers: this.headers,
      data: payload,
    });
  }

  /**
   * It returns the information of the api key that has been created by the user.
   * @param {Input-GetAPIKeyInfo} payload - Input-GetAPIKeyInfo
   * @returns {Output-GetAPIKeyInfo}
   * The response from the API.
   */
  getAPIKeyInfo(payload: GetAPIKeyInfoUserPayload): Promise<GetAPIKeyInfo> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/users/${this.USER_ID}/api-keys/${payload.key_id}`,
      headers: this.headers,
      data: {},
    });
  }

  /**
   * It returns the information of the api key that has been created by the user.
   * @param {Input-UpdateAPIKeyOfUser} payload - Input-UpdateAPIKeyOfUser
   * @returns {Output-UpdateAPIKey}
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
      url: `${this.IDENTITY_SERVER}/users/${this.USER_ID}/api-keys/${payload.api_key_id}`,
      headers: this.headers,
      data: apiPayload,
    });
  }

  /**
   * It creates a gateway for the user.
   * @param {Input-CreateGateway} payload - {@link https://www.thethingsindustries.com/docs/reference/api/gateway/#message:CreateGatewayRequest CreateGateway}
   * @returns {Output-CreateGateway}
   * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/gateway/#message:Gateway CreateGateway}
   */
  createGateway(payload: CreateGatewayUserPayload): Promise<CreateGateway> {
    return this.API.send({
      method: 'POST',
      url: `${this.IDENTITY_SERVER}/users/${this.USER_ID}/gateways`,
      headers: this.headers,
      data: payload,
    });
  }

  /**
   * It returns the list of gateways that have been created by the user.
   * @param {Input-GetGatewayList} [payload] - Input-GetGatewayList
   * @returns {Output-GetGatewayList}
   * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/gateway/#message:Gateways GetGatewayList}
   */
  getGatewayList(payload?: GetGatewayListUserPayload): Promise<GetGatewayList> {
    let page = 1, limit = 20, order = '-created_at';

    if (payload) {
      page = payload.page ? payload.page : 1;
      limit = payload.limit ? payload.limit : 20;
      order = payload.order ? payload.order : '-created_at';
    }

    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/users/${this.USER_ID}/gateways?page=${page}&limit=${limit}&order=${order}&field_mask=name,description,frequency_plan_ids,gateway_server_address`,
      headers: this.headers,
      data: {},
    });
  }
}
