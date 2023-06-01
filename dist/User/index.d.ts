import { SetConfig } from '../index';
import { Config } from '../Interfaces/Config/config.interface';
import { CreateApplication, CreateApplicationUserPayload, GetApplicationList, CreateAPIKey, CreateAPIKeyPayload, GetAPIKeyListUserPayload, GetAPIKeyList, GetAPIKeyInfoUserPayload, GetAPIKeyInfo, UpdateAPIKeyUserPayload, UpdateAPIKey, CreateGatewayUserPayload, CreateGateway, GetGatewayList } from '../Interfaces/User/user.interface';
/**
 * @classdesc The User class is a child class of the SetConfig class. The User class has a constructor that takes
 * in a userID and a config object. The User class has a bunch of methods that make API calls to the Identity Server.
 * @extends SetConfig
 */
export declare class User extends SetConfig {
    private USER_ID;
    private API;
    /**
     * The constructor function is a special function that is called when an object is created from a
     * class
     * @param {string} userID - The user ID of the user you want to get the profile of.
     * @type {import("../dist/Interfaces/Doc Common/doc.interface").Config}
     * @param {Config} config - Config - This is the configuration object that is passed to the constructor of the base class.
     */
    constructor(userID: string, config: Config);
    /**
     * It creates an application for the user.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-CreateApplication}
     * @param {Input-CreateApplication} payload - Input-CreateApplication
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-CreateApplication}
     * The response from the API.
     * @example
     * const createApplicationPayloadForUser = {
        application_id: 'meet59',
        name: 'meet',
        description: '',  };
     *
     * const user = new User('meetsavaj', config);
     * const response = await user.createApplication(createApplicationPayloadForUser);
     */
    createApplication(payload: CreateApplicationUserPayload): Promise<CreateApplication>;
    /**
     * It returns the list of applications that have been created by the user.
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetApplicationList}
     * The response from the API.
     */
    getApplicationList(): Promise<GetApplicationList>;
    /**
     * It creates an api key for the user.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-CreateAPIKeyForUser}
     * @param {Input-CreateAPIKeyForUser} payload - Input-CreateAPIKeyForUser
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-CreateAPIKey}
     * The response from the API.
     */
    createAPIKey(payload: CreateAPIKeyPayload): Promise<CreateAPIKey>;
    /**
     * It returns the list of api keys that have been created by the user.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").cGetAPIKeyList}
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
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-UpdateAPIKeyOfUser}
     * @param {Input-UpdateAPIKeyOfUser} payload - Input-UpdateAPIKeyOfUser
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-UpdateAPIKey}
     * The response from the API.
     */
    updateAPIKey(payload: UpdateAPIKeyUserPayload): Promise<UpdateAPIKey>;
    /**
     * It creates a gateway for the user.
     * @param {Input-CreateGateway} payload - {@link https://www.thethingsindustries.com/docs/reference/api/gateway/#message:CreateGatewayRequest CreateGateway}
     * @returns {Output-CreateGateway}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/gateway/#message:Gateway CreateGateway}
     */
    createGateway(payload: CreateGatewayUserPayload): Promise<CreateGateway>;
    /**
     * It returns the list of gateways that have been created by the user.
     * @returns {Output-GetGatewayList}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/gateway/#message:Gateways GetGatewayList}
     */
    getGatewayList(): Promise<GetGatewayList>;
}
