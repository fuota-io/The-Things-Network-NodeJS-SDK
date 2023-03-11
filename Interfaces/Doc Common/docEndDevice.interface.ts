/**
 * @typedef {Object} PL-CreateEndDevice
 * @property {string} application_id - The ID of the application you want to use.
 * @property {string} join_eui - The join EUI of the end device.
 * @property {string} dev_eui - The dev EUI of the end device.
 * @property {string} device_id - The device ID of the end device.
 * @property {string} brand_id - The brand ID of the end device.
 * @property {string} model_id - The model ID of the end device.
 * @property {string} hardware_version - The hardware version of the end device.
 * @property {string} firmware_version - The firmware version of the end device.
 * @property {string} band_id - The band ID of the end device.
 * @property {string} network_server_address - The network server address of the end device.
 * @property {string} application_server_address - The application server address of the end device.
 * @property {string} join_server_address - The join server address of the end device.
 * @property {string[]} field_mask - The field mask of the end device.
 */

/**
 * @typedef {Object} RESP-CreateEndDevice
 * @property {string} ids.application_ids.application_id - The ID of the application you want to use.
 * @property {string} ids.device_id - The device ID of the end device.
 * @property {string} ids.join_eui - The join EUI of the end device.
 * @property {string} ids.dev_eui - The dev EUI of the end device.
 * @property {string} created_at - The created at of the end device.
 * @property {string} updated_at - The updated at of the end device.
 * @property {string} version_ids.brand_id - The brand id of the end device.
 * @property {string} version_ids.model_id - The model id of the end device.
 * @property {string} version_ids.hardware_version - The hardware version of the end device.
 * @property {string} version_ids.firmware_version - The firmware version of the end device.
 * @property {string} version_ids.band_id - The band id of the end device.
 * @property {string} network_server_address - The network server address of the end device.
 * @property {string} application_server_address - The application server address of the end device.
 * @property {string} join_server_address - The join server address of the end device.
 * @property {number} lora_alliance_profile_ids.vendor_id - The vendor ID of the end device.
 * @property {number} lora_alliance_profile_ids.vendor_profile_id - The vendor profile ID of the end device.
 *
 */

/**
 * @typedef {Object} PL-SetEndDeviceJS
 * @property {string} application_id - The ID of the application you want to use.
 * @property {string} device_id - The device ID of the end device.
 * @property {string} join_eui - The join EUI of the end device.
 * @property {string} dev_eui - The dev EUI of the end device.
 * @property {string} network_server_address - The network server address of the end device.
 * @property {string} application_server_address - The application server address of the end device.
 * @property {string} app_key - The app key of the end device.
 */

/**
 * @typedef {Object} RESP-SetEndDeviceJS
 * @property {ids} ids - The ID of the application you want to use.
 * @property {string} created_at - The created at of the end device.
 * @property {string} updated_at - The updated at of the end device.
 * @property {string} network_server_address - The network server address of the end device.
 * @property {string} application_server_address - The application server address of the end device.
 * @property {string} root_keys.app_key.key - The app key of the end device.
 */

/**
 * @typedef {Object} PL-SetEndDeviceNSUser
 * @property {string} join_eui - The join EUI of the end device.
 * @property {string} dev_eui - The dev EUI of the end device.
 * @property {string} device_id - The device ID of the end device.
 * @property {string} brand_id - The brand ID of the end device.
 * @property {string} model_id - The model ID of the end device.
 * @property {string} hardware_version - The hardware version of the end device.
 * @property {string} firmware_version - The firmware version of the end device.
 * @property {string} band_id - The band ID of the end device.
 * @property {string} frequemcy_plan_id - The frequency plan ID of the end device.
 * @property {boolean} supports_join - The supports join of the end device.
 * @property {boolean} supports_class_c - The supports class c of the end device.
 * @property {string} lorawan_version - The lorawan version of the end device.
 * @property {string} lorawan_phy_version - The lorawan phy version of the end device.
 * @property {string} class_c_timeout - The class c timeout of the end device.
 * @property {string} supports_32_bit_f_cnt - The supports 32 bit f cnt of the end device.
 */

/**
 * @typedef {Object} RESP-SetEndDeviceNSUser
 * @property {string} ids.join_eui - The join EUI of the end device.
 * @property {string} ids.dev_eui - The dev EUI of the end device.
 * @property {string} ids.device_id - The device ID of the end device.
 * @property {string} ids.application_ids.application_id - The ID of the application you want to use.
 * @property {string} created_at - The created at of the end device.
 * @property {string} updated_at - The updated at of the end device.
 * @property {string} version_ids.brand_id - The brand ID of the end device.
 * @property {string} version_ids.model_id - The model ID of the end device.
 * @property {string} version_ids.hardware_version - The hardware version of the end device.
 * @property {string} version_ids.firmware_version - The firmware version of the end device.
 * @property {string} version_ids.band_id - The band ID of the end device.
 * @property {string} frequemcy_plan_id - The frequency plan ID of the end device.
 * @property {boolean} supports_join - The supports join of the end device.
 * @property {boolean} supports_class_c - The supports class c of the end device.
 * @property {string} lorawan_version - The lorawan version of the end device.
 * @property {string} lorawan_phy_version - The lorawan phy version of the end device.
 * @property {string} mac_settings.class_c_timeout - The class c timeout of the end device.
 * @property {string} mac_settings.supports_32_bit_f_cnt - The supports 32 bit f cnt of the end device.
 */
