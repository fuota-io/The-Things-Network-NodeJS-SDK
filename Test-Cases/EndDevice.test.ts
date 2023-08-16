import { EndDevice } from '../EndDevice';
import {
  config_F,
  config_T,
  createEndDeviceISUserPayload,
  getEndDeviceInfoUserPayload_T,
  getEndDeviceInfoUserPayload_F,
  setEndDeviceASUserPayload,
  setEndDeviceJSUserPayload,
  setEndDeviceNSUserPayload,
  updateEndDeviceUserPayload,
  deleteEndDeviceISUserPayload,
  deleteEndDeviceJSUserPayload,
  deleteEndDeviceNSUserPayload,
  deleteEndDeviceASUserPayload,
  configDownlink,
  downlinkQueuePushUserPayload,
  subscribeDownLinkEventUserPayload,
  subscribeUpLinkEventUserPayload,
} from '../Data/EndDeviceAPI-data';

const device = new EndDevice('meet69', config_T);

describe('No Config Errors', () => {
  test('Correct User ID', async () => {
    const appFailed = new EndDevice('meet69', config_T);
    expect(appFailed).toHaveProperty('APPLICATION_ID', 'meet69');
  });

  test('API Key Given', async () => {
    const appFailed = new EndDevice('meetsavaj', config_T);
    expect(appFailed).toHaveProperty(
      'API_KEY',
      'NNSXS.BGVLXTTMUZDIIFY7EDSKFKB3R2AROYP7XDKUYOQ.SGAC24PFU6KMGEYUOQ3IDFYIUF55C4ZZQN4E2DNFWYHGY7EKPTHQ'
    );
  });
});

describe('Config Errors', () => {
  test('User ID', async () => {
    const appFailed = new EndDevice('meethgsvbdgas', config_F);
    expect(appFailed).not.toHaveProperty('APPLICATION_ID', 'meet69');
  });

  test('API Key Missing', async () => {
    const appFailed = new EndDevice('meetsavaj', config_F);
    expect(appFailed).not.toHaveProperty(
      'API_KEY',
      'NNSXS.BGVLXTTMUZDIIFY7EDSKFKB3R2AROYP7XDKUYOQ.SGAC24PFU6KMGEYUOQ3IDFYIUF55C4ZZQN4E2DNFWYHGY7EKPTHQ'
    );
  });
});

describe('EndDevice Creation', () => {
  test('EndDevice Created Successfully', async () => {
    const response = await device.createEndDeviceIS(createEndDeviceISUserPayload);
    expect(response.ids.dev_eui).toBe(createEndDeviceISUserPayload.end_device.ids.dev_eui);
    expect(response.ids.join_eui).toBe(createEndDeviceISUserPayload.end_device.ids.join_eui);
    expect(response.ids.device_id).toBe(createEndDeviceISUserPayload.end_device.ids.device_id);
    expect(response.version_ids.band_id).toBe(
      createEndDeviceISUserPayload.end_device.version_ids.band_id
    );
    expect(response.version_ids.brand_id).toBe(
      createEndDeviceISUserPayload.end_device.version_ids.brand_id
    );
    expect(response.version_ids.firmware_version).toBe(
      createEndDeviceISUserPayload.end_device.version_ids.firmware_version
    );
    expect(response.version_ids.hardware_version).toBe(
      createEndDeviceISUserPayload.end_device.version_ids.hardware_version
    );
    expect(response.version_ids.model_id).toBe(
      createEndDeviceISUserPayload.end_device.version_ids.model_id
    );
    expect(response.network_server_address).toBe(
      createEndDeviceISUserPayload.end_device.network_server_address
    );
    expect(response.application_server_address).toBe(
      createEndDeviceISUserPayload.end_device.application_server_address
    );
    expect(response.join_server_address).toBe(
      createEndDeviceISUserPayload.end_device.join_server_address
    );
  });
});

describe('EndDevice Creation Errors', () => {
  test('Error, Already Created', async () => {
    try {
      await device.createEndDeviceIS(createEndDeviceISUserPayload);
    } catch (error: any) {
      expect(error).toHaveProperty('code', 6);
    }
  });
});

