import { SetConfig } from '../index';
import { Config } from '../Interfaces/Config/config.interface';
import { CreateApplication, CreateApplicationUserPayload, GetApplicationList, CreateAPIKey, CreateAPIKeyPayload, GetAPIKeyListUserPayload, GetAPIKeyList, GetAPIKeyInfoUserPayload, GetAPIKeyInfo, UpdateAPIKeyUserPayload, UpdateAPIKey, GetCollaboratorInfo, GetCollaboratorInfoUserPayload, SetCollaboratorUserPayload, CreateGatewayUserPayload, CreateGateway, GetGatewayList } from '../Interfaces/Organization/organization.interface';
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
     * @type {import("../dist/Interfaces/Doc Common/doc.interface").Config}
     * @param {Config} config - This is the configuration object that is passed to the constructor of the base class.
     */
    constructor(organizationID: string, config: Config);
    /**
     * It creates an application for the organization.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-CreateApplication}
     * @param {Input-CreateApplication} payload - Input-CreateApplication
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-CreateApplication}
     * The response from the API.
     */
    createApplication(payload: CreateApplicationUserPayload): Promise<CreateApplication>;
    /**
     * It returns the list of applications that have been created by the organization.
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetApplicationList}
     * The response from the API.
     */
    getApplicationList(): Promise<GetApplicationList>;
    /**
     * It creates an api key for the organization.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-CreateAPIKeyForOrg}
     * @param {Input-CreateAPIKeyForOrg} payload - Input-CreateAPIKeyForOrg
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-CreateAPIKey}
     * The response from the API.
     */
    createAPIKey(payload: CreateAPIKeyPayload): Promise<CreateAPIKey>;
    /**
     * It returns the list of api keys that have been created by the organization.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-GetAPIKeyList}
     * @param {Input-GetAPIKeyList} payload - Input-GetAPIKeyList
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetAPIKeyList}
     * The response from the API.
     */
    getAPIKeyList(payload: GetAPIKeyListUserPayload): Promise<GetAPIKeyList>;
    /**
     * It returns the information of the api key that has been created by the user.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-GetAPIKeyInfo}
     * @param {Input-GetAPIKeyInfo} payload - Input-GetAPIKeyInfo
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetAPIKeyInfo}
     * The response from the API.
     */
    getAPIKeyInfo(payload: GetAPIKeyInfoUserPayload): Promise<GetAPIKeyInfo>;
    /**
     * It returns the information of the api key that has been created by the user.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-UpdateAPIKeyOfOrg}
     * @param {Input-UpdateAPIKeyOfOrg} payload - Input-UpdateAPIKeyOfOrg
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-UpdateAPIKey}
     * The response from the API.
     */
    updateAPIKey(payload: UpdateAPIKeyUserPayload): Promise<UpdateAPIKey>;
    /**
     * It returns rights of the collaborator (member) of the application.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-GetCollaboratorInfo}
     * @param {Input-GetCollaboratorInfo} payload - Input-GetCollaboratorInfo
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetCollaboratorInfo}
     * The response from the API.
     */
    getCollaboratorInfo(payload: GetCollaboratorInfoUserPayload): Promise<GetCollaboratorInfo>;
    /**
     * It sets the rights of a collaborator (member) on the application.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-SetCollaborator}
     * @param {Input-SetCollaborator} payload - Input-SetCollaborator
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-EmptyPayload}
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
     * @returns {Output-GetGatewayList}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/gateway/#message:Gateways GetGatewayList}
     */
    getGatewayList(): Promise<GetGatewayList>;
}
