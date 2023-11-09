export interface Pagination {
    limit?: number;
    page?: number;
    order?: string;
}
export interface GetApplicationUserPayload {
    application_id: string;
}
export interface GetApplicationPayload {
    application: {
        ids: {
            application_id: string;
        };
    };
}
export interface GetApplication {
    ids?: {
        application_id?: string;
    };
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
    name?: string;
    description?: string;
    attributes?: {
        [key: string]: string;
    };
    contact_info?: string[];
    administrative_contact?: {
        user_ids: {
            user_id: string;
        };
    };
    technical_contact?: {
        user_ids: {
            user_id: string;
        };
    };
    network_server_address?: string;
    application_server_address?: string;
    join_server_address?: string;
    dev_eui_counter?: 0;
    end_device_limit?: null;
}
export interface GetApplicationListUserPayload extends Pagination {
}
export interface GetApplicationList {
    applications: {
        ids: {
            application_id: string;
        };
        name: string;
        description: string;
        created_at: string;
        updated_at: string;
        network_server_address: string;
        application_server_address: string;
        join_server_address: string;
    }[];
}
export interface UpdateApplicationUserPayload {
    name?: string;
    description?: string;
    attributes?: {
        [key: string]: string;
    };
}
export interface UpdateApplicationPayload {
    application: GetApplication;
    field_mask: {
        paths: string[];
    };
}
export interface UpdateApplication extends GetApplication {
}
export interface DeleteApplicationUserPayload {
    application_id: string;
}
export interface RestoreApplicationUserPayload extends DeleteApplicationUserPayload {
}
export interface PurgeApplicationUserPayload extends DeleteApplicationUserPayload {
}
export interface SearchApplication extends GetApplication {
}
export interface GetApplicationRightUserPayload extends DeleteApplicationUserPayload {
}
export interface GetApplicationRightUserPayload extends Pagination {
}
export interface GetApplicationRight {
    rights: string[];
}
export interface CreateAPIKeyPayload {
    name: string;
    rights: string[];
    expires_at?: any;
}
export interface CreateAPIKey {
    id: string;
    key: string;
    name: string;
    rights: string[];
    created_at: string;
    updated_at: string;
    expires_at: any;
}
export interface GetAPIKeyListUserPayload extends Pagination {
}
export interface GetAPIKeyList {
    api_keys: {
        id: string;
        name: string;
        rights: string[];
        created_at: string;
        updated_at: string;
        expires_at: any;
    }[];
}
export interface GetAPIKeyInfoUserPayload {
    key_id: string;
}
export interface GetAPIKeyInfoPayload {
    application_ids: {
        application_id: string;
    };
    key_id: string;
}
export interface GetAPIKeyInfo extends CreateAPIKey {
}
export interface UpdateAPIKeyUserPayload {
    api_key_id: string;
    api_key_name?: string;
    api_key_rights?: string[];
    expires_at?: any;
}
export interface UpdateAPIKeyPayload {
    api_key: {
        id: string;
        name?: string;
        rights?: string[];
        expires_at?: any;
    };
    field_mask: {
        paths: string[];
    };
}
export interface UpdateAPIKey extends CreateAPIKey {
}
export interface GetCollabortorListUserPayload extends Pagination {
}
export interface GetCollabortorList {
    collaborators: {
        ids: {
            organization_ids?: {
                organization_id: string;
            };
            user_ids?: {
                user_id: string;
                email: string;
            };
        };
        rights: string[];
    }[];
}
export interface GetCollaboratorInfoUserPayload {
    user_id: string;
}
export interface GetCollaboratorInfoOrgPayload {
    organization_id: string;
}
export interface GetCollaboratorInfoPayload {
    application_ids: {
        application_id: string;
    };
    collaborator: {
        user_ids: {
            user_id: string;
            email: string;
        };
    };
}
export interface GetCollaboratorInfoUser {
    ids: {
        user_ids: {
            user_id: string;
            email: string;
        };
    };
    rights: string[];
}
export interface GetCollaboratorInfoOrg {
    ids: {
        organization_ids: {
            organization_id: string;
        };
    };
    rights: string[];
}
export interface SetCollaboratorUserPayloadForUser {
    user_id: string;
    email?: string;
    rights: string[];
}
export interface SetCollaboratorPayloadForUser {
    collaborator: {
        ids: {
            user_ids: {
                user_id: string;
                email?: string;
            };
        };
        rights: string[];
    };
}
export interface SetCollaboratorUserPayloadForOrg {
    organization_id: string;
    rights: string[];
}
export interface SetCollaboratorPayloadForOrg {
    collaborator: {
        ids: {
            organization_ids: {
                organization_id: string;
            };
        };
        rights: string[];
    };
}
