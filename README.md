<u><h1>The Things Stack</h1></u>

<p>"Package" is use for "The Things Netowrk" to manage the applications, devices etc. Making it easy for the users to do all functionalitites by just using methods of this package.</p>

<h3>Get Started</h3>
<hr style="border-top: 3px solid black;">
<p>Ready to start using "Package"? Let's begin!</p>

<h3>Installation</h3>
<hr style="border-top: 3px solid black;">
<p>To install the latest version on npm globally:</p>
<code>npm install -g "Package"</code>

<p>To install the latest version on npm locally and save it in your package's package.json file:</p>
<code>npm install --save-dev "Package"</code>

<p>To install the latest development version locally, without updating your project's package.json file:</p>
<code>npm install git+"link"</code>
<br><br>

<h3>Example</h3>
<hr style="border-top: 3px solid black;">
<p>Let's say you want to create an application, it can be created for both <b>User</b> and <b>Organization...</b> <br><br>

<h4><u><b>For User:</b></u></h4>
<p> 1. First import that particular class. <br>
    2. Then set user ID and the configuration. <br>
    3. Pass the payload in the method.
</p>

For more info, see this: <a href="https://opensource.vruttitech.com/User.html#createApplication">Create Application For User</a>

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
const Payload = {
  application_id: 'test',
  name: 'demo',
  description: 'for testing',
};

const user = User('userId', config);

user.createApplication(Payload)

```

<br>

<h4><u><b>For Organization:</b></u></h4>
<p> 1. First import that particular class. <br>
    2. Then set organization ID and the configuration. <br>
    3. Pass the payload in the method.
</p>

For more info, see this: <a href="https://opensource.vruttitech.com/Organization.html#createApplication">Create Application For Organization</a>

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
const Payload = {
  application_id: 'test',
  name: 'demo',
  description: 'for testing',
};

const org = new Organization('organizationId', config);

org.createApplication(Payload)

```

<br>
<h3>Explore Other Methods</h3>
<hr style="border-top: 3px solid black;">
<p>For User Related Methods: <a href="https://opensource.vruttitech.com/User.html">User</a><br>
For Organization Related Methods: <a href="https://opensource.vruttitech.com/Organization.html">Organization</a><br>
For Application Related Methods: <a href="https://opensource.vruttitech.com/Application.html">Application</a><br>
For EndDevice Related Methods: <a href="https://opensource.vruttitech.com/EndDevice.html">EndDevice</a><br>
For Gateway Related Methods: <a href="https://opensource.vruttitech.com/Gateway.html">Gateway</a><br></p>
