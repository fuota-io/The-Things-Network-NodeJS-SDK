// /**
//  * @typedef {Object} Input-CreateEndDeviceIS
//  * @property {string} join_eui - The join EUI of the end device.
//  * @property {string} dev_eui - The dev EUI of the end device.
//  * @property {string} device_id - The device ID of the end device.
//  * @property {string} brand_id - The brand ID of the end device.
//  * @property {string} model_id - The model ID of the end device.
//  * @property {string} hardware_version - The hardware version of the end device.
//  * @property {string} firmware_version - The firmware version of the end device.
//  * @property {string} band_id - The band ID of the end device.
//  * @property {string} network_server_address - The network server address of the end device.
//  * @property {string} application_server_address - The application server address of the end device.
//  * @property {string} join_server_address - The join server address of the end device.
//  * @property {string[]} field_mask - The field mask of the end device.
//  */

// /**
//  * @typedef {Object} Output-CreateEndDeviceIS
//  * @property {string} ids.application_ids.application_id - The ID of the application you want to use.
//  * @property {string} ids.device_id - The device ID of the end device.
//  * @property {string} ids.join_eui - The join EUI of the end device.
//  * @property {string} ids.dev_eui - The dev EUI of the end device.
//  * @property {string} created_at - The created at of the end device.
//  * @property {string} updated_at - The updated at of the end device.
//  * @property {string} version_ids.brand_id - The brand id of the end device.
//  * @property {string} version_ids.model_id - The model id of the end device.
//  * @property {string} version_ids.hardware_version - The hardware version of the end device.
//  * @property {string} version_ids.firmware_version - The firmware version of the end device.
//  * @property {string} version_ids.band_id - The band id of the end device.
//  * @property {string} network_server_address - The network server address of the end device.
//  * @property {string} application_server_address - The application server address of the end device.
//  * @property {string} join_server_address - The join server address of the end device.
//  * @property {number} lora_alliance_profile_ids.vendor_id - The vendor ID of the end device.
//  * @property {number} lora_alliance_profile_ids.vendor_profile_id - The vendor profile ID of the end device.
//  */

// /**
//  * @typedef {Object} Input-SetEndDeviceJS
//  * @property {string} device_id - The device ID of the end device.
//  * @property {string} join_eui - The join EUI of the end device.
//  * @property {string} dev_eui - The dev EUI of the end device.
//  * @property {string} network_server_address - The network server address of the end device.
//  * @property {string} application_server_address - The application server address of the end device.
//  * @property {string} app_key - The app key of the end device.
//  */

// /**
//  * @typedef {Object} Output-SetEndDeviceJS
//  * @property {ids} ids.application_ids.application_id - The ID of the application you want to use.
//  * @property {string} ids.device_id - The device ID of the end device.
//  * @property {string} ids.join_eui - The join EUI of the end device.
//  * @property {string} ids.dev_eui - The dev EUI of the end device.
//  * @property {string} created_at - The created at of the end device.
//  * @property {string} updated_at - The updated at of the end device.
//  * @property {string} network_server_address - The network server address of the end device.
//  * @property {string} application_server_address - The application server address of the end device.
//  * @property {string} root_keys.app_key.key - The app key of the end device.
//  */

// /**
//  * @typedef {Object} Input-SetEndDeviceNS
//  * @property {string} join_eui - The join EUI of the end device.
//  * @property {string} dev_eui - The dev EUI of the end device.
//  * @property {string} device_id - The device ID of the end device.
//  * @property {string} brand_id - The brand ID of the end device.
//  * @property {string} model_id - The model ID of the end device.
//  * @property {string} hardware_version - The hardware version of the end device.
//  * @property {string} firmware_version - The firmware version of the end device.
//  * @property {string} band_id - The band ID of the end device.
//  * @property {string} frequemcy_plan_id - The frequency plan ID of the end device.
//  * @property {boolean} supports_join - The supports join of the end device.
//  * @property {boolean} supports_class_c - The supports class c of the end device.
//  * @property {string} lorawan_version - The lorawan version of the end device.
//  * @property {string} lorawan_phy_version - The lorawan phy version of the end device.
//  * @property {string} class_c_timeout - The class c timeout of the end device.
//  * @property {string} supports_32_bit_f_cnt - The supports 32 bit f cnt of the end device.
//  */

