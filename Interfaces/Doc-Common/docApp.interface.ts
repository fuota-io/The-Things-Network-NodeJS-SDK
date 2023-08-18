/**
 * @typedef {Object} Config
 * @prop {string} API_KEY API Key
 * @prop {string} IDENTITY_SERVER Identity Server
 * @prop {string} NETWORK_SERVER Network Server
 * @prop {string} APPLICATION_SERVER Application Server
 * @prop {string} JOIN_SERVER Join Server
 * @prop {string} [TENANT_ID] TENANT_ID Tenant Id
 */

/**
 * @typedef {Object} Input-CreateApplication
 * @prop {string} application_id Application Id
 * @prop {string} [name] Application Name
 * @prop {string} [description] Application Description
 */

/**
 * @typedef {Object} Output-CreateApplication
 * @prop {Object} ids Application Id
 * @prop {timestamp} created_at Application Created At
 * @prop {timestamp} updated_at Application Updated At
 * @prop {timestamp} deleted_at Application Deleted At
 * @prop {string} name Application Name
 * @prop {string} description Application Description
 * @prop {string} attributes Application Attributes
 * @prop {string[]} contact_info Application Contact Info
 * @prop {Object} administrative_contact Application Administrative Contact
 * @prop {Object} technical_contact Application Technical Contact
 * @prop {string} network_server_address Application Network Server Address
 * @prop {string} application_server_address Application Application Server Address
 * @prop {string} join_server_address Application Join Server Address
 * @prop {number} dev_eui_counter Application Dev EUI Counter
 * @prop {null} end_device_limit Application End Device Limit
 */

/**
 * @typedef {Object} Output-GetApplicationList
 * @prop {Object[]} application Application List
 */

/**
 * @typedef {Object} Input-CreateAPIKeyForUser
 * @prop {string} name API Key Name
 * @prop {string[]} rights API Key Rights
 * @prop {timestamp} [expires_at] API Key Expires At
 */

/**
 * @typedef {Object} Output-CreateAPIKey
 * @prop {string} id API Key Id
 * @prop {string} key API Key
 * @prop {string} name API Key Name
 * @prop {string[]} rights API Key Rights
 * @prop {timestamp} created_at API Key Created At
 * @prop {timestamp} updated_at API Key Updated At
 * @prop {timestamp} expires_at API Key Expires At
 */

/**
 * @typedef {Object} Input-GetAPIKeyList
 * @prop {string} [order] Order
 * @prop {number} [limit] Limit
 * @prop {number} [page] Page
 */

/**
 * @typedef {Object} Output-GetAPIKeyList
 * @prop {Object[]} api_keys API Key List
 */

/**
 * @typedef {Object} Input-GetAPIKeyInfo
 * @prop {string} key_id API Key Id
 */

/**
 * @typedef {Object} Output-GetAPIKeyInfo
 * @prop {string} id API Key Id
 * @prop {string} key API Key
 * @prop {string} name API Key Name
 * @prop {string[]} rights API Key Rights
 * @prop {timestamp} created_at API Key Created At
 * @prop {timestamp} updated_at API Key Updated At
 * @prop {timestamp} expires_at API Key Expires At
 */

/**
 * @typedef {Object} Input-UpdateAPIKeyOfUser
 * @prop {string} api_key_id API Key Id
 * @prop {string} [api_key_name] API Key Name
 * @prop {string[]} [api_key_rights] API Key Rights
 * @prop {timestamp} [expires_at] API Key Expires At
 */

/**
 * @typedef {Object} Output-UpdateAPIKey
 * @prop {string} id API Key Id
 * @prop {string} key API Key
 * @prop {string} name API Key Name
 * @prop {string[]} rights API Key Rights
 * @prop {timestamp} created_at API Key Created At
 * @prop {timestamp} updated_at API Key Updated At
 * @prop {timestamp} expires_at API Key Expires At
 */

/**
 * @typedef {Object} Input-CreateAPIKeyForOrg
 * @prop {string} name API Key Name
 * @prop {string[]} rights API Key Rights
 * @prop {timestamp} [expires_at] API Key Expires At
 */

/**
 * @typedef {Object} Input-UpdateAPIKeyOfOrg
 * @prop {string} api_key_id API Key Id
 * @prop {string} [api_key_name] API Key Name
 * @prop {string[]} [api_key_rights] API Key Rights
 * @prop {timestamp} [expires_at] API Key Expires At
 */

/**
 * @typedef {Object} Input-GetCollaboratorInfo
 * @prop {string} user_id User Id
 */

/**
 * @typedef {Object} Output-GetCollaboratorInfo
 * @prop {Object} ids User Id and Email
 * @prop {string[]} rights Collaborator Rights
 */

/**
 * @typedef {Object} Input-SetCollaborator
 * @prop {string} user_id User Id
 * @prop {string} [email] User Email Address
 * @prop {string[]} rights Collaborator Rights
 */