describe('Set EndDeviceJS', () => {
  test('EndDeviceJS Set Successfully', async () => {
    const response = await device.setEndDeviceJS(setEndDeviceJSUserPayload);
    expect(response.ids.dev_eui).toBe(setEndDeviceJSUserPayload.end_device.ids.dev_eui);
    expect(response.ids.join_eui).toBe(setEndDeviceJSUserPayload.end_device.ids.join_eui);
    expect(response.ids.device_id).toBe(setEndDeviceJSUserPayload.end_device.ids.device_id);
    expect(response.network_server_address).toBe(
      setEndDeviceJSUserPayload.end_device.network_server_address
    );
    expect(response.application_server_address).toBe(
      setEndDeviceJSUserPayload.end_device.application_server_address
    );
    expect(response.root_keys.app_key.key).toBe(
      setEndDeviceJSUserPayload.end_device.root_keys.app_key.key
    );
  });
});

describe('Set EndDeviceJS Errors', () => {
  test('No Rights', async () => {
    try {
      const device = new EndDevice('meet5jhbjh', config_T);
      const response = await device.setEndDeviceJS(setEndDeviceJSUserPayload);
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 7);
    }
  });
});

describe('Set EndDeviceNS', () => {
  test('EndDeviceNS Set Successfully', async () => {
    const response = await device.setEndDeviceNS(setEndDeviceNSUserPayload);
    expect(response.ids.dev_eui).toBe(setEndDeviceNSUserPayload.end_device.ids.dev_eui);
    expect(response.ids.join_eui).toBe(setEndDeviceNSUserPayload.end_device.ids.join_eui);
    expect(response.ids.device_id).toBe(setEndDeviceNSUserPayload.end_device.ids.device_id);
    expect(response.version_ids.brand_id).toBe(
      setEndDeviceNSUserPayload.end_device.version_ids.brand_id
    );
    expect(response.version_ids.model_id).toBe(
      setEndDeviceNSUserPayload.end_device.version_ids.model_id
    );
    expect(response.version_ids.hardware_version).toBe(
      setEndDeviceNSUserPayload.end_device.version_ids.hardware_version
    );
    expect(response.version_ids.firmware_version).toBe(
      setEndDeviceNSUserPayload.end_device.version_ids.firmware_version
    );
    expect(response.version_ids.band_id).toBe(
      setEndDeviceNSUserPayload.end_device.version_ids.band_id
    );
    expect(response.frequency_plan_id).toBe(setEndDeviceNSUserPayload.end_device.frequency_plan_id);
    expect(response.supports_join).toEqual(true);
    expect(response.supports_class_c).toEqual(true);
    expect(response.lorawan_version).toBe(setEndDeviceNSUserPayload.end_device.lorawan_version);
    expect(response.lorawan_phy_version).toBe(
      setEndDeviceNSUserPayload.end_device.lorawan_phy_version
    );
    expect(response.mac_settings.class_c_timeout).toBe(
      setEndDeviceNSUserPayload.end_device.mac_settings.class_c_timeout
    );
    expect(response.mac_settings.supports_32_bit_f_cnt).toEqual(true);
  });
});

describe('Set EndDeviceNS Errors', () => {
  test('No Rights', async () => {
    try {
      const device = new EndDevice('meet5jhbjh', config_T);
      const response = await device.setEndDeviceNS(setEndDeviceNSUserPayload);
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 7);
    }
  });
});

describe('Set EndDeviceAS', () => {
  test('EndDeviceAS Set Successfully', async () => {
    const response = await device.setEndDeviceAS(setEndDeviceASUserPayload);
    expect(response.ids.dev_eui).toBe(setEndDeviceASUserPayload.end_device.ids.dev_eui);
    expect(response.ids.join_eui).toBe(setEndDeviceASUserPayload.end_device.ids.join_eui);
    expect(response.ids.device_id).toBe(setEndDeviceASUserPayload.end_device.ids.device_id);
    expect(response.version_ids.brand_id).toBe(
      setEndDeviceASUserPayload.end_device.version_ids.brand_id
    );
    expect(response.version_ids.model_id).toBe(
      setEndDeviceASUserPayload.end_device.version_ids.model_id
    );
    expect(response.version_ids.hardware_version).toBe(
      setEndDeviceASUserPayload.end_device.version_ids.hardware_version
    );
    expect(response.version_ids.firmware_version).toBe(
      setEndDeviceASUserPayload.end_device.version_ids.firmware_version
    );
    expect(response.version_ids.band_id).toBe(
      setEndDeviceASUserPayload.end_device.version_ids.band_id
    );
    expect(response.formatters.up_formatter).toBe(
      setEndDeviceASUserPayload.end_device.formatters.up_formatter
    );
    expect(response.formatters.down_formatter).toBe(
      setEndDeviceASUserPayload.end_device.formatters.down_formatter
    );
  });
});

