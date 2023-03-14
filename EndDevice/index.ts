import { APICall, getAllKeys, SetConfig } from '../index';
import { Config } from '../Interfaces/Config/config.interface';
import {
  CreateEndDeviceIS,
  SetEndDeviceJS,
  SetEndDeviceJSPayload,
  SetEndDeviceJSUserPayload,
  CreateEndDeviceISPayload,
  SetEndDeviceNSUserPayload,
  SetEndDeviceNS,
  SetEndDeviceNSPayload,
  SetEndDeviceASUserPayload,
  SetEndDeviceAS,
  SetEndDeviceASPayload,
  GetEndDeviceInfoUserPayload,
  GetEndDeviceInfo,
  GetEndDeviceList,
  UpdateEndDevicePayload,
  deleteEndDeviceISUserPayload,
  deleteEndDeviceASUserPayload,
  deleteEndDeviceNSUserPayload,
  deleteEndDeviceJSUserPayload,
  UpdateEndDevice,
  CreateEndDeviceISUserPayload,
} from '../Interfaces/Device/device.interface';

/**
 * @classdesc The EndDevice class is used to create an end device for the application.
 * @extends SetConfig
 */
export class EndDevice extends SetConfig {
  private APPLICATION_ID: string;
  private API: APICall = new APICall();

  /**
   * The constructor function is a special function that is called when an object is created from a
   * class.
   * @param {string} applicationID - The ID of the application you want to use.
   * @param {Config} config - Config
   */
  constructor(applicationID: string, config: Config) {
    super(config);
    this.APPLICATION_ID = applicationID;
  }

