# AXIOS CPOOL
## Simple a Client & Pool using AXIOS

<div align="center">
  [![npm version](https://img.shields.io/npm/v/axios.svg?style=flat-square)](https://www.npmjs.org/package/axios-cpool)
  [![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
  [![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=axios-cpool&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=axios-cpool)
  [![npm downloads](https://img.shields.io/npm/dm/axios.svg?style=flat-square)](https://npm-stat.com/charts.html?package=axios)
</div>

### Description

This package simplifies and streamlines HTTP request management using Axios. It offers two core components:

Client: A streamlined wrapper around Axios that efficiently manages configurations and instances.

ClientPool: Designed for high-load scenarios, this component manages multiple Client instances, enabling reuse and optimizing the handling of numerous requests.

This streamlined approach simplifies the integration of Axios into your projects, especially in situations demanding high performance and efficient resource utilization.

---
### Installing

Axios is a required package that must be installed.

Using npm:

```bash
$ npm i axios client-pool
```

using yarn:

```bash
$ yarn add axios client-pool
```

Once the package is installed, you can import the library using import or require approach:

```js 
import {Client, ClientPool} from "client-pool";
```

If you use require for importing, only default export is available:

```const { Client, ClientPool } = require("client-pool");```

### Example

```js
import { Client } from "client-pool";

// Create an instance of Client for your API server
const apiClient = new Client('https://api.example.com');

// Example usage
(async () => {
  try {
    // Make a GET request
    const getResponse = await apiClient.get('/data');
    console.log('GET Response:', getResponse.data);

    // Make a POST request
    const postData = { name: 'John', age: 30 };
    const postResponse = await apiClient.post('/users', postData);
    console.log('POST Response:', postResponse.data);

    // Make a DELETE request
    const deleteResponse = await apiClient.delete('/users/123');
    console.log('DELETE Response:', deleteResponse.data);

    // Make an UPDATE request (assuming PUT for update)
    const updateData = { name: 'Updated Name', age: 35 };
    const updateResponse = await apiClient.update('/users/123', updateData);
    console.log('UPDATE Response:', updateResponse.data);
  } catch (error) {
    console.error('Error:', error);
  }
})();
```

Assuming you have two API servers:

    1. https://api-server1.com
    2. https://api-server2.com
    
```js
import { Client, ClientPool } from "client-pool";

// Create instances of Client for each API server
const client1 = new Client('https://api-server1.com');
const client2 = new Client('https://api-server2.com');

// Create a ClientPool and add clients to it
const pool = new ClientPool();
pool.addClient("server1", client1);
pool.addClient("server2, client2);

async getUsers() {
    try {
        const clientPool1 = pool.getClient("server1");
        const response = await clientPool1.get("/users");
        console.log("Response from server 1:", response);
    } catch (error) {
        console.error(error);
    }
}

async getTasks() {
    try {
        const clientPool2 = pool.getClient("server2");
        const rs = await clientPool2.get("/tasks")
        console.log("Response from server 2:", response);
    } catch (error) {
        console.error("Error from server 2:",error);
    }
}
``` 

### Credits
Special thanks to the axios library for providing a robust and versatile HTTP client that served as the foundation for this package.

If you have enjoyed this package and would like to buy me a coffee ☕️

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoffee.com/nhanthanh93){:target="_blank"}