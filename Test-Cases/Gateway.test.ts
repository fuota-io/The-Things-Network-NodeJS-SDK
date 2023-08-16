import { Application } from '../Application/index';
import { Organization } from '../Organization/index';
import { User } from '../User/index';
import { Gateway } from '../Gateway';

import {
  config_T,
  getCollaboratorInfoPayloadForApplication_User_T,
  getCollaboratorInfoPayloadForApplication_User_F,
  getCollaboratorInfoPayloadForApplication_Org_T,
  getCollaboratorInfoPayloadForApplication_Org_F,
  getCollaboratorListUserPayload,
  createGatewayPayload,
  updateGatewayPayload,
  createAPIKeyPayloadForGateway,
  getAPIKeyListForGateway,
  getAPIKeyInfoPayloadForGateway_T,
  getAPIKeyInfoPayloadForGateway_F,
  updateAPIKeyUserPayloadForGateway_T,
  updateAPIKeyUserPayloadForGateway_F,
  setCollaboratorPayloadForGateway_User_T,
  setCollaboratorPayloadForGateway_User_F,
  setCollaboratorPayloadForGateway_Org_T,
  setCollaboratorPayloadForGateway_Org_F,
} from '../Data/AppAPI-data';

const user = new User('meetsavaj', config_T);
const org = new Organization('organ1', config_T);
const gateway = new Gateway('eui-ee34634e6ada3425', config_T);

describe('Gateway Creation (User)', () => {
  test('Gateway Created Successfully', async () => {
    const response = await user.createGateway(createGatewayPayload);
    expect(response.ids.gateway_id).toBe(createGatewayPayload.gateway.ids.gateway_id);
    expect(response.administrative_contact.user_ids.user_id).toBe('meetsavaj');
    expect(response.technical_contact.user_ids.user_id).toBe('meetsavaj');
  });
});

describe('Gateway (User) Creation Errors', () => {
  test('Error, Already Created', async () => {
    try {
      await user.createGateway(createGatewayPayload);
    } catch (error: any) {
      expect(error).toHaveProperty('code', 6);
    }
  });
});

describe('Gateway Creation (Org)', () => {
  test('Gateway Created Successfully', async () => {
    const response = await org.createGateway(createGatewayPayload);
    expect(response.ids.gateway_id).toBe(createGatewayPayload.gateway.ids.gateway_id);
    expect(response.administrative_contact.organization_ids.organization_id).toBe('organ1');
    expect(response.technical_contact.organization_ids.organization_id).toBe('organ1');
  });
});

describe('Gateway (Org) Creation Errors', () => {
  test('Error, Already Created', async () => {
    try {
      await user.createGateway(createGatewayPayload);
    } catch (error: any) {
      expect(error).toHaveProperty('code', 6);
    }
  });
});

describe('Get an Gateway by ID', () => {
  test('Get An Gateway Successfully', async () => {
    const response = await gateway.getGatewayInfo();
    expect(response).toBeDefined();
  });
});

describe('Get Gateway Errors', () => {
  test('Gateway ID Not Matching', async () => {
    try {
      const gateway = new Gateway('eui-ee34634e6ada3425', config_T);
      await gateway.getGatewayInfo();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 5);
    }
  });
});

describe('List Gateways', () => {
  test('Getting Gateway List Successfully', async () => {
    const response = await gateway.getGatewayList();
    expect(response).toBeDefined();
  });
});

describe('List Gateways (User)', () => {
  test('Getting Gateway (User) List Successfully', async () => {
    const response = await user.getGatewayList();
    expect(response).toBeDefined();
  });
});

describe('List Gateways (Org)', () => {
  test('Getting Gateway (Org) List Successfully', async () => {
    const response = await org.getGatewayList();
    expect(response).toBeDefined();
  });
});

describe('Update Gateway', () => {
  test('Gateway Updated Successfully', async () => {
    const response = await gateway.updateGateway(updateGatewayPayload);
    expect(response.ids.gateway_id).toBe('eui-ee34634e6ada3425');
    expect(response.description).toEqual(updateGatewayPayload.gateway.description);
  });
});

describe('Delete Gateway', () => {
  test('Gateway Deleted Successfully', async () => {
    const gateway = new Gateway('eui-ee34634e6ada3425', config_T);
    const response = await gateway.deleteGateway();
    expect(response).not.toBeNull;
  });
});

describe('Delete Gateway Errors', () => {
  test('No Rights', async () => {
    try {
      const gateway = new Gateway('eui-ee34634e6ada3425', config_T);
      const response = await gateway.deleteGateway();
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 7);
    }
  });
});

