# <u>The Things Stack</u>

"Package" is use for "The Things Netowrk" to manage the applications, devices etc. Making it easy for the users to do all functionalitites by just using methods of this package.

### 🚀 Get Started

---

Ready to start using "Package"? Let's begin!

### 🔧 Installation

---

To install the latest version on npm globally:

> npm install -g "Package"

To install the latest version on npm locally and save it in your package's package.json file:

> npm install --save-dev "Package"

To install the latest development version locally, without updating your project's package.json file:

> npm install git+"link"

<br>

### 💻 How To Use It !!!

---

Let's say you want to create an application, it can be created for both **User** and **Organization...** <br><br>

#### <u>**For User :**</u>

1. First import that particular class.
2. Then set user ID and the configuration.
3. Pass the payload in the method.

For more info, see this: [Create Application For User](https://opensource.vruttitech.com/User.html#createApplication)

```
import { User } from 'Package';

//just an example of config
const config = {
  IDENTITY_SERVER: 'https://eu1.cloud.thethings.network/api/v3',
  NETWORK_SERVER: 'https://nam1.cloud.thethings.network',
  APPLICATION_SERVER: 'https://nam1.cloud.thethings.network',
  JOIN_SERVER: 'https://nam1.cloud.thethings.network',
  API_KEY: 'xxxxxapi_keyxxxxxx',
};

//just an example of payload
const payload = {
  application_id: 'test',
  name: 'demo',
  description: 'for testing',
};

const user = User('userId', config);

user.createApplication(payload);

```

<br>

#### <u>**For Organization:**</u>

1. First import that particular class.
2. Then set organization ID and the configuration.
3. Pass the payload in the method.

For more info, see this: [Create Application For Organization](https://opensource.vruttitech.com/Organization.html#createApplication)

```
import { Organization } from 'Package';

//just an example of config
const config = {
  IDENTITY_SERVER: 'https://eu1.cloud.thethings.network/api/v3',
  NETWORK_SERVER: 'https://nam1.cloud.thethings.network',
  APPLICATION_SERVER: 'https://nam1.cloud.thethings.network',
  JOIN_SERVER: 'https://nam1.cloud.thethings.network',
  API_KEY: 'xxxxxapi_keyxxxxxx',
};

//just an example of payload
const payload = {
  application_id: 'test',
  name: 'demo',
  description: 'for testing',
};

const org = new Organization('organizationId', config);

org.createApplication(payload);

```

<br>

### 🎁 Explore Other Methods

---

For User Related Methods: [User](https://opensource.vruttitech.com/User.html) <br>
For Organization Related Methods: [Organization](https://opensource.vruttitech.com/Organization.html) <br>
For Application Related Methods: [Application](https://opensource.vruttitech.com/Application.html) <br>
For EndDevice Related Methods: [EndDevice](https://opensource.vruttitech.com/EndDevice.html) <br>
For Gateway Related Methods: [Gateway](https://opensource.vruttitech.com/Gateway.html)

### 📖 More Examples

---

<br>

1. To get the list of applications of both users and organizations.

```
import { Application } from 'Package';

//just an example of config
const config = {
  IDENTITY_SERVER: 'https://eu1.cloud.thethings.network/api/v3',
  NETWORK_SERVER: 'https://nam1.cloud.thethings.network',
  APPLICATION_SERVER: 'https://nam1.cloud.thethings.network',
  JOIN_SERVER: 'https://nam1.cloud.thethings.network',
  API_KEY: 'xxxxxapi_keyxxxxxx',
};

const app = new Application(config);

app.getApplicationList();

```

2. To create an end-device in identity server.

```
import { EndDevice } from 'Package';

//just an example of config
const config = {
  IDENTITY_SERVER: 'https://eu1.cloud.thethings.network/api/v3',
  NETWORK_SERVER: 'https://nam1.cloud.thethings.network/api/v3/ns',
  APPLICATION_SERVER: 'https://nam1.cloud.thethings.network/api/v3/as',
  JOIN_SERVER: 'https://nam1.cloud.thethings.network/api/v3/js',
  API_KEY: 'xxxxxapi_keyxxxxxx',
};

//just an example of payload
const payload = {
  end_device: {
    ids: {
      join_eui: 'DDFFDDFDFFDFDFDF',
      dev_eui: '70B3D57ED005B59E',
      device_id: 'eui-70b3d57ed005b59e',
      application_ids: {
        application_id: 'appId',
      },
    },
    version_ids: {
      brand_id: 'moko',
      model_id: 'lw003',
      hardware_version: '2.1',
      firmware_version: '2.0',
      band_id: 'AS_923',
    },
    network_server_address: 'nam1.cloud.thethings.network',
    application_server_address: 'nam1.cloud.thethings.network',
    join_server_address: 'nam1.cloud.thethings.network',
  },
};

const device = new EndDevice('userId' ,config);

device.createEndDeviceIS(payload)

```

3. To create a gateway for user.

```
import { Gateway } from 'Package';

//just an example of config
const config = {
  IDENTITY_SERVER: 'https://eu1.cloud.thethings.network/api/v3',
  NETWORK_SERVER: 'https://nam1.cloud.thethings.network',
  APPLICATION_SERVER: 'https://nam1.cloud.thethings.network',
  JOIN_SERVER: 'https://nam1.cloud.thethings.network',
  API_KEY: 'xxxxxapi_keyxxxxxx',
};

//just an example of payload
const payload = {
  gateway: {
    ids: { gateway_id: 'eui-ee34634e6ada3425', eui: 'EE34634E6ADA3425' },
    name: 'gateway',
    description: 'testing',
    gateway_server_address: 'nam1.cloud.thethings.network',
    frequency_plan_id: 'US_902_928_FSB_3',
    status_public: true,
    location_public: true,
    enforce_duty_cycle: true,
    schedule_anytime_delay: '0.530s',
    require_authenticated_connection: true,
  },
};

const gateway = new Gateway('deviceId', config);

gateway.createGateway(payload);

```

<br>

### 📨 MQTT Features

---

<br>

1. To subscribe a downlink event.

```
import { EndDevice } from 'Package';

//just an example of config
const config = {
  IDENTITY_SERVER: 'https://eu1.cloud.thethings.network/api/v3',
  NETWORK_SERVER: 'https://nam1.cloud.thethings.network',
  APPLICATION_SERVER: 'https://nam1.cloud.thethings.network',
  JOIN_SERVER: 'https://nam1.cloud.thethings.network',
  API_KEY: 'xxxxxapi_keyxxxxxx',
  TENANT_ID: 'xxxxxxxxxx',
};

//just an example of payload
const payload = {
  device_id: 'deviceId',
  down_type: '#',
  host: 'nam1.cloud.thethings.industries',
  port: 1883,
  username: 'user@example',
  callback_downlink_event: (data) => {
    console.log('downlinkEvent', data.toString('utf8'));
  },
};

const device = new EndDevice('deviceId', config);

device.subscribeDownLinkEvent(payload);

```

2. To unsubscribe an event.

```
import { EndDevice } from 'Package';

//just an example of config
const config = {
  IDENTITY_SERVER: 'https://eu1.cloud.thethings.network/api/v3',
  NETWORK_SERVER: 'https://nam1.cloud.thethings.network',
  APPLICATION_SERVER: 'https://nam1.cloud.thethings.network',
  JOIN_SERVER: 'https://nam1.cloud.thethings.network',
  API_KEY: 'xxxxxapi_keyxxxxxx',
  TENANT_ID: 'xxxxxxxxxx',
};

//just an example of payload
const payload = {
  device_id: 'deviceId',
  down_type: '#',
  host: 'nam1.cloud.thethings.industries',
  port: 1883,
  username: 'user@example',
  callback_downlink_event: (data) => {
    console.log('downlinkEvent', data.toString('utf8'));
  },
};

const device = new EndDevice('deviceId', config);

const downevent = device.subscribeDownLinkEvent(payload);

device.unsubscribeEvent(downevent);

```

<br>

### 🎯 Benefits Of Using This Package

---

Once you create the instance of specific class and set the require parameters then you can explore all the methods belong to that class, it is that easy...

```
import { Application } from 'Package';

//just an example of config
const config = {
  IDENTITY_SERVER: 'https://eu1.cloud.thethings.network/api/v3',
  NETWORK_SERVER: 'https://nam1.cloud.thethings.network',
  APPLICATION_SERVER: 'https://nam1.cloud.thethings.network',
  JOIN_SERVER: 'https://nam1.cloud.thethings.network',
  API_KEY: 'xxxxxapi_keyxxxxxx',
};

//just an example of payload
const payload = {
  name: 'test',
  description: 'For testing',
  attributes: { 'key1': 'value1', 'key2': 'value2' },
};

const app = new Application('appId', config);

app.getApplicationList();

app.updateApplication(payload);

app.deleteApplication();

app.restoreApplication();

```

<br>

### 🔒 License

---

!!!!!