  /**
   * It creates an end device for the application.
   * @type {import("../dist/Interfaces/Doc Common/docEndDevice.interface").PL-CreateEndDeviceIS}
   * @param {PL-CreateEndDeviceIS} payload - PL-CreateEndDeviceIS
   * @returns {import("../dist/Interfaces/Doc Common/docEndDevice.interface").RESP-CreateEndDeviceIS}
   * The response from the API.
   */
  createEndDeviceIS(payload: CreateEndDeviceISUserPayload): Promise<CreateEndDeviceIS> {
    const receievePayload = {
      'version_ids.brand_id': payload.end_device.version_ids?.brand_id,
      'version_ids.model_id': payload.end_device.version_ids?.model_id,
      'version_ids.hardware_version': payload.end_device.version_ids?.hardware_version,
      'version_ids.firmware_version': payload.end_device.version_ids?.firmware_version,
      'version_ids.band_id': payload.end_device.version_ids?.band_id,
      network_server_address: payload.end_device.network_server_address,
      application_server_address: payload.end_device.application_server_address,
      join_server_address: payload.end_device.join_server_address,
    };

    // const extractPayload = JSON.parse(JSON.stringify(receievePayload));
    // const paths = Object.keys(extractPayload);

    const paths = getAllKeys(payload);
    console.log('paths: ', paths);

    const apiPayload: CreateEndDeviceISPayload = {
      end_device: {
        ids: {
          join_eui: payload.end_device.ids.join_eui,
          dev_eui: payload.end_device.ids.dev_eui,
          device_id: payload.end_device.ids.device_id,
          application_ids: {
            application_id: this.APPLICATION_ID,
          },
        },
        version_ids: {
          brand_id: payload.end_device.version_ids?.brand_id,
          model_id: payload.end_device.version_ids?.model_id,
          hardware_version: payload.end_device.version_ids?.hardware_version,
          firmware_version: payload.end_device.version_ids?.firmware_version,
          band_id: payload.end_device.version_ids?.band_id,
        },
        network_server_address: payload.end_device.network_server_address,
        application_server_address: payload.end_device.application_server_address,
        join_server_address: payload.end_device.join_server_address,
      },
      field_mask: {
        paths: paths,
      },
    };
    return this.API.send({
      method: 'POST',
      url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/devices`,
      headers: this.headers,
      data: apiPayload,
    });
  }

  /**
   * It sets an end device for the application in the Join Server.
   * @type {import("../dist/Interfaces/Doc Common/docEndDevice.interface").PL-SetEndDeviceJS}
   * @param {PL-SetEndDeviceJS} payload - PL-SetEndDeviceJS
   * @returns {import("../dist/Interfaces/Doc Common/docEndDevice.interface").RESP-SetEndDeviceJS}
   * The response from the API.
   */
  setEndDeviceJS(payload: SetEndDeviceJSUserPayload): Promise<SetEndDeviceJS> {
    const receievePayload = {
      'ids.join_eui': payload.end_device.ids.join_eui,
      'ids.dev_eui': payload.end_device.ids.dev_eui,
      'ids.device_id': payload.end_device.ids.device_id,
      'ids.application_ids.application_id': payload.end_device.ids.application_ids.application_id,
      'root_keys.app_key.key': payload.end_device.root_keys.app_key.key,
      network_server_address: payload.end_device.network_server_address,
      application_server_address: payload.end_device.application_server_address,
    };

    const extractPayload = JSON.parse(JSON.stringify(receievePayload));
    const paths = Object.keys(extractPayload);

    const apiPayload: SetEndDeviceJSPayload = {
      end_device: {
        ids: {
          join_eui: payload.end_device.ids.join_eui,
          dev_eui: payload.end_device.ids.dev_eui,
          device_id: payload.end_device.ids.device_id,
          application_ids: {
            application_id: this.APPLICATION_ID,
          },
        },
        network_server_address: payload.end_device.network_server_address,
        application_server_address: payload.end_device.application_server_address,
        root_keys: {
          app_key: {
            key: payload.end_device.root_keys.app_key.key,
          },
        },
      },
      field_mask: {
        paths: paths,
      },
    };
    return this.API.send({
      method: 'PUT',
      url: `${this.JOIN_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.end_device.ids.device_id}`,
      headers: this.headers,
      data: apiPayload,
    });
  }

  /**
   * It sets an end device for the application in the Network Server.
   * @type {import("../dist/Interfaces/Doc Common/docEndDevice.interface").PL-SetEndDeviceNS}
   * @param {PL-SetEndDeviceNS} payload - PL-SetEndDeviceNS
   * @returns {import("../dist/Interfaces/Doc Common/docEndDevice.interface").RESP-SetEndDeviceNS}
   * The response from the API.
   */
  setEndDeviceNS(payload: SetEndDeviceNSUserPayload): Promise<SetEndDeviceNS> {
    const receievePayload = {
      'ids.application_ids.application_id': this.APPLICATION_ID,
      'ids.join_eui': payload.end_device.ids.join_eui,
      'ids.dev_eui': payload.end_device.ids.dev_eui,
      'ids.device_id': payload.end_device.ids.device_id,
      'version_ids.brand_id': payload.end_device.version_ids?.brand_id,
      'version_ids.model_id': payload.end_device.version_ids?.model_id,
      'version_ids.hardware_version': payload.end_device.version_ids?.hardware_version,
      'version_ids.firmware_version': payload.end_device.version_ids?.firmware_version,
      'version_ids.band_id': payload.end_device.version_ids?.band_id,
      frequency_plan_id: payload.end_device.frequency_plan_id,
      supports_join: payload.end_device.supports_join,
      supports_class_c: payload.end_device.supports_class_c,
      lorawan_version: payload.end_device.lorawan_version,
      lorawan_phy_version: payload.end_device.lorawan_phy_version,
      'mac_settings.class_c_timeout': payload.end_device.mac_settings?.class_c_timeout,
      'mac_settings.supports_32_bit_f_cnt': payload.end_device.mac_settings?.supports_32_bit_f_cnt,
    };

    const extractPayload = JSON.parse(JSON.stringify(receievePayload));
    const paths = Object.keys(extractPayload);

    const apiPayload: SetEndDeviceNSPayload = {
      end_device: {
        version_ids: {
          brand_id: payload.end_device.version_ids?.brand_id,
          model_id: payload.end_device.version_ids?.model_id,
          hardware_version: payload.end_device.version_ids?.hardware_version,
          firmware_version: payload.end_device.version_ids?.firmware_version,
          band_id: payload.end_device.version_ids?.band_id,
        },
        frequency_plan_id: payload.end_device.frequency_plan_id,
        supports_join: payload.end_device.supports_join,
        supports_class_c: payload.end_device.supports_class_c,
        lorawan_version: payload.end_device.lorawan_version,
        lorawan_phy_version: payload.end_device.lorawan_phy_version,
        mac_settings: {
          class_c_timeout: payload.end_device.mac_settings?.class_c_timeout,
          supports_32_bit_f_cnt: payload.end_device.mac_settings?.supports_32_bit_f_cnt,
        },
        ids: {
          join_eui: payload.end_device.ids.join_eui,
          dev_eui: payload.end_device.ids.dev_eui,
          device_id: payload.end_device.ids.device_id,
          application_ids: {
            application_id: this.APPLICATION_ID,
          },
        },
      },
      field_mask: {
        paths: paths,
      },
    };
    return this.API.send({
      method: 'PUT',
      url: `${this.NETWORK_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.end_device.ids.device_id}`,
      headers: this.headers,
      data: apiPayload,
    });
  }

  /**
   * It sets an end device for the application in the Application Server.
   * @type {import("../dist/Interfaces/Doc Common/docEndDevice.interface").PL-SetEndDeviceAS}
   * @param {PL-SetEndDeviceAS} payload - PL-SetEndDeviceAS
   * @returns {import("../dist/Interfaces/Doc Common/docEndDevice.interface").RESP-SetEndDeviceAS}
   * The response from the API.
   */
  setEndDeviceAS(payload: SetEndDeviceASUserPayload): Promise<SetEndDeviceAS> {
    const receievePayload = {
      'ids.application_ids.application_id': this.APPLICATION_ID,
      'ids.join_eui': payload.end_device.ids.join_eui,
      'ids.dev_eui': payload.end_device.ids.dev_eui,
      'ids.device_id': payload.end_device.ids.device_id,
      'version_ids.brand_id': payload.end_device.version_ids?.brand_id,
      'version_ids.model_id': payload.end_device.version_ids?.model_id,
      'version_ids.hardware_version': payload.end_device.version_ids?.hardware_version,
      'version_ids.firmware_version': payload.end_device.version_ids?.firmware_version,
      'version_ids.band_id': payload.end_device.version_ids?.band_id,
      'formatters.up_formatter': payload.end_device.formatters?.up_formatter,
      'formatters.down_formatter': payload.end_device.formatters?.down_formatter,
    };

    const extractPayload = JSON.parse(JSON.stringify(receievePayload));
    const paths = Object.keys(extractPayload);

    const apiPayload: SetEndDeviceASPayload = {
      end_device: {
        version_ids: {
          brand_id: payload.end_device.version_ids?.brand_id,
          model_id: payload.end_device.version_ids?.model_id,
          hardware_version: payload.end_device.version_ids?.hardware_version,
          firmware_version: payload.end_device.version_ids?.firmware_version,
          band_id: payload.end_device.version_ids?.band_id,
        },
        formatters: {
          up_formatter: payload.end_device.formatters?.up_formatter,
          down_formatter: payload.end_device.formatters?.down_formatter,
        },
        ids: {
          join_eui: payload.end_device.ids.join_eui,
          dev_eui: payload.end_device.ids.dev_eui,
          device_id: payload.end_device.ids.device_id,
          application_ids: {
            application_id: this.APPLICATION_ID,
          },
        },
      },
      field_mask: {
        paths: paths,
      },
    };
    return this.API.send({
      method: 'PUT',
      url: `${this.APPLICATION_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.end_device.ids.device_id}`,
      headers: this.headers,
      data: apiPayload,
    });
  }

  /**
   * It returns the end device information for the application in the Identity Server.
   * @type {import("../dist/Interfaces/Doc Common/docEndDevice.interface").PL-GetEndDeviceInfo}
   * @param {PL-GetEndDeviceInfo} payload - PL-GetEndDeviceInfo
   * @returns {import("../dist/Interfaces/Doc Common/docEndDevice.interface").RESP-GetEndDeviceInfo}
   * The response from the API.
   */
  getEndDeviceInfoIS(payload: GetEndDeviceInfoUserPayload): Promise<GetEndDeviceInfo> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.device_id}`,
      headers: this.headers,
      data: {},
    });
  }