describe('Restore Gateway', () => {
  test('Gateway Restored Successfully', async () => {
    const gateway = new Gateway('eui-ee34634e6ada3425', config_T);
    const response = await gateway.restoreGateway();
    expect(response).not.toBeNull;
  });
});

describe('Restore Gateway Errors', () => {
  test('Gateway ID Already Present', async () => {
    try {
      const gateway = new Gateway('eui-ee34634e6ada3425', config_T);
      await gateway.restoreGateway();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 5);
    }
  });

  test('Gateway ID Not Found', async () => {
    try {
      const gateway = new Gateway('eui-ee34634e6ada3428', config_T);
      await gateway.restoreGateway();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 7);
    }
  });
});

describe('Purge Gateway', () => {
  test('Purge Gateway Successfully', async () => {
    const gateway = new Gateway('eui-ee34634e6ada3425', config_T);
    const response = await gateway.purgeGateway();
    expect(response).not.toBeNull;
  });
});

describe('Purge Gateway Errors', () => {
  test('Gateways May Only Be Purged By Admins', async () => {
    try {
      const gateway = new Gateway('eui-ee34634e6ada3425', config_T);
      await gateway.purgeGateway();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 7);
    }
  });

  test('No Rights', async () => {
    try {
      const gateway = new Gateway('eui-ee34634e6ada3428', config_T);
      const response = await gateway.purgeGateway();
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 7);
    }
  });
});

describe('Search Gateway', () => {
  test('Searching Gateways Successfully', async () => {
    const response = await gateway.searchGateway();
    expect(response).toBeDefined();
  });
});

describe('List Gateway Rights', () => {
  test('Listing Gateways Rights Successfully', async () => {
    const response = await gateway.getGatewayRight();
    expect(response).not.toEqual({});
  });
});

describe('List Gateway Rights Errors', () => {
  test('ID Not Matching', async () => {
    const gateway = new Gateway('eui-ee34634e6ada3428', config_T);
    const response = await gateway.getGatewayRight();
    expect(response).toEqual({});
  });
});

describe('API Key Creation', () => {
  test('API Key Created Successfully', async () => {
    const response = await gateway.createAPIKey(createAPIKeyPayloadForGateway);
    expect(response.name).toBe(createAPIKeyPayloadForGateway.name);
    expect(response.rights).toEqual(createAPIKeyPayloadForGateway.rights);
    expect(response).not.toHaveProperty('code', 7);
  });
});

describe('List API Keys (Gateway)', () => {
  test('Listing API Keys Successfully', async () => {
    const response = await gateway.getAPIKeyList(getAPIKeyListForGateway);
    expect(response).toBeDefined();
  });
});

describe('List API Keys Errors (Gateway)', () => {
  test('No Rights', async () => {
    try {
      const gateway = new Gateway('meet165656', config_T);
      const response = await gateway.getAPIKeyList(getAPIKeyListForGateway);
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 7);
    }
  });
});

describe('Get API Key (Application)', () => {
  test('Getting API Key Successfully', async () => {
    const response = await gateway.getAPIKeyInfo(getAPIKeyInfoPayloadForGateway_T);
    expect(response.id).toBe(getAPIKeyInfoPayloadForGateway_T.key_id);
  });
});

describe('Get API Key Errors (Application)', () => {
  test('Api Key With ID Not Found', async () => {
    try {
      const response = await gateway.getAPIKeyInfo(getAPIKeyInfoPayloadForGateway_F);
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 5);
    }
  });

  test('No Rights', async () => {
    try {
      const gateway = new Gateway('eui-ee34634e6ada3428', config_T);
      const response = await gateway.getAPIKeyInfo(getAPIKeyInfoPayloadForGateway_F);
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 7);
    }
  });
});

describe('API Key Update (Gateway)', () => {
  test('API Key Updated Successfully', async () => {
    const response = await gateway.updateAPIKey(updateAPIKeyUserPayloadForGateway_T);
    expect(response.id).toBe(updateAPIKeyUserPayloadForGateway_T.api_key_id);
    expect(response.name).toBe(updateAPIKeyUserPayloadForGateway_T.api_key_name);
    expect(response.rights).toEqual(updateAPIKeyUserPayloadForGateway_T.api_key_rights);
  });
});

