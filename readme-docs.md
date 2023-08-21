# <u>The Things Network NodeJS SDK</u>

<br>

### 🏢 About Us

---

<p style="display:flex; align-items:center; justify-content:start">
  <img src="https://sgp1.digitaloceanspaces.com/harimedia/vrutti/fuota-assets/logo/fuota.io_logo.png" width="70" height="70">
  <span style="font-size:44px; padding-left:15px; font-weight:bolder">FUOTA.IO</span>
</p>

This SDK is being maintained by team @ fuota.io 

Fuota.io is your all-in-one platform for effortless firmware updates and comprehensive device management for LoRaWAN devices with The Things Network and many other popular LoRaWAN Network Server. 

In the rapidly evolving landscape of connected devices, keeping your devices up-to-date with the latest firmware is a critical factor for optimal performance, enhanced security, and feature-rich functionality. So, if you are looking for ready solution for firmware update deployment solution. Join us at Fuota.io and unlock the full potential of your connected LoRaWAN devices, keeping them updated, secure, and seamlessly integrated.

**Visit Us** : <a href="https://fuota.io/"><b>fuota.io</b></a>

<br>

### 🚀 Get Started

---

The Node.js SDK seamlessly integrates with The Things Network's Lorawan Network Server (LNS), allowing developers to easily connect and manage IoT devices. With extensive API support, this package simplifies application interaction with TTN's Lorawan ecosystem, enabling device provisioning, data transmission, and device status monitoring. Utilize the user-friendly Node.js SDK to boost connectivity and data management within The Things Network's Lorawan infrastructure.

This SDK also works with "The Things Industries" and privately hosted "The Things Stack Instance".

Ready to start using SDK ? Let's begin!

**Visit GitHub** : <a href="https://github.com/fuota-io/The-Things-Network-NodeJS-SDK"><b>The-Things-Network-NodeJS-SDK</b></a>

<br>

### 🎁 Explore Supported Methods

---

