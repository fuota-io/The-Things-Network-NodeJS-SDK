import { SetConfig } from '../../helpers/config';
import { Config } from '../../interfaces/config.interface';
import { CreateEndDeviceIS, SetEndDeviceJS, SetEndDeviceJSUserPayload, SetEndDeviceNSUserPayload, SetEndDeviceNS, SetEndDeviceASUserPayload, SetEndDeviceAS, GetEndDeviceInfoUserPayload, GetEndDeviceList, deleteEndDeviceASUserPayload, deleteEndDeviceNSUserPayload, deleteEndDeviceJSUserPayload, UpdateEndDevice, CreateEndDeviceISUserPayload, UpdateEndDeviceUserPayload, downlinkQueueUserPayload, subscribeDownLinkEventPayload, subscribeUpLinkEventPayload, deleteEndDeviceISUserPayload, issueDevEUI, GetEndDeviceInfoIS, GetEndDeviceInfoJS, GetEndDeviceInfoNS, GetEndDeviceInfoAS, GetEndDeviceListUserPayload } from '../../interfaces/endDevice.interface';
/**
 * @classdesc The EndDevice class is used to create an end device for the application.
 * @extends SetConfig
 */
export declare class EndDevice extends SetConfig {
    private APPLICATION_ID;
    private API;
    private topic;
    private conn;
    private paths;
    /**
     * The constructor function is a special function that is called when an object is created from a
     * class.
     * @param {string} applicationID - The ID of the application you want to use.
     * @param {Config} config - This is the configuration object that is passed to the constructor of the base class.
     */
    constructor(applicationID: string, config: Config);
    /**
     * It creates an end device for the application.
     * @param {Input-CreateEndDeviceIS} payload - {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:CreateEndDeviceRequest CreateEndDeviceIS}
     * @returns {Output-CreateEndDeviceIS}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDevice CreateEndDeviceIS}
     */
    createEndDeviceIS(payload: CreateEndDeviceISUserPayload): Promise<CreateEndDeviceIS>;
    /**
     * It sets an end device for the application in the Join Server.
     * @param {Input-SetEndDeviceJS} payload - {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:SetEndDeviceRequest SetEndDeviceJS}
     * @returns {Output-SetEndDeviceJS}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDevice SetEndDeviceJS}
     */
    setEndDeviceJS(payload: SetEndDeviceJSUserPayload): Promise<SetEndDeviceJS>;
    /**
     * It sets an end device for the application in the Network Server.
     * @param {Input-SetEndDeviceNS} payload - {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:SetEndDeviceRequest SetEndDeviceNS}
     * @returns {Output-SetEndDeviceNS}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDevice SetEndDeviceNS}
     */
    setEndDeviceNS(payload: SetEndDeviceNSUserPayload): Promise<SetEndDeviceNS>;
    /**
     * It sets an end device for the application in the Application Server.
     * @param {Input-SetEndDeviceAS} payload - {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:SetEndDeviceRequest SetEndDeviceAS}
     * @returns {Output-SetEndDeviceAS}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDevice SetEndDeviceAS}
     */
    setEndDeviceAS(payload: SetEndDeviceASUserPayload): Promise<SetEndDeviceAS>;
    /**
     * It returns the end device information for the application in the Identity Server.
     * @param {Input-GetEndDeviceInfo} payload - {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:GetEndDeviceRequest GetEndDeviceInfo}
     * @returns {Output-GetEndDeviceInfo}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDevice GetEndDeviceInfo}
     */
    getEndDeviceInfoIS(payload: GetEndDeviceInfoUserPayload): Promise<GetEndDeviceInfoIS>;
    /**
     * It returns the end device information for the application in the Join Server.
     * @param {Input-GetEndDeviceInfo} payload - {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:GetEndDeviceRequest GetEndDeviceInfo}
     * @returns {Output-GetEndDeviceInfo}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDevice GetEndDeviceInfo}
     */
    getEndDeviceInfoJS(payload: GetEndDeviceInfoUserPayload): Promise<GetEndDeviceInfoJS>;
    /**
     * It returns the end device information for the application in the Network Server.
     * @param {Input-GetEndDeviceInfo} payload - {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:GetEndDeviceRequest GetEndDeviceInfo}
     * @returns {Output-GetEndDeviceInfo}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDevice GetEndDeviceInfo}
     */
    getEndDeviceInfoNS(payload: GetEndDeviceInfoUserPayload): Promise<GetEndDeviceInfoNS>;
    /**
     * It returns the end device information for the application in the Application Server.
     * @param {Input-GetEndDeviceInfo} payload - {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:GetEndDeviceRequest GetEndDeviceInfo}
     * @returns {Output-GetEndDeviceInfo}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDevice GetEndDeviceInfo}
     */
    getEndDeviceInfoAS(payload: GetEndDeviceInfoUserPayload): Promise<GetEndDeviceInfoAS>;
    /**
     * It returns the list of end devices for the application in the Identity Server.
     * @param {Input-GetEndDeviceList} [payload] - Input-GetCollabortorList
     * @returns {Output-GetEndDeviceList}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDevices GetEndDeviceList}
     */
    getEndDeviceList(payload?: GetEndDeviceListUserPayload): Promise<GetEndDeviceList>;
    /**
     * It updates the end device information for the application.
     * @param {Input-UpdateEndDevice} payload - {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:UpdateEndDeviceRequest UpdateEndDevice}
     * @returns {Output-UpdateEndDevice}
     * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDevice UpdateEndDevice}
     */
    updateEndDevice(payload: UpdateEndDeviceUserPayload): Promise<UpdateEndDevice>;
    /**
     * It deletes the end device in the identity server.
     * @param {Input-DeleteEndDeviceIS} payload - {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDeviceIdentifiers DeleteEndDeviceIS}
     * @returns {Output-EmptyPayload}
     * The response from the API.
     */
    deleteEndDeviceIS(payload: deleteEndDeviceISUserPayload): Promise<any>;
    /**
     * It deletes the end device in the join server.
     * @param {Input-DeleteEndDeviceJS} payload - {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDeviceIdentifiers DeleteEndDeviceJS}
     * @returns {Output-EmptyPayload}
     * The response from the API.
     */
    deleteEndDeviceJS(payload: deleteEndDeviceJSUserPayload): Promise<any>;
    /**
     * It deletes the end device in the network server.
     * @param {Input-DeleteEndDeviceNS} payload - {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDeviceIdentifiers DeleteEndDeviceNS}
     * @returns {Output-EmptyPayload}
     * The response from the API.
     */
    deleteEndDeviceNS(payload: deleteEndDeviceNSUserPayload): Promise<any>;
    /**
     * It deletes the end device in the application server.
     * @param {Input-DeleteEndDeviceAS} payload - {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDeviceIdentifiers DeleteEndDeviceAS}
     * @returns {Output-EmptyPayload}
     * The response from the API.
     */
    deleteEndDeviceAS(payload: deleteEndDeviceASUserPayload): Promise<any>;
    /**
     * It returns DevEUIs that are available for use.
     * @returns {Output-IssueDevEUI}
     * The response from the API.
     */
    issueDevEUI(): Promise<issueDevEUI>;
    /**
     * It push or replace the downlink queue in the application server.
     * @param {Input-DownlinkQueue} payload - Input-DownlinkQueue
     */
    downlinkQueue(payload: downlinkQueueUserPayload): Promise<any>;
    /**
     * It subscribes downlink event topic.
     * @param {Input-SubscribeDownLinkEvent} payload - Input-SubscribeDownLinkEvent
     * @returns {Output-SubscribeDownLinkEvent} It returns client object and topic.
     */
    subscribeDownLinkEvent(payload: subscribeDownLinkEventPayload): Promise<any>;
    /**
     * It subscribes uplink event topic.
     * @param {Input-SubscribeUpLinkEvent} payload - Input-SubscribeUpLinkEvent
     * @returns {Output-SubscribeUpLinkEvent} It returns client object and topic.
     */
    subscribeUpLinkEvent(payload: subscribeUpLinkEventPayload): Promise<any>;
    /**
     * It unsubscribes event topic.
     * @param {mqtt_connection_object} payload - MQTT Connection Object
     */
    unsubscribeEvent(client: any, topic: string): Promise<any>;
}
