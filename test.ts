// import { Application } from './Application/index';
// import { Organization } from './Organization/index';
// import { User } from './User/index';
// // import { Device } from './Device/index';
// // import { Gateway } from './Gateway/index';
// import {
//   config,
//   createApplicationPayloadForUser,
//   createApplicationPayloadForOrg,
//   getApplicationPayload,
//   getApplicationListPayloadForUser,
//   getApplicationListPayloadForOrg,
//   updateApplicationPayload,
//   deleteApplicationPayload,
//   restoreApplicationPayload,
//   purgeApplicationPayload,
//   getApplicationRightUserPayload,
//   createAPIKeyPayloadForUser,
//   createAPIKeyPayloadForApplication,
//   createAPIKeyPayloadForOrg,
//   getAPIKeyListForApplication,
//   getAPIKeyListForUser,
//   getAPIKeyListForOrg,
//   getAPIKeyInfoPayloadForOrganization,
//   getAPIKeyInfoPayloadForApplication,
//   getAPIKeyInfoPayloadForUser,
//   updateAPIKeyUserPayloadForApplication,
//   updateAPIKeyUserPayloadForUser,
//   updateAPIKeyUserPayloadForOrg,
//   getCollaboratorInfoPayloadForUser,
//   getCollaboratorInfoPayloadForOrg,
//   setCollaboratorPayloadForUser,
//   setCollaboratorPayloadForOrg,
//   getCollaboratorListUserPayload,
// } from './data';

// const app = new Application(config);
// const org = new Organization(config);
// const user = new User(config);
// // const device = new Device(config);
// // const gateway = new Gateway(config);

// describe('Config Errors', () => {
//   test('No Rights', async () => {
//     const appFailed = new Application(config);
//     expect(appFailed).not.toHaveProperty('COLLAB_ID', 'meetsavaj');
//   });

//   test('API Key Missing', async () => {
//     const appFailed = new Application(config);
//     expect(appFailed).not.toHaveProperty(
//       'API_KEY',
//       'NNSXS.BGVLXTTMUZDIIFY7EDSKFKB3R2AROYP7XDKUYOQ.SGAC24PFU6KMGEYUOQ3IDFYIUF55C4ZZQN4E2DNFWYHGY7EKPTHQ'
//     );
//   });
// });

// describe('Application Creation (User)', () => {
//   test('Application Created Successfully', async () => {
//     const response = await user.createApplication(createApplicationPayloadForUser);
//     expect(response.ids.application_id).toBe(createApplicationPayloadForUser.application_id);
//     expect(response.name).toBe(createApplicationPayloadForUser.name);
//     expect(response.administrative_contact.user_ids.user_id).toBe(config.COLLAB_ID);
//     expect(response.technical_contact.user_ids.user_id).toBe(config.COLLAB_ID);
//   });
// });

// describe('Application (User) Creation Errors', () => {
//   test('Error, Already Created', async () => {
//     try {
//       await user.createApplication(createApplicationPayloadForUser);
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 6);
//     }
//   });

//   test('Application Must Have At Least 3 Characters', async () => {
//     try {
//       await user.createApplication(createApplicationPayloadForUser);
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 3);
//     }
//   });

//   // test('API not given properly', async () => {
//   //     try {
//   //         await user.createApplication(createApplicationPayloadForUser)
//   //     } catch (error: any) {
//   //         expect(error).toHaveProperty('message', 'not found');
//   //         expect(error).toHaveProperty('details[0].name', '404_route_not_found');
//   //     }
//   // });

//   // test('API not given properly', async () => {
//   //     try {
//   //         await user.createApplication(createApplicationPayloadForUser)
//   //     } catch (error: any) {
//   //         expect(error).toHaveProperty('code', 12);
//   //     }
//   // });
// });

// describe('Application Creation (Org)', () => {
//   test('Application (Org) Created Successfully', async () => {
//     const response = await org.createApplication(createApplicationPayloadForOrg);
//     expect(response.ids.application_id).toBe(createApplicationPayloadForOrg.application_id);
//     expect(response.name).toBe(createApplicationPayloadForOrg.name);
//     expect(response.administrative_contact.organization_ids.organization_id).toBe(config.COLLAB_ID);
//     expect(response.technical_contact.organization_ids.organization_id).toBe(config.COLLAB_ID);
//   });
// });

// describe('Application (Org) Creation Errors', () => {
//   test('No Rights', async () => {
//     try {
//       await org.createApplication(createApplicationPayloadForOrg);
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 7);
//     }
//   });

