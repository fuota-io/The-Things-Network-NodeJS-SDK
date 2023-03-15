import path from 'path';
import { encode } from 'punycode';
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
  UpdateEndDeviceUserPayload,
  downlinkQueuePush,
  downlinkQueueUserPayload,
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
    const paths = getAllKeys(payload);

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
    const paths = getAllKeys(payload);

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
    const paths = getAllKeys(payload);

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
    const paths = getAllKeys(payload);

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

  /**
   * It updates the end device information for the application.
   * @param {PL-UpdateEndDevice} payload - {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:UpdateEndDeviceRequest UpdateEndDevice}
   * @returns {RESP-UpdateEndDevice}
   * The response from the API. ----> {@link https://www.thethingsindustries.com/docs/reference/api/end_device/#message:EndDevice UpdateEndDevice}
   */
  updateEndDevice(payload: UpdateEndDeviceUserPayload): Promise<UpdateEndDevice> {
    const recpaths = getAllKeys(payload);

    /*This function removes some keys which are not meant to be passed.*/
    const filterKeys = (keys: string[]): string[] => {
      var newArray = [];
      for (var i = 0; i < keys.length; i++) {
        if (
          keys[i] !== 'ids.device_id' &&
          keys[i] !== 'ids.application_ids.application_id' &&
          keys[i] !== 'ids.dev_eui' &&
          keys[i] !== 'ids.join_eui' &&
          keys[i] !== 'ids.dev_addr'
        ) {
          newArray.push(keys[i]);
        }
      }
      return newArray;
    };

    const paths = filterKeys(recpaths);

    const apiPayload: UpdateEndDevicePayload = {
      end_device: {
        ids: {
          device_id: payload.end_device.ids.device_id,
          application_ids: {
            application_id: this.APPLICATION_ID,
          },
          dev_eui: payload.end_device.ids?.dev_eui,
          join_eui: payload.end_device.ids?.join_eui,
          dev_addr: payload.end_device.ids?.dev_addr,
        },
        name: payload.end_device.name,
        description: payload.end_device.description,
        attributes: payload.end_device.attributes,
        version_ids: {
          brand_id: payload.end_device.version_ids?.brand_id,
          model_id: payload.end_device.version_ids?.model_id,
          hardware_version: payload.end_device.version_ids?.hardware_version,
          firmware_version: payload.end_device.version_ids?.firmware_version,
          band_id: payload.end_device.version_ids?.band_id,
        },
        service_profile_id: payload.end_device.service_profile_id,
        network_server_address: payload.end_device.network_server_address,
        network_server_kek_label: payload.end_device.network_server_kek_label,
        application_server_address: payload.end_device.application_server_address,
        application_server_kek_label: payload.end_device.application_server_kek_label,
        application_server_id: payload.end_device.application_server_id,
        join_server_address: payload.end_device.join_server_address,
        locations: payload.end_device.locations,
        picture: {
          embedded: {
            mime_type: payload.end_device.picture?.embedded?.mime_type,
            data: payload.end_device.picture?.embedded?.data,
          },
          sizes: payload.end_device.picture?.sizes,
        },
        supports_class_b: payload.end_device.supports_class_b,
        supports_class_c: payload.end_device.supports_class_c,
        lorawan_version: payload.end_device.lorawan_version,
        lorawan_phy_version: payload.end_device.lorawan_phy_version,
        frequency_plan_id: payload.end_device.frequency_plan_id,
        min_frequency: payload.end_device.min_frequency,
        max_frequency: payload.end_device.max_frequency,
        supports_join: payload.end_device.supports_join,
        resets_join_nonces: payload.end_device.resets_join_nonces,
        root_keys: {
          root_key_id: payload.end_device.root_keys?.root_key_id,
          app_key: payload.end_device.root_keys?.app_key,
          nwk_key: payload.end_device.root_keys?.app_key,
        },
        net_id: payload.end_device.net_id,
        mac_settings: payload.end_device.mac_settings,
        mac_state: payload.end_device.mac_state,
        pending_mac_state: payload.end_device.mac_state,
        session: payload.end_device.session,
        pending_session: payload.end_device.session,
        last_dev_nonce: payload.end_device.last_dev_nonce,
        used_dev_nonces: payload.end_device.used_dev_nonces,
        last_join_nonce: payload.end_device.last_join_nonce,
        last_rj_count_0: payload.end_device.last_rj_count_0,
        last_rj_count_1: payload.end_device.last_rj_count_1,
        last_dev_status_received_at: payload.end_device.last_dev_status_received_at,
        power_state: payload.end_device.power_state,
        battery_percentage: payload.end_device.battery_percentage,
        downlink_margin: payload.end_device.downlink_margin,
        queued_application_downlinks: payload.end_device.queued_application_downlinks,
        formatters: {
          up_formatter: payload.end_device.formatters?.up_formatter,
          up_formatter_parameter: payload.end_device.formatters?.up_formatter_parameter,
          down_formatter: payload.end_device.formatters?.down_formatter,
          down_formatter_parameter: payload.end_device.formatters?.down_formatter_parameter,
        },
        provisioner_id: payload.end_device.provisioner_id,
        provisioning_data: payload.end_device.provisioning_data,
        multicast: payload.end_device.multicast,
        claim_authentication_code: {
          value: payload.end_device.claim_authentication_code?.value,
          valid_from: payload.end_device.claim_authentication_code?.valid_from,
          valid_to: payload.end_device.claim_authentication_code?.valid_to,
        },
        skip_payload_crypto: payload.end_device.skip_payload_crypto,
        skip_payload_crypto_override: payload.end_device.skip_payload_crypto_override,
        serial_number: payload.end_device.serial_number,
        lora_alliance_profile_ids: {
          vendor_id: payload.end_device.lora_alliance_profile_ids?.vendor_id,
          vendor_profile_id: payload.end_device.lora_alliance_profile_ids?.vendor_profile_id,
        },
      },
      field_mask: {
        paths: paths,
      },
    };

    return this.API.send({
      method: 'PUT',
      url: `${this.IDENTITY_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.end_device.ids.device_id}`,
      headers: this.headers,
      data: apiPayload,
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

  downlinkQueue(payload: downlinkQueueUserPayload): Promise<any> {
    const getBase64 = (type: string, payload: any) => {
      if (type === 'string') {
        const encoded: string = Buffer.from(payload, 'utf8').toString('base64');
        return encoded;
      } else if (type === 'decimal') {
        const encoded: string = payload.toString('base64');
        return encoded;
      }
    };
    const mssgPayload = getBase64(payload.payload_type, payload.payload);

    const apiPayload: downlinkQueuePush = {
      downlinks: [
        {
          f_port: payload.port_no,
          frm_payload: mssgPayload,
          confirmed: payload.confirmed_downlink,
        },
      ],
    };
    return this.API.send({
      method: 'POST',
      url: `${this.APPLICATION_SERVER}/applications/${this.APPLICATION_ID}/devices/${payload.device_id}/down/${payload.request_type}`,
      headers: this.headers,
      data: apiPayload,
    });
  }
}