// /**
//  * @typedef {Object} Output-SetEndDeviceNS
//  * @property {string} ids.join_eui - The join EUI of the end device.
//  * @property {string} ids.dev_eui - The dev EUI of the end device.
//  * @property {string} ids.device_id - The device ID of the end device.
//  * @property {string} ids.application_ids.application_id - The ID of the application you want to use.
//  * @property {string} created_at - The created at of the end device.
//  * @property {string} updated_at - The updated at of the end device.
//  * @property {string} version_ids.brand_id - The brand ID of the end device.
//  * @property {string} version_ids.model_id - The model ID of the end device.
//  * @property {string} version_ids.hardware_version - The hardware version of the end device.
//  * @property {string} version_ids.firmware_version - The firmware version of the end device.
//  * @property {string} version_ids.band_id - The band ID of the end device.
//  * @property {string} frequemcy_plan_id - The frequency plan ID of the end device.
//  * @property {boolean} supports_join - The supports join of the end device.
//  * @property {boolean} supports_class_c - The supports class c of the end device.
//  * @property {string} lorawan_version - The lorawan version of the end device.
//  * @property {string} lorawan_phy_version - The lorawan phy version of the end device.
//  * @property {string} mac_settings.class_c_timeout - The class c timeout of the end device.
//  * @property {string} mac_settings.supports_32_bit_f_cnt - The supports 32 bit f cnt of the end device.
//  */

// /**
//  * @typedef {Object} Input-SetEndDeviceAS
//  * @property {string} join_eui - The join EUI of the end device.
//  * @property {string} dev_eui - The dev EUI of the end device.
//  * @property {string} device_id - The device ID of the end device.
//  * @property {string} brand_id - The brand ID of the end device.
//  * @property {string} model_id - The model ID of the end device.
//  * @property {string} hardware_version - The hardware version of the end device.
//  * @property {string} firmware_version - The firmware version of the end device.
//  * @property {string} band_id - The band ID of the end device.
//  * @property {string} up_formatter - The up formatter of the end device.
//  * @property {string} up_formatter_parameter - The up formatter parameter of the end device.
//  * @property {string} down_formatter - The down formatter of the end device.
//  * @property {string} down_formatter_parameter - The down formatter parameter of the end device.
//  */

// /**
//  * @typedef {Object} Output-SetEndDeviceAS
//  * @property {string} ids.join_eui - The join EUI of the end device.
//  * @property {string} ids.dev_eui - The dev EUI of the end device.
//  * @property {string} ids.device_id - The device ID of the end device.
//  * @property {string} ids.application_ids.application_id - The ID of the application you want to use.
//  * @property {string} created_at - The created at of the end device.
//  * @property {string} updated_at - The updated at of the end device.
//  * @property {string} version_ids.brand_id - The brand ID of the end device.
//  * @property {string} version_ids.model_id - The model ID of the end device.
//  * @property {string} version_ids.hardware_version - The hardware version of the end device.
//  * @property {string} version_ids.firmware_version - The firmware version of the end device.
//  * @property {string} version_ids.band_id - The band ID of the end device.
//  * @property {string} formatters.up_formatter - The up formatter of the end device.
//  * @property {string} formatters.up_formatter_parameter - The up formatter parameter of the end device.
//  * @property {string} formatters.down_formatter - The down formatter of the end device.
//  * @property {string} formatters.down_formatter_parameter - The down formatter parameter of the end device.
//  */

// /**
//  * @typedef {Object} Input-GetEndDeviceInfo
//  * @property {string} device_id - The device ID of the end device.
//  */

// /**
//  * @typedef {Object} Output-GetEndDeviceInfo
//  * @property {string} ids.join_eui - The join EUI of the end device.
//  * @property {string} ids.dev_eui - The dev EUI of the end device.
//  * @property {string} ids.device_id - The device ID of the end device.
//  * @property {string} ids.application_ids.application_id - The ID of the application you want to use.
//  * @property {string} created_at - The created at of the end device.
//  * @property {string} updated_at - The updated at of the end device.
//  */

// /**
//  * @typedef {Object} Output-GetEndDeviceList
//  * @property {Object[]} end_devices - Lists the end devices of the application.
//  */

