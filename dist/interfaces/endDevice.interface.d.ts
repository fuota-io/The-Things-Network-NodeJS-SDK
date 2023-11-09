export interface Pagination {
    order?: string;
    limit?: number;
    page?: number;
}
export interface CreateEndDeviceISUserPayload {
    end_device: {
        ids: {
            join_eui?: string;
            dev_eui?: string;
            device_id: string;
            dev_addr?: string;
            application_ids: {
                application_id: string;
            };
        };
        version_ids?: {
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
}
export interface CreateEndDeviceISPayload {
    end_device: {
        ids: {
            join_eui?: string;
            dev_eui?: string;
            device_id: string;
            dev_addr?: string;
            application_ids: {
                application_id: string;
            };
        };
        version_ids?: {
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
export interface CreateEndDeviceIS {
    ids: {
        join_eui: string;
        dev_eui: string;
        device_id: string;
        dev_addr: string;
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
    lora_alliance_profile_ids: {
        vendor_id: number;
        vendor_profile_id: number;
    };
}
export interface SetEndDeviceJSUserPayload {
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
    created_at: any;
    updated_at: any;
    network_server_address: string;
    application_server_address: string;
    root_keys: {
        app_key: {
            key: string;
        };
    };
}
export interface SetEndDeviceNSUserPayload {
    end_device: {
        version_ids?: {
            brand_id?: string;
            model_id?: string;
            hardware_version?: string;
            firmware_version?: string;
            band_id?: string;
        };
        frequency_plan_id: string;
        supports_join: boolean;
        supports_class_c?: boolean;
        supports_class_b?: boolean;
        multicast?: boolean;
        lorawan_version: string;
        lorawan_phy_version: string;
        mac_settings?: {
            class_c_timeout?: string;
            supports_32_bit_f_cnt?: boolean;
        };
        ids: {
            join_eui?: string;
            dev_eui?: string;
            device_id: string;
            dev_addr?: string;
            application_ids: {
                application_id: string;
            };
        };
        session?: {
            dev_addr?: string;
            keys?: {
                f_nwk_s_int_key?: {
                    key?: string;
                };
            };
        };
        mac_state?: {
            current_parameters?: {
                rx2_data_rate_index?: string;
            };
            desired_parameters?: {
                rx2_data_rate_index?: string;
            };
        };
    };
}
export interface SetEndDeviceNSPayload {
    end_device: {
        version_ids?: {
            brand_id?: string;
            model_id?: string;
            hardware_version?: string;
            firmware_version?: string;
            band_id?: string;
        };
        frequency_plan_id: string;
        supports_join: boolean;
        supports_class_c?: boolean;
        supports_class_b?: boolean;
        multicast?: boolean;
        lorawan_version: string;
        lorawan_phy_version: string;
        mac_settings?: {
            class_c_timeout?: string;
            supports_32_bit_f_cnt?: boolean;
        };
        ids: {
            join_eui?: string;
            dev_eui?: string;
            device_id: string;
            dev_addr?: string;
            application_ids: {
                application_id: string;
            };
        };
        session?: {
            dev_addr?: string;
            keys?: {
                f_nwk_s_int_key?: {
                    key?: string;
                };
            };
        };
        mac_state?: {
            current_parameters?: {
                rx2_data_rate_index?: string;
            };
            desired_parameters?: {
                rx2_data_rate_index?: string;
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
        dev_addr: string;
        application_ids: {
            application_id: string;
        };
    };
    created_at: any;
    updated_at: any;
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
    supports_class_b: boolean;
    multicast: boolean;
    lorawan_version: string;
    lorawan_phy_version: string;
    mac_settings: {
        class_c_timeout: string;
        supports_32_bit_f_cnt: boolean;
    };
    session: {
        dev_addr: string;
        keys: {
            f_nwk_s_int_key: {
                key: string;
            };
        };
    };
    mac_state: {
        current_parameters: {
            rx2_data_rate_index: number;
        };
        desired_parameters: {
            rx2_data_rate_index: number;
        };
    };
}
export interface SetEndDeviceASUserPayload {
    end_device: {
        version_ids?: {
            brand_id?: string;
            model_id?: string;
            hardware_version?: string;
            firmware_version?: string;
            band_id?: string;
        };
        formatters?: {
            up_formatter?: string;
            down_formatter?: string;
        };
        ids: {
            join_eui?: string;
            dev_eui?: string;
            device_id: string;
            dev_addr?: string;
            application_ids: {
                application_id: string;
            };
        };
        session?: {
            dev_addr?: string;
            keys?: {
                app_s_key?: {
                    key?: string;
                };
            };
        };
    };
}
export interface SetEndDeviceASPayload {
    end_device: {
        version_ids?: {
            brand_id?: string;
            model_id?: string;
            hardware_version?: string;
            firmware_version?: string;
            band_id?: string;
        };
        formatters?: {
            up_formatter?: string;
            down_formatter?: string;
        };
        ids: {
            join_eui?: string;
            dev_eui?: string;
            device_id: string;
            dev_addr?: string;
            application_ids: {
                application_id: string;
            };
        };
        session?: {
            dev_addr?: string;
            keys?: {
                app_s_key?: {
                    key?: string;
                };
            };
        };
    };
    field_mask: {
        paths: string[];
    };
}
export interface SetEndDeviceAS {
    ids: {
        device_id: string;
        application_ids: {
            application_id: string;
        };
        dev_eui: string;
        join_eui: string;
        dev_addr: string;
    };
    created_at: any;
    updated_at: any;
    version_ids: {
        brand_id: string;
        model_id: string;
        hardware_version: string;
        firmware_version: string;
        band_id: string;
    };
    formatters: {
        up_formatter: string;
        down_formatter: string;
    };
    session: {
        dev_addr: string;
        keys: {
            app_s_key: {
                key?: string;
            };
        };
    };
}
export interface GetEndDeviceInfoUserPayload {
    device_id: string;
}
export interface GetEndDeviceInfoIS {
    ids: {
        device_id: string;
        application_ids: {
            application_id: string;
        };
        dev_eui: string;
        join_eui: string;
        dev_addr: string;
    };
    name: string;
    description: string;
    version_ids: {
        brand_id: string;
        model_id: string;
        hardware_version: string;
        firmware_version: string;
        band_id: string;
    };
    last_seen_at: any;
    created_at: any;
    updated_at: any;
    network_server_address: string;
    application_server_address: string;
    join_server_address: string;
    locations: {
        [key: string]: {
            latitude: number;
            longitude: number;
            altitude: number;
            accuracy: number;
            source: string;
        };
    };
    claim_authentication_code: {
        value: string;
        valid_from: any;
        valid_to: any;
    };
    attributes: {
        [key: string]: string;
    };
}
export interface GetEndDeviceInfoJS {
    ids: {
        device_id: string;
        application_ids: {
            application_id: string;
        };
        dev_eui: string;
        join_eui: string;
        dev_addr: string;
    };
    resets_join_nonces: boolean;
    network_server_address: string;
    application_server_address: string;
    net_id: string;
    application_server_id: string;
    application_server_kek_label: string;
    network_server_kek_label: string;
    root_keys: {
        app_key: {
            key: string;
        };
    };
}
export interface GetEndDeviceInfoNS {
    ids: {
        device_id: string;
        application_ids: {
            application_id: string;
        };
        dev_eui: string;
        join_eui: string;
        dev_addr: string;
    };
    version_ids: {
        brand_id: string;
        model_id: string;
        hardware_version: string;
        firmware_version: string;
        band_id: string;
    };
    frequency_plan_id: string;
    mac_settings: MacSettings;
    supports_class_b: boolean;
    supports_class_c: boolean;
    supports_join: boolean;
    lorawan_version: string;
    lorawan_phy_version: string;
    multicast: boolean;
    session: Session;
    pending_session: Session;
}
export interface GetEndDeviceInfoAS {
    ids: {
        device_id: string;
        application_ids: {
            application_id: string;
        };
        dev_eui: string;
        join_eui: string;
        dev_addr: string;
    };
    version_ids: {
        brand_id: string;
        model_id: string;
        hardware_version: string;
        firmware_version: string;
        band_id: string;
    };
    formatters: {
        up_formatter: string;
        down_formatter: string;
    };
    skip_payload_crypto_override: boolean;
    session: Session;
    pending_session: Session;
}
export interface GetEndDeviceListUserPayload extends Pagination {
}
export interface GetEndDeviceList {
    end_devices: GetEndDeviceInfoIS[];
}
export interface ApplicationDownlink {
    session_key_id?: string;
    f_port?: number;
    f_cnt?: number;
    frm_payload?: string;
    decoded_payload?: any;
    decoded_payload_warnings?: string[];
    confirmed?: boolean;
    class_b_c?: {
        gateways?: {
            gateway_ids?: {
                gateway_id?: string;
                antenna_index?: number;
                group_index?: number;
            };
            antenna_index?: number;
            group_index?: number;
        }[];
        absolute_time?: any;
    };
    priority?: string;
    correlation_ids?: string[];
}
export interface MacSettings {
    class_b_timeout?: string;
    ping_slot_periodicity?: {
        value: string;
    };
    ping_slot_data_rate_index?: {
        value: string;
    };
    ping_slot_frequency?: {
        value: number;
    };
    beacon_frequency?: {
        value: number;
    };
    class_c_timeout?: string;
    rx1_delay?: {
        value: string;
    };
    rx1_data_rate_offset?: {
        value: string;
    };
    rx2_data_rate_index?: {
        value: string;
    };
    rx2_frequency?: {
        value: number;
    };
    factory_preset_frequencies?: number[];
    max_duty_cycle?: {
        value: string;
    };
    supports_32_bit_f_cnt?: {
        value: boolean;
    };
    use_adr?: {
        value: boolean;
    };
    adr_margin?: number;
    resets_f_cnt?: {
        value: boolean;
    };
    status_time_periodicity?: string;
    status_count_periodicity?: number;
    desired_rx1_delay?: {
        value: string;
    };
    desired_rx1_data_rate_offset?: {
        value: string;
    };
    desired_rx2_data_rate_index?: {
        value: string;
    };
    desired_rx2_frequency?: {
        value: number;
    };
    desired_max_duty_cycle?: {
        value: string;
    };
    desired_adr_ack_limit_exponent?: {
        value: string;
    };
    desired_adr_ack_delay_exponent?: {
        value: string;
    };
    desired_ping_slot_data_rate_index?: {
        value: string;
    };
    desired_ping_slot_frequency?: {
        value: number;
    };
    desired_beacon_frequency?: {
        value: number;
    };
    desired_max_eirp?: {
        value: string;
    };
    class_b_c_downlink_interval?: string;
    uplink_dwell_time?: {
        value: boolean;
    };
    downlink_dwell_time?: {
        value: boolean;
    };
    adr?: {
        static?: {
            data_rate_index?: string;
            tx_power_index?: number /******* uint32 */;
            nb_trans?: number /******* uint32 */;
        };
        dynamic?: {
            margin?: number;
            min_data_rate_index?: {
                value: string;
            };
            max_data_rate_index?: {
                value: string;
            };
            min_tx_power_index?: number;
            max_tx_power_index?: number;
            min_nb_trans?: number;
            max_nb_trans?: number;
        };
        disabled?: {};
    };
    schedule_downlinks?: {
        value: boolean;
    };
}
export interface MacParameters {
    max_eirp?: number;
    adr_data_rate_index?: string;
    adr_tx_power_index?: number;
    adr_nb_trans?: number;
    adr_ack_limit?: number;
    adr_ack_delay?: number;
    rx1_delay?: string;
    rx1_data_rate_offset?: string;
    rx2_data_rate_index?: string;
    rx2_frequency?: number;
    max_duty_cycle?: string;
    rejoin_time_periodicity?: string;
    rejoin_count_periodicity?: string;
    ping_slot_frequency?: number;
    ping_slot_data_rate_index?: string;
    beacon_frequency?: number;
    channels: {
        uplink_frequency?: number;
        downlink_frequency?: number;
        min_data_rate_index?: string;
        max_data_rate_index?: string;
        enable_uplink?: boolean;
    }[];
    uplink_dwell_time?: {
        value: boolean;
    };
    downlink_dwell_time?: {
        value: boolean;
    };
    adr_ack_limit_exponent?: {
        value: string;
    };
    adr_ack_delay_exponent?: {
        value: string;
    };
    ping_slot_data_rate_index_value?: {
        value: string;
    };
}
export interface MacCommand {
    cid?: string;
    raw_payload?: string;
    reset_ind?: {
        minor_version: string;
    };
    reset_conf?: {
        minor_version: string;
    };
    link_check_ans?: {
        margin?: number;
        gateway_count?: number;
    };
    link_adr_req?: {
        data_rate_index?: string;
        tx_power_index?: number;
        channel_mask?: boolean[];
        channel_mask_control?: number;
        nb_trans?: number;
    };
    link_adr_ans?: {
        channel_mask_ack?: boolean;
        data_rate_index_ack?: boolean;
        tx_power_index_ack?: boolean;
    };
    duty_cycle_req?: {
        max_duty_cycle: string;
    };
    rx_param_setup_req?: {
        rx2_data_rate_index?: string;
        rx1_data_rate_offset?: string;
        rx2_frequency?: number;
    };
    rx_param_setup_ans?: {
        rx2_data_rate_index_ack?: boolean;
        rx1_data_rate_offset_ack?: boolean;
        rx2_frequency_ack?: boolean;
    };
    dev_status_ans?: {
        battery?: number;
        margin?: number;
    };
    new_channel_req?: {
        channel_index?: number;
        frequency?: number;
        min_data_rate_index?: string;
        max_data_rate_index?: string;
    };
    new_channel_ans?: {
        frequency_ack?: boolean;
        data_rate_ack?: boolean;
    };
    dl_channel_req?: {
        channel_index?: number;
        frequency?: number;
    };
    dl_channel_ans?: {
        channel_index_ack?: boolean;
        frequency_ack?: boolean;
    };
    rx_timing_setup_req?: {
        delay: string;
    };
    tx_param_setup_req?: {
        max_eirp_index?: string;
        uplink_dwell_time?: boolean;
        downlink_dwell_time?: boolean;
    };
    rekey_ind?: {
        minor_version: string;
    };
    rekey_conf?: {
        minor_version: string;
    };
    adr_param_setup_req?: {
        adr_ack_limit_exponent?: string;
        adr_ack_delay_exponent?: string;
    };
    device_time_ans?: {
        time: any;
    };
    force_rejoin_req?: {
        rejoin_type?: string;
        data_rate_index?: string;
        max_retries?: number;
        period_exponent?: string;
    };
    rejoin_param_setup_req?: {
        max_count_exponent?: string;
        max_time_exponent?: string;
    };
    rejoin_param_setup_ans?: {
        max_time_exponent_ack: boolean;
    };
    ping_slot_info_req?: {
        period: string;
    };
    ping_slot_channel_req?: {
        frequency?: number;
        data_rate_index?: string;
    };
    ping_slot_channel_ans?: {
        frequency_ack?: boolean;
        data_rate_index_ack?: boolean;
    };
    beacon_timing_ans?: {
        delay?: number;
        channel_index?: number;
    };
    beacon_freq_req?: {
        frequency: number;
    };
    beacon_freq_ans?: {
        frequency_ack: boolean;
    };
    device_mode_ind?: {
        class: string;
    };
    device_mode_conf?: {
        class: string;
    };
}
export interface MacState {
    current_parameters?: MacParameters;
    desired_parameters?: MacParameters;
    device_class?: string;
    lorawan_version?: string;
    last_confirmed_downlink_at?: any;
    last_dev_status_f_cnt_up?: number;
    ping_slot_periodicity?: {
        value: string;
    };
    pending_application_downlink?: ApplicationDownlink;
    queued_responses?: MacCommand[];
    pending_requests?: MacCommand[];
    queued_join_accept?: {
        payload?: string;
        request?: {
            downlink_settings?: {
                rx1_dr_offset?: string;
                rx2_dr?: string;
                opt_neg?: boolean;
            };
            rx_delay?: string;
            cf_list?: {
                type?: string;
                freq?: number[];
                ch_masks?: boolean[];
            };
        };
        keys?: {
            session_key_id?: string;
            f_nwk_s_int_key?: KeyEnvelope;
            s_nwk_s_int_key?: KeyEnvelope;
            nwk_s_enc_key?: KeyEnvelope;
            app_s_key?: KeyEnvelope;
        };
        correlation_ids?: string[];
        dev_addr?: string;
        net_id?: string;
    };
    pending_join_request?: {
        downlink_settings?: {
            rx1_dr_offset?: string;
            rx2_dr?: string;
            opt_neg?: boolean;
        };
        rx_delay?: string;
        cf_list?: {
            type?: string;
            freq?: number[];
            ch_masks?: boolean[];
        };
    };
    rx_windows_available?: boolean;
    recent_uplinks?: {
        payload?: {
            m_hdr: {
                m_type?: string;
                major?: string;
            };
            mic?: string;
            mac_payload?: {
                f_hdr?: {
                    dev_addr?: string;
                    f_ctrl?: {
                        adr?: boolean;
                        adr_ack_req?: boolean;
                        ack?: boolean;
                        f_pending?: boolean;
                        class_b?: boolean;
                    };
                    f_cnt?: number;
                    f_opts?: string;
                };
                f_port?: number;
                frm_payload?: string;
                decoded_payload?: any;
                full_f_cnt?: number;
            };
            join_request_payload?: {
                join_eui?: string;
                dev_eui?: string;
                dev_nonce?: string;
            };
            join_accept_payload?: {
                encrypted?: string;
                join_nonce?: string;
                net_id?: string;
                dev_addr?: string;
                dl_settings?: {
                    rx1_dr_offset?: string;
                    rx2_dr?: string;
                    opt_neg?: boolean;
                };
                rx_delay?: string;
                cf_list?: {
                    type?: string;
                    freq?: number[];
                    ch_masks?: boolean[];
                };
            };
            rejoin_request_payload?: {
                rejoin_type?: string;
                net_id?: string;
                join_eui?: string;
                dev_eui?: string;
                rejoin_cnt?: number;
            };
        };
        settings?: {
            data_rate?: {
                lora?: {
                    bandwidth?: number;
                    spreading_factor?: number;
                    coding_rate?: string;
                };
                fsk?: {
                    bit_rate: number;
                };
                lrfhss?: {
                    modulation_type?: number;
                    operating_channel_width?: number;
                    coding_rate?: string;
                };
            };
        };
        rx_metadata?: {
            gateway_ids?: {
                gateway_id?: string;
                eui?: string;
            };
            channel_rssi?: number;
            snr?: number;
            downlink_path_constraint?: string;
            uplink_token?: string;
            packet_broker?: {};
        }[];
        received_at?: any;
        correlation_ids?: string;
        device_channel_index?: number;
    }[];
    recent_downlinks?: {
        payload?: {
            m_hdr?: {
                m_type: string;
            };
            mac_payload?: {
                f_port?: number;
                full_f_cnt?: number;
            };
        };
        correlation_ids?: string[];
    }[];
    last_network_initiated_downlink_at?: any;
    rejected_adr_data_rate_indexes?: string[];
    rejected_adr_tx_power_indexes?: number[];
    rejected_frequencies?: number[];
    last_downlink_at?: any;
    rejected_data_rate_ranges?: {
        [key: number]: string;
    };
    last_adr_change_f_cnt_up?: number;
    recent_mac_command_identifiers?: string[];
}
export interface KeyEnvelope {
    key?: string;
    kek_label?: string;
    encrypted_key?: string;
}
export interface Session {
    dev_addr?: string;
    keys?: {
        session_key_id?: string;
        f_nwk_s_int_key?: KeyEnvelope;
        s_nwk_s_int_key?: KeyEnvelope;
        nwk_s_enc_key?: KeyEnvelope;
        app_s_key?: KeyEnvelope;
    };
    last_f_cnt_up?: number;
    last_n_f_cnt_down?: number;
    last_a_f_cnt_down?: number;
    last_conf_f_cnt_down?: number;
    started_at?: any;
    queued_application_downlinks?: ApplicationDownlink[];
}
export interface UpdateEndDeviceUserPayload {
    end_device: {
        ids: {
            device_id: string;
            application_ids?: {
                application_id: string;
            };
            dev_eui?: string;
            join_eui?: string;
            dev_addr?: string;
        };
        name?: string;
        description?: string;
        attributes?: {
            [key: string]: string;
        };
        version_ids?: {
            brand_id?: string;
            model_id?: string;
            hardware_version?: string;
            firmware_version?: string;
            band_id?: string;
        };
        service_profile_id?: string;
        network_server_address?: string;
        network_server_kek_label?: string;
        application_server_address?: string;
        application_server_kek_label?: string;
        application_server_id?: string;
        join_server_address?: string;
        locations?: {
            [key: string]: {
                latitude: number;
                longitude: number;
                altitude: number;
                accuracy?: number;
                source?: string;
            };
        };
        picture?: {
            embedded?: {
                mime_type?: string;
                data?: string; /****************** bytes */
            };
            sizes?: {
                [key: number]: string;
            } /************** map of uint32 to string */;
        };
        supports_class_b?: boolean;
        supports_class_c?: boolean;
        lorawan_version?: string;
        lorawan_phy_version?: string;
        frequency_plan_id?: string;
        min_frequency?: number;
        max_frequency?: number;
        supports_join?: boolean;
        resets_join_nonces?: boolean;
        root_keys?: {
            root_key_id?: string;
            app_key?: KeyEnvelope;
            nwk_key?: KeyEnvelope;
        };
        net_id?: string;
        mac_settings?: MacSettings;
        mac_state?: MacState;
        pending_mac_state?: MacState;
        session?: Session;
        pending_session?: Session;
        last_dev_nonce?: number;
        used_dev_nonces?: number[];
        last_join_nonce?: number;
        last_rj_count_0?: number;
        last_rj_count_1?: number;
        last_dev_status_received_at?: any;
        power_state?: string;
        battery_percentage?: number;
        downlink_margin?: number;
        queued_application_downlinks?: ApplicationDownlink[];
        formatters?: {
            up_formatter?: string;
            up_formatter_parameter?: string;
            down_formatter?: string;
            down_formatter_parameter?: string;
        };
        provisioner_id?: string;
        provisioning_data?: any;
        multicast?: boolean;
        claim_authentication_code?: {
            value?: string;
            valid_from?: any;
            valid_to?: any;
        };
        skip_payload_crypto?: boolean;
        skip_payload_crypto_override?: boolean;
        serial_number?: string;
        lora_alliance_profile_ids?: {
            vendor_id?: number;
            vendor_profile_id?: number;
        };
    };
}
export interface UpdateEndDevicePayload {
    end_device: {
        ids: {
            device_id: string;
            application_ids?: {
                application_id: string;
            };
            dev_eui?: string;
            join_eui?: string;
            dev_addr?: string;
        };
        name?: string;
        description?: string;
        attributes?: {
            [key: string]: string;
        };
        version_ids?: {
            brand_id?: string;
            model_id?: string;
            hardware_version?: string;
            firmware_version?: string;
            band_id?: string;
        };
        service_profile_id?: string;
        network_server_address?: string;
        network_server_kek_label?: string;
        application_server_address?: string;
        application_server_kek_label?: string;
        application_server_id?: string;
        join_server_address?: string;
        locations?: {
            [key: string]: {
                latitude: number;
                longitude: number;
                altitude: number;
                accuracy?: number;
                source?: string;
            };
        };
        picture?: {
            embedded?: {
                mime_type?: string;
                data?: string; /****************** bytes */
            };
            sizes?: {
                [key: number]: string;
            } /************** map of uint32 to string */;
        };
        supports_class_b?: boolean;
        supports_class_c?: boolean;
        lorawan_version?: string;
        lorawan_phy_version?: string;
        frequency_plan_id?: string;
        min_frequency?: number;
        max_frequency?: number;
        supports_join?: boolean;
        resets_join_nonces?: boolean;
        root_keys?: {
            root_key_id?: string;
            app_key?: KeyEnvelope;
            nwk_key?: KeyEnvelope;
        };
        net_id?: string;
        mac_settings?: MacSettings;
        mac_state?: MacState;
        pending_mac_state?: MacState;
        session?: Session;
        pending_session?: Session;
        last_dev_nonce?: number;
        used_dev_nonces?: number[];
        last_join_nonce?: number;
        last_rj_count_0?: number;
        last_rj_count_1?: number;
        last_dev_status_received_at?: any;
        power_state?: string;
        battery_percentage?: number;
        downlink_margin?: number;
        queued_application_downlinks?: ApplicationDownlink[];
        formatters?: {
            up_formatter?: string;
            up_formatter_parameter?: string;
            down_formatter?: string;
            down_formatter_parameter?: string;
        };
        provisioner_id?: string;
        provisioning_data?: any;
        multicast?: boolean;
        claim_authentication_code?: {
            value?: string;
            valid_from?: any;
            valid_to?: any;
        };
        skip_payload_crypto?: boolean;
        skip_payload_crypto_override?: boolean;
        serial_number?: string;
        lora_alliance_profile_ids?: {
            vendor_id?: number;
            vendor_profile_id?: number;
        };
    };
    field_mask: {
        paths: string[];
    };
}
export interface UpdateEndDevice {
    ids: {
        device_id: string;
        application_ids: {
            application_id: string;
        };
        dev_eui: string;
        join_eui: string;
        dev_addr?: string;
    };
    created_at: any;
    updated_at: any;
    name?: string;
    description?: string;
    attributes?: {
        [key: string]: string;
    };
    version_ids?: {
        brand_id?: string;
        model_id?: string;
        hardware_version?: string;
        firmware_version?: string;
        band_id?: string;
    };
    service_profile_id?: string;
    network_server_address?: string;
    network_server_kek_label?: string;
    application_server_address?: string;
    application_server_kek_label?: string;
    application_server_id?: string;
    join_server_address?: string;
    locations?: {
        [key: string]: {
            latitude: number;
            longitude: number;
            altitude: number;
            accuracy?: number;
            source?: string;
        };
    };
    picture?: {
        embedded?: {
            mime_type?: string;
            data?: string; /****************** bytes */
        };
        sizes?: {
            [key: number]: string;
        } /************** map of uint32 to string */;
    };
    supports_class_b?: boolean;
    supports_class_c?: boolean;
    lorawan_version?: string;
    lorawan_phy_version?: string;
    frequency_plan_id?: string;
    min_frequency?: number;
    max_frequency?: number;
    supports_join?: boolean;
    resets_join_nonces?: boolean;
    root_keys?: {
        root_key_id?: string;
        app_key?: KeyEnvelope;
        nwk_key?: KeyEnvelope;
    };
    net_id?: string;
    mac_settings?: MacSettings;
    mac_state?: MacState;
    pending_mac_state?: MacState;
    session?: Session;
    pending_session?: Session;
    last_dev_nonce?: number;
    used_dev_nonces?: number[];
    last_join_nonce?: number;
    last_rj_count_0?: number;
    last_rj_count_1?: number;
    last_dev_status_received_at?: any;
    power_state?: string;
    battery_percentage?: number;
    downlink_margin?: number;
    queued_application_downlinks?: ApplicationDownlink[];
    formatters?: {
        up_formatter?: string;
        up_formatter_parameter?: string;
        down_formatter?: string;
        down_formatter_parameter?: string;
    };
    provisioner_id?: string;
    provisioning_data?: any;
    multicast?: boolean;
    claim_authentication_code?: {
        value?: string;
        valid_from?: any;
        valid_to?: any;
    };
    skip_payload_crypto?: boolean;
    skip_payload_crypto_override?: boolean;
    activated_at?: any;
    last_seen_at?: any;
    serial_number?: string;
    lora_alliance_profile_ids?: {
        vendor_id?: number;
        vendor_profile_id?: number;
    };
}
export interface deleteEndDeviceISUserPayload {
    device_id: string;
}
export interface deleteEndDeviceJSUserPayload extends deleteEndDeviceISUserPayload {
}
export interface deleteEndDeviceNSUserPayload extends deleteEndDeviceISUserPayload {
}
export interface deleteEndDeviceASUserPayload extends deleteEndDeviceISUserPayload {
}
export interface issueDevEUI {
    dev_eui: string;
}
export interface downlinkQueueUserPayload {
    device_id: string;
    payload: any;
    payload_type: string;
    port_no: number;
    request_type: string;
    gateway_id?: string[];
    confirmed_downlink: boolean;
}
export interface downlinkQueue {
    end_device_ids?: {
        device_id?: string;
        application_ids?: {
            application_id?: string;
        };
        dev_eui?: string;
        join_eui?: string;
        dev_addr?: string;
    };
    downlinks: {
        session_key_id?: string;
        f_port: number;
        f_cnt?: number;
        frm_payload: any;
        decoded_payload?: any;
        decoded_payload_warnings?: string[];
        confirmed: boolean;
        class_b_c?: {
            gateways?: {
                gateway_ids?: {
                    gateway_id?: string;
                    eui?: string;
                };
                antenna_index?: number;
                group_index?: number;
            }[];
            absolute_time?: any;
        };
        priority?: string;
        correlation_ids?: string[];
    }[];
}
export interface subscribeDownLinkEventPayload {
    device_id?: string;
    down_type: string;
    host: string;
    port: number;
    username: string;
    callback_downlink_event: (data: any) => void;
    callback_subscribe_error: (data: any) => void;
    callback_subscribe_disconnect: (data: any) => void;
}
export interface subscribeUpLinkEventPayload {
    device_id?: string;
    host: string;
    port: number;
    username: string;
    callback_uplink_event: (data: any) => void;
    callback_subscribe_error: (data: any) => void;
    callback_subscribe_disconnect: (data: any) => void;
}
