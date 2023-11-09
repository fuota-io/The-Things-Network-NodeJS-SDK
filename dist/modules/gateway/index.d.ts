import { SetConfig } from '../../helpers/config';
import { Config } from '../../interfaces/config.interface';
import { CreateAPIKeyPayload, CreateAPIKey, GetAPIKeyInfoUserPayload, GetAPIKeyInfo, UpdateAPIKey, UpdateAPIKeyUserPayload, GetCollaboratorInfoUserPayload, GetCollaboratorInfoOrgPayload, SetCollaboratorUserPayloadForUser, SetCollaboratorUserPayloadForOrg, GetCollaboratorInfoUser, GetCollaboratorInfoOrg } from '../../interfaces/application.interface';
import { GetAPIKeyList, GetAPIKeyListUserPayload, GetCollabortorList, GetCollabortorListUserPayload, GetGatewayInfo, GetGatewayList, GetGatewayListUserPayload, GetGatewayRight, SearchGateway, UpdateGateway, UpdateGatewayUserPayload } from '../../interfaces/gateway.interface';
/**
 * @classdesc The Gateway class is a child class of the SetConfig class. The Gateway class has a constructor that takes in a
 * applicationID and a config object. The Gateway class has a bunch of methods that make API calls to the Identity Server.
 * @extends SetConfig
 */
export declare class Gateway extends SetConfig {
    private GATEWAY_ID;
    private API;
    private paths;
    /**
     * The constructor function is a special function that is called when an object is created from a
     * class
     * @param {string} gatewayID - The ID of the gateway you want to get the list of users from.
     * @param {Config} config - This is the configuration object that is passed to the constructor of the base class.
     */
    constructor(gatewayID: string, config: Config);
    /**
     * It returns the gateway information.
     * @returns {Output-GetGatewayInfo}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/gateway/#message:Gateway CreateGateway}
     */
    getGatewayInfo(): Promise<GetGatewayInfo>;
    /**
     * It returns the list of gateways.
     * @param {Input-GetGatewayList} [payload] - Input-GetGatewayList
     * @returns {Output-GetGatewayList}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/gateway/#message:Gateways GetGatewayList}
     */
    getGatewayList(payload?: GetGatewayListUserPayload): Promise<GetGatewayList>;
    /**
     * It updates the gateway.
     * @param {Input-UpdateGateway} payload - {@link https://www.thethingsindustries.com/docs/reference/api/gateway/#message:UpdateGatewayRequest UpdateGateway}
     * @returns {Output-UpdateGateway}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/gateway/#message:Gateways UpdateGateway}
     */
    updateGateway(payload: UpdateGatewayUserPayload): Promise<UpdateGateway>;
    /**
     * It deletes the gateway.
     * @returns {Output-EmptyPayload}
     * The response from the API.
     */
    deleteGateway(): Promise<any>;
    /**
     * It restores the gateway.
     * @returns {Output-EmptyPayload}
     * The response from the API.
     */
    restoreGateway(): Promise<any>;
    /**
     * It purges the gateway.
     * @returns {Output-EmptyPayload}
     * The response from the API.
     */
    purgeGateway(): Promise<any>;
    /**
     * It searches the gateway.
     * @returns {Output-SearchGateway}
     * The response from the API.
     */
    searchGateway(): Promise<SearchGateway>;
    /**
     * It returns the gateway rights.
     * @returns {Output-GetGatewayRight}
     * The response from the API.
     */
    getGatewayRight(): Promise<GetGatewayRight>;
    /**
     * It creates an API key for the gateway.
     * @param {Input-CreateAPIKeyForUser} payload - Input-CreateAPIKeyForUser
     * @returns {Output-CreateAPIKey}
     * The response from the API.
     */
    createAPIKey(payload: CreateAPIKeyPayload): Promise<CreateAPIKey>;
    /**
     * It returns the list of API keys for the gateway.
     * @param {Input-GetAPIKeyList} [payload] - Input-GetAPIKeyList
     * @returns {Output-GetAPIKeyList}
     * The response from the API.
     */
    getAPIKeyList(payload?: GetAPIKeyListUserPayload): Promise<GetAPIKeyList>;
    /**
     * It returns the API key information for the application.
     * @param {Input-GetAPIKeyInfo} payload - Input-GetAPIKeyInfo
     * @returns {Output-GetAPIKeyInfo}
     * The response from the API.
     */
    getAPIKeyInfo(payload: GetAPIKeyInfoUserPayload): Promise<GetAPIKeyInfo>;
    /**
     * It returns the information of the api key that has been created by the user.
     * @param {Input-UpdateAPIKeyOfApplication} payload - Input-UpdateAPIKeyOfApplication
     * @returns {Output-UpdateAPIKey}
     * The response from the API.
     */
    updateAPIKey(payload: UpdateAPIKeyUserPayload): Promise<UpdateAPIKey>;
    /**
     * It returns rights of the collaborator (member) of the application.
     * @param {Input-GetCollaboratorInfoOfUser} payload - Input-GetCollaboratorInfoOfUser
     * @returns {Output-GetCollaboratorInfoOfUser}
     * The response from the API.
     */
    getCollaboratorInfoOfUser(payload: GetCollaboratorInfoUserPayload): Promise<GetCollaboratorInfoUser>;
    /**
     * It returns rights of the collaborator (member) of the application.
     * @param {Input-GetCollaboratorInfoOfOrg} payload - Input-GetCollaboratorInfoOfOrg
     * @returns {Output-GetCollaboratorInfoOfOrg}
     * The response from the API.
     */
    getCollaboratorInfoOfOrg(payload: GetCollaboratorInfoOrgPayload): Promise<GetCollaboratorInfoOrg>;
    /**
     * It sets the rights of a collaborator (member) on the application.
     * @param {Input-SetCollaboratorOfUser} payload - Input-SetCollaboratorOfUser
     * @returns {Output-EmptyPayload}
     * The response from the API.
     */
    setCollaboratorOfUser(payload: SetCollaboratorUserPayloadForUser): Promise<any>;
    /**
     * It sets the rights of a collaborator (member) on the application.
     * @param {Input-SetCollaboratorOfOrg} payload - Input-SetCollaboratorOfOrg
     * @returns {Output-EmptyPayload}
     * The response from the API.
     */
    setCollaboratorOfOrg(payload: SetCollaboratorUserPayloadForOrg): Promise<any>;
    /**
     * It returns the list of collaborators (members) of the application.
     * @param {Input-GetCollabortorList} [payload] - Input-GetCollabortorList
     * @returns {Output-GetCollabortorList}
     * The response from the API.
     */
    getCollaboratorList(payload?: GetCollabortorListUserPayload): Promise<GetCollabortorList>;
}