describe('API Key Update Errors (Gateway)', () => {
  test('Api Key With ID Not Found', async () => {
    try {
      const response = await gateway.updateAPIKey(updateAPIKeyUserPayloadForGateway_F);
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 5);
    }
  });

  test('No Rights', async () => {
    try {
      const gateway = new Gateway('eui-ee34634e6ada3428', config_T);
      const response = await gateway.updateAPIKey(updateAPIKeyUserPayloadForGateway_F);
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 7);
    }
  });
});

describe('Get Collaborator (Gateway-User)', () => {
  test('Getting Collaborator Successfully', async () => {
    const response = await gateway.getCollaboratorInfoOfUser(
      getCollaboratorInfoPayloadForApplication_User_T
    );
    expect(response.ids.user_ids.user_id).toBe(
      getCollaboratorInfoPayloadForApplication_User_T.user_id
    );
  });
});

describe('Get Collaborator (Gateway-User) Errors', () => {
  test('User Account Not Found', async () => {
    try {
      const response = await gateway.getCollaboratorInfoOfUser(
        getCollaboratorInfoPayloadForApplication_User_F
      );
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 5);
    }
  });

  test('No Rights', async () => {
    try {
      const gateway = new Application('jgyua', config_T);
      const response = await gateway.getCollaboratorInfoOfUser(
        getCollaboratorInfoPayloadForApplication_User_F
      );
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 7);
    }
  });
});

describe('Get Collaborator (Gateway-Org)', () => {
  test('Getting Collaborator Successfully', async () => {
    const response = await gateway.getCollaboratorInfoOfOrg(
      getCollaboratorInfoPayloadForApplication_Org_T
    );
    expect(response.ids.organization_ids.organization_id).toBe(
      getCollaboratorInfoPayloadForApplication_Org_T.organization_id
    );
  });
});

describe('Get Collaborator (Gateway-Org) Errors', () => {
  test('User Account Not Found', async () => {
    try {
      const response = await gateway.getCollaboratorInfoOfOrg(
        getCollaboratorInfoPayloadForApplication_Org_F
      );
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 5);
    }
  });

  test('No Rights', async () => {
    try {
      const gateway = new Application('jgyua', config_T);
      const response = await gateway.getCollaboratorInfoOfOrg(
        getCollaboratorInfoPayloadForApplication_Org_F
      );
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 7);
    }
  });
});

describe('Set Collaborator (Gateway-User)', () => {
  test('Set Collaborator Successfully', async () => {
    const gateway = new Gateway('eui-ee34634e6ada3425', config_T);
    const response = await gateway.setCollaboratorOfUser(setCollaboratorPayloadForGateway_User_T);
    expect(response).toBeDefined();
  });
});

describe('Set Collaborator Errors (Gateway-User)', () => {
  test('User Account Not Found', async () => {
    try {
      const response = await gateway.setCollaboratorOfUser(setCollaboratorPayloadForGateway_User_F);
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 5);
    }
  });

  test('No Rights or Insufficient Rights', async () => {
    try {
      const gateway = new Gateway('eui-ee34634e6ada3428', config_T);
      const response = await gateway.setCollaboratorOfUser(setCollaboratorPayloadForGateway_User_F);
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 7);
    }
  });
});

describe('Set Collaborator (Gateway-Org)', () => {
  test('Set Collaborator Successfully', async () => {
    const gateway = new Gateway('eui-ee34634e6ada3425', config_T);
    const response = await gateway.setCollaboratorOfOrg(setCollaboratorPayloadForGateway_Org_T);
    expect(response).toBeDefined();
  });
});

describe('Set Collaborator Errors (Gateway-Org)', () => {
  test('User Account Not Found', async () => {
    try {
      const response = await gateway.setCollaboratorOfOrg(setCollaboratorPayloadForGateway_Org_F);
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 5);
    }
  });

  test('No Rights or Insufficient Rights', async () => {
    try {
      const gateway = new Gateway('eui-ee34634e6ada3428', config_T);
      const response = await gateway.setCollaboratorOfOrg(setCollaboratorPayloadForGateway_Org_F);
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 7);
    }
  });
});

describe('List Collaborators', () => {
  test('Listing Collaborators Successfully', async () => {
    const response = await gateway.getCollaboratorList(getCollaboratorListUserPayload);
    expect(response).toBeDefined();
  });
});

describe('List Collaborators Errors', () => {
  test('Gateway Entity Not Found', async () => {
    try {
      const gateway = new Gateway('eui-ee34634e6ada3428', config_T);
      const response = await gateway.getCollaboratorList(getCollaboratorListUserPayload);
      expect(response).toBeUndefined();
    } catch (error: any) {
      expect(error).toHaveProperty('code', 5);
    }
  });
});