describe('Set EndDeviceAS Errors', () => {
  test('No Rights', async () => {
    try {
      const device = new EndDevice('meet5jhbjh', config_T);
      const response = await device.setEndDeviceAS(setEndDeviceASUserPayload);
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 7);
    }
  });
});

describe('Get EndDeviceInfoIS', () => {
  test('Getting EndDeviceInfoIS Successfully', async () => {
    const response = await device.getEndDeviceInfoIS(getEndDeviceInfoUserPayload_T);
    expect(response.ids.device_id).toBe(getEndDeviceInfoUserPayload_T.device_id);
  });
});

describe('Get EndDeviceInfoIS Errors', () => {
  test('No Rights', async () => {
    try {
      const device = new EndDevice('meet5jhbjh', config_T);
      const response = await device.getEndDeviceInfoIS(getEndDeviceInfoUserPayload_T);
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 7);
    }
  });

  test('Device ID Not Found', async () => {
    try {
      const response = await device.getEndDeviceInfoIS(getEndDeviceInfoUserPayload_F);
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 5);
    }
  });
});

describe('Get EndDeviceInfoJS', () => {
  test('Getting EndDeviceInfoJS Successfully', async () => {
    const response = await device.getEndDeviceInfoJS(getEndDeviceInfoUserPayload_T);
    expect(response.ids.device_id).toBe(getEndDeviceInfoUserPayload_T.device_id);
  });
});

describe('Get EndDeviceInfoJS Errors', () => {
  test('No Rights', async () => {
    try {
      const device = new EndDevice('meet5jhbjh', config_T);
      const response = await device.getEndDeviceInfoJS(getEndDeviceInfoUserPayload_T);
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 7);
    }
  });

  test('Device ID Not Found', async () => {
    try {
      const response = await device.getEndDeviceInfoJS(getEndDeviceInfoUserPayload_F);
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 5);
    }
  });
});

describe('Get EndDeviceInfoNS', () => {
  test('Getting EndDeviceInfoNS Successfully', async () => {
    const response = await device.getEndDeviceInfoNS(getEndDeviceInfoUserPayload_T);
    expect(response.ids.device_id).toBe(getEndDeviceInfoUserPayload_T.device_id);
  });
});

describe('Get EndDeviceInfoNS Errors', () => {
  test('No Rights', async () => {
    try {
      const device = new EndDevice('meet5jhbjh', config_T);
      const response = await device.getEndDeviceInfoNS(getEndDeviceInfoUserPayload_T);
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 7);
    }
  });

  test('Device ID Not Found', async () => {
    try {
      const response = await device.getEndDeviceInfoNS(getEndDeviceInfoUserPayload_F);
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 5);
    }
  });
});

describe('Get EndDeviceInfoAS', () => {
  test('Getting EndDeviceInfoAS Successfully', async () => {
    const response = await device.getEndDeviceInfoAS(getEndDeviceInfoUserPayload_T);
    expect(response.ids.device_id).toBe(getEndDeviceInfoUserPayload_T.device_id);
  });
});

describe('Get EndDeviceInfoAS Errors', () => {
  test('No Rights', async () => {
    try {
      const device = new EndDevice('meet5jhbjh', config_T);
      const response = await device.getEndDeviceInfoAS(getEndDeviceInfoUserPayload_T);
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 7);
    }
  });

  test('Device ID Not Found', async () => {
    try {
      const response = await device.getEndDeviceInfoAS(getEndDeviceInfoUserPayload_F);
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 5);
    }
  });
});

describe('Get EndDeviceList', () => {
  test('Getting EndDeviceList Successfully', async () => {
    const response = await device.getEndDeviceList();
    expect(response).toBeDefined();
  });
});

describe('Get EndDeviceList Errors', () => {
  test('No Rights', async () => {
    try {
      const device = new EndDevice('meet5jhbjh', config_T);
      const response = await device.getEndDeviceList();
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 7);
    }
  });
});