//   test('Error, Already Created', async () => {
//     try {
//       await org.createApplication(createApplicationPayloadForOrg);
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 6);
//     }
//   });

//   test('Application Must Have At Least 3 Characters', async () => {
//     try {
//       await org.createApplication(createApplicationPayloadForOrg);
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 3);
//     }
//   });

//   // test('API not given properly', async () => {
//   //     try {
//   //         await org.createApplication(createApplicationPayload)
//   //     } catch (error: any) {
//   //         expect(error).toHaveProperty('message', 'not found');
//   //         expect(error).toHaveProperty('details[0].name', '404_route_not_found');
//   //     }
//   // });

//   // test('API not given properly', async () => {
//   //     try {
//   //         await org.createApplication(createApplicationPayload)
//   //     } catch (error: any) {
//   //         expect(error).toHaveProperty('code', 12);
//   //     }
//   // });
// });

// describe('Get an Application by ID', () => {
//   test('Get An Application Successfully', async () => {
//     const response = await app.getApplicationInfo(getApplicationPayload);
//     expect(response.ids.application_id).toBe(getApplicationPayload.application_id);
//   });
// });

// describe('Get Application Errors', () => {
//   test('Application ID Not Found', async () => {
//     try {
//       const response = await app.getApplicationInfo(getApplicationPayload);
//       expect(response).toBeUndefined();
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 5);
//     }
//   });

//   test('API not given properly', async () => {
//     try {
//       const response = await app.getApplicationInfo(getApplicationPayload);
//       expect(response).toHaveProperty('message', 'not found');
//       expect(response).toHaveProperty('details[0].name', '404_route_not_found');
//     } catch (error: any) {
//       expect(error).toHaveProperty('message', 'not found');
//       expect(error).toHaveProperty('details[0].name', '404_route_not_found');
//     }
//   });

//   test('API not given properly', async () => {
//     try {
//       const response = await app.getApplicationInfo(getApplicationPayload);
//       expect(response).toHaveProperty('code', 12);
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 12);
//     }
//   });
// });

// describe('List Applications', () => {
//   test('Getting Application List Successfully', async () => {
//     const response = await app.getApplicationList();
//     expect(response).toBeDefined();
//   });
// });

// describe('List Applications (User)', () => {
//   test('Getting Application (User) List Successfully', async () => {
//     const response = await user.getApplicationList(getApplicationListPayloadForUser);
//     expect(response).toBeDefined();
//   });
// });

// describe('List Applications (Org)', () => {
//   test('Getting Application (Org) List Successfully', async () => {
//     const response = await org.getApplicationList(getApplicationListPayloadForOrg);
//     expect(response).toBeDefined();
//   });
// });

// describe('Update Application', () => {
//   test('Application Updated Successfully', async () => {
//     const response = await app.updateApplication(updateApplicationPayload);
//     expect(response.ids.application_id).toBe(updateApplicationPayload.application_id);
//     expect(response.name).toBe(updateApplicationPayload.name);
//     expect(response.attributes).toEqual(updateApplicationPayload.attributes);
//   });
// });

// describe('Delete Application', () => {
//   test('Application Deleted Successfully', async () => {
//     const response = await app.deleteApplication(deleteApplicationPayload);
//     expect(response).not.toBeNull;
//   });
// });

// describe('Delete Application Errors', () => {
//   test('No Rights', async () => {
//     try {
//       const response = await app.deleteApplication(deleteApplicationPayload);
//       expect(response).toBeUndefined();
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 7);
//     }
//   });

//   test('Applications Has 2 Devices', async () => {
//     try {
//       const response = await app.deleteApplication(deleteApplicationPayload);
//       expect(response).toBeUndefined();
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 9);
//     }
//   });
// });

// describe('Restore Application', () => {
//   test('Application Restored Successfully', async () => {
//     const response = await app.restoreApplication(restoreApplicationPayload);
//     expect(response).not.toBeNull;
//   });
// });

// describe('Restore Application Errors', () => {
//   test('No Rights', async () => {
//     try {
//       await app.restoreApplication(restoreApplicationPayload);
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 7);
//     }
//   });

//   test('Application ID Not Found', async () => {
//     try {
//       await app.restoreApplication(restoreApplicationPayload);
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 5);
//     }
//   });
// });

// describe('Purge Application', () => {
//   test('Application  Successfully', async () => {
//     const response = await app.purgeApplication(purgeApplicationPayload);
//     expect(response).not.toBeNull;
//   });
// });

