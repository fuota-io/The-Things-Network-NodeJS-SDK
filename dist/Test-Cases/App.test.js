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
const AppAPI_data_1 = require("../Data/AppAPI-data");
const app = new index_1.Application('meet69', AppAPI_data_1.config_T);
const user = new index_3.User('meetsavaj', AppAPI_data_1.config_T);
const org = new index_2.Organization('organ1', AppAPI_data_1.config_T);
describe('No Config Errors', () => {
    test('Correct User ID', () => __awaiter(void 0, void 0, void 0, function* () {
        const appFailed = new index_3.User('meetsavaj', AppAPI_data_1.config_T);
        expect(appFailed).toHaveProperty('USER_ID', 'meetsavaj');
    }));
    test('API Key Given', () => __awaiter(void 0, void 0, void 0, function* () {
        const appFailed = new index_3.User('meetsavaj', AppAPI_data_1.config_T);
        expect(appFailed).toHaveProperty('API_KEY', 'NNSXS.BGVLXTTMUZDIIFY7EDSKFKB3R2AROYP7XDKUYOQ.SGAC24PFU6KMGEYUOQ3IDFYIUF55C4ZZQN4E2DNFWYHGY7EKPTHQ');
    }));
});
describe('Config Errors', () => {
    test('User ID', () => __awaiter(void 0, void 0, void 0, function* () {
        const appFailed = new index_3.User('meetsavj', AppAPI_data_1.config_F);
        expect(appFailed).not.toHaveProperty('USER_ID', 'meetsavaj');
    }));
    test('API Key Missing', () => __awaiter(void 0, void 0, void 0, function* () {
        const appFailed = new index_3.User('meetsavaj', AppAPI_data_1.config_F);
        expect(appFailed).not.toHaveProperty('API_KEY', 'NNSXS.BGVLXTTMUZDIIFY7EDSKFKB3R2AROYP7XDKUYOQ.SGAC24PFU6KMGEYUOQ3IDFYIUF55C4ZZQN4E2DNFWYHGY7EKPTHQ');
    }));
});
describe('Application Creation (User)', () => {
    test('Application Created Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield user.createApplication(AppAPI_data_1.createApplicationPayloadForUser_T);
        expect(response.ids.application_id).toBe(AppAPI_data_1.createApplicationPayloadForUser_T.application_id);
        expect(response.name).toBe(AppAPI_data_1.createApplicationPayloadForUser_T.name);
        expect(response.administrative_contact.user_ids.user_id).toBe('meetsavaj');
        expect(response.technical_contact.user_ids.user_id).toBe('meetsavaj');
    }));
});
describe('Application (User) Creation Errors', () => {
    test('Error, Already Created', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield user.createApplication(AppAPI_data_1.createApplicationPayloadForUser_F);
        }
        catch (error) {
            expect(error).toHaveProperty('code', 6);
        }
    }));
});
describe('Application Creation (Org)', () => {
    test('Application (Org) Created Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield org.createApplication(AppAPI_data_1.createApplicationPayloadForOrg_T);
        expect(response.ids.application_id).toBe(AppAPI_data_1.createApplicationPayloadForOrg_T.application_id);
        expect(response.name).toBe(AppAPI_data_1.createApplicationPayloadForOrg_T.name);
        expect(response.administrative_contact.organization_ids.organization_id).toBe('organ1');
        expect(response.technical_contact.organization_ids.organization_id).toBe('organ1');
    }));
});
describe('Application (Org) Creation Errors', () => {
    test('Error, Already Created', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield org.createApplication(AppAPI_data_1.createApplicationPayloadForOrg_F);
        }
        catch (error) {
            expect(error).toHaveProperty('code', 6);
        }
    }));
});
describe('Get an Application by ID', () => {
    test('Get An Application Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const response = yield app.getApplicationInfo();
        expect((_a = response.ids) === null || _a === void 0 ? void 0 : _a.application_id).toBe(AppAPI_data_1.getApplicationPayload_T.application_id);
    }));
});
describe('Get Application Errors', () => {
    test('Application ID Not Matching', () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const response = yield app.getApplicationInfo();
        expect((_a = response.ids) === null || _a === void 0 ? void 0 : _a.application_id).not.toBe(AppAPI_data_1.getApplicationPayload_F.application_id);
    }));
});
describe('List Applications', () => {
    test('Getting Application List Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield app.getApplicationList();
        expect(response).toBeDefined();
    }));
});
describe('List Applications (User)', () => {
    test('Getting Application (User) List Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield user.getApplicationList();
        expect(response).toBeDefined();
    }));
});
describe('List Applications (Org)', () => {
    test('Getting Application (Org) List Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield org.getApplicationList();
        expect(response).toBeDefined();
    }));
});
describe('Update Application', () => {
    test('Application Updated Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const response = yield app.updateApplication(AppAPI_data_1.updateApplicationPayload_T);
        expect((_a = response.ids) === null || _a === void 0 ? void 0 : _a.application_id).toBe('meet69');
        expect(response.name).toBe(AppAPI_data_1.updateApplicationPayload_T.name);
        expect(response.attributes).toEqual(AppAPI_data_1.updateApplicationPayload_T.attributes);
    }));
});
describe('Delete Application', () => {
    test('Application Deleted Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const app = new index_1.Application('meet69', AppAPI_data_1.config_T);
        const response = yield app.deleteApplication();
        expect(response).not.toBeNull;
    }));
});
describe('Delete Application Errors', () => {
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const app = new index_1.Application('meet165656', AppAPI_data_1.config_T);
            const response = yield app.deleteApplication();
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
    test('Application Has Devices', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const app = new index_1.Application('meet68', AppAPI_data_1.config_T);
            const response = yield app.deleteApplication();
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 9);
        }
    }));
});
describe('Restore Application', () => {
    test('Application Restored Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const app = new index_1.Application('meet69', AppAPI_data_1.config_T);
        const response = yield app.restoreApplication();
        expect(response).not.toBeNull;
    }));
});
describe('Restore Application Errors', () => {
    test('Application ID Already Present', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const app = new index_1.Application('meet69', AppAPI_data_1.config_T);
            yield app.restoreApplication();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 5);
        }
    }));
    test('Application ID Not Found', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const app = new index_1.Application('meet16565df6', AppAPI_data_1.config_T);
            yield app.restoreApplication();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('Purge Application', () => {
    test('Purge Application Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const app = new index_1.Application('meet69', AppAPI_data_1.config_T);
        const response = yield app.purgeApplication();
        expect(response).not.toBeNull;
    }));
});
describe('Purge Application Errors', () => {
    test('Applications May Only Be Purged By Admins', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const app = new index_1.Application('meet69', AppAPI_data_1.config_T);
            yield app.purgeApplication();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const app = new index_1.Application('meet165656', AppAPI_data_1.config_T);
            const response = yield app.purgeApplication();
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('Search Application', () => {
    test('Searching Applications Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield app.searchApplication();
        expect(response).toBeDefined();
    }));
});
describe('List Application Rights', () => {
    test('Listing Applications Rights Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield app.getApplicationRight();
        expect(response).not.toEqual({});
    }));
});
describe('List Application Rights Errors', () => {
    test('ID Not Matching', () => __awaiter(void 0, void 0, void 0, function* () {
        const app = new index_1.Application('meet165656', AppAPI_data_1.config_T);
        const response = yield app.getApplicationRight();
        expect(response).toEqual({});
    }));
});
describe('API Key Creation', () => {
    test('API Key Created Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield app.createAPIKey(AppAPI_data_1.createAPIKeyPayloadForApplication);
        expect(response.name).toBe(AppAPI_data_1.createAPIKeyPayloadForApplication.name);
        expect(response.rights).toEqual(AppAPI_data_1.createAPIKeyPayloadForApplication.rights);
        expect(response).not.toHaveProperty('code', 7);
    }));
});
describe('API Key Creation', () => {
    test('API Key Created Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield user.createAPIKey(AppAPI_data_1.createAPIKeyPayloadForUser);
        expect(response.name).toBe(AppAPI_data_1.createAPIKeyPayloadForUser.name);
        expect(response.rights).toEqual(AppAPI_data_1.createAPIKeyPayloadForUser.rights);
        expect(response).not.toHaveProperty('code', 7);
    }));
});
describe('API Key Creation', () => {
    test('API Key Created Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield org.createAPIKey(AppAPI_data_1.createAPIKeyPayloadForOrg);
        expect(response.name).toBe(AppAPI_data_1.createAPIKeyPayloadForOrg.name);
        expect(response.rights).toEqual(AppAPI_data_1.createAPIKeyPayloadForOrg.rights);
        expect(response).not.toHaveProperty('code', 7);
    }));
});
describe('List API Keys (Application)', () => {
    test('Listing API Keys Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield app.getAPIKeyList(AppAPI_data_1.getAPIKeyListForApplication);
        expect(response).toBeDefined();
    }));
});
describe('List API Keys Errors (Application)', () => {
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const app = new index_1.Application('meet165656', AppAPI_data_1.config_T);
            const response = yield app.getAPIKeyList(AppAPI_data_1.getAPIKeyListForApplication);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('List API Keys (User)', () => {
    test('Listing API Keys Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield user.getAPIKeyList(AppAPI_data_1.getAPIKeyListForUser);
        expect(response).toBeDefined();
    }));
});
describe('List API Keys Errors (User)', () => {
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = new index_3.User('hjfds', AppAPI_data_1.config_T);
            const response = yield user.getAPIKeyList(AppAPI_data_1.getAPIKeyListForUser);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('List API Keys (Org)', () => {
    test('Listing API Keys Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield org.getAPIKeyList(AppAPI_data_1.getAPIKeyListForOrg);
        expect(response).toBeDefined();
    }));
});
describe('List API Keys Errors (Org)', () => {
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const org = new index_2.Organization('jgyua', AppAPI_data_1.config_T);
            const response = yield org.getAPIKeyList(AppAPI_data_1.getAPIKeyListForOrg);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('Get API Key (Application)', () => {
    test('Getting API Key Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield app.getAPIKeyInfo(AppAPI_data_1.getAPIKeyInfoPayloadForApplication_T);
        expect(response.id).toBe(AppAPI_data_1.getAPIKeyInfoPayloadForApplication_T.key_id);
    }));
});
describe('Get API Key Errors (Application)', () => {
    test('Api Key With ID Not Found', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield app.getAPIKeyInfo(AppAPI_data_1.getAPIKeyInfoPayloadForApplication_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 5);
        }
    }));
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const app = new index_1.Application('jgyua', AppAPI_data_1.config_T);
            const response = yield app.getAPIKeyInfo(AppAPI_data_1.getAPIKeyInfoPayloadForApplication_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('Get API Key (User)', () => {
    test('Getting API Key Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield user.getAPIKeyInfo(AppAPI_data_1.getAPIKeyInfoPayloadForUser_T);
        expect(response.id).toBe(AppAPI_data_1.getAPIKeyInfoPayloadForUser_T.key_id);
    }));
});
describe('Get API Key Errors (User)', () => {
    test('Api Key With ID Not Found', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield user.getAPIKeyInfo(AppAPI_data_1.getAPIKeyInfoPayloadForUser_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 5);
        }
    }));
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = new index_1.Application('jgyua', AppAPI_data_1.config_T);
            const response = yield user.getAPIKeyInfo(AppAPI_data_1.getAPIKeyInfoPayloadForUser_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('Get API Key (Org)', () => {
    test('Getting API Key Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield org.getAPIKeyInfo(AppAPI_data_1.getAPIKeyInfoPayloadForOrganization_T);
        expect(response.id).toBe(AppAPI_data_1.getAPIKeyInfoPayloadForOrganization_T.key_id);
    }));
});
describe('Get API Key Errors (Org)', () => {
    test('Api Key With ID Not Found', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield org.getAPIKeyInfo(AppAPI_data_1.getAPIKeyInfoPayloadForOrganization_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 5);
        }
    }));
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const org = new index_2.Organization('jgyua', AppAPI_data_1.config_T);
            const response = yield org.getAPIKeyInfo(AppAPI_data_1.getAPIKeyInfoPayloadForOrganization_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('API Key Update (Application)', () => {
    test('API Key Updated Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield app.updateAPIKey(AppAPI_data_1.updateAPIKeyUserPayloadForApplication_T);
        expect(response.id).toBe(AppAPI_data_1.updateAPIKeyUserPayloadForApplication_T.api_key_id);
        expect(response.name).toBe(AppAPI_data_1.updateAPIKeyUserPayloadForApplication_T.api_key_name);
        expect(response.rights).toEqual(AppAPI_data_1.updateAPIKeyUserPayloadForApplication_T.api_key_rights);
    }));
});
describe('API Key Update Errors (Application)', () => {
    test('Api Key With ID Not Found', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield app.updateAPIKey(AppAPI_data_1.updateAPIKeyUserPayloadForApplication_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 5);
        }
    }));
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const app = new index_1.Application('jgyua', AppAPI_data_1.config_T);
            const response = yield app.updateAPIKey(AppAPI_data_1.updateAPIKeyUserPayloadForApplication_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('API Key Update (User)', () => {
    test('API Key Updated Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield user.updateAPIKey(AppAPI_data_1.updateAPIKeyUserPayloadForUser_T);
        expect(response.id).toBe(AppAPI_data_1.updateAPIKeyUserPayloadForUser_T.api_key_id);
        expect(response.name).toBe(AppAPI_data_1.updateAPIKeyUserPayloadForUser_T.api_key_name);
        expect(response.rights).toEqual(AppAPI_data_1.updateAPIKeyUserPayloadForUser_T.api_key_rights);
    }));
});
describe('API Key Update Errors (User)', () => {
    test('Api Key With ID Not Found', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield user.updateAPIKey(AppAPI_data_1.updateAPIKeyUserPayloadForUser_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 5);
        }
    }));
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = new index_3.User('jgyua', AppAPI_data_1.config_T);
            const response = yield user.updateAPIKey(AppAPI_data_1.updateAPIKeyUserPayloadForUser_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('API Key Update (Org)', () => {
    test('API Key Updated Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield org.updateAPIKey(AppAPI_data_1.updateAPIKeyUserPayloadForOrg_T);
        expect(response.id).toBe(AppAPI_data_1.updateAPIKeyUserPayloadForOrg_T.api_key_id);
        expect(response.name).toBe(AppAPI_data_1.updateAPIKeyUserPayloadForOrg_T.api_key_name);
        expect(response.rights).toEqual(AppAPI_data_1.updateAPIKeyUserPayloadForOrg_T.api_key_rights);
    }));
});
describe('API Key Update Errors (Org)', () => {
    test('Api Key With ID Not Found', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield org.updateAPIKey(AppAPI_data_1.updateAPIKeyUserPayloadForOrg_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 5);
        }
    }));
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const org = new index_2.Organization('jgyua', AppAPI_data_1.config_T);
            const response = yield org.updateAPIKey(AppAPI_data_1.updateAPIKeyUserPayloadForOrg_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('Get Collaborator (App-User)', () => {
    test('Getting Collaborator Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield app.getCollaboratorInfoOfUser(AppAPI_data_1.getCollaboratorInfoPayloadForApplication_User_T);
        expect(response.ids.user_ids.user_id).toBe(AppAPI_data_1.getCollaboratorInfoPayloadForApplication_User_T.user_id);
    }));
});
describe('Get Collaborator (App-User) Errors', () => {
    test('User Account Not Found', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield app.getCollaboratorInfoOfUser(AppAPI_data_1.getCollaboratorInfoPayloadForApplication_User_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 5);
        }
    }));
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const app = new index_1.Application('jgyua', AppAPI_data_1.config_T);
            const response = yield app.getCollaboratorInfoOfUser(AppAPI_data_1.getCollaboratorInfoPayloadForApplication_User_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('Get Collaborator (App-Org)', () => {
    test('Getting Collaborator Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield app.getCollaboratorInfoOfOrg(AppAPI_data_1.getCollaboratorInfoPayloadForApplication_Org_T);
        expect(response.ids.organization_ids.organization_id).toBe(AppAPI_data_1.getCollaboratorInfoPayloadForApplication_Org_T.organization_id);
    }));
});
describe('Get Collaborator (App-Org) Errors', () => {
    test('User Account Not Found', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield app.getCollaboratorInfoOfOrg(AppAPI_data_1.getCollaboratorInfoPayloadForApplication_Org_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 5);
        }
    }));
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const app = new index_1.Application('jgyua', AppAPI_data_1.config_T);
            const response = yield app.getCollaboratorInfoOfOrg(AppAPI_data_1.getCollaboratorInfoPayloadForApplication_Org_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('Get Collaborator (Org)', () => {
    test('Getting Collaborator Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield org.getCollaboratorInfo(AppAPI_data_1.getCollaboratorInfoPayloadForOrg_T);
        expect(response.ids.user_ids.user_id).toBe(AppAPI_data_1.getCollaboratorInfoPayloadForOrg_T.user_id);
    }));
});
describe('Get Collaborator (Org) Errors', () => {
    test('User Account Not Found', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield org.getCollaboratorInfo(AppAPI_data_1.getCollaboratorInfoPayloadForOrg_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 5);
        }
    }));
    test('No Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const org = new index_2.Organization('jgyua', AppAPI_data_1.config_T);
            const response = yield org.getCollaboratorInfo(AppAPI_data_1.getCollaboratorInfoPayloadForOrg_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('Set Collaborator (App-User)', () => {
    test('Set Collaborator Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const app = new index_1.Application('meet69', AppAPI_data_1.config_T);
        const response = yield app.setCollaboratorOfUser(AppAPI_data_1.setCollaboratorPayloadForApplication_User_T);
        expect(response).toBeDefined();
    }));
});
describe('Set Collaborator Errors (App-User)', () => {
    test('User Account Not Found', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield app.setCollaboratorOfUser(AppAPI_data_1.setCollaboratorPayloadForApplication_User_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 5);
        }
    }));
    test('No Rights or Insufficient Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const app = new index_1.Application('jgyua', AppAPI_data_1.config_T);
            const response = yield app.setCollaboratorOfUser(AppAPI_data_1.setCollaboratorPayloadForApplication_User_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('Set Collaborator (App-Org)', () => {
    test('Set Collaborator Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const app = new index_1.Application('meet69', AppAPI_data_1.config_T);
        const response = yield app.setCollaboratorOfOrg(AppAPI_data_1.setCollaboratorPayloadForApplication_Org_T);
        expect(response).toBeDefined();
    }));
});
describe('Set Collaborator Errors (App-Org)', () => {
    test('User Account Not Found', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield app.setCollaboratorOfOrg(AppAPI_data_1.setCollaboratorPayloadForApplication_Org_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 5);
        }
    }));
    test('No Rights or Insufficient Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const app = new index_1.Application('jgyua', AppAPI_data_1.config_T);
            const response = yield app.setCollaboratorOfOrg(AppAPI_data_1.setCollaboratorPayloadForApplication_Org_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('Set Collaborator (Org)', () => {
    test('Set Collaborator Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const org = new index_2.Organization('organ2', AppAPI_data_1.config_T);
        const response = yield org.setCollaborator(AppAPI_data_1.setCollaboratorPayloadForOrg_T);
        expect(response).toBeDefined();
    }));
});
describe('Set Collaborator Errors (Org)', () => {
    test('Org Account Not Found', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield org.setCollaborator(AppAPI_data_1.setCollaboratorPayloadForOrg_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 5);
        }
    }));
    test('No Rights or Insufficient Rights', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const org = new index_2.Organization('jgyua', AppAPI_data_1.config_T);
            const response = yield org.setCollaborator(AppAPI_data_1.setCollaboratorPayloadForOrg_F);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 7);
        }
    }));
});
describe('List Collaborators', () => {
    test('Listing Collaborators Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield app.getCollaboratorList(AppAPI_data_1.getCollaboratorListUserPayload);
        expect(response).toBeDefined();
    }));
});
describe('List Collaborators Errors', () => {
    test('Application Entity Not Found', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const app = new index_1.Application('bdvkjh', AppAPI_data_1.config_T);
            const response = yield app.getCollaboratorList(AppAPI_data_1.getCollaboratorListUserPayload);
            expect(response).toBeUndefined();
        }
        catch (error) {
            expect(error).toHaveProperty('code', 5);
        }
    }));
});