// /**
//  * @typedef {Object} Input-UpdateEndDevice
//  * @property {string} join_eui - The join EUI of the end device.
//  * @property {string} dev_eui - The dev EUI of the end device.
//  * @property {string} device_id - The device ID of the end device.
//  * @property {string} brand_id - The brand ID of the end device.
//  * @property {string} model_id - The model ID of the end device.
//  * @property {string} hardware_version - The hardware version of the end device.
//  * @property {string} firmware_version - The firmware version of the end device.
//  * @property {string} band_id - The band ID of the end device.
//  * @property {string} up_formatter - The up formatter of the end device.
//  * @property {string} up_formatter_parameter - The up formatter parameter of the end device.
//  * @property {string} down_formatter - The down formatter of the end device.
//  * @property {string} down_formatter_parameter - The down formatter parameter of the end device.
//  * @property {string} name - The name of the end device.
//  * @property {string} description - The description of the end device.
//  * @property {string} attributes - The attributes of the end device.
//  * @property {string} network_server_address - The network server address of the end device.
//  * @property {string} network_server_kek_label - The network server kek label of the end device.
//  * @property {string} application_server_address - The application server address of the end device.
//  * @property {string} application_server_kek_label - The application server kek label of the end device.
//  * @property {string} application_server_id - The application server ID of the end device.
//  * @property {string} join_server_address - The join server address of the end device.
//  * @property {string} location_latitude - The location latitude of the end device.
//  * @property {string} location_longitude - The location longitude of the end device.
//  * @property {string} location_altitude - The location altitude of the end device.
//  * @property {string} location_accuracy - The location accuracy of the end device.
//  * @property {string} supports_class_b - The supports class b of the end device.
//  * @property {string} supports_class_c - The supports class c of the end device.
//  * @property {string} lorawan_version - The lorawan version of the end device.
//  * @property {string} lorawan_phy_version - The lorawan phy version of the end device.
//  * @property {string} frequency_plan_id - The frequency plan ID of the end device.
//  * @property {string} resets_join_nonces - The resets join nonces of the end device
//  * @property {string} app_key - The app key of the end device.
//  * @property {string} net_id - The net ID of the end device.
//  * @property {string} status_count_periodicity - The status count periodicity of the end device.
//  * @property {string} status_time_periodicity - The status time periodicity of the end device.
//  * @property {string} static_data_rate_index - The static data rate index of the end device.
//  * @property {string} static_tx_power_index - The static tx power index of the end device.
//  * @property {string} static_nb_trans - The static nb transaction power index of the end device.
//  * @property {string} dynamic_margin - The dynamic margin of the end device.
//  * @property {string} disabled - The device is disabled
//  * @property {string} desired_max_duty_cycle - The desired max duty cycle of the end device.
//  * @property {string} supports_32_bit_f_cnt - The supports 32 bit f cnt of the end device.
//  * @property {string} desired_rx1_delay - The desired rx1 delay of the end device.
//  * @property {string} desired_rx1_data_rate_offset - The desired rx1 data rate offset of the end device.
//  * @property {string} desired_rx2_data_rate_index - The desired rx2 data rate index of the end device.
//  * @property {string} desired_rx2_frequency - The desired rx2 frequency of the end device.
//  * @property {string} class_c_timeout - The class c timeout of the end device.
//  * @property {string} factory_preset_frequencies - The factory preset frequencies of the end device.
//  * @property {string} claiming_value - The claiming value of the end device.
//  * @property {string} claiming_value_from - The claiming value from of the end device.
//  * @property {string} claiming_value_to - The claiming value to of the end device.
//  */

