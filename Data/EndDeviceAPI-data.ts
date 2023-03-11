export const config_T = {
  IDENTITY_SERVER: 'https://eu1.cloud.thethings.network/api/v3',
  NETWORK_SERVER: 'https://nam1.cloud.thethings.network/api/v3/ns',
  APPLICATION_SERVER: 'https://nam1.cloud.thethings.network/api/v3/as',
  JOIN_SERVER: 'https://nam1.cloud.thethings.network/api/v3/js',
  API_KEY:
    'NNSXS.BGVLXTTMUZDIIFY7EDSKFKB3R2AROYP7XDKUYOQ.SGAC24PFU6KMGEYUOQ3IDFYIUF55C4ZZQN4E2DNFWYHGY7EKPTHQ',
};

export const config_F = {
  IDENTITY_SERVER: 'https://eu1.cloud.thethings.network/api/v3',
  NETWORK_SERVER: 'https://nam1.cloud.thethings.network/api/v3/ns',
  APPLICATION_SERVER: 'https://nam1.cloud.thethings.network/api/v3/as',
  JOIN_SERVER: 'https://nam1.cloud.thethings.network/api/v3/js',
  API_KEY:
    'NNSXS.BGVLXTTMUZDIIFY7EDSKFKB3R2AROYP7XDKUYOQ.SGAC24PFU6KMGEYUOQ3IDFYIUF55C4ZZQN4E2DNFWYHGY7EKPTH',
};

export const createEndDeviceUserPayload = {
  join_eui: 'DDFFDDFDFFDFDFDF',
  dev_eui: '70B3D57ED005B59E',
  device_id: 'eui-70b3d57ed005b59e',
  brand_id: 'moko',
  model_id: 'lw003-b',
  hardware_version: '2.1',
  firmware_version: '2.0',
  band_id: 'AS_923',
  network_server_address: 'nam1.cloud.thethings.network',
  application_server_address: 'nam1.cloud.thethings.network',
  join_server_address: 'nam1.cloud.thethings.network',
};

export const setEndDeviceJSUserPayload = {
  join_eui: 'DDFFDDFDFFDFDFDF',
  dev_eui: '70B3D57ED005B59E',
  device_id: 'eui-70b3d57ed005b59e',
  network_server_address: 'nam1.cloud.thethings.network',
  application_server_address: 'nam1.cloud.thethings.network',
  app_key: '9227E703A429BF5EF8F69E8937FAE025',
};

export const setEndDeviceNSUserPayload = {
  join_eui: 'DDFFDDFDFFDFDFDF',
  dev_eui: '70B3D57ED005B59E',
  device_id: 'eui-70b3d57ed005b59e',
  brand_id: 'moko',
  model_id: 'lw003-b',
  hardware_version: '2.1',
  firmware_version: '2.0',
  band_id: 'AS_923',
  frequency_plan_id: 'AS_920_923_TTN_JP_3_LAND_MOBILE',
  supports_join: true,
  supports_class_c: true,
  lorawan_version: 'MAC_V1_0_3',
  lorawan_phy_version: 'PHY_V1_0_3_REV_A',
  class_c_timeout: '60s',
  supports_32_bit_f_cnt: true,
};
