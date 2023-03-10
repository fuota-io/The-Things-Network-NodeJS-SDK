/**
 * @typedef {Object} Config
 * @prop {string} IDENTITY_SERVER Identity Server
 * @prop {string} API_KEY API Key
 * @prop {string} NETWORK_SERVER Network Server
 * @prop {string} APPLICATION_SERVER Application Server
 * @prop {string} JOIN_SERVER Join Server
 */

/**
 * @typedef {Object} ApiConnectionOptions
 * @prop {string} url URL
 * @prop {string} method Method
 * @prop {Object} headers Headers
 * @prop {string} data Data
 */

/**
 * @typedef {Object} PL-CreateApplication
 * @prop {string} application_id Application Id
 * @prop {string} name Application Name
 * @prop {string} description Application Description
 */

/**
 * @typedef {Object} RESP-CreateApplication
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
 * @typedef {Object} RESP-GetApplicationList
 * @prop {Object[]} application Application List
 */

/**
 * @typedef {Object} PL-CreateAPIKeyForUser
 * @prop {string} email User Email Address
 * @prop {string} name API Key Name
 * @prop {string[]} rights API Key Rights
 * @prop {timestamp} expires_at API Key Expires At
 */

/**
 * @typedef {Object} RESP-CreateAPIKey
 * @prop {string} id API Key Id
 * @prop {string} key API Key
 * @prop {string} name API Key Name
 * @prop {string[]} rights API Key Rights
 * @prop {timestamp} created_at API Key Created At
 * @prop {timestamp} updated_at API Key Updated At
 * @prop {timestamp} expires_at API Key Expires At
 */

/**
 * @typedef {Object} PL-GetAPIKeyList
 * @prop {string} order Order
 * @prop {number} limit Limit
 * @prop {number} page Page
 */

/**
 * @typedef {Object} RESP-GetAPIKeyList
 * @prop {Object[]} api_keys API Key List
 */

/**
 * @typedef {Object} PL-GetAPIKeyInfo
 * @prop {string} key_id API Key Id
 */

/**
 * @typedef {Object} RESP-GetAPIKeyInfo
 * @prop {string} id API Key Id
 * @prop {string} key API Key
 * @prop {string} name API Key Name
 * @prop {string[]} rights API Key Rights
 * @prop {timestamp} created_at API Key Created At
 * @prop {timestamp} updated_at API Key Updated At
 * @prop {timestamp} expires_at API Key Expires At
 */

/**
 * @typedef {Object} PL-UpdateAPIKeyOfUser
 * @prop {string} email Email Address Of User
 * @prop {string} api_key_id API Key Id
 * @prop {string} api_key_name API Key Name
 * @prop {string[]} api_key_rights API Key Rights
 * @prop {timestamp} expires_at API Key Expires At
 */

/**
 * @typedef {Object} RESP-UpdateAPIKey
 * @prop {string} id API Key Id
 * @prop {string} key API Key
 * @prop {string} name API Key Name
 * @prop {string[]} rights API Key Rights
 * @prop {timestamp} created_at API Key Created At
 * @prop {timestamp} updated_at API Key Updated At
 * @prop {timestamp} expires_at API Key Expires At
 */

/**
 * @typedef {Object} PL-CreateAPIKeyOfOrg
 * @prop {string} name API Key Name
 * @prop {string[]} rights API Key Rights
 * @prop {timestamp} expires_at API Key Expires At
 */

/**
 * @typedef {Object} PL-UpdateAPIKeyOfOrg
 * @prop {string} api_key_id API Key Id
 * @prop {string} api_key_name API Key Name
 * @prop {string[]} api_key_rights API Key Rights
 * @prop {timestamp} expires_at API Key Expires At
 */

/**
 * @typedef {Object} PL-GetCollaboratorInfo
 * @prop {string} user_id User Id
 */

/**
 * @typedef {Object} RESP-GetCollaboratorInfo
 * @prop {Object} ids User Id and Email
 * @prop {string[]} rights Collaborator Rights
 */

/**
 * @typedef {Object} PL-SetCollaborator
 * @prop {string} user_id User Id
 * @prop {string} email User Email Address
 * @prop {string[]} rights Collaborator Rights
 */

/**
 * @typedef {Object} RESP-EmptyPayload
 * @prop {Object} Object Empty Object
 */

/**
 * @typedef {Object} RESP-GetApplication
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
 * @typedef {Object} PL-UpdateApplication
 * @prop {string} name Application Name
 * @prop {string} description Application Description
 * @prop {Object} attributes Application Attributes
 */

/**
 * @typedef {Object} RESP-UpdateApplication
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
 * @typedef {Object} RESP-SearchApplication
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
 * @typedef {Object} RESP-GetApplicationRight
 * @prop {string[]} rights Application Rights
 */

/**
 * @typedef {Object} PL-CreateAPIKeyOfApplication
 * @prop {string} name API Key Name
 * @prop {string[]} rights API Key Rights
 * @prop {timestamp} expires_at API Key Expires At
 */

/**
 * @typedef {Object} PL-UpdateAPIKeyOfApplication
 * @prop {string} api_key_id API Key Id
 * @prop {string} api_key_name API Key Name
 * @prop {string[]} api_key_rights API Key Rights
 * @prop {timestamp} expires_at API Key Expires At
 */

/**
 * @typedef {Object} PL-GetCollaboratorInfoOfUser
 * @prop {string} user_id User Id
 */

/**
 * @typedef {Object} RESP-GetCollaboratorInfoOfUser
 * @prop {Object} ids User Id and Email
 * @prop {string[]} rights Collaborator Rights
 */

/**
 * @typedef {Object} PL-GetCollaboratorInfoOfOrg
 * @prop {string} organization_id Organization Id
 */

/**
 * @typedef {Object} RESP-GetCollaboratorInfoOfOrg
 * @prop {Object} ids Organization Id
 * @prop {string[]} rights Collaborator Rights
 */

/**
 * @typedef {Object} PL-SetCollaboratorOfUser
 * @prop {string} user_id User Id
 * @prop {string} email User Email Address
 * @prop {string[]} rights Collaborator Rights
 */

/**
 * @typedef {Object} PL-SetCollaboratorOfOrg
 * @prop {string} organization_id Organization Id
 * @prop {string[]} rights Collaborator Rights
 */

/**
 * @typedef {Object} PL-GetCollabortorList
 * @prop {string} order Order
 * @prop {number} limit Limit
 * @prop {number} page Page
 */

/**
 * @typedef {Object} RESP-GetCollabortorList
 * @prop {Object} collaborators Ids and Rights
 */
