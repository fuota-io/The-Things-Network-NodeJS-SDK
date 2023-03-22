import { APICall, SetConfig } from '../index';
import { Config } from '../Interfaces/Config/config.interface';
import {
  CreateAPIKeyPayload,
  CreateAPIKey,
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
import {
  GetGatewayInfo,
  GetGatewayList,
  GetGatewayRight,
  SearchGateway,
  UpdateGateway,
  UpdateGatewayPayload,
  UpdateGatewayUserPayload,
} from '../Interfaces/Gateway/gateway.interface';
import { getAllKeys } from '../Helpers/utils';

/**
 * @classdesc The Gateway class is a child class of the SetConfig class. The Gateway class has a constructor that takes in a
 * applicationID and a config object. The Gateway class has a bunch of methods that make API calls to the Identity Server.
 * @extends SetConfig
 */
export class Gateway extends SetConfig {
  private GATEWAY_ID: string;
  private API: APICall = new APICall();
  private paths: string[] = [];

  /**
   * The constructor function is a special function that is called when an object is created from a
   * class
   * @param {string} gatewayID - The ID of the gateway you want to get the list of users from.
   * @type {import("../dist/Interfaces/Doc Common/doc.interface").Config}
   * @param {Config} config - This is the configuration object that is passed to the constructor of the base class.
   */
  constructor(gatewayID: string, config: Config) {
    super(config);
    this.GATEWAY_ID = gatewayID;
  }

  /**
   * It returns the gateway information.
   * @returns {Output-GetGatewayInfo}
   * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/gateway/#message:Gateway CreateGateway}
   */
  getGatewayInfo(): Promise<GetGatewayInfo> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}`,
      headers: this.headers,
      data: {},
    });
  }

  /**
   * It returns the list of gateways.
   * @returns {Output-GetGatewayList}
   * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/gateway/#message:Gateways GetGatewayList}
   */
  getGatewayList(): Promise<GetGatewayList> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/gateways`,
      headers: this.headers,
      data: {},
    });
  }

  /**
   * It updates the gateway.
   * @param {Input-UpdateGateway} payload - {@link https://www.thethingsindustries.com/docs/reference/api/gateway/#message:UpdateGatewayRequest UpdateGateway}
   * @returns {Output-UpdateGateway}
   * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/gateway/#message:Gateways UpdateGateway}
   */
  updateGateway(payload: UpdateGatewayUserPayload): Promise<UpdateGateway> {
    const recpaths = getAllKeys(payload);
    const tempArr = recpaths.toString().replaceAll('gateway.', '').split(',');
    const tempPaths = tempArr.filter((el) => el.includes('attributes.'));

    if (tempPaths.length != 0) {
      this.paths = tempArr.toString().replaceAll(tempPaths.toString(), 'attributes').split(',');
    } else {
      this.paths = tempArr;
    }

    const paths = this.paths;

    const apiPayload: UpdateGatewayPayload = {
      gateway: {
        name: payload.gateway.name,
        description: payload.gateway.description,
        attributes: payload.gateway.attributes,
        version_ids: {
          brand_id: payload.gateway.version_ids?.brand_id,
          model_id: payload.gateway.version_ids?.model_id,
          hardware_version: payload.gateway.version_ids?.hardware_version,
          firmware_version: payload.gateway.version_ids?.firmware_version,
        },
        gateway_server_address: payload.gateway.gateway_server_address,
        auto_update: payload.gateway.auto_update,
        update_channel: payload.gateway.update_channel,
        frequency_plan_id: payload.gateway.frequency_plan_id,
        frequency_plan_ids: payload.gateway.frequency_plan_ids,
        antennas: payload.gateway.antennas,
        status_public: payload.gateway.status_public,
        location_public: payload.gateway.location_public,
        schedule_downlink_late: payload.gateway.schedule_downlink_late,
        enforce_duty_cycle: payload.gateway.enforce_duty_cycle,
        downlink_path_constraint: payload.gateway.downlink_path_constraint,
        schedule_anytime_delay: payload.gateway.schedule_anytime_delay,
        update_location_from_status: payload.gateway.update_location_from_status,
        lbs_lns_secret: {
          key_id: payload.gateway.lbs_lns_secret?.key_id,
          value: payload.gateway.lbs_lns_secret?.value,
        },
        claim_authentication_code: {
          secret: {
            key_id: payload.gateway.claim_authentication_code?.secret?.key_id,
            value: payload.gateway.claim_authentication_code?.secret?.value,
          },
          valid_from: payload.gateway.claim_authentication_code?.valid_from,
          valid_to: payload.gateway.claim_authentication_code?.valid_to,
        },
        target_cups_uri: payload.gateway.target_cups_uri,
        target_cups_key: {
          key_id: payload.gateway.target_cups_key?.key_id,
          value: payload.gateway.target_cups_key?.value,
        },
        require_authenticated_connection: payload.gateway.require_authenticated_connection,
        lrfhss: { supported: payload.gateway.lrfhss?.supported },
        disable_packet_broker_forwarding: payload.gateway.disable_packet_broker_forwarding,
      },
      field_mask: {
        paths: paths,
      },
    };
    return this.API.send({
      method: 'PUT',
      url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}`,
      headers: this.headers,
      data: apiPayload,
    });
  }

  /**
   * It deletes the gateway.
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-EmptyPayload}
   * The response from the API.
   */
  deleteGateway(): Promise<any> {
    return this.API.send({
      method: 'DELETE',
      url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}`,
      headers: this.headers,
      data: {},
    });
  }

  /**
   * It restores the gateway.
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-EmptyPayload}
   * The response from the API.
   */
  restoreGateway(): Promise<any> {
    return this.API.send({
      method: 'POST',
      url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}/restore`,
      headers: this.headers,
      data: {},
    });
  }

  /**
   * It purges the gateway.
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-EmptyPayload}
   * The response from the API.
   */
  purgeGateway(): Promise<any> {
    return this.API.send({
      method: 'DELETE',
      url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}/purge`,
      headers: this.headers,
      data: {},
    });
  }

  /**
   * It searches the gateway.
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-SearchGateway}
   * The response from the API.
   */
  searchGateway(): Promise<SearchGateway> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/search/gateways`,
      headers: this.headers,
      data: {},
    });
  }

  /**
   * It returns the gateway rights.
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetGatewayRight}
   * The response from the API.
   */
  getGatewayRight(): Promise<GetGatewayRight> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}/rights`,
      headers: this.headers,
      data: {},
    });
  }

  /**
   * It creates an API key for the gateway.
   * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-CreateAPIKeyForUser}
   * @param {Input-CreateAPIKeyForUser} payload - Input-CreateAPIKeyForUser
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-CreateAPIKey}
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
      url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}/api-keys`,
      headers: this.headers,
      data: payload,
    });
  }

  /**
   * It returns the list of API keys for the gateway.
   * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-GetAPIKeyList}
   * @param {Input-GetAPIKeyList} payload - Input-GetAPIKeyList
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetAPIKeyList}
   * The response from the API.
   */
  getAPIKeyList(payload: GetAPIKeyListUserPayload): Promise<GetAPIKeyList> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}/api-keys`,
      headers: this.headers,
      data: payload,
    });
  }

  /**
   * It returns the API key information for the application.
   * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-GetAPIKeyInfo}
   * @param {Input-GetAPIKeyInfo} payload - Input-GetAPIKeyInfo
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetAPIKeyInfo}
   * The response from the API.
   */
  getAPIKeyInfo(payload: GetAPIKeyInfoUserPayload): Promise<GetAPIKeyInfo> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}/api-keys/${payload.key_id}`,
      headers: this.headers,
      data: payload,
    });
  }

  /**
   * It returns the information of the api key that has been created by the user.
   * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-UpdateAPIKeyOfApplication}
   * @param {Input-UpdateAPIKeyOfApplication} payload - Input-UpdateAPIKeyOfApplication
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-UpdateAPIKey}
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
      url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}/api-keys/${payload.api_key_id}`,
      headers: this.headers,
      data: apiPayload,
    });
  }

  /**
   * It returns rights of the collaborator (member) of the application.
   * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-GetCollaboratorInfoOfUser}
   * @param {Input-GetCollaboratorInfoOfUser} payload - Input-GetCollaboratorInfoOfUser
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetCollaboratorInfoOfUser}
   * The response from the API.
   */
  getCollaboratorInfoOfUser(
    payload: GetCollaboratorInfoUserPayload
  ): Promise<GetCollaboratorInfoUser> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}/collaborator/user/${payload.user_id}`,
      headers: this.headers,
      data: payload,
    });
  }

  /**
   * It returns rights of the collaborator (member) of the application.
   * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-GetCollaboratorInfoOfOrg}
   * @param {Input-GetCollaboratorInfoOfOrg} payload - Input-GetCollaboratorInfoOfOrg
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetCollaboratorInfoOfOrg}
   * The response from the API.
   */
  getCollaboratorInfoOfOrg(
    payload: GetCollaboratorInfoOrgPayload
  ): Promise<GetCollaboratorInfoOrg> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}/collaborator/organization/${payload.organization_id}`,
      headers: this.headers,
      data: payload,
    });
  }

  /**
   * It sets the rights of a collaborator (member) on the application.
   * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-SetCollaboratorOfUser}
   * @param {Input-SetCollaboratorOfUser} payload - Input-SetCollaboratorOfUser
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-EmptyPayload}
   * The response from the API.
   */
  setCollaboratorOfUser(payload: SetCollaboratorUserPayloadForUser): Promise<any> {
    const apiPayload: SetCollaboratorPayloadForUser = {
      collaborator: {
        ids: {
          user_ids: { user_id: payload.user_id, email: payload.email },
        },
        rights: payload.rights,
      },
    };
    return this.API.send({
      method: 'PUT',
      url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}/collaborators`,
      headers: this.headers,
      data: apiPayload,
    });
  }

  /**
   * It sets the rights of a collaborator (member) on the application.
   * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-SetCollaboratorOfOrg}
   * @param {Input-SetCollaboratorOfOrg} payload - Input-SetCollaboratorOfOrg
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-EmptyPayload}
   * The response from the API.
   */
  setCollaboratorOfOrg(payload: SetCollaboratorUserPayloadForOrg): Promise<any> {
    const apiPayload: SetCollaboratorPayloadForOrg = {
      collaborator: {
        ids: {
          organization_ids: { organization_id: payload.organization_id },
        },
        rights: payload.rights,
      },
    };
    return this.API.send({
      method: 'PUT',
      url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}/collaborators`,
      headers: this.headers,
      data: apiPayload,
    });
  }

  /**
   * It returns the list of API keys for the application.
   * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-GetCollabortorList}
   * @param {Input-GetCollabortorList} payload - Input-GetCollabortorList
   * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetCollabortorList}
   * The response from the API.
   */
  getCollaboratorList(payload: GetCollabortorListUserPayload): Promise<GetCollabortorList> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/gateways/${this.GATEWAY_ID}/collaborators`,
      headers: this.headers,
      data: payload,
    });
  }
}
