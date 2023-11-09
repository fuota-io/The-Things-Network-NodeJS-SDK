/**
 * @typedef {Object} Input-GetEndDeviceList
 * @prop {string} [order] Order the results by this field path (must be present in the field mask). Default ordering is by ID. Prepend with a minus (-) to reverse the order. (e.g '-created_at')
 * @prop {number} [limit] Limit the number of results per page. (less than 1000)
 * @prop {number} [page] Page number for pagination. 0 is interpreted as 1.
 */
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
 * @prop {string} device_id - The device ID of the end device.
 * @prop {string | byteArray} payload - The payload of the downlink queue.
 * @prop {string} payload_type - The payload type of the downlink queue.
 * @prop {number} port_no - The port number of the downlink queue.
 * @prop {string} request_type - The request type of the downlink queue.
 * @prop {boolean} confirmed_downlink - The confirmed downlink of the downlink queue.
 */
/**
 * @typedef {Object} Input-SubscribeDownLinkEvent
 * @prop {string} device_id - The device ID of the end device.
 * @prop {string} down_type - The down type of the downlink queue.
 * @prop {string} host - The host of the downlink queue.
 * @prop {number} port - The port of the downlink queue.
 * @prop {string} username - The username of the downlink queue.
 * @prop {callBackFunction} callback_downlink_event - The callback downlink event of the downlink queue.
 */
/**
 * @typedef {Object} Output-SubscribeDownLinkEvent
 * @prop {mqttClient} client - The mqtt client of the downlink event.
 * @prop {string} topic - The topic of the downlink event.
 */
/**
 * @typedef {Object} Input-SubscribeUpLinkEvent
 * @prop {string} device_id - The device ID of the end device.
 * @prop {string} host - The host of the uplink queue.
 * @prop {number} port - The port of the uplink queue.
 * @prop {string} username - The username of the uplink queue.
 * @prop {callBackFunction} callback_uplink_event - The callback uplink event of the uplink queue.
 */
/**
 * @typedef {Object} Output-SubscribeUpLinkEvent
 * @prop {mqttClient} client - The mqtt client of the uplink event.
 * @prop {string} topic - The topic of the uplink event.
 */