// describe('Purge Application Errors', () => {
//   test('Applications May Only Be Purged By Admins', async () => {
//     try {
//       await app.purgeApplication(purgeApplicationPayload);
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 7);
//     }
//   });

//   test('Application ID Not Found', async () => {
//     try {
//       await app.purgeApplication(purgeApplicationPayload);
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 5);
//     }
//   });
// });

// describe('Search Application', () => {
//   test('Searching Applications Successfully', async () => {
//     const response = await app.searchApplication();
//     expect(response).toBeDefined();
//   });
// });

// describe('List Application Rights', () => {
//   test('Listing Applications Rights Successfully', async () => {
//     const response = await app.getApplicationRight(getApplicationRightUserPayload);
//     expect(response).not.toEqual({});
//   });
// });

// describe('List Application Rights Errors', () => {
//   test('ID Not Matching', async () => {
//     const response = await app.getApplicationRight(getApplicationRightUserPayload);
//     expect(response).toEqual({});
//   });
// });

// describe('API Key Creation', () => {
//   test('API Key Created Successfully', async () => {
//     const response = await app.createAPIKey(createAPIKeyPayloadForApplication);
//     expect(response.name).toBe(createAPIKeyPayloadForUser.name);
//     expect(response.rights).toEqual(createAPIKeyPayloadForUser.rights);
//     expect(response).not.toHaveProperty('code', 7);
//   });
// });

// // describe('API Key Creation Errors', () => {
// //   test('No Rights', async () => {
// //     const response = createAPIKeyPayloadForUser;
// //     expect(response).not.toHaveProperty(
// //       'application_ids',
// //       createAPIKeyPayloadForUser.application_id
// //     );
// //   });
// // });

// describe('API Key Creation', () => {
//   test('API Key Created Successfully', async () => {
//     const response = await user.createAPIKey(createAPIKeyPayloadForUser);
//     expect(response.name).toBe(createAPIKeyPayloadForUser.name);
//     expect(response.rights).toEqual(createAPIKeyPayloadForUser.rights);
//     expect(response).not.toHaveProperty('code', 7);
//   });
// });

// describe('API Key Creation', () => {
//   test('API Key Created Successfully', async () => {
//     const response = await org.createAPIKey(createAPIKeyPayloadForOrg);
//     expect(response.name).toBe(createAPIKeyPayloadForUser.name);
//     expect(response.rights).toEqual(createAPIKeyPayloadForUser.rights);
//     expect(response).not.toHaveProperty('code', 7);
//   });
// });

// describe('List API Keys (Application)', () => {
//   test('Listing API Keys Successfully', async () => {
//     const response = await app.getAPIKeyList(getAPIKeyListForApplication);
//     expect(response).toBeDefined();
//   });
// });

// describe('List API Keys Errors (Application)', () => {
//   test('No Rights', async () => {
//     try {
//       const response = await app.getAPIKeyList(getAPIKeyListForApplication);
//       expect(response).toBeUndefined();
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 7);
//     }
//   });
// });

// describe('List API Keys (User)', () => {
//   test('Listing API Keys Successfully', async () => {
//     const response = await user.getAPIKeyList(getAPIKeyListForUser);
//     expect(response).toBeDefined();
//   });
// });

// describe('List API Keys Errors (User)', () => {
//   test('No Rights', async () => {
//     try {
//       const response = await user.getAPIKeyList(getAPIKeyListForUser);
//       expect(response).toBeUndefined();
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 7);
//     }
//   });
// });

// describe('List API Keys (Org)', () => {
//   test('Listing API Keys Successfully', async () => {
//     const response = await org.getAPIKeyList(getAPIKeyListForOrg);
//     expect(response).toBeDefined();
//   });
// });

// describe('List API Keys Errors (Org)', () => {
//   test('No Rights', async () => {
//     try {
//       const response = await org.getAPIKeyList(getAPIKeyListForOrg);
//       expect(response).toBeUndefined();
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 7);
//     }
//   });
// });

// describe('Get API Key (Application)', () => {
//   test('Getting API Key Successfully', async () => {
//     const response = await app.getAPIKeyInfo(getAPIKeyInfoPayloadForApplication);
//     expect(response.id).toBe(getAPIKeyInfoPayloadForApplication.key_id);
//   });
// });

// describe('Get API Key Errors (Application)', () => {
//   test('Api Key With ID Not Found', async () => {
//     try {
//       const response = await app.getAPIKeyInfo(getAPIKeyInfoPayloadForApplication);
//       expect(response).toBeUndefined();
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 5);
//     }
//   });