  /**
   * It returns the end device information for the application in the Join Server.
   * @type {import("../dist/Interfaces/Doc Common/docEndDevice.interface").PL-GetEndDeviceInfo}
   * @param {PL-GetEndDeviceInfo} payload - PL-GetEndDeviceInfo
   * @returns {import("../dist/Interfaces/Doc Common/docEndDevice.interface").RESP-GetEndDeviceInfo}
   * The response from the API.
   */
  getEndDeviceInfoJS(payload: GetEndDeviceInfoUserPayload): Promise<GetEndDeviceInfo> {
    return this.API.send({
      method: 'GET',
      url: `${this.JOIN_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.device_id}`,
      headers: this.headers,
      data: {},
    });
  }

  /**
   * It returns the end device information for the application in the Network Server.
   * @type {import("../dist/Interfaces/Doc Common/docEndDevice.interface").PL-GetEndDeviceInfo}
   * @param {PL-GetEndDeviceInfo} payload - PL-GetEndDeviceInfo
   * @returns {import("../dist/Interfaces/Doc Common/docEndDevice.interface").RESP-GetEndDeviceInfo}
   * The response from the API.
   */
  getEndDeviceInfoNS(payload: GetEndDeviceInfoUserPayload): Promise<GetEndDeviceInfo> {
    return this.API.send({
      method: 'GET',
      url: `${this.NETWORK_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.device_id}`,
      headers: this.headers,
      data: {},
    });
  }

