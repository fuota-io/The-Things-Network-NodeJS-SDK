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
const index_1 = require("../Application/index");
const index_2 = require("../Organization/index");
const index_3 = require("../User/index");
const Gateway_1 = require("../Gateway");
const AppAPI_data_1 = require("../Data/AppAPI-data");
const user = new index_3.User('meetsavaj', AppAPI_data_1.config_T);
const org = new index_2.Organization('organ1', AppAPI_data_1.config_T);
const gateway = new Gateway_1.Gateway('eui-ee34634e6ada3425', AppAPI_data_1.config_T);
describe('Gateway Creation (User)', () => {
    test('Gateway Created Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield user.createGateway(AppAPI_data_1.createGatewayPayload);
        expect(response.ids.gateway_id).toBe(AppAPI_data_1.createGatewayPayload.gateway.ids.gateway_id);
        expect(response.administrative_contact.user_ids.user_id).toBe('meetsavaj');
        expect(response.technical_contact.user_ids.user_id).toBe('meetsavaj');
    }));
});
describe('Gateway (User) Creation Errors', () => {
    test('Error, Already Created', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield user.createGateway(AppAPI_data_1.createGatewayPayload);
        }
        catch (error) {
            expect(error).toHaveProperty('code', 6);
        }
    }));
});
describe('Gateway Creation (Org)', () => {
    test('Gateway Created Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield org.createGateway(AppAPI_data_1.createGatewayPayload);
        expect(response.ids.gateway_id).toBe(AppAPI_data_1.createGatewayPayload.gateway.ids.gateway_id);
        expect(response.administrative_contact.organization_ids.organization_id).toBe('organ1');
        expect(response.technical_contact.organization_ids.organization_id).toBe('organ1');
    }));
});
describe('Gateway (Org) Creation Errors', () => {
    test('Error, Already Created', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield user.createGateway(AppAPI_data_1.createGatewayPayload);
        }
        catch (error) {
            expect(error).toHaveProperty('code', 6);
        }
    }));
});
describe('Get an Gateway by ID', () => {
    test('Get An Gateway Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield gateway.getGatewayInfo();
        expect(response).toBeDefined();
    }));
});
describe('Get Gateway Errors', () => {
    test('Gateway ID Not Matching', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const gateway = new Gateway_1.Gateway('eui-ee34634e6ada3425', AppAPI_data_1.config_T);
            yield gateway.getGatewayInfo();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 5);
        }
    }));
});
describe('List Gateways', () => {
    test('Getting Gateway List Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield gateway.getGatewayList();
        expect(response).toBeDefined();
    }));
});
describe('List Gateways (User)', () => {
    test('Getting Gateway (User) List Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield user.getGatewayList();
        expect(response).toBeDefined();
    }));
});
describe('List Gateways (Org)', () => {
    test('Getting Gateway (Org) List Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield org.getGatewayList();
        expect(response).toBeDefined();
    }));
});
describe('Update Gateway', () => {
    test('Gateway Updated Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield gateway.updateGateway(AppAPI_data_1.updateGatewayPayload);
        expect(response.ids.gateway_id).toBe('eui-ee34634e6ada3425');
        expect(response.description).toEqual(AppAPI_data_1.updateGatewayPayload.gateway.description);
    }));
});
describe('Delete Gateway', () => {
    test('Gateway Deleted Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const gateway = new Gateway_1.Gateway('eui-ee34634e6ada3425', AppAPI_data_1.config_T);
        const response = yield gateway.deleteGateway();
        expect(response).not.toBeNull;
    }));
});
describe('Delete Gateway Errors', () => {
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const gateway = new Gateway_1.Gateway('eui-ee34634e6ada3425', AppAPI_data_1.config_T);
            const response = yield gateway.deleteGateway();
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('Restore Gateway', () => {
    test('Gateway Restored Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const gateway = new Gateway_1.Gateway('eui-ee34634e6ada3425', AppAPI_data_1.config_T);
        const response = yield gateway.restoreGateway();
        expect(response).not.toBeNull;
    }));
});
describe('Restore Gateway Errors', () => {
    test('Gateway ID Already Present', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const gateway = new Gateway_1.Gateway('eui-ee34634e6ada3425', AppAPI_data_1.config_T);
            yield gateway.restoreGateway();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 5);
        }
    }));
    test('Gateway ID Not Found', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const gateway = new Gateway_1.Gateway('eui-ee34634e6ada3428', AppAPI_data_1.config_T);
            yield gateway.restoreGateway();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('Purge Gateway', () => {
    test('Purge Gateway Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const gateway = new Gateway_1.Gateway('eui-ee34634e6ada3425', AppAPI_data_1.config_T);
        const response = yield gateway.purgeGateway();
        expect(response).not.toBeNull;
    }));
});
describe('Purge Gateway Errors', () => {
    test('Gateways May Only Be Purged By Admins', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const gateway = new Gateway_1.Gateway('eui-ee34634e6ada3425', AppAPI_data_1.config_T);
            yield gateway.purgeGateway();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const gateway = new Gateway_1.Gateway('eui-ee34634e6ada3428', AppAPI_data_1.config_T);
            const response = yield gateway.purgeGateway();
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('Search Gateway', () => {
    test('Searching Gateways Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield gateway.searchGateway();
        expect(response).toBeDefined();
    }));
});
describe('List Gateway Rights', () => {
    test('Listing Gateways Rights Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield gateway.getGatewayRight();
        expect(response).not.toEqual({});
    }));
});
describe('List Gateway Rights Errors', () => {
    test('ID Not Matching', () => __awaiter(void 0, void 0, void 0, function* () {
        const gateway = new Gateway_1.Gateway('eui-ee34634e6ada3428', AppAPI_data_1.config_T);
        const response = yield gateway.getGatewayRight();
        expect(response).toEqual({});
    }));
});
describe('API Key Creation', () => {
    test('API Key Created Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield gateway.createAPIKey(AppAPI_data_1.createAPIKeyPayloadForGateway);
        expect(response.name).toBe(AppAPI_data_1.createAPIKeyPayloadForGateway.name);
        expect(response.rights).toEqual(AppAPI_data_1.createAPIKeyPayloadForGateway.rights);
        expect(response).not.toHaveProperty('code', 7);
    }));
});
describe('List API Keys (Gateway)', () => {
    test('Listing API Keys Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield gateway.getAPIKeyList(AppAPI_data_1.getAPIKeyListForGateway);
        expect(response).toBeDefined();
    }));
});
describe('List API Keys Errors (Gateway)', () => {
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const gateway = new Gateway_1.Gateway('meet165656', AppAPI_data_1.config_T);
            const response = yield gateway.getAPIKeyList(AppAPI_data_1.getAPIKeyListForGateway);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('Get API Key (Application)', () => {
    test('Getting API Key Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield gateway.getAPIKeyInfo(AppAPI_data_1.getAPIKeyInfoPayloadForGateway_T);
        expect(response.id).toBe(AppAPI_data_1.getAPIKeyInfoPayloadForGateway_T.key_id);
    }));
});
describe('Get API Key Errors (Application)', () => {
    test('Api Key With ID Not Found', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield gateway.getAPIKeyInfo(AppAPI_data_1.getAPIKeyInfoPayloadForGateway_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 5);
        }
    }));
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const gateway = new Gateway_1.Gateway('eui-ee34634e6ada3428', AppAPI_data_1.config_T);
            const response = yield gateway.getAPIKeyInfo(AppAPI_data_1.getAPIKeyInfoPayloadForGateway_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('API Key Update (Gateway)', () => {
    test('API Key Updated Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield gateway.updateAPIKey(AppAPI_data_1.updateAPIKeyUserPayloadForGateway_T);
        expect(response.id).toBe(AppAPI_data_1.updateAPIKeyUserPayloadForGateway_T.api_key_id);
        expect(response.name).toBe(AppAPI_data_1.updateAPIKeyUserPayloadForGateway_T.api_key_name);
        expect(response.rights).toEqual(AppAPI_data_1.updateAPIKeyUserPayloadForGateway_T.api_key_rights);
    }));
});
describe('API Key Update Errors (Gateway)', () => {
    test('Api Key With ID Not Found', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield gateway.updateAPIKey(AppAPI_data_1.updateAPIKeyUserPayloadForGateway_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 5);
        }
    }));
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const gateway = new Gateway_1.Gateway('eui-ee34634e6ada3428', AppAPI_data_1.config_T);
            const response = yield gateway.updateAPIKey(AppAPI_data_1.updateAPIKeyUserPayloadForGateway_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('Get Collaborator (Gateway-User)', () => {
    test('Getting Collaborator Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield gateway.getCollaboratorInfoOfUser(AppAPI_data_1.getCollaboratorInfoPayloadForApplication_User_T);
        expect(response.ids.user_ids.user_id).toBe(AppAPI_data_1.getCollaboratorInfoPayloadForApplication_User_T.user_id);
    }));
});
describe('Get Collaborator (Gateway-User) Errors', () => {
    test('User Account Not Found', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield gateway.getCollaboratorInfoOfUser(AppAPI_data_1.getCollaboratorInfoPayloadForApplication_User_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 5);
        }
    }));
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const gateway = new index_1.Application('jgyua', AppAPI_data_1.config_T);
            const response = yield gateway.getCollaboratorInfoOfUser(AppAPI_data_1.getCollaboratorInfoPayloadForApplication_User_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('Get Collaborator (Gateway-Org)', () => {
    test('Getting Collaborator Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield gateway.getCollaboratorInfoOfOrg(AppAPI_data_1.getCollaboratorInfoPayloadForApplication_Org_T);
        expect(response.ids.organization_ids.organization_id).toBe(AppAPI_data_1.getCollaboratorInfoPayloadForApplication_Org_T.organization_id);
    }));
});
describe('Get Collaborator (Gateway-Org) Errors', () => {
    test('User Account Not Found', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield gateway.getCollaboratorInfoOfOrg(AppAPI_data_1.getCollaboratorInfoPayloadForApplication_Org_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 5);
        }
    }));
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const gateway = new index_1.Application('jgyua', AppAPI_data_1.config_T);
            const response = yield gateway.getCollaboratorInfoOfOrg(AppAPI_data_1.getCollaboratorInfoPayloadForApplication_Org_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('Set Collaborator (Gateway-User)', () => {
    test('Set Collaborator Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const gateway = new Gateway_1.Gateway('eui-ee34634e6ada3425', AppAPI_data_1.config_T);
        const response = yield gateway.setCollaboratorOfUser(AppAPI_data_1.setCollaboratorPayloadForGateway_User_T);
        expect(response).toBeDefined();
    }));
});
describe('Set Collaborator Errors (Gateway-User)', () => {
    test('User Account Not Found', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield gateway.setCollaboratorOfUser(AppAPI_data_1.setCollaboratorPayloadForGateway_User_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 5);
        }
    }));
    test('No Rights or Insufficient Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const gateway = new Gateway_1.Gateway('eui-ee34634e6ada3428', AppAPI_data_1.config_T);
            const response = yield gateway.setCollaboratorOfUser(AppAPI_data_1.setCollaboratorPayloadForGateway_User_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('Set Collaborator (Gateway-Org)', () => {
    test('Set Collaborator Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const gateway = new Gateway_1.Gateway('eui-ee34634e6ada3425', AppAPI_data_1.config_T);
        const response = yield gateway.setCollaboratorOfOrg(AppAPI_data_1.setCollaboratorPayloadForGateway_Org_T);
        expect(response).toBeDefined();
    }));
});
describe('Set Collaborator Errors (Gateway-Org)', () => {
    test('User Account Not Found', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield gateway.setCollaboratorOfOrg(AppAPI_data_1.setCollaboratorPayloadForGateway_Org_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 5);
        }
    }));
    test('No Rights or Insufficient Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const gateway = new Gateway_1.Gateway('eui-ee34634e6ada3428', AppAPI_data_1.config_T);
            const response = yield gateway.setCollaboratorOfOrg(AppAPI_data_1.setCollaboratorPayloadForGateway_Org_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('List Collaborators', () => {
    test('Listing Collaborators Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield gateway.getCollaboratorList(AppAPI_data_1.getCollaboratorListUserPayload);
        expect(response).toBeDefined();
    }));
});
describe('List Collaborators Errors', () => {
    test('Gateway Entity Not Found', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const gateway = new Gateway_1.Gateway('eui-ee34634e6ada3428', AppAPI_data_1.config_T);
            const response = yield gateway.getCollaboratorList(AppAPI_data_1.getCollaboratorListUserPayload);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 5);
        }
    }));
});
