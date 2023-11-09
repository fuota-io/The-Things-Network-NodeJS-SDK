import { SetConfig } from '../../helpers/config';
import { Config } from '../../interfaces/config.interface';
import { CreateApplication, CreateApplicationUserPayload, GetApplicationList, CreateAPIKey, CreateAPIKeyPayload, GetAPIKeyListUserPayload, GetAPIKeyList, GetAPIKeyInfoUserPayload, GetAPIKeyInfo, UpdateAPIKeyUserPayload, UpdateAPIKey, GetCollaboratorInfo, GetCollaboratorInfoUserPayload, SetCollaboratorUserPayload, CreateGatewayUserPayload, CreateGateway, GetGatewayList, GetApplicationListUserPayload, GetGatewayListUserPayload } from '../../interfaces/organization.interface';
/**
 * @classdesc The Organization class is a child class of the SetConfig class. The Organization class has a constructor that takes
 * in a organizationID and a config object. The Organization class has a bunch of methods that make API calls to the Identity Server.
 * @extends SetConfig
 */
export declare class Organization extends SetConfig {
    private ORGANIZATION_ID;
    private API;
    /**
     * The constructor function is a special function that is called when an object is created from a
     * class
     * @param {string} organizationID - The ID of the organization you want to get the list of users from.
     * @param {Config} config - This is the configuration object that is passed to the constructor of the base class.
     */
    constructor(organizationID: string, config: Config);
    /**
     * It creates an application for the organization.
     * @param {Input-CreateApplication} payload - Input-CreateApplication
     * @returns {Output-CreateApplication}
     * The response from the API.
     */
    createApplication(payload: CreateApplicationUserPayload): Promise<CreateApplication>;
    /**
     * It returns the list of applications that have been created by the organization.
     * @param {Input-GetApplicationList} [payload] - Input-GetApplicationList
     * @returns {Output-GetApplicationList}
     * The response from the API.
     */
    getApplicationList(payload?: GetApplicationListUserPayload): Promise<GetApplicationList>;
    /**
     * It creates an api key for the organization.
     * @param {Input-CreateAPIKeyForOrg} payload - Input-CreateAPIKeyForOrg
     * @returns {Output-CreateAPIKey}
     * The response from the API.
     */
    createAPIKey(payload: CreateAPIKeyPayload): Promise<CreateAPIKey>;
    /**
     * It returns the list of api keys that have been created by the organization.
     * @param {Input-GetAPIKeyList} [payload] - Input-GetAPIKeyList
     * @returns {Output-GetAPIKeyList}
     * The response from the API.
     */
    getAPIKeyList(payload?: GetAPIKeyListUserPayload): Promise<GetAPIKeyList>;
    /**
     * It returns the information of the api key that has been created by the user.
     * @param {Input-GetAPIKeyInfo} payload - Input-GetAPIKeyInfo
     * @returns {Output-GetAPIKeyInfo}
     * The response from the API.
     */
    getAPIKeyInfo(payload: GetAPIKeyInfoUserPayload): Promise<GetAPIKeyInfo>;
    /**
     * It returns the information of the api key that has been created by the user.
     * @param {Input-UpdateAPIKeyOfOrg} payload - Input-UpdateAPIKeyOfOrg
     * @returns {Output-UpdateAPIKey}
     * The response from the API.
     */
    updateAPIKey(payload: UpdateAPIKeyUserPayload): Promise<UpdateAPIKey>;
    /**
     * It returns rights of the collaborator (member) of the application.
     * @param {Input-GetCollaboratorInfo} payload - Input-GetCollaboratorInfo
     * @returns {Output-GetCollaboratorInfo}
     * The response from the API.
     */
    getCollaboratorInfo(payload: GetCollaboratorInfoUserPayload): Promise<GetCollaboratorInfo>;
    /**
     * It sets the rights of a collaborator (member) on the application.
     * @param {Input-SetCollaborator} payload - Input-SetCollaborator
     * @returns {Output-EmptyPayload}
     * The response from the API.
     */
    setCollaborator(payload: SetCollaboratorUserPayload): Promise<any>;
    /**
     * It creates a gateway for the organization.
     * @param {Input-CreateGateway} payload - {@link https://www.thethingsindustries.com/docs/reference/api/gateway/#message:CreateGatewayRequest CreateGateway}
     * @returns {Output-CreateGateway}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/gateway/#message:Gateway CreateGateway}
     */
    createGateway(payload: CreateGatewayUserPayload): Promise<CreateGateway>;
    /**
     * It returns the list of gateways that have been created by the organization.
     * @param {Input-GetGatewayList} [payload] - Input-GetGatewayList
     * @returns {Output-GetGatewayList}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/gateway/#message:Gateways GetGatewayList}
     */
    getGatewayList(payload?: GetGatewayListUserPayload): Promise<GetGatewayList>;
}