//   test('No Rights', async () => {
//     try {
//       const response = await app.getAPIKeyInfo(getAPIKeyInfoPayloadForApplication);
//       expect(response).toBeUndefined();
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 7);
//     }
//   });
// });

// describe('Get API Key (User)', () => {
//   test('Getting API Key Successfully', async () => {
//     const response = await user.getAPIKeyInfo(getAPIKeyInfoPayloadForUser);
//     expect(response.id).toBe(getAPIKeyInfoPayloadForUser.key_id);
//   });
// });

// describe('Get API Key Errors (User)', () => {
//   test('Api Key With ID Not Found', async () => {
//     try {
//       const response = await user.getAPIKeyInfo(getAPIKeyInfoPayloadForUser);
//       expect(response).toBeUndefined();
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 5);
//     }
//   });

//   test('No Rights', async () => {
//     try {
//       const response = await user.getAPIKeyInfo(getAPIKeyInfoPayloadForUser);
//       expect(response).toBeUndefined();
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 7);
//     }
//   });
// });

// describe('Get API Key (Org)', () => {
//   test('Getting API Key Successfully', async () => {
//     const response = await org.getAPIKeyInfo(getAPIKeyInfoPayloadForOrganization);
//     expect(response.id).toBe(getAPIKeyInfoPayloadForOrganization.key_id);
//   });
// });

// describe('Get API Key Errors (Org)', () => {
//   test('Api Key With ID Not Found', async () => {
//     try {
//       const response = await org.getAPIKeyInfo(getAPIKeyInfoPayloadForOrganization);
//       expect(response).toBeUndefined();
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 5);
//     }
//   });

//   test('No Rights', async () => {
//     try {
//       const response = await org.getAPIKeyInfo(getAPIKeyInfoPayloadForOrganization);
//       expect(response).toBeUndefined();
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 7);
//     }
//   });
// });

// describe('API Key Update (Application)', () => {
//   test('API Key Updated Successfully', async () => {
//     const response = await app.updateAPIKey(updateAPIKeyUserPayloadForApplication);
//     expect(response.id).toBe(updateAPIKeyUserPayloadForApplication.api_key_id);
//     expect(response.name).toBe(updateAPIKeyUserPayloadForApplication.api_key_name);
//     expect(response.rights).toEqual(updateAPIKeyUserPayloadForApplication.api_key_rights);
//   });
// });

// describe('API Key Update Errors (Application)', () => {
//   test('Api Key With ID Not Found', async () => {
//     try {
//       const response = await app.updateAPIKey(updateAPIKeyUserPayloadForApplication);
//       expect(response).toBeUndefined();
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 5);
//     }
//   });

//   test('No Rights', async () => {
//     try {
//       const response = await app.updateAPIKey(updateAPIKeyUserPayloadForApplication);
//       expect(response).toBeUndefined();
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 7);
//     }
//   });
// });

// describe('API Key Update (User)', () => {
//   test('API Key Updated Successfully', async () => {
//     const response = await user.updateAPIKey(updateAPIKeyUserPayloadForUser);
//     expect(response.id).toBe(updateAPIKeyUserPayloadForUser.api_key_id);
//     expect(response.name).toBe(updateAPIKeyUserPayloadForUser.api_key_name);
//     expect(response.rights).toEqual(updateAPIKeyUserPayloadForUser.api_key_rights);
//   });
// });

// describe('API Key Update Errors (User)', () => {
//   test('Api Key With ID Not Found', async () => {
//     try {
//       const response = await user.updateAPIKey(updateAPIKeyUserPayloadForUser);
//       expect(response).toBeUndefined();
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 5);
//     }
//   });

//   test('No Rights', async () => {
//     try {
//       const response = await user.updateAPIKey(updateAPIKeyUserPayloadForUser);
//       expect(response).toBeUndefined();
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 7);
//     }
//   });
// });

// describe('API Key Update (Org)', () => {
//   test('API Key Updated Successfully', async () => {
//     const response = await org.updateAPIKey(updateAPIKeyUserPayloadForOrg);
//     expect(response.id).toBe(updateAPIKeyUserPayloadForOrg.api_key_id);
//     expect(response.name).toBe(updateAPIKeyUserPayloadForOrg.api_key_name);
//     expect(response.rights).toEqual(updateAPIKeyUserPayloadForOrg.api_key_rights);
//   });
// });