/**
 * @typedef {Object} Output-EmptyPayload
 * @prop {Object} Object Empty Object
 */

/**
 * @typedef {Object} Output-GetApplication
 * @prop {Object} ids Application Id
 * @prop {timestamp} created_at Application Created At
 * @prop {timestamp} updated_at Application Updated At
 * @prop {timestamp} deleted_at Application Deleted At
 * @prop {string} name Application Name
 * @prop {string} description Application Description
 * @prop {string} attributes Application Attributes
 * @prop {string[]} contact_info Application Contact Info
 * @prop {Object} administrative_contact Application Administrative Contact
 * @prop {Object} technical_contact Application Technical Contact
 * @prop {string} network_server_address Application Network Server Address
 * @prop {string} application_server_address Application Application Server Address
 * @prop {string} join_server_address Application Join Server Address
 * @prop {number} dev_eui_counter Application Dev EUI Counter
 * @prop {null} end_device_limit Application End Device Limit
 */

/**
 * @typedef {Object} Input-UpdateApplication
 * @prop {string} [name] Application Name
 * @prop {string} [description] Application Description
 * @prop {Object} [attributes] Application Attributes
 */

/**
 * @typedef {Object} Output-UpdateApplication
 * @prop {Object} ids Application Id
 * @prop {timestamp} created_at Application Created At
 * @prop {timestamp} updated_at Application Updated At
 * @prop {timestamp} deleted_at Application Deleted At
 * @prop {string} name Application Name
 * @prop {string} description Application Description
 * @prop {string} attributes Application Attributes
 * @prop {string[]} contact_info Application Contact Info
 * @prop {Object} administrative_contact Application Administrative Contact
 * @prop {Object} technical_contact Application Technical Contact
 * @prop {string} network_server_address Application Network Server Address
 * @prop {string} application_server_address Application Application Server Address
 * @prop {string} join_server_address Application Join Server Address
 * @prop {number} dev_eui_counter Application Dev EUI Counter
 * @prop {null} end_device_limit Application End Device Limit
 */

/**
 * @typedef {Object} Output-SearchApplication
 * @prop {Object} ids Application Id
 * @prop {timestamp} created_at Application Created At
 * @prop {timestamp} updated_at Application Updated At
 * @prop {timestamp} deleted_at Application Deleted At
 * @prop {string} name Application Name
 * @prop {string} description Application Description
 * @prop {string} attributes Application Attributes
 * @prop {string[]} contact_info Application Contact Info
 * @prop {Object} administrative_contact Application Administrative Contact
 * @prop {Object} technical_contact Application Technical Contact
 * @prop {string} network_server_address Application Network Server Address
 * @prop {string} application_server_address Application Application Server Address
 * @prop {string} join_server_address Application Join Server Address
 * @prop {number} dev_eui_counter Application Dev EUI Counter
 * @prop {null} end_device_limit Application End Device Limit
 */

/**
 * @typedef {Object} Output-GetApplicationRight
 * @prop {string[]} rights Application Rights
 */

/**
 * @typedef {Object} Input-CreateAPIKeyForApplication
 * @prop {string} name API Key Name
 * @prop {string[]} rights API Key Rights
 * @prop {timestamp} [expires_at] API Key Expires At
 */

/**
 * @typedef {Object} Input-UpdateAPIKeyOfApplication
 * @prop {string} api_key_id API Key Id
 * @prop {string} [api_key_name] API Key Name
 * @prop {string[]} [api_key_rights] API Key Rights
 * @prop {timestamp} [expires_at] API Key Expires At
 */

/**
 * @typedef {Object} Input-GetCollaboratorInfoOfUser
 * @prop {string} user_id User Id
 */

/**
 * @typedef {Object} Output-GetCollaboratorInfoOfUser
 * @prop {Object} ids User Id and Email
 * @prop {string[]} rights Collaborator Rights
 */

/**
 * @typedef {Object} Input-GetCollaboratorInfoOfOrg
 * @prop {string} organization_id Organization Id
 */

/**
 * @typedef {Object} Output-GetCollaboratorInfoOfOrg
 * @prop {Object} ids Organization Id
 * @prop {string[]} rights Collaborator Rights
 */

/**
 * @typedef {Object} Input-SetCollaboratorOfUser
 * @prop {string} user_id User Id
 * @prop {string} [email] User Email Address
 * @prop {string[]} rights Collaborator Rights
 */

/**
 * @typedef {Object} Input-SetCollaboratorOfOrg
 * @prop {string} organization_id Organization Id
 * @prop {string[]} rights Collaborator Rights
 */

/**
 * @typedef {Object} Input-GetCollabortorList
 * @prop {string} [order] Order
 * @prop {number} [limit] Limit
 * @prop {number} [page] Page
 */

/**
 * @typedef {Object} Output-GetCollabortorList
 * @prop {Object} collaborators Ids and Rights
 */

/**
 * @typedef {Object} Output-GetGatewayRight
 * @prop {string[]} rights Gateway Rights
 */
