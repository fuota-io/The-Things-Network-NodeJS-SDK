import { SetConfig } from '../index';
import { Config } from '../Interfaces/Config/config.interface';
import { GetApplication, GetApplicationList, UpdateApplicationUserPayload, UpdateApplication, SearchApplication, GetApplicationRight, CreateAPIKeyPayload, CreateAPIKey, GetAPIKeyListUserPayload, GetAPIKeyList, GetAPIKeyInfoUserPayload, GetAPIKeyInfo, UpdateAPIKey, UpdateAPIKeyUserPayload, GetCollabortorListUserPayload, GetCollabortorList, GetCollaboratorInfoUserPayload, GetCollaboratorInfoOrgPayload, SetCollaboratorUserPayloadForUser, SetCollaboratorUserPayloadForOrg, GetCollaboratorInfoUser, GetCollaboratorInfoOrg } from '../Interfaces/Application/application.interface';
/**
 * @classdesc The Application class is a child class of the SetConfig class. The Application class has a constructor that takes
 * in a applicationID and a config object. The Application class has a bunch of methods that make API calls to the Identity Server.
 * @extends SetConfig
 */
export declare class Application extends SetConfig {
    private APPLICATION_ID;
    private API;
    /**
     * The constructor function is a special function that is called when an object is created from a
     * class
     * @param {string} applicationID - The ID of the application you want to use.
     * @type {import("../dist/Interfaces/Doc Common/doc.interface").Config}
     * @param {Config} config - This is the configuration object that is passed to the constructor of the base class.
     */
    constructor(applicationID: string, config: Config);
    /**
     * It returns the application information.
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetApplication}
     * The response from the API.
     */
    getApplicationInfo(): Promise<GetApplication>;
    /**
     * It returns the list of applications that have been created by both user and organization.
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetApplicationList}
     * The response from the API.
     */
    getApplicationList(): Promise<GetApplicationList>;
    /**
     * It updates the application information.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-UpdateApplication}
     * @param {Input-UpdateApplication} payload - Input-UpdateApplication
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-UpdateApplication}
     * The response from the API.
     */
    updateApplication(payload: UpdateApplicationUserPayload): Promise<UpdateApplication>;
    /**
     * It deletes the application.
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-EmptyPayload}
     * The response from the API.
     */
    deleteApplication(): Promise<any>;
    /**
     * It restores the application.
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-EmptyPayload}
     * The response from the API.
     */
    restoreApplication(): Promise<any>;
    /**
     * It purges the application.
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-EmptyPayload}
     * The response from the API.
     */
    purgeApplication(): Promise<any>;
    /**
     * It searches the application.
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-SearchApplication}
     * The response from the API.
     */
    searchApplication(): Promise<SearchApplication>;
    /**
     * It returns the application rights.
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetApplicationRight}
     * The response from the API.
     */
    getApplicationRight(): Promise<GetApplicationRight>;
    /**
     * It creates an API key for the application.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-CreateAPIKeyForApplication}
     * @param {Input-CreateAPIKeyForApplication} payload - Input-CreateAPIKeyForApplication
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-CreateAPIKey}
     * The response from the API.
     */
    createAPIKey(payload: CreateAPIKeyPayload): Promise<CreateAPIKey>;
    /**
     * It returns the list of API keys for the application.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-GetAPIKeyList}
     * @param {Input-GetAPIKeyList} payload - Input-GetAPIKeyList
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetAPIKeyList}
     * The response from the API.
     */
    getAPIKeyList(payload: GetAPIKeyListUserPayload): Promise<GetAPIKeyList>;
    /**
     * It returns the API key information for the application.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-GetAPIKeyInfo}
     * @param {Input-GetAPIKeyInfo} payload - Input-GetAPIKeyInfo
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetAPIKeyInfo}
     * The response from the API.
     */
    getAPIKeyInfo(payload: GetAPIKeyInfoUserPayload): Promise<GetAPIKeyInfo>;
    /**
     * It returns the information of the api key that has been created by the user.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-UpdateAPIKeyOfApplication}
     * @param {Input-UpdateAPIKeyOfApplication} payload - Input-UpdateAPIKeyOfApplication
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-UpdateAPIKey}
     * The response from the API.
     */
    updateAPIKey(payload: UpdateAPIKeyUserPayload): Promise<UpdateAPIKey>;
    /**
     * It returns rights of the collaborator (member) of the application.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-GetCollaboratorInfoOfUser}
     * @param {Input-GetCollaboratorInfoOfUser} payload - Input-GetCollaboratorInfoOfUser
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetCollaboratorInfoOfUser}
     * The response from the API.
     */
    getCollaboratorInfoOfUser(payload: GetCollaboratorInfoUserPayload): Promise<GetCollaboratorInfoUser>;
    /**
     * It returns rights of the collaborator (member) of the application.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-GetCollaboratorInfoOfOrg}
     * @param {Input-GetCollaboratorInfoOfOrg} payload - Input-GetCollaboratorInfoOfOrg
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetCollaboratorInfoOfOrg}
     * The response from the API.
     */
    getCollaboratorInfoOfOrg(payload: GetCollaboratorInfoOrgPayload): Promise<GetCollaboratorInfoOrg>;
    /**
     * It sets the rights of a collaborator (member) on the application.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-SetCollaboratorOfUser}
     * @param {Input-SetCollaboratorOfUser} payload - Input-SetCollaboratorOfUser
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-EmptyPayload}
     * The response from the API.
     */
    setCollaboratorOfUser(payload: SetCollaboratorUserPayloadForUser): Promise<any>;
    /**
     * It sets the rights of a collaborator (member) on the application.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-SetCollaboratorOfOrg}
     * @param {Input-SetCollaboratorOfOrg} payload - Input-SetCollaboratorOfOrg
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-EmptyPayload}
     * The response from the API.
     */
    setCollaboratorOfOrg(payload: SetCollaboratorUserPayloadForOrg): Promise<any>;
    /**
     * It returns the list of API keys for the application.
     * @type {import("../dist/Interfaces/Doc Common/docApp.interface").Input-GetCollabortorList}
     * @param {Input-GetCollabortorList} payload - Input-GetCollabortorList
     * @returns {import("../dist/Interfaces/Doc Common/docApp.interface").Output-GetCollabortorList}
     * The response from the API.
     */
    getCollaboratorList(payload: GetCollabortorListUserPayload): Promise<GetCollabortorList>;
}
