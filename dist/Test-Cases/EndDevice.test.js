"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const EndDevice_1 = require("../EndDevice");
const EndDeviceAPI_data_1 = require("../Data/EndDeviceAPI-data");
const device = new EndDevice_1.EndDevice('meet69', EndDeviceAPI_data_1.config_T);
describe('No Config Errors', () => {
    test('Correct User ID', () => __awaiter(void 0, void 0, void 0, function* () {
        const appFailed = new EndDevice_1.EndDevice('meet69', EndDeviceAPI_data_1.config_T);
        expect(appFailed).toHaveProperty('APPLICATION_ID', 'meet69');
    }));
    test('API Key Given', () => __awaiter(void 0, void 0, void 0, function* () {
        const appFailed = new EndDevice_1.EndDevice('meetsavaj', EndDeviceAPI_data_1.config_T);
        expect(appFailed).toHaveProperty('API_KEY', 'NNSXS.BGVLXTTMUZDIIFY7EDSKFKB3R2AROYP7XDKUYOQ.SGAC24PFU6KMGEYUOQ3IDFYIUF55C4ZZQN4E2DNFWYHGY7EKPTHQ');
    }));
});
describe('Config Errors', () => {
    test('User ID', () => __awaiter(void 0, void 0, void 0, function* () {
        const appFailed = new EndDevice_1.EndDevice('meethgsvbdgas', EndDeviceAPI_data_1.config_F);
        expect(appFailed).not.toHaveProperty('APPLICATION_ID', 'meet69');
    }));
    test('API Key Missing', () => __awaiter(void 0, void 0, void 0, function* () {
        const appFailed = new EndDevice_1.EndDevice('meetsavaj', EndDeviceAPI_data_1.config_F);
        expect(appFailed).not.toHaveProperty('API_KEY', 'NNSXS.BGVLXTTMUZDIIFY7EDSKFKB3R2AROYP7XDKUYOQ.SGAC24PFU6KMGEYUOQ3IDFYIUF55C4ZZQN4E2DNFWYHGY7EKPTHQ');
    }));
});
describe('EndDevice Creation', () => {
    test('EndDevice Created Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield device.createEndDeviceIS(EndDeviceAPI_data_1.createEndDeviceISUserPayload);
        expect(response.ids.dev_eui).toBe(EndDeviceAPI_data_1.createEndDeviceISUserPayload.end_device.ids.dev_eui);
        expect(response.ids.join_eui).toBe(EndDeviceAPI_data_1.createEndDeviceISUserPayload.end_device.ids.join_eui);
        expect(response.ids.device_id).toBe(EndDeviceAPI_data_1.createEndDeviceISUserPayload.end_device.ids.device_id);
        expect(response.version_ids.band_id).toBe(EndDeviceAPI_data_1.createEndDeviceISUserPayload.end_device.version_ids.band_id);
        expect(response.version_ids.brand_id).toBe(EndDeviceAPI_data_1.createEndDeviceISUserPayload.end_device.version_ids.brand_id);
        expect(response.version_ids.firmware_version).toBe(EndDeviceAPI_data_1.createEndDeviceISUserPayload.end_device.version_ids.firmware_version);
        expect(response.version_ids.hardware_version).toBe(EndDeviceAPI_data_1.createEndDeviceISUserPayload.end_device.version_ids.hardware_version);
        expect(response.version_ids.model_id).toBe(EndDeviceAPI_data_1.createEndDeviceISUserPayload.end_device.version_ids.model_id);
        expect(response.network_server_address).toBe(EndDeviceAPI_data_1.createEndDeviceISUserPayload.end_device.network_server_address);
        expect(response.application_server_address).toBe(EndDeviceAPI_data_1.createEndDeviceISUserPayload.end_device.application_server_address);
        expect(response.join_server_address).toBe(EndDeviceAPI_data_1.createEndDeviceISUserPayload.end_device.join_server_address);
    }));
});
describe('EndDevice Creation Errors', () => {
    test('Error, Already Created', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield device.createEndDeviceIS(EndDeviceAPI_data_1.createEndDeviceISUserPayload);
        }
        catch (error) {
            expect(error).toHaveProperty('code', 6);
        }
    }));
});
describe('Set EndDeviceJS', () => {
    test('EndDeviceJS Set Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield device.setEndDeviceJS(EndDeviceAPI_data_1.setEndDeviceJSUserPayload);
        expect(response.ids.dev_eui).toBe(EndDeviceAPI_data_1.setEndDeviceJSUserPayload.end_device.ids.dev_eui);
        expect(response.ids.join_eui).toBe(EndDeviceAPI_data_1.setEndDeviceJSUserPayload.end_device.ids.join_eui);
        expect(response.ids.device_id).toBe(EndDeviceAPI_data_1.setEndDeviceJSUserPayload.end_device.ids.device_id);
        expect(response.network_server_address).toBe(EndDeviceAPI_data_1.setEndDeviceJSUserPayload.end_device.network_server_address);
        expect(response.application_server_address).toBe(EndDeviceAPI_data_1.setEndDeviceJSUserPayload.end_device.application_server_address);
        expect(response.root_keys.app_key.key).toBe(EndDeviceAPI_data_1.setEndDeviceJSUserPayload.end_device.root_keys.app_key.key);
    }));
});
describe('Set EndDeviceJS Errors', () => {
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const device = new EndDevice_1.EndDevice('meet5jhbjh', EndDeviceAPI_data_1.config_T);
            const response = yield device.setEndDeviceJS(EndDeviceAPI_data_1.setEndDeviceJSUserPayload);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('Set EndDeviceNS', () => {
    test('EndDeviceNS Set Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield device.setEndDeviceNS(EndDeviceAPI_data_1.setEndDeviceNSUserPayload);
        expect(response.ids.dev_eui).toBe(EndDeviceAPI_data_1.setEndDeviceNSUserPayload.end_device.ids.dev_eui);
        expect(response.ids.join_eui).toBe(EndDeviceAPI_data_1.setEndDeviceNSUserPayload.end_device.ids.join_eui);
        expect(response.ids.device_id).toBe(EndDeviceAPI_data_1.setEndDeviceNSUserPayload.end_device.ids.device_id);
        expect(response.version_ids.brand_id).toBe(EndDeviceAPI_data_1.setEndDeviceNSUserPayload.end_device.version_ids.brand_id);
        expect(response.version_ids.model_id).toBe(EndDeviceAPI_data_1.setEndDeviceNSUserPayload.end_device.version_ids.model_id);
        expect(response.version_ids.hardware_version).toBe(EndDeviceAPI_data_1.setEndDeviceNSUserPayload.end_device.version_ids.hardware_version);
        expect(response.version_ids.firmware_version).toBe(EndDeviceAPI_data_1.setEndDeviceNSUserPayload.end_device.version_ids.firmware_version);
        expect(response.version_ids.band_id).toBe(EndDeviceAPI_data_1.setEndDeviceNSUserPayload.end_device.version_ids.band_id);
        expect(response.frequency_plan_id).toBe(EndDeviceAPI_data_1.setEndDeviceNSUserPayload.end_device.frequency_plan_id);
        expect(response.supports_join).toEqual(true);
        expect(response.supports_class_c).toEqual(true);
        expect(response.lorawan_version).toBe(EndDeviceAPI_data_1.setEndDeviceNSUserPayload.end_device.lorawan_version);
        expect(response.lorawan_phy_version).toBe(EndDeviceAPI_data_1.setEndDeviceNSUserPayload.end_device.lorawan_phy_version);
        expect(response.mac_settings.class_c_timeout).toBe(EndDeviceAPI_data_1.setEndDeviceNSUserPayload.end_device.mac_settings.class_c_timeout);
        expect(response.mac_settings.supports_32_bit_f_cnt).toEqual(true);
    }));
});
describe('Set EndDeviceNS Errors', () => {
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const device = new EndDevice_1.EndDevice('meet5jhbjh', EndDeviceAPI_data_1.config_T);
            const response = yield device.setEndDeviceNS(EndDeviceAPI_data_1.setEndDeviceNSUserPayload);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('Set EndDeviceAS', () => {
    test('EndDeviceAS Set Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield device.setEndDeviceAS(EndDeviceAPI_data_1.setEndDeviceASUserPayload);
        expect(response.ids.dev_eui).toBe(EndDeviceAPI_data_1.setEndDeviceASUserPayload.end_device.ids.dev_eui);
        expect(response.ids.join_eui).toBe(EndDeviceAPI_data_1.setEndDeviceASUserPayload.end_device.ids.join_eui);
        expect(response.ids.device_id).toBe(EndDeviceAPI_data_1.setEndDeviceASUserPayload.end_device.ids.device_id);
        expect(response.version_ids.brand_id).toBe(EndDeviceAPI_data_1.setEndDeviceASUserPayload.end_device.version_ids.brand_id);
        expect(response.version_ids.model_id).toBe(EndDeviceAPI_data_1.setEndDeviceASUserPayload.end_device.version_ids.model_id);
        expect(response.version_ids.hardware_version).toBe(EndDeviceAPI_data_1.setEndDeviceASUserPayload.end_device.version_ids.hardware_version);
        expect(response.version_ids.firmware_version).toBe(EndDeviceAPI_data_1.setEndDeviceASUserPayload.end_device.version_ids.firmware_version);
        expect(response.version_ids.band_id).toBe(EndDeviceAPI_data_1.setEndDeviceASUserPayload.end_device.version_ids.band_id);
        expect(response.formatters.up_formatter).toBe(EndDeviceAPI_data_1.setEndDeviceASUserPayload.end_device.formatters.up_formatter);
        expect(response.formatters.down_formatter).toBe(EndDeviceAPI_data_1.setEndDeviceASUserPayload.end_device.formatters.down_formatter);
    }));
});
describe('Set EndDeviceAS Errors', () => {
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const device = new EndDevice_1.EndDevice('meet5jhbjh', EndDeviceAPI_data_1.config_T);
            const response = yield device.setEndDeviceAS(EndDeviceAPI_data_1.setEndDeviceASUserPayload);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('Get EndDeviceInfoIS', () => {
    test('Getting EndDeviceInfoIS Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield device.getEndDeviceInfoIS(EndDeviceAPI_data_1.getEndDeviceInfoUserPayload_T);
        expect(response.ids.device_id).toBe(EndDeviceAPI_data_1.getEndDeviceInfoUserPayload_T.device_id);
    }));
});
describe('Get EndDeviceInfoIS Errors', () => {
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const device = new EndDevice_1.EndDevice('meet5jhbjh', EndDeviceAPI_data_1.config_T);
            const response = yield device.getEndDeviceInfoIS(EndDeviceAPI_data_1.getEndDeviceInfoUserPayload_T);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
    test('Device ID Not Found', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield device.getEndDeviceInfoIS(EndDeviceAPI_data_1.getEndDeviceInfoUserPayload_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 5);
        }
    }));
});
describe('Get EndDeviceInfoJS', () => {
    test('Getting EndDeviceInfoJS Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield device.getEndDeviceInfoJS(EndDeviceAPI_data_1.getEndDeviceInfoUserPayload_T);
        expect(response.ids.device_id).toBe(EndDeviceAPI_data_1.getEndDeviceInfoUserPayload_T.device_id);
    }));
});
describe('Get EndDeviceInfoJS Errors', () => {
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const device = new EndDevice_1.EndDevice('meet5jhbjh', EndDeviceAPI_data_1.config_T);
            const response = yield device.getEndDeviceInfoJS(EndDeviceAPI_data_1.getEndDeviceInfoUserPayload_T);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
    test('Device ID Not Found', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield device.getEndDeviceInfoJS(EndDeviceAPI_data_1.getEndDeviceInfoUserPayload_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 5);
        }
    }));
});
describe('Get EndDeviceInfoNS', () => {
    test('Getting EndDeviceInfoNS Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield device.getEndDeviceInfoNS(EndDeviceAPI_data_1.getEndDeviceInfoUserPayload_T);
        expect(response.ids.device_id).toBe(EndDeviceAPI_data_1.getEndDeviceInfoUserPayload_T.device_id);
    }));
});
describe('Get EndDeviceInfoNS Errors', () => {
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const device = new EndDevice_1.EndDevice('meet5jhbjh', EndDeviceAPI_data_1.config_T);
            const response = yield device.getEndDeviceInfoNS(EndDeviceAPI_data_1.getEndDeviceInfoUserPayload_T);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
    test('Device ID Not Found', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield device.getEndDeviceInfoNS(EndDeviceAPI_data_1.getEndDeviceInfoUserPayload_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 5);
        }
    }));
});
describe('Get EndDeviceInfoAS', () => {
    test('Getting EndDeviceInfoAS Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield device.getEndDeviceInfoAS(EndDeviceAPI_data_1.getEndDeviceInfoUserPayload_T);
        expect(response.ids.device_id).toBe(EndDeviceAPI_data_1.getEndDeviceInfoUserPayload_T.device_id);
    }));
});
describe('Get EndDeviceInfoAS Errors', () => {
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const device = new EndDevice_1.EndDevice('meet5jhbjh', EndDeviceAPI_data_1.config_T);
            const response = yield device.getEndDeviceInfoAS(EndDeviceAPI_data_1.getEndDeviceInfoUserPayload_T);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
    test('Device ID Not Found', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield device.getEndDeviceInfoAS(EndDeviceAPI_data_1.getEndDeviceInfoUserPayload_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 5);
        }
    }));
});
describe('Get EndDeviceList', () => {
    test('Getting EndDeviceList Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield device.getEndDeviceList();
        expect(response).toBeDefined();
    }));
});
describe('Get EndDeviceList Errors', () => {
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const device = new EndDevice_1.EndDevice('meet5jhbjh', EndDeviceAPI_data_1.config_T);
            const response = yield device.getEndDeviceList();
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('Update EndDevice', () => {
    test('EndDevice Updated Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield device.updateEndDevice(EndDeviceAPI_data_1.updateEndDeviceUserPayload);
        expect(response.ids.dev_eui).toBe(EndDeviceAPI_data_1.setEndDeviceASUserPayload.end_device.ids.dev_eui);
        expect(response.ids.join_eui).toBe(EndDeviceAPI_data_1.setEndDeviceASUserPayload.end_device.ids.join_eui);
        expect(response.ids.device_id).toBe(EndDeviceAPI_data_1.setEndDeviceASUserPayload.end_device.ids.device_id);
    }));
});
describe('Update EndDevice Errors', () => {
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const device = new EndDevice_1.EndDevice('meet5jhbjh', EndDeviceAPI_data_1.config_T);
            const response = yield device.updateEndDevice(EndDeviceAPI_data_1.updateEndDeviceUserPayload);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('Delete EndDeviceIS', () => {
    test('EndDevice Deleted Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield device.deleteEndDeviceIS(EndDeviceAPI_data_1.deleteEndDeviceISUserPayload);
        expect(response).not.toBeNull;
    }));
});
describe('Delete EndDeviceIS Errors', () => {
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const device = new EndDevice_1.EndDevice('meet5jhbjh', EndDeviceAPI_data_1.config_T);
            const response = yield device.deleteEndDeviceIS(EndDeviceAPI_data_1.deleteEndDeviceISUserPayload);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('Delete EndDeviceJS', () => {
    test('EndDevice Deleted Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield device.deleteEndDeviceJS(EndDeviceAPI_data_1.deleteEndDeviceJSUserPayload);
        expect(response).not.toBeNull;
    }));
});
describe('Delete EndDeviceJS Errors', () => {
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const device = new EndDevice_1.EndDevice('meet5jhbjh', EndDeviceAPI_data_1.config_T);
            const response = yield device.deleteEndDeviceJS(EndDeviceAPI_data_1.deleteEndDeviceJSUserPayload);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('Delete EndDeviceNS', () => {
    test('EndDevice Deleted Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield device.deleteEndDeviceNS(EndDeviceAPI_data_1.deleteEndDeviceNSUserPayload);
        expect(response).not.toBeNull;
    }));
});
describe('Delete EndDeviceNS Errors', () => {
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const device = new EndDevice_1.EndDevice('meet5jhbjh', EndDeviceAPI_data_1.config_T);
            const response = yield device.deleteEndDeviceNS(EndDeviceAPI_data_1.deleteEndDeviceNSUserPayload);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('Delete EndDeviceAS', () => {
    test('EndDevice Deleted Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield device.deleteEndDeviceAS(EndDeviceAPI_data_1.deleteEndDeviceASUserPayload);
        expect(response).not.toBeNull;
    }));
});
describe('Delete EndDeviceAS Errors', () => {
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const device = new EndDevice_1.EndDevice('meet5jhbjh', EndDeviceAPI_data_1.config_T);
            const response = yield device.deleteEndDeviceAS(EndDeviceAPI_data_1.deleteEndDeviceASUserPayload);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('IssueDevEUI', () => {
    test('IssueDevEUI Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield device.issueDevEUI();
        expect(response).not.toBeNull;
    }));
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
