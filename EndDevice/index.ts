import { APICall, SetConfig } from '../index';
import { Config } from '../Interfaces/Config/config.interface';
import {
  CreateEndDevice,
  SetEndDeviceJS,
  SetEndDeviceJSPayload,
  SetEndDeviceJSUserPayload,
  CreateEndDevicePayload,
  CreateEndDeviceUserPayload,
  SetEndDeviceNSUserPayload,
  SetEndDeviceNS,
  SetEndDeviceNSPayload,
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
   * @type {import("../dist/Interfaces/Doc Common/docEndDevice.interface").PL-CreateEndDevice}
   * @param {PL-CreateEndDevice} payload - PL-CreateEndDevice
   * @returns {import("../dist/Interfaces/Doc Common/docEndDevice.interface").RESP-CreateEndDevice}
   * The response from the API.
   */
  createEndDevice(payload: CreateEndDeviceUserPayload): Promise<CreateEndDevice> {
    const extractPayload = {
      brand_id: payload.brand_id,
      model_id: payload.model_id,
      hardware_version: payload.hardware_version,
      firmware_version: payload.firmware_version,
      band_id: payload.band_id,
      network_server_address: payload.network_server_address,
      application_server_address: payload.application_server_address,
      join_server_address: payload.join_server_address,
    };

    const paths = Object.keys(extractPayload);

    const apiPayload: CreateEndDevicePayload = {
      end_device: {
        ids: {
          join_eui: payload.join_eui,
          dev_eui: payload.dev_eui,
          device_id: payload.device_id,
          application_ids: {
            application_id: payload.application_id,
          },
        },
        version_ids: {
          brand_id: payload.brand_id,
          model_id: payload.model_id,
          hardware_version: payload.hardware_version,
          firmware_version: payload.firmware_version,
          band_id: payload.band_id,
        },
        network_server_address: payload.network_server_address,
        application_server_address: payload.application_server_address,
        join_server_address: payload.join_server_address,
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
    const extractPayload = {
      'ids.application_ids.application_id': this.APPLICATION_ID,
      'ids.join_eui': payload.join_eui,
      'ids.dev_eui': payload.dev_eui,
      'ids.device_id': payload.device_id,
      network_server_address: payload.network_server_address,
      application_server_address: payload.application_server_address,
      'root_keys.app_key.key': payload.app_key,
    };

    const paths = Object.keys(extractPayload);

    const apiPayload: SetEndDeviceJSPayload = {
      end_device: {
        ids: {
          join_eui: payload.join_eui,
          dev_eui: payload.dev_eui,
          device_id: payload.device_id,
          application_ids: {
            application_id: this.APPLICATION_ID,
          },
        },
        network_server_address: payload.network_server_address,
        application_server_address: payload.application_server_address,
        root_keys: {
          app_key: {
            key: payload.app_key,
          },
        },
      },
      field_mask: {
        paths: paths,
      },
    };
    return this.API.send({
      method: 'PUT',
      url: `${this.JOIN_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.device_id}`,
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
    const extractPayload = {
      'ids.application_ids.application_id': this.APPLICATION_ID,
      'ids.join_eui': payload.join_eui,
      'ids.dev_eui': payload.dev_eui,
      'ids.device_id': payload.device_id,
      'version_ids.brand_id': payload.brand_id,
      'version_ids.model_id': payload.model_id,
      'version_ids.hardware_version': payload.hardware_version,
      'version_ids.firmware_version': payload.firmware_version,
      'version_ids.band_id': payload.band_id,
      frequency_plan_id: payload.frequency_plan_id,
      supports_join: payload.supports_join,
      supports_class_c: payload.supports_class_c,
      lorawan_version: payload.lorawan_version,
      lorawan_phy_version: payload.lorawan_phy_version,
      'mac_settings.class_c_timeout': payload.class_c_timeout,
      'mac_settings.supports_32_bit_f_cnt': payload.supports_32_bit_f_cnt,
    };

    const paths = Object.keys(extractPayload);

    const apiPayload: SetEndDeviceNSPayload = {
      end_device: {
        version_ids: {
          brand_id: payload.brand_id,
          model_id: payload.model_id,
          hardware_version: payload.hardware_version,
          firmware_version: payload.firmware_version,
          band_id: payload.band_id,
        },
        frequency_plan_id: payload.frequency_plan_id,
        supports_join: payload.supports_join,
        supports_class_c: payload.supports_class_c,
        lorawan_version: payload.lorawan_version,
        lorawan_phy_version: payload.lorawan_phy_version,
        mac_settings: {
          class_c_timeout: payload.class_c_timeout,
          supports_32_bit_f_cnt: payload.supports_32_bit_f_cnt,
        },
        ids: {
          join_eui: payload.join_eui,
          dev_eui: payload.dev_eui,
          device_id: payload.device_id,
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
      url: `${this.NETWORK_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.device_id}`,
      headers: this.headers,
      data: apiPayload,
    });
  }
}