  /**
   * It returns the end device information for the application in the Application Server.
   * @type {import("../dist/Interfaces/Doc Common/docEndDevice.interface").PL-GetEndDeviceInfo}
   * @param {PL-GetEndDeviceInfo} payload - PL-GetEndDeviceInfo
   * @returns {import("../dist/Interfaces/Doc Common/docEndDevice.interface").RESP-GetEndDeviceInfo}
   * The response from the API.
   */
  getEndDeviceInfoAS(payload: GetEndDeviceInfoUserPayload): Promise<GetEndDeviceInfo> {
    return this.API.send({
      method: 'GET',
      url: `${this.APPLICATION_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.device_id}`,
      headers: this.headers,
      data: {},
    });
  }

  /**
   * It returns the list of end devices for the application in the Identity Server.
   * @returns {import("../dist/Interfaces/Doc Common/docEndDevice.interface").RESP-GetEndDeviceList}
   * The response from the API.
   */
  getEndDeviceList(): Promise<GetEndDeviceList> {
    return this.API.send({
      method: 'GET',
      url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/devices`,
      headers: this.headers,
      data: {},
    });
  }

  // /**
  //  * It updates the end device information for the application.
  //  * @type {import("../dist/Interfaces/Doc Common/docEndDevice.interface").PL-UpdateEndDevice}
  //  * @param {PL-UpdateEndDevice} payload - PL-UpdateEndDevice
  //  * @returns {import("../dist/Interfaces/Doc Common/docEndDevice.interface").RESP-UpdateEndDevice}
  //  * The response from the API.
  //  */

  /**
   * It updates the end device information for the application.
   * @param {PL-UpdateEndDevice} payload - {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:UpdateEndDeviceRequest UpdateEndDevice}
   * @returns {RESP-UpdateEndDevice}
   * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDevice UpdateEndDevice}
   */
  updateEndDevice(payload: UpdateEndDevicePayload): Promise<UpdateEndDevice> {
    // const receievePayload = {
    //   'version_ids.brand_id': payload.brand_id,
    //   'version_ids.model_id': payload.model_id,
    //   'version_ids.hardware_version': payload.hardware_version ?? undefined,
    //   'version_ids.firmware_version': payload.firmware_version,
    //   'version_ids.band_id': payload.band_id,
    //   'formatters.up_formatter': payload.up_formatter,
    //   'formatters.up_formatter_parameter': payload.up_formatter_parameter,
    //   'formatters.down_formatter': payload.down_formatter,
    //   'formatters.down_formatter_parameter': payload.down_formatter_parameter,
    //   name: payload.name,
    //   description: payload.description,
    //   attributes: payload.attributes,
    //   network_server_address: payload.network_server_address,
    //   application_server_address: payload.application_server_address,
    //   join_server_address: payload.join_server_address,
    //   'locations.latitude': payload.location_latitude,
    //   'locations.longitude': payload.location_longitude,
    //   'locations.altitude': payload.location_altitude,
    //   supports_class_b: payload.supports_class_b,
    //   supports_class_c: payload.supports_class_c,
    //   lorawan_version: payload.lorawan_version,
    //   lorawan_phy_version: payload.lorawan_phy_version,
    //   frequency_plan_id: payload.frequency_plan_id,
    //   resets_join_nonces: payload.resets_join_nonces,
    //   'roots.root_keys.app_key.key': payload.app_key,
    //   net_id: payload.net_id,
    //   'mac_settings.status_time_periodicity': payload.status_time_periodicity,
    //   'mac_settings.status_count_periodicity': payload.status_count_periodicity,
    //   'mac_settins.adr.static.data_rate_index': payload.static_data_rate_index,
    //   'mac_settings.adr.static.tx_power_index': payload.static_tx_power_index,
    //   'mac_settings.adr.staic.nb_trans': payload.static_nb_trans,
    //   'mac_settings.adr.dynamic.margin': payload.dynamic_margin,
    //   'mac_settings.desired_rx1_delay.value': payload.desired_rx1_delay,
    //   'mac_settings.desired_rx1_data_rate_offset.value': payload.desired_rx1_data_rate_offset,
    //   'mac_settings.desired_rx2_data_rate_index.value': payload.desired_rx2_data_rate_index,
    //   'mac_settings.desired_rx2_frequency.value': payload.desired_rx2_frequency,
    //   'mac_settings.desired_max_duty_cycle.value': payload.desired_max_duty_cycle,
    //   'mac_settings.supports_32_bit_f_cnt': payload.supports_32_bit_f_cnt,
    //   'mac_settings.class_c_timeout': payload.class_c_timeout,
    //   'mac_settings.factory_preset_frequencies': payload.factory_preset_frequencies,
    //   'formatter_payload.up_formatter': payload.up_formatter,
    //   'formatter_payload.up_formatter_parameter': payload.up_formatter_parameter,
    //   'formatter_payload.down_formatter': payload.down_formatter,
    //   'formatter_payload.down_formatter_parameter': payload.down_formatter_parameter,
    //   'claim_authentication_code.value': payload.claiming_value,
    //   'claim_authentication_code.valid_from': payload.claiming_valid_from,
    //   'claim_authentication_code.valid_to': payload.claiming_valid_to,
    // };

    // const extractPayload = JSON.parse(JSON.stringify(receievePayload));
    // const paths = Object.keys(extractPayload);

    // const apiPayload: UpdateEndDevicePayload = {
    //   end_device: {
    //     ids: {
    //       device_id: payload.device_id,
    //       application_ids: {
    //         application_id: this.APPLICATION_ID,
    //       },
    //       dev_eui: payload.dev_eui,
    //       join_eui: payload.join_eui,
    //     },
    //     name: payload.name,
    //     description: payload.description,
    //     attributes: payload.attributes,
    //     version_ids: {
    //       brand_id: payload.brand_id,
    //       model_id: payload.model_id,
    //       hardware_version: payload.hardware_version,
    //       firmware_version: payload.firmware_version,
    //       band_id: payload.band_id,
    //     },
    //     network_server_address: payload.network_server_address,
    //     network_server_kek_label: payload.network_server_kek_label,
    //     application_server_address: payload.application_server_address,
    //     application_server_kek_label: payload.application_server_kek_label,
    //     application_server_id: payload.application_server_id,
    //     join_server_address: payload.join_server_address,
    //     locations: {
    //       latitude: payload.location_latitude,
    //       longitude: payload.location_longitude,
    //       altitude: payload.location_altitude,
    //       accuracy: payload.location_accuracy,
    //     },
    //     supports_class_b: payload.supports_class_b,
    //     supports_class_c: payload.supports_class_c,
    //     lorawan_version: payload.lorawan_version,
    //     lorawan_phy_version: payload.lorawan_phy_version,
    //     frequency_plan_id: payload.frequency_plan_id,
    //     resets_join_nonces: payload.resets_join_nonces,
    //     root_keys: {
    //       app_key: {
    //         key: payload.app_key,
    //       },
    //     },
    //     net_id: payload.net_id,
    //     mac_settings: {
    //       status_count_periodicity: payload.status_count_periodicity,
    //       status_time_periodicity: payload.status_time_periodicity,
    //       adr: {
    //         static: {
    //           data_rate_index: payload.static_data_rate_index,
    //           tx_power_index: payload.static_tx_power_index,
    //           nb_trans: payload.static_nb_trans,
    //         },
    //         dynamic: { margin: payload.dynamic_margin },
    //         disabled: payload.disabled,
    //       },
    //       desired_max_duty_cycle: payload.desired_max_duty_cycle,
    //       supports_32_bit_f_cnt: payload.supports_32_bit_f_cnt,
    //       desired_rx2_frequency: payload.desired_rx2_frequency,
    //       desired_rx2_data_rate_index: payload.desired_rx2_data_rate_index,
    //       desired_rx1_data_rate_offset: payload.desired_rx1_data_rate_offset,
    //       desired_rx1_delay: payload.desired_rx1_delay,
    //       class_c_timeout: payload.class_c_timeout,
    //       factory_preset_frequencies: payload.factory_preset_frequencies,
    //     },
    //     formatters: {
    //       up_formatter: payload.up_formatter,
    //       up_formatter_parameter: payload.up_formatter_parameter,
    //       down_formatter: payload.down_formatter,
    //       down_formatter_parameter: payload.down_formatter_parameter,
    //     },
    //     claim_authentication_code: {
    //       value: payload.claiming_value,
    //       valid_from: payload.claiming_valid_from,
    //       valid_to: payload.claiming_valid_to,
    //     },
    //   },
    //   field_mask: {
    //     paths: paths,
    //   },
    // };
    return this.API.send({
      method: 'PUT',
      url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.end_device.ids.device_id}`,
      headers: this.headers,
      data: payload,
    });
  }