// /**
//  * @typedef {Object} Output-UpdateEndDevice
//  * @property {string} ids.join_eui - The join EUI of the end device.
//  * @property {string} ids.dev_eui - The dev EUI of the end device.
//  * @property {string} ids.device_id - The device ID of the end device.
//  * @property {string} ids.application_ids.application_id - The ID of the application you want to use.
//  * @property {string} created_at - The created at of the end device.
//  * @property {string} updated_at - The updated at of the end device.
//  * @property {string} name - The name of the end device.
//  * @property {string} description - The description of the end device.
//  * @property {string} attributes - The attributes of the end device.
//  * @property {string} version_ids.brand_id - The brand ID of the end device.
//  * @property {string} version_ids.model_id - The model ID of the end device.
//  * @property {string} version_ids.hardware_version - The hardware version of the end device.
//  * @property {string} version_ids.firmware_version - The firmware version of the end device.
//  * @property {string} version_ids.band_id - The band ID of the end device.
//  * @property {string} network_server_address - The network server address of the end device.
//  * @property {string} network_server_kek_label - The network server kek label of the end device.
//  * @property {string} application_server_address - The application server address of the end device.
//  * @property {string} application_server_kek_label - The application server kek label of the end device.
//  * @property {string} application_server_id - The application server ID of the end device.
//  * @property {string} join_server_address - The join server address of the end device.
//  * @property {string} locations.latitude - The location latitude of the end device.
//  * @property {string} locations.longitude - The location longitude of the end device.
//  * @property {string} locations.altitude - The location altitude of the end device.
//  * @property {string} locations.accuracy - The location accuracy of the end device.
//  * @property {string} supports_class_b - The supports class b of the end device.
//  * @property {string} supports_class_c - The supports class c of the end device.
//  * @property {string} lorawan_version - The lorawan version of the end device.
//  * @property {string} lorawan_phy_version - The lorawan phy version of the end device.
//  * @property {string} frequency_plan_id - The frequency plan ID of the end device.
//  * @property {string} resets_join_nonces - The resets join nonces of the end device
//  * @property {string} root_keys.app_key.key - The app key of the end device.
//  * @property {string} net_id - The net ID of the end device.
//  * @property {string} mac_settings.status_count_periodicity - The status count periodicity of the end device.
//  * @property {string} mac_settings.status_time_periodicity - The status time periodicity of the end device.
//  * @property {string} adr.static.data_rate_index - The static data rate index of the end device.
//  * @property {string} adr.static.tx_power_index - The static tx power index of the end device.
//  * @property {string} adr.static.nb_trans - The static nb transaction power index of the end device.
//  * @property {string} adr.dynamic.margin - The dynamic margin of the end device.
//  * @property {string} adr.disabled - The device is disabled
//  * @property {string} mac_settings.desired_max_duty_cycle - The desired max duty cycle of the end device.
//  * @property {string} mac_settings.supports_32_bit_f_cnt - The supports 32 bit f cnt of the end device.
//  * @property {string} mac_settings.desired_rx1_delay - The desired rx1 delay of the end device.
//  * @property {string} mac_settings.desired_rx1_data_rate_offset - The desired rx1 data rate offset of the end device.
//  * @property {string} mac_settings.desired_rx2_data_rate_index - The desired rx2 data rate index of the end device.
//  * @property {string} mac_settings.desired_rx2_frequency - The desired rx2 frequency of the end device.
//  * @property {string} mac_settings.class_c_timeout - The class c timeout of the end device.
//  * @property {string} mac_settings.factory_preset_frequencies - The factory preset frequencies of the end device.
//  * @property {string} claiming_value - The claiming value of the end device.
//  * @property {string} claiming_value_from - The claiming value from of the end device.
//  * @property {string} claiming_value_to - The claiming value to of the end device.
//  * @property {string} formatters.up_formatter - The up formatter of the end device.
//  * @property {string} formatters.down_formatter - The down formatter of the end device.
//  * @property {string} formatters.up_formatter_parameter - The up formatter parameter of the end device.
//  * @property {string} formatters.down_formatter_parameter - The down formatter parameter of the end device.
//  * @property {string} activated_at - The activated at of the end device.
//  * @property {string} last_seen_at - The last seen at of the end device.
//  */

// /**
//  * @typedef {Object} Input-DeleteEndDeviceIS
//  * @property {string} device_id - The device ID of the end device.
//  */

// /**
//  * @typedef {Object} Input-DeleteEndDeviceJS
//  * @property {string} device_id - The device ID of the end device.
//  */

// /**
//  * @typedef {Object} Input-DeleteEndDeviceNS
//  * @property {string} device_id - The device ID of the end device.
//  */

// /**
//  * @typedef {Object} Input-DeleteEndDeviceAS
//  * @property {string} device_id - The device ID of the end device.
//  */

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
 * @property {callBackFunction} callback_subscribe_disconnect - The callback subscribe disconnect of the downlink queue.
 * @property {callBackFunction} callback_subscribe_error - The callback subscribe error of the downlink queue.
 */

/**
 * @typedef {Object} Input-SubscribeUpLinkEvent
 * @property {string} device_id - The device ID of the end device.
 * @property {string} host - The host of the downlink queue.
 * @property {number} port - The port of the downlink queue.
 * @property {string} username - The username of the downlink queue.
 * @property {callBackFunction} callback_downlink_event - The callback downlink event of the downlink queue.
 * @property {callBackFunction} callback_subscribe_disconnect - The callback subscribe disconnect of the downlink queue.
 * @property {callBackFunction} callback_subscribe_error - The callback subscribe error of the downlink queue.
 */
