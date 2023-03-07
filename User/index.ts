// import { APICall, SetConfig } from '../index';
// import { ApiConnectionOptions, Config } from '../Interfaces/Config/config.interface';
// import {
//   CreateApplicationPayload,
//   CreateApplication,
//   CreateApplicationUserPayload,
//   getApplicationList,
//   CreateAPIKeyUserPayload,
//   CreateAPIKey,
//   CreateAPIKeyPayload,
//   GetAPIKeyListUserPayload,
//   GetAPIKeyList,
//   GetAPIKeyInfoUserPayload,
//   GetAPIKeyInfo,
//   UpdateAPIKeyUserPayload,
//   UpdateAPIKey,
//   UpdateAPIKeyPayload,
//   ApplicationID,
// } from '../Interfaces/User/user.interface';

// export class User {
//   private APPLICATION_ID: string;
//   private setConfig: SetConfig | undefined;

//   constructor(appID: ApplicationID) {
//     this.APPLICATION_ID = appID.application_id;
//   }

//   createApplication(payload: CreateApplicationUserPayload): Promise<CreateApplication> {
//     const apiPayload: CreateApplicationPayload = {
//       application: {
//         ids: { application_id: this.APPLICATION_ID },
//         name: payload.name,
//         description: payload.description,
//       },
//     };
//     return this.API.send({
//       method: 'POST',
//       url: `${this.IDENTITY_SERVER}/users/${this.COLLAB_ID}/applications`,
//       headers: this.headers,
//       data: apiPayload,
//     });
//   }

//   getApplicationList(): Promise<getApplicationList> {
//     return this.API.send({
//       method: 'GET',
//       url: `${this.IDENTITY_SERVER}/users/${this.COLLAB_ID}/applications`,
//       headers: this.headers,
//       data: {},
//     });
//   }

//   createAPIKey(payload: CreateAPIKeyUserPayload): Promise<CreateAPIKey> {
//     const apiPayload: CreateAPIKeyPayload = {
//       user_ids: { user_id: this.COLLAB_ID, email: payload.email },
//       name: payload.name,
//       rights: payload.rights,
//       expires_at: payload.expires_at,
//     };
//     return this.API.send({
//       method: 'POST',
//       url: `${this.IDENTITY_SERVER}/users/${this.COLLAB_ID}/api-keys`,
//       headers: this.headers,
//       data: apiPayload,
//     });
//   }

//   getAPIKeyList(payload: GetAPIKeyListUserPayload): Promise<GetAPIKeyList> {
//     return this.API.send({
//       method: 'GET',
//       url: `${this.IDENTITY_SERVER}/users/${this.COLLAB_ID}/api-keys`,
//       headers: this.headers,
//       data: payload,
//     });
//   }

//   getAPIKeyInfo(payload: GetAPIKeyInfoUserPayload): Promise<GetAPIKeyInfo> {
//     return this.API.send({
//       method: 'GET',
//       url: `${this.IDENTITY_SERVER}/users/${this.COLLAB_ID}/api-keys/${payload.key_id}`,
//       headers: this.headers,
//       data: payload,
//     });
//   }

//   updateAPIKey(payload: UpdateAPIKeyUserPayload): Promise<UpdateAPIKey> {
//     const extractPayload = {
//       name: payload.api_key_name,
//       rights: payload.api_key_rights,
//       expires_at: payload.expires_at,
//     };

//     const paths = Object.keys(extractPayload);

//     const apiPayload: UpdateAPIKeyPayload = {
//       user_ids: { user_id: this.COLLAB_ID, email: payload.email },
//       api_key: {
//         id: payload.api_key_id,
//         name: payload.api_key_name,
//         rights: payload.api_key_rights,
//         expires_at: payload.expires_at,
//       },
//       field_mask: {
//         paths: paths,
//       },
//     };
//     return this.API.send({
//       method: 'PUT',
//       url: `${this.IDENTITY_SERVER}/users/${this.COLLAB_ID}/api-keys/${payload.api_key_id}`,
//       headers: this.headers,
//       data: apiPayload,
//     });
//   }
// }
