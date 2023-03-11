export interface CreateEndDeviceUserPayload {
  application_id: string;
  join_eui: string;
  dev_eui: string;
  device_id: string;
  brand_id?: string;
  model_id?: string;
  hardware_version?: string;
  firmware_version?: string;
  band_id?: string;
  network_server_address?: string;
  application_server_address?: string;
  join_server_address?: string;
}

export interface CreateEndDevicePayload {
  end_device: {
    ids: {
      join_eui: string;
      dev_eui: string;
      device_id: string;
      application_ids: {
        application_id: string;
      };
    };
    version_ids: {
      brand_id?: string;
      model_id?: string;
      hardware_version?: string;
      firmware_version?: string;
      band_id?: string;
    };
    network_server_address?: string;
    application_server_address?: string;
    join_server_address?: string;
  };
  field_mask: {
    paths: string[];
  };
}

export interface CreateEndDevice {
  ids: {
    join_eui: string;
    dev_eui: string;
    device_id: string;
    application_ids: {
      application_id: string;
    };
  };
  created_at: any;
  updated_at: any;
  version_ids: {
    brand_id: string;
    model_id: string;
    hardware_version: number;
    firmware_version: number;
    band_id: string;
  };
  network_server_address: string;
  application_server_address: string;
  join_server_address: string;
  lora_alliance_profile_ids: { vendor_id: number; vendor_profile_id: number };
}

export interface SetEndDeviceJSUserPayload {
  join_eui: string;
  dev_eui: string;
  device_id: string;
  network_server_address?: string;
  application_server_address?: string;
  app_key: string;
}

export interface SetEndDeviceJSPayload {
  end_device: {
    ids: {
      join_eui: string;
      dev_eui: string;
      device_id: string;
      application_ids: {
        application_id: string;
      };
    };
    network_server_address?: string;
    application_server_address?: string;
    root_keys: {
      app_key: {
        key: string;
      };
    };
  };
  field_mask: {
    paths: string[];
  };
}

export interface SetEndDeviceJS {
  ids: {
    device_id: string;
    application_ids: {
      application_id: string;
    };
    dev_eui: string;
    join_eui: string;
  };
  created_at: string;
  updated_at: string;
  network_server_address: string;
  application_server_address: string;
  root_keys: {
    app_key: {
      key: string;
    };
  };
}

export interface SetEndDeviceNSUserPayload {
  join_eui: string;
  dev_eui: string;
  device_id: string;
  brand_id?: string;
  model_id?: string;
  hardware_version?: string;
  firmware_version?: string;
  band_id?: string;
  frequency_plan_id: string;
  supports_join: boolean;
  supports_class_c: boolean;
  lorawan_version: string;
  lorawan_phy_version: string;
  class_c_timeout?: string;
  supports_32_bit_f_cnt?: boolean;
}

export interface SetEndDeviceNSPayload {
  end_device: {
    version_ids: {
      brand_id?: string;
      model_id?: string;
      hardware_version?: string;
      firmware_version?: string;
      band_id?: string;
    };
    frequency_plan_id: string;
    supports_join: boolean;
    supports_class_c: boolean;
    lorawan_version: string;
    lorawan_phy_version: string;
    mac_settings: {
      class_c_timeout?: string;
      supports_32_bit_f_cnt?: boolean;
    };
    ids: {
      join_eui: string;
      dev_eui: string;
      device_id: string;
      application_ids: {
        application_id: string;
      };
    };
  };
  field_mask: {
    paths: string[];
  };
}

export interface SetEndDeviceNS {
  ids: {
    join_eui: string;
    dev_eui: string;
    device_id: string;
    application_ids: {
      application_id: string;
    };
  };
  created_at: string;
  updated_at: string;
  version_ids: {
    brand_id: string;
    model_id: string;
    hardware_version: string;
    firmware_version: string;
    band_id: string;
  };
  frequency_plan_id: string;
  supports_join: boolean;
  supports_class_c: boolean;
  lorawan_version: string;
  lorawan_phy_version: string;
  mac_settings: {
    class_c_timeout: string;
    supports_32_bit_f_cnt: boolean;
  };
}