For End-Device Related Methods: [EndDevice](https://ttn-node-sdk.fuota.io/EndDevice.html) <br>
For Application Related Methods: [Application](https://ttn-node-sdk.fuota.io/Application.html) <br>
For Gateway Related Methods: [Gateway](https://ttn-node-sdk.fuota.io/Gateway.html) <br>
For User Related Methods: [User](https://ttn-node-sdk.fuota.io/User.html) <br>
For Organization Related Methods: [Organization](https://ttn-node-sdk.fuota.io/Organization.html)

<br>

### 🔧 Installation

---

To install the latest version on npm locally and save it in your package's package.json file:

> npm install the-things-network --save

To install the latest development version locally, without updating your project's package.json file:

> npm install git+https://github.com/fuota-io/The-Things-Network-NodeJS-SDK.git

<br>

### 💻 How To Use It !!!

---

Let's say you want to create an application, it can be created for both **User** and **Organization...** <br><br>

#### <u>**For User :**</u>

1. First import that particular class.
2. Then set user ID and the configuration.
3. Pass the payload in the method.

For more info, see this: [Create Application For User](https://ttn-node-sdk.fuota.io/User.html#createApplication)

```
import { User } from 'the-things-network';

//just an example of config
const config = {
  IDENTITY_SERVER: 'eu1.cloud.thethings.network',
  NETWORK_SERVER: 'nam1.cloud.thethings.network',
  APPLICATION_SERVER: 'nam1.cloud.thethings.network',
  JOIN_SERVER: 'nam1.cloud.thethings.network',
  API_KEY: 'xxxxxapi_keyxxxxxx',
};

//just an example of payload
const payload = {
  application_id: 'test',
  name: 'demo',
  description: 'for testing',
};

const user = User('userId', config);

await user.createApplication(payload);

```

<br>

#### <u>**For Organization:**</u>

1. First import that particular class.
2. Then set organization ID and the configuration.
3. Pass the payload in the method.

For more info, see this: [Create Application For Organization](https://ttn-node-sdk.fuota.io/Organization.html#createApplication)

```
import { Organization } from 'the-things-network';

//just an example of config
const config = {
  IDENTITY_SERVER: 'eu1.cloud.thethings.network',
  NETWORK_SERVER: 'nam1.cloud.thethings.network',
  APPLICATION_SERVER: 'nam1.cloud.thethings.network',
  JOIN_SERVER: 'nam1.cloud.thethings.network',
  API_KEY: 'xxxxxapi_keyxxxxxx',
};

//just an example of payload
const payload = {
  application_id: 'test',
  name: 'demo',
  description: 'for testing',
};

const org = new Organization('organizationId', config);

await org.createApplication(payload);

```

<br>

### 📖 More Examples

---

<br>

1. To get the list of applications of both users and organizations.

```
import { Application } from 'the-things-network';

//just an example of config
const config = {
  IDENTITY_SERVER: 'eu1.cloud.thethings.network',
  NETWORK_SERVER: 'nam1.cloud.thethings.network',
  APPLICATION_SERVER: 'nam1.cloud.thethings.network',
  JOIN_SERVER: 'nam1.cloud.thethings.network',
  API_KEY: 'xxxxxapi_keyxxxxxx',
};

const app = new Application('', config);

await app.getApplicationList();

```

2. To create an end-device in identity server.

```
import { EndDevice } from 'the-things-network';

//just an example of config
const config = {
  IDENTITY_SERVER: 'eu1.cloud.thethings.network',
  NETWORK_SERVER: 'nam1.cloud.thethings.network',
  APPLICATION_SERVER: 'nam1.cloud.thethings.network',
  JOIN_SERVER: 'nam1.cloud.thethings.network',
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

const device = new EndDevice('appId', config);

await device.createEndDeviceIS(payload);

```

3. To create a gateway for user.

```
import { Gateway } from 'the-things-network';

//just an example of config
const config = {
  IDENTITY_SERVER: 'eu1.cloud.thethings.network',
  NETWORK_SERVER: 'nam1.cloud.thethings.network',
  APPLICATION_SERVER: 'nam1.cloud.thethings.network',
  JOIN_SERVER: 'nam1.cloud.thethings.network',
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

const gateway = new Gateway('userId', config);

await gateway.createGateway(payload);

```

<br>

### 📨 MQTT Features

---

<br>

1. To subscribe a downlink event.

```
import { EndDevice } from 'the-things-network';

//just an example of config
const config = {
  IDENTITY_SERVER: 'eu1.cloud.thethings.network',
  NETWORK_SERVER: 'nam1.cloud.thethings.network',
  APPLICATION_SERVER: 'nam1.cloud.thethings.network',
  JOIN_SERVER: 'nam1.cloud.thethings.network',
  API_KEY: 'xxxxxapi_keyxxxxxx',
  TENANT_ID: 'xxxxxxxxxx',
};

//just an example of payload
const payload = {
  device_id: 'deviceId',
  down_type: '#',
  host: 'nam1.cloud.thethings.industries',
  port: 1883,
  username: 'user@tenant',
  callback_downlink_event: (data) => {
    console.log('downlinkEvent', data.toString('utf8'));
  },
};

const device = new EndDevice('appId', config);

await device.subscribeDownLinkEvent(payload);

```

2. To unsubscribe an event.

```
import { EndDevice } from 'the-things-network';

//just an example of config
const config = {
  IDENTITY_SERVER: 'eu1.cloud.thethings.network',
  NETWORK_SERVER: 'nam1.cloud.thethings.network',
  APPLICATION_SERVER: 'nam1.cloud.thethings.network',
  JOIN_SERVER: 'nam1.cloud.thethings.network',
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

const device = new EndDevice('appId', config);

const downevent = await device.subscribeDownLinkEvent(payload);

device.unsubscribeEvent(downevent.client, downevent.topic);

```

<br>

### 🎯 Benefits Of Using This Package

---

Once you create the instance of specific class and set the required parameters then you can explore all the methods belong to that class, it is that easy...

```
import { Application } from 'the-things-network';

//just an example of config
const config = {
  IDENTITY_SERVER: 'eu1.cloud.thethings.network',
  NETWORK_SERVER: 'nam1.cloud.thethings.network',
  APPLICATION_SERVER: 'nam1.cloud.thethings.network',
  JOIN_SERVER: 'nam1.cloud.thethings.network',
  API_KEY: 'xxxxxapi_keyxxxxxx',
};

//just an example of payload
const payload = {
  name: 'test',
  description: 'For testing',
  attributes: { 'key1': 'value1', 'key2': 'value2' },
};

const app = new Application('appId', config);

await app.getApplicationList();

await app.updateApplication(payload);

await app.deleteApplication();

await app.restoreApplication();

```

<br>

### 🔒 License

---

[MIT](LICENSE)
