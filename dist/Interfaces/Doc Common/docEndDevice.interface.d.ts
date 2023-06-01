/**
 * @typedef {Object} Output-EmptyPayload
 * @prop {Object} Object Empty Object
 */
/**
 * @typedef {Object} Output-IssueDevEUI
 * @prop {string} dev_eui - The dev eui of the end device.
 */
/**
 * @typedef {Object} Input-DownlinkQueue
 * @property {string} device_id - The device ID of the end device.
 * @property {string | byteArray} payload - The payload of the downlink queue.
 * @property {string} payload_type - The payload type of the downlink queue.
 * @property {number} port_no - The port number of the downlink queue.
 * @property {string} request_type - The request type of the downlink queue.
 * @property {boolean} confirmed_downlink - The confirmed downlink of the downlink queue.
 *
 */
/**
 * @typedef {Object} Input-SubscribeDownLinkEvent
 * @property {string} device_id - The device ID of the end device.
 * @property {string} down_type - The down type of the downlink queue.
 * @property {string} host - The host of the downlink queue.
 * @property {number} port - The port of the downlink queue.
 * @property {string} username - The username of the downlink queue.
 * @property {callBackFunction} callback_downlink_event - The callback downlink event of the downlink queue.
//  * @property {callBackFunction} callback_subscribe_disconnect - The callback subscribe disconnect of the downlink queue.
//  * @property {callBackFunction} callback_subscribe_error - The callback subscribe error of the downlink queue.
 */
/**
 * @typedef {Object} Input-SubscribeUpLinkEvent
 * @property {string} device_id - The device ID of the end device.
 * @property {string} host - The host of the downlink queue.
 * @property {number} port - The port of the downlink queue.
 * @property {string} username - The username of the downlink queue.
 * @property {callBackFunction} callback_downlink_event - The callback downlink event of the downlink queue.
//  * @property {callBackFunction} callback_subscribe_disconnect - The callback subscribe disconnect of the downlink queue.
//  * @property {callBackFunction} callback_subscribe_error - The callback subscribe error of the downlink queue.
 */
