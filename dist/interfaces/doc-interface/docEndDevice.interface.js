"use strict";
// /**
//  * @typedef {Object} Input-CreateEndDeviceIS
//  * @prop {string} join_eui - The join EUI of the end device.
//  * @prop {string} dev_eui - The dev EUI of the end device.
//  * @prop {string} device_id - The device ID of the end device.
//  * @prop {string} brand_id - The brand ID of the end device.
//  * @prop {string} model_id - The model ID of the end device.
//  * @prop {string} hardware_version - The hardware version of the end device.
//  * @prop {string} firmware_version - The firmware version of the end device.
//  * @prop {string} band_id - The band ID of the end device.
//  * @prop {string} network_server_address - The network server address of the end device.
//  * @prop {string} application_server_address - The application server address of the end device.
//  * @prop {string} join_server_address - The join server address of the end device.
//  * @prop {string[]} field_mask - The field mask of the end device.
//  */
// /**
//  * @typedef {Object} Output-CreateEndDeviceIS
//  * @prop {string} ids.application_ids.application_id - The ID of the application you want to use.
//  * @prop {string} ids.device_id - The device ID of the end device.
//  * @prop {string} ids.join_eui - The join EUI of the end device.
//  * @prop {string} ids.dev_eui - The dev EUI of the end device.
//  * @prop {string} created_at - The created at of the end device.
//  * @prop {string} updated_at - The updated at of the end device.
//  * @prop {string} version_ids.brand_id - The brand id of the end device.
//  * @prop {string} version_ids.model_id - The model id of the end device.
//  * @prop {string} version_ids.hardware_version - The hardware version of the end device.
//  * @prop {string} version_ids.firmware_version - The firmware version of the end device.
//  * @prop {string} version_ids.band_id - The band id of the end device.
//  * @prop {string} network_server_address - The network server address of the end device.
//  * @prop {string} application_server_address - The application server address of the end device.
//  * @prop {string} join_server_address - The join server address of the end device.
//  * @prop {number} lora_alliance_profile_ids.vendor_id - The vendor ID of the end device.
//  * @prop {number} lora_alliance_profile_ids.vendor_profile_id - The vendor profile ID of the end device.
//  */
// /**
//  * @typedef {Object} Input-SetEndDeviceJS
//  * @prop {string} device_id - The device ID of the end device.
//  * @prop {string} join_eui - The join EUI of the end device.
//  * @prop {string} dev_eui - The dev EUI of the end device.
//  * @prop {string} network_server_address - The network server address of the end device.
//  * @prop {string} application_server_address - The application server address of the end device.
//  * @prop {string} app_key - The app key of the end device.
//  */
// /**
//  * @typedef {Object} Output-SetEndDeviceJS
//  * @prop {ids} ids.application_ids.application_id - The ID of the application you want to use.
//  * @prop {string} ids.device_id - The device ID of the end device.
//  * @prop {string} ids.join_eui - The join EUI of the end device.
//  * @prop {string} ids.dev_eui - The dev EUI of the end device.
//  * @prop {string} created_at - The created at of the end device.
//  * @prop {string} updated_at - The updated at of the end device.
//  * @prop {string} network_server_address - The network server address of the end device.
//  * @prop {string} application_server_address - The application server address of the end device.
//  * @prop {string} root_keys.app_key.key - The app key of the end device.
//  */
// /**
//  * @typedef {Object} Input-SetEndDeviceNS
//  * @prop {string} join_eui - The join EUI of the end device.
//  * @prop {string} dev_eui - The dev EUI of the end device.
//  * @prop {string} device_id - The device ID of the end device.
//  * @prop {string} brand_id - The brand ID of the end device.
//  * @prop {string} model_id - The model ID of the end device.
//  * @prop {string} hardware_version - The hardware version of the end device.
//  * @prop {string} firmware_version - The firmware version of the end device.
//  * @prop {string} band_id - The band ID of the end device.
//  * @prop {string} frequemcy_plan_id - The frequency plan ID of the end device.
//  * @prop {boolean} supports_join - The supports join of the end device.
//  * @prop {boolean} supports_class_c - The supports class c of the end device.
//  * @prop {string} lorawan_version - The lorawan version of the end device.
//  * @prop {string} lorawan_phy_version - The lorawan phy version of the end device.
//  * @prop {string} class_c_timeout - The class c timeout of the end device.
//  * @prop {string} supports_32_bit_f_cnt - The supports 32 bit f cnt of the end device.
//  */
// /**
//  * @typedef {Object} Output-SetEndDeviceNS
//  * @prop {string} ids.join_eui - The join EUI of the end device.
//  * @prop {string} ids.dev_eui - The dev EUI of the end device.
//  * @prop {string} ids.device_id - The device ID of the end device.
//  * @prop {string} ids.application_ids.application_id - The ID of the application you want to use.
//  * @prop {string} created_at - The created at of the end device.
//  * @prop {string} updated_at - The updated at of the end device.
//  * @prop {string} version_ids.brand_id - The brand ID of the end device.
//  * @prop {string} version_ids.model_id - The model ID of the end device.
//  * @prop {string} version_ids.hardware_version - The hardware version of the end device.
//  * @prop {string} version_ids.firmware_version - The firmware version of the end device.
//  * @prop {string} version_ids.band_id - The band ID of the end device.
//  * @prop {string} frequemcy_plan_id - The frequency plan ID of the end device.
//  * @prop {boolean} supports_join - The supports join of the end device.
//  * @prop {boolean} supports_class_c - The supports class c of the end device.
//  * @prop {string} lorawan_version - The lorawan version of the end device.
//  * @prop {string} lorawan_phy_version - The lorawan phy version of the end device.
//  * @prop {string} mac_settings.class_c_timeout - The class c timeout of the end device.
//  * @prop {string} mac_settings.supports_32_bit_f_cnt - The supports 32 bit f cnt of the end device.
//  */
// /**
//  * @typedef {Object} Input-SetEndDeviceAS
//  * @prop {string} join_eui - The join EUI of the end device.
//  * @prop {string} dev_eui - The dev EUI of the end device.
//  * @prop {string} device_id - The device ID of the end device.
//  * @prop {string} brand_id - The brand ID of the end device.
//  * @prop {string} model_id - The model ID of the end device.
//  * @prop {string} hardware_version - The hardware version of the end device.
//  * @prop {string} firmware_version - The firmware version of the end device.
//  * @prop {string} band_id - The band ID of the end device.
//  * @prop {string} up_formatter - The up formatter of the end device.
//  * @prop {string} up_formatter_parameter - The up formatter parameter of the end device.
//  * @prop {string} down_formatter - The down formatter of the end device.
//  * @prop {string} down_formatter_parameter - The down formatter parameter of the end device.
//  */
// /**
//  * @typedef {Object} Output-SetEndDeviceAS
//  * @prop {string} ids.join_eui - The join EUI of the end device.
//  * @prop {string} ids.dev_eui - The dev EUI of the end device.
//  * @prop {string} ids.device_id - The device ID of the end device.
//  * @prop {string} ids.application_ids.application_id - The ID of the application you want to use.
//  * @prop {string} created_at - The created at of the end device.
//  * @prop {string} updated_at - The updated at of the end device.
//  * @prop {string} version_ids.brand_id - The brand ID of the end device.
//  * @prop {string} version_ids.model_id - The model ID of the end device.
//  * @prop {string} version_ids.hardware_version - The hardware version of the end device.
//  * @prop {string} version_ids.firmware_version - The firmware version of the end device.
//  * @prop {string} version_ids.band_id - The band ID of the end device.
//  * @prop {string} formatters.up_formatter - The up formatter of the end device.
//  * @prop {string} formatters.up_formatter_parameter - The up formatter parameter of the end device.
//  * @prop {string} formatters.down_formatter - The down formatter of the end device.
//  * @prop {string} formatters.down_formatter_parameter - The down formatter parameter of the end device.
//  */
// /**
//  * @typedef {Object} Input-GetEndDeviceInfo
//  * @prop {string} device_id - The device ID of the end device.
//  */
// /**
//  * @typedef {Object} Output-GetEndDeviceInfo
//  * @prop {string} ids.join_eui - The join EUI of the end device.
//  * @prop {string} ids.dev_eui - The dev EUI of the end device.
//  * @prop {string} ids.device_id - The device ID of the end device.
//  * @prop {string} ids.application_ids.application_id - The ID of the application you want to use.
//  * @prop {string} created_at - The created at of the end device.
//  * @prop {string} updated_at - The updated at of the end device.
//  */
// /**
//  * @typedef {Object} Output-GetEndDeviceList
//  * @prop {Object[]} end_devices - Lists the end devices of the application.
//  */
// /**
//  * @typedef {Object} Input-UpdateEndDevice
//  * @prop {string} join_eui - The join EUI of the end device.
//  * @prop {string} dev_eui - The dev EUI of the end device.
//  * @prop {string} device_id - The device ID of the end device.
//  * @prop {string} brand_id - The brand ID of the end device.
//  * @prop {string} model_id - The model ID of the end device.
//  * @prop {string} hardware_version - The hardware version of the end device.
//  * @prop {string} firmware_version - The firmware version of the end device.
//  * @prop {string} band_id - The band ID of the end device.
//  * @prop {string} up_formatter - The up formatter of the end device.
//  * @prop {string} up_formatter_parameter - The up formatter parameter of the end device.
//  * @prop {string} down_formatter - The down formatter of the end device.
//  * @prop {string} down_formatter_parameter - The down formatter parameter of the end device.
//  * @prop {string} name - The name of the end device.
//  * @prop {string} description - The description of the end device.
//  * @prop {string} attributes - The attributes of the end device.
//  * @prop {string} network_server_address - The network server address of the end device.
//  * @prop {string} network_server_kek_label - The network server kek label of the end device.
//  * @prop {string} application_server_address - The application server address of the end device.
//  * @prop {string} application_server_kek_label - The application server kek label of the end device.
//  * @prop {string} application_server_id - The application server ID of the end device.
//  * @prop {string} join_server_address - The join server address of the end device.
//  * @prop {string} location_latitude - The location latitude of the end device.
//  * @prop {string} location_longitude - The location longitude of the end device.
//  * @prop {string} location_altitude - The location altitude of the end device.
//  * @prop {string} location_accuracy - The location accuracy of the end device.
//  * @prop {string} supports_class_b - The supports class b of the end device.
//  * @prop {string} supports_class_c - The supports class c of the end device.
//  * @prop {string} lorawan_version - The lorawan version of the end device.
//  * @prop {string} lorawan_phy_version - The lorawan phy version of the end device.
//  * @prop {string} frequency_plan_id - The frequency plan ID of the end device.
//  * @prop {string} resets_join_nonces - The resets join nonces of the end device
//  * @prop {string} app_key - The app key of the end device.
//  * @prop {string} net_id - The net ID of the end device.
//  * @prop {string} status_count_periodicity - The status count periodicity of the end device.
//  * @prop {string} status_time_periodicity - The status time periodicity of the end device.
//  * @prop {string} static_data_rate_index - The static data rate index of the end device.
//  * @prop {string} static_tx_power_index - The static tx power index of the end device.
//  * @prop {string} static_nb_trans - The static nb transaction power index of the end device.
//  * @prop {string} dynamic_margin - The dynamic margin of the end device.
//  * @prop {string} disabled - The device is disabled
//  * @prop {string} desired_max_duty_cycle - The desired max duty cycle of the end device.
//  * @prop {string} supports_32_bit_f_cnt - The supports 32 bit f cnt of the end device.
//  * @prop {string} desired_rx1_delay - The desired rx1 delay of the end device.
//  * @prop {string} desired_rx1_data_rate_offset - The desired rx1 data rate offset of the end device.
//  * @prop {string} desired_rx2_data_rate_index - The desired rx2 data rate index of the end device.
//  * @prop {string} desired_rx2_frequency - The desired rx2 frequency of the end device.
//  * @prop {string} class_c_timeout - The class c timeout of the end device.
//  * @prop {string} factory_preset_frequencies - The factory preset frequencies of the end device.
//  * @prop {string} claiming_value - The claiming value of the end device.
//  * @prop {string} claiming_value_from - The claiming value from of the end device.
//  * @prop {string} claiming_value_to - The claiming value to of the end device.
//  */
// /**
//  * @typedef {Object} Output-UpdateEndDevice
//  * @prop {string} ids.join_eui - The join EUI of the end device.
//  * @prop {string} ids.dev_eui - The dev EUI of the end device.
//  * @prop {string} ids.device_id - The device ID of the end device.
//  * @prop {string} ids.application_ids.application_id - The ID of the application you want to use.
//  * @prop {string} created_at - The created at of the end device.
//  * @prop {string} updated_at - The updated at of the end device.
//  * @prop {string} name - The name of the end device.
//  * @prop {string} description - The description of the end device.
//  * @prop {string} attributes - The attributes of the end device.
//  * @prop {string} version_ids.brand_id - The brand ID of the end device.
//  * @prop {string} version_ids.model_id - The model ID of the end device.
//  * @prop {string} version_ids.hardware_version - The hardware version of the end device.
//  * @prop {string} version_ids.firmware_version - The firmware version of the end device.
//  * @prop {string} version_ids.band_id - The band ID of the end device.
//  * @prop {string} network_server_address - The network server address of the end device.
//  * @prop {string} network_server_kek_label - The network server kek label of the end device.
//  * @prop {string} application_server_address - The application server address of the end device.
//  * @prop {string} application_server_kek_label - The application server kek label of the end device.
//  * @prop {string} application_server_id - The application server ID of the end device.
//  * @prop {string} join_server_address - The join server address of the end device.
//  * @prop {string} locations.latitude - The location latitude of the end device.
//  * @prop {string} locations.longitude - The location longitude of the end device.
//  * @prop {string} locations.altitude - The location altitude of the end device.
//  * @prop {string} locations.accuracy - The location accuracy of the end device.
//  * @prop {string} supports_class_b - The supports class b of the end device.
//  * @prop {string} supports_class_c - The supports class c of the end device.
//  * @prop {string} lorawan_version - The lorawan version of the end device.
//  * @prop {string} lorawan_phy_version - The lorawan phy version of the end device.
//  * @prop {string} frequency_plan_id - The frequency plan ID of the end device.
//  * @prop {string} resets_join_nonces - The resets join nonces of the end device
//  * @prop {string} root_keys.app_key.key - The app key of the end device.
//  * @prop {string} net_id - The net ID of the end device.
//  * @prop {string} mac_settings.status_count_periodicity - The status count periodicity of the end device.
//  * @prop {string} mac_settings.status_time_periodicity - The status time periodicity of the end device.
//  * @prop {string} adr.static.data_rate_index - The static data rate index of the end device.
//  * @prop {string} adr.static.tx_power_index - The static tx power index of the end device.
//  * @prop {string} adr.static.nb_trans - The static nb transaction power index of the end device.
//  * @prop {string} adr.dynamic.margin - The dynamic margin of the end device.
//  * @prop {string} adr.disabled - The device is disabled
//  * @prop {string} mac_settings.desired_max_duty_cycle - The desired max duty cycle of the end device.
//  * @prop {string} mac_settings.supports_32_bit_f_cnt - The supports 32 bit f cnt of the end device.
//  * @prop {string} mac_settings.desired_rx1_delay - The desired rx1 delay of the end device.
//  * @prop {string} mac_settings.desired_rx1_data_rate_offset - The desired rx1 data rate offset of the end device.
//  * @prop {string} mac_settings.desired_rx2_data_rate_index - The desired rx2 data rate index of the end device.
//  * @prop {string} mac_settings.desired_rx2_frequency - The desired rx2 frequency of the end device.
//  * @prop {string} mac_settings.class_c_timeout - The class c timeout of the end device.
//  * @prop {string} mac_settings.factory_preset_frequencies - The factory preset frequencies of the end device.
//  * @prop {string} claiming_value - The claiming value of the end device.
//  * @prop {string} claiming_value_from - The claiming value from of the end device.
//  * @prop {string} claiming_value_to - The claiming value to of the end device.
//  * @prop {string} formatters.up_formatter - The up formatter of the end device.
//  * @prop {string} formatters.down_formatter - The down formatter of the end device.
//  * @prop {string} formatters.up_formatter_parameter - The up formatter parameter of the end device.
//  * @prop {string} formatters.down_formatter_parameter - The down formatter parameter of the end device.
//  * @prop {string} activated_at - The activated at of the end device.
//  * @prop {string} last_seen_at - The last seen at of the end device.
//  */
// /**
//  * @typedef {Object} Input-DeleteEndDeviceIS
//  * @prop {string} device_id - The device ID of the end device.
//  */
// /**
//  * @typedef {Object} Input-DeleteEndDeviceJS
//  * @prop {string} device_id - The device ID of the end device.
//  */
// /**
//  * @typedef {Object} Input-DeleteEndDeviceNS
//  * @prop {string} device_id - The device ID of the end device.
//  */
// /**
//  * @typedef {Object} Input-DeleteEndDeviceAS
//  * @prop {string} device_id - The device ID of the end device.
//  */
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