// describe('API Key Update Errors (Org)', () => {
//   test('Api Key With ID Not Found', async () => {
//     try {
//       const response = await org.updateAPIKey(updateAPIKeyUserPayloadForOrg);
//       expect(response).toBeUndefined();
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 5);
//     }
//   });

//   test('No Rights', async () => {
//     try {
//       const response = await org.updateAPIKey(updateAPIKeyUserPayloadForOrg);
//       expect(response).toBeUndefined();
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 7);
//     }
//   });
// });

// describe('Get Collaborator (User)', () => {
//   test('Getting Collaborator Successfully', async () => {
//     const response = await user.getCollaboratorInfo(getCollaboratorInfoPayloadForUser);
//     expect(response.ids.user_ids.user_id).toBe(getCollaboratorInfoPayloadForUser.user_id);
//   });
// });

// describe('Get Collaborator (User) Errors', () => {
//   test('User Account Not Found', async () => {
//     try {
//       const response = await user.getCollaboratorInfo(getCollaboratorInfoPayloadForUser);
//       expect(response).toBeUndefined();
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 5);
//     }
//   });

//   test('No Rights', async () => {
//     try {
//       const response = await user.getCollaboratorInfo(getCollaboratorInfoPayloadForUser);
//       expect(response).toBeUndefined();
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 7);
//     }
//   });
// });

// describe('Get Collaborator (Org)', () => {
//   test('Getting Collaborator Successfully', async () => {
//     const response = await org.getCollaboratorInfo(getCollaboratorInfoPayloadForOrg);
//     expect(response.ids.organization_ids.organization_id).toBe(
//       getCollaboratorInfoPayloadForOrg.organization_id
//     );
//   });
// });

// describe('Get Collaborator (Org) Errors', () => {
//   test('User Account Not Found', async () => {
//     try {
//       const response = await org.getCollaboratorInfo(getCollaboratorInfoPayloadForOrg);
//       expect(response).toBeUndefined();
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 5);
//     }
//   });

//   test('No Rights', async () => {
//     try {
//       const response = await org.getCollaboratorInfo(getCollaboratorInfoPayloadForOrg);
//       expect(response).toBeUndefined();
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 7);
//     }
//   });
// });

// describe('Set Collaborator (User)', () => {
//   test('Set Collaborator Successfully', async () => {
//     const response = await user.setCollaborator(setCollaboratorPayloadForUser);
//     expect(response).toBeDefined();
//   });
// });

// describe('Set Collaborator Errors (User)', () => {
//   test('User Account Not Found', async () => {
//     try {
//       const response = await user.setCollaborator(setCollaboratorPayloadForUser);
//       expect(response).toBeUndefined();
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 5);
//     }
//   });

//   test('No Rights or Insufficient Rights', async () => {
//     try {
//       const response = await user.setCollaborator(setCollaboratorPayloadForUser);
//       expect(response).toBeUndefined();
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 7);
//     }
//   });
// });

// describe('Set Collaborator (Org)', () => {
//   test('Set Collaborator Successfully', async () => {
//     const response = await org.setCollaborator(setCollaboratorPayloadForOrg);
//     expect(response).toBeDefined();
//   });
// });

// describe('Set Collaborator Errors (Org)', () => {
//   test('Org Account Not Found', async () => {
//     try {
//       const response = await org.setCollaborator(setCollaboratorPayloadForOrg);
//       expect(response).toBeUndefined();
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 5);
//     }
//   });

//   test('No Rights or Insufficient Rights', async () => {
//     try {
//       const response = await org.setCollaborator(setCollaboratorPayloadForOrg);
//       expect(response).toBeUndefined();
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 7);
//     }
//   });
// });

// describe('List Collaborators', () => {
//   test('Listing Collaborators Successfully', async () => {
//     const response = await app.getCollaboratorList(getCollaboratorListUserPayload);
//     expect(response).toBeDefined();
//   });
// });

// describe('List Collaborators Errors', () => {
//   test('Application Entity Not Found', async () => {
//     try {
//       const response = await app.getCollaboratorList(getCollaboratorListUserPayload);
//       expect(response).toBeUndefined();
//     } catch (error: any) {
//       expect(error).toHaveProperty('code', 5);
//     }
//   });
// });

// // describe('Issue DevEUI', () => {
// //   test('DevEUI Issued Successfully', async () => {
// //     const response = await app.issueDevEUI(issueDevEUIPayload);
// //     expect(response).toBeDefined;
// //   });
// // });
