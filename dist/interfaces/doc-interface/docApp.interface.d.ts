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
 * @prop {string} ids.application_id Application Id
 * @prop {timestamp} created_at Application Created At
 * @prop {timestamp} updated_at Application Updated At
 * @prop {timestamp} deleted_at Application Deleted At
 * @prop {string} name Application Name
 * @prop {string} description Application Description
 * @prop {string} attributes Application Attributes
 * @prop {string[]} contact_info Application Contact Info
 * @prop {string} administrative_contact.user_ids.user_id Application Administrative Contact
 * @prop {string} technical_contact.user_ids.user_id Application Technical Contact
 * @prop {string} network_server_address Application Network Server Address
 * @prop {string} application_server_address Application Application Server Address
 * @prop {string} join_server_address Application Join Server Address
 * @prop {number} dev_eui_counter Application Dev EUI Counter
 * @prop {null} end_device_limit Application End Device Limit
 */
/**
 * @typedef {Object} ApplicationList
 * @prop {string} ids.application_id Application Id
 * @prop {timestamp} created_at Application Created At
 * @prop {timestamp} updated_at Application Updated At
 * @prop {string} name - The Name of the application
 * @prop {string} description - The Description of the application
 * @prop {string} network_server_address Application Network Server Address
 * @prop {string} application_server_address Application Application Server Address
 * @prop {string} join_server_address Application Join Server Address
 */
/**
 * @typedef {Object} Input-GetApplicationList
 * @prop {string} [order] Order the results by this field path (must be present in the field mask). Default ordering is by ID. Prepend with a minus (-) to reverse the order. (e.g '-created_at')
 * @prop {number} [limit] Limit the number of results per page. (less than 1000)
 * @prop {number} [page] Page number for pagination. 0 is interpreted as 1.
 */
/**
 * @typedef {Object} Output-GetApplicationList
 * @prop {ApplicationList[]} applications Application List
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
 * @typedef {Object} APIKeysList
 * @prop {string} id API Key Id
 * @prop {string} name API Key Name
 * @prop {string[]} rights API Key Rights
 * @prop {timestamp} created_at API Key Created At
 * @prop {timestamp} updated_at API Key Updated At
 * @prop {timestamp} expires_at API Key Expires At
 */
/**
 * @typedef {Object} Input-GetAPIKeyList
 * @prop {string} [order] Order the results by this field path (must be present in the field mask). Default ordering is by ID. Prepend with a minus (-) to reverse the order. (e.g '-created_at')
 * @prop {number} [limit] Limit the number of results per page. (less than 1000)
 * @prop {number} [page] Page number for pagination. 0 is interpreted as 1.
 */
/**
 * @typedef {Object} Output-GetAPIKeyList
 * @prop {APIKeysList[]} api_keys API Key List
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
 * @prop {string} [ids.user_ids.user_id] User Id
 * @prop {string} [ids.user_ids.email] User Email
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
 * @prop {string} ids.application_id Application Id
 * @prop {timestamp} created_at Application Created At
 * @prop {timestamp} updated_at Application Updated At
 * @prop {timestamp} deleted_at Application Deleted At
 * @prop {string} name Application Name
 * @prop {string} description Application Description
 * @prop {string} attributes Application Attributes
 * @prop {string[]} contact_info Application Contact Info
 * @prop {string} administrative_contact.user_ids.user_id Application Administrative Contact
 * @prop {string} technical_contact.user_ids.user_id Application Technical Contact
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
 * @prop {string} ids.application_id Application Id
 * @prop {timestamp} created_at Application Created At
 * @prop {timestamp} updated_at Application Updated At
 * @prop {timestamp} deleted_at Application Deleted At
 * @prop {string} name Application Name
 * @prop {string} description Application Description
 * @prop {string} attributes Application Attributes
 * @prop {string[]} contact_info Application Contact Info
 * @prop {string} administrative_contact.user_ids.user_id Application Administrative Contact
 * @prop {string} technical_contact.user_ids.user_id Application Technical Contact
 * @prop {string} network_server_address Application Network Server Address
 * @prop {string} application_server_address Application Application Server Address
 * @prop {string} join_server_address Application Join Server Address
 * @prop {number} dev_eui_counter Application Dev EUI Counter
 * @prop {null} end_device_limit Application End Device Limit
 */
/**
 * @typedef {Object} Output-SearchApplication
 * @prop {string} ids.application_id Application Id
 * @prop {timestamp} created_at Application Created At
 * @prop {timestamp} updated_at Application Updated At
 * @prop {timestamp} deleted_at Application Deleted At
 * @prop {string} name Application Name
 * @prop {string} description Application Description
 * @prop {string} attributes Application Attributes
 * @prop {string[]} contact_info Application Contact Info
 * @prop {string} administrative_contact.user_ids.user_id Application Administrative Contact
 * @prop {string} technical_contact.user_ids.user_id Application Technical Contact
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
 * @prop {string} [ids.user_ids.user_id] User Id
 * @prop {string} [ids.user_ids.email] User Email
 * @prop {string[]} rights Collaborator Rights
 */
/**
 * @typedef {Object} Input-GetCollaboratorInfoOfOrg
 * @prop {string} organization_id Organization Id
 */
/**
 * @typedef {Object} Output-GetCollaboratorInfoOfOrg
 * @prop {string} [ids.organization_ids.organization_id] Organization Id
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
 * @typedef {Object} CollabortorList
 * @prop {string} [ids.organization_ids.organization_id] Organization Id
 * @prop {string} [ids.user_ids.user_id] User Id
 * @prop {string} [ids.user_ids.email] User Email
 * @prop {string[]} rights Collaborator Rights
 */
/**
 * @typedef {Object} Input-GetCollabortorList
 * @prop {string} [order] Order the results by this field path (must be present in the field mask). Default ordering is by ID. Prepend with a minus (-) to reverse the order. (e.g '-id')
 * @prop {number} [limit] Limit the number of results per page. (less than 1000)
 * @prop {number} [page] Page number for pagination. 0 is interpreted as 1.
 */
/**
 * @typedef {Object} Output-GetCollabortorList
 * @prop {CollabortorList[]} collaborators Collaborator List
 */
/**
 * @typedef {Object} Output-GetGatewayRight
 * @prop {string[]} rights Gateway Rights
 */
/**
 * @typedef {Object} Input-GetGatewayList
 * @prop {string} [order] Order the results by this field path (must be present in the field mask). Default ordering is by ID. Prepend with a minus (-) to reverse the order. (e.g '-created_at')
 * @prop {number} [limit] Limit the number of results per page. (less than 1000)
 * @prop {number} [page] Page number for pagination. 0 is interpreted as 1.
 */ 