describe('Update EndDevice', () => {
  test('EndDevice Updated Successfully', async () => {
    const response = await device.updateEndDevice(updateEndDeviceUserPayload);
    expect(response.ids.dev_eui).toBe(setEndDeviceASUserPayload.end_device.ids.dev_eui);
    expect(response.ids.join_eui).toBe(setEndDeviceASUserPayload.end_device.ids.join_eui);
    expect(response.ids.device_id).toBe(setEndDeviceASUserPayload.end_device.ids.device_id);
  });
});

describe('Update EndDevice Errors', () => {
  test('No Rights', async () => {
    try {
      const device = new EndDevice('meet5jhbjh', config_T);
      const response = await device.updateEndDevice(updateEndDeviceUserPayload);
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 7);
    }
  });
});

describe('Delete EndDeviceIS', () => {
  test('EndDevice Deleted Successfully', async () => {
    const response = await device.deleteEndDeviceIS(deleteEndDeviceISUserPayload);
    expect(response).not.toBeNull;
  });
});

describe('Delete EndDeviceIS Errors', () => {
  test('No Rights', async () => {
    try {
      const device = new EndDevice('meet5jhbjh', config_T);
      const response = await device.deleteEndDeviceIS(deleteEndDeviceISUserPayload);
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 7);
    }
  });
});

describe('Delete EndDeviceJS', () => {
  test('EndDevice Deleted Successfully', async () => {
    const response = await device.deleteEndDeviceJS(deleteEndDeviceJSUserPayload);
    expect(response).not.toBeNull;
  });
});

describe('Delete EndDeviceJS Errors', () => {
  test('No Rights', async () => {
    try {
      const device = new EndDevice('meet5jhbjh', config_T);
      const response = await device.deleteEndDeviceJS(deleteEndDeviceJSUserPayload);
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 7);
    }
  });
});

describe('Delete EndDeviceNS', () => {
  test('EndDevice Deleted Successfully', async () => {
    const response = await device.deleteEndDeviceNS(deleteEndDeviceNSUserPayload);
    expect(response).not.toBeNull;
  });
});

describe('Delete EndDeviceNS Errors', () => {
  test('No Rights', async () => {
    try {
      const device = new EndDevice('meet5jhbjh', config_T);
      const response = await device.deleteEndDeviceNS(deleteEndDeviceNSUserPayload);
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 7);
    }
  });
});

describe('Delete EndDeviceAS', () => {
  test('EndDevice Deleted Successfully', async () => {
    const response = await device.deleteEndDeviceAS(deleteEndDeviceASUserPayload);
    expect(response).not.toBeNull;
  });
});

describe('Delete EndDeviceAS Errors', () => {
  test('No Rights', async () => {
    try {
      const device = new EndDevice('meet5jhbjh', config_T);
      const response = await device.deleteEndDeviceAS(deleteEndDeviceASUserPayload);
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 7);
    }
  });
});

describe('IssueDevEUI', () => {
  test('IssueDevEUI Successfully', async () => {
    const response = await device.issueDevEUI();
    expect(response).not.toBeNull;
  });
});

// describe('DownlinkQueue Push/Replace', () => {
//   test('DownlinkQueue Push/Replace Successfully', async () => {
//     const device = new EndDevice('stratis-thermostat', configDownlink);
//     const response = await device.downlinkQueue(downlinkQueuePushUserPayload);
//     expect(response).not.toBeNull;
//   });
// });

// const device2 = new EndDevice('stratis-thermostat', configDownlink);
// const downEvent = device2.subscribeDownLinkEvent(subscribeDownLinkEventUserPayload);
// const upEvent = device2.subscribeUpLinkEvent(subscribeUpLinkEventUserPayload);
// device.unsubscribeEvent(downEvent);

// describe('SubscribeDownlink', () => {
//   test('SubscribeDownlink Successfully', async () => {
//     const device = new EndDevice('stratis-thermostat', configDownlink);
//     const response = await device.subscribeDownLinkEvent(subscribeDwonLinkEventUserPayload);
//     expect(response).not.toBeNull;
//   });
// });

// describe('UnsubscribeDownlink', () => {
//   test('UnsubscribeDownlink Successfully', async () => {
//     const device = new EndDevice('stratis-thermostat', configDownlink);
//     const response = await device.unsubscribeDownLinkEvent();
//     expect(response).not.toBeNull;
//   });
// });