  /**
   * It deletes the end device in the identity server.
   * @type {import("../dist/Interfaces/Doc Common/docEndDevice.interface").PL-DeleteEndDeviceIS}
   * @param {PL-DeleteEndDeviceIS} payload - PL-DeleteEndDeviceIS
   * @returns {import("../dist/Interfaces/Doc Common/docEndDevice.interface").RESP-EmptyPayload}
   * The response from the API.
   */
  deleteEndDeviceIS(payload: deleteEndDeviceISUserPayload): Promise<any> {
    return this.API.send({
      method: 'DELETE',
      url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.device_id}`,
      headers: this.headers,
      data: {},
    });
  }

  /**
   * It deletes the end device in the join server.
   * @type {import("../dist/Interfaces/Doc Common/docEndDevice.interface").PL-DeleteEndDeviceJS}
   * @param {PL-DeleteEndDeviceJS} payload - PL-DeleteEndDeviceJS
   * @returns {import("../dist/Interfaces/Doc Common/docEndDevice.interface").RESP-EmptyPayload}
   * The response from the API.
   */
  deleteEndDeviceJS(payload: deleteEndDeviceJSUserPayload): Promise<any> {
    return this.API.send({
      method: 'DELETE',
      url: `${this.JOIN_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.device_id}`,
      headers: this.headers,
      data: {},
    });
  }

  /**
   * It deletes the end device in the network server.
   * @type {import("../dist/Interfaces/Doc Common/docEndDevice.interface").PL-DeleteEndDeviceNS}
   * @param {PL-DeleteEndDeviceNS} payload - PL-DeleteEndDeviceNS
   * @returns {import("../dist/Interfaces/Doc Common/docEndDevice.interface").RESP-EmptyPayload}
   * The response from the API.
   */
  deleteEndDeviceNS(payload: deleteEndDeviceNSUserPayload): Promise<any> {
    return this.API.send({
      method: 'DELETE',
      url: `${this.NETWORK_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.device_id}`,
      headers: this.headers,
      data: {},
    });
  }

  /**
   * It deletes the end device in the application server.
   * @type {import("../dist/Interfaces/Doc Common/docEndDevice.interface").PL-DeleteEndDeviceAS}
   * @param {PL-DeleteEndDeviceAS} payload - PL-DeleteEndDeviceAS
   * @returns {import("../dist/Interfaces/Doc Common/docEndDevice.interface").RESP-EmptyPayload}
   * The response from the API.
   */
  deleteEndDeviceAS(payload: deleteEndDeviceASUserPayload): Promise<any> {
    return this.API.send({
      method: 'DELETE',
      url: `${this.APPLICATION_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.device_id}`,
      headers: this.headers,
      data: {},
    });
  }
}
