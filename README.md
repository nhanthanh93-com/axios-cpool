# AXIOS CPOOL

## Simple a Client & Pool using AXIOS

[![npm version](https://img.shields.io/npm/v/axios-cpool.svg?style=flat-square)](https://www.npmjs.org/package/axios-cpool) [![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger) [![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=axios-cpool&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=axios-cpool) [![npm downloads](https://img.shields.io/npm/dm/axios-cpool.svg?style=flat-square)](https://npm-stat.com/charts.html?package=axios-cpool)

### Introduction

This package simplifies and streamlines HTTP request management using Axios. It offers two core components:

Client: A streamlined wrapper around Axios that efficiently manages configurations and instances.

ClientPool: Designed for high-load scenarios, this component manages multiple Client instances, enabling reuse and optimizing the handling of numerous requests. The _poolSize_ parameter acts as a maximum limit on the number of client instances that can be simultaneously held within the pool.

This streamlined approach simplifies the integration of Axios into your projects, especially in situations demanding high performance and efficient resource utilization.

##### Key Functions of ClientPool:

- Resource Control: By setting a _poolSize_, you prevent the excessive consumption of resources by ensuring that the number of active client instances remains within defined bounds.

- Client Lifecycle Management: When the pool reaches its capacity (poolSize), adding a new client automatically triggers the removal of the oldest client from the pool. This mechanism efficiently manages the lifecycle of clients, prioritizing newer instances and maintaining optimal performance.

This streamlined approach simplifies the integration of Axios into your projects, especially in situations demanding high performance and efficient resource utilization.

##### Key Features:

- Easy to Use: Simple and intuitive API for making HTTP requests.

- Client Pool: Manage multiple API clients with ease using the client pool.

- Configurable: Easily configure base URLs and request timeouts.

- TypeScript Support: Fully written in TypeScript for type safety and improved development experience.

- Error Handling: Built-in error handling with Axios interceptors.

---

### Installing

Axios is a required package that must be installed.

Using npm:

```bash
$ npm i axios axios-cpool
```

using yarn:

```bash
$ yarn add axios axios-cpool
```

Once the package is installed, you can import the library using import or require approach:

```js
import { Client, ClientPool } from 'axios-cpool';
```

If you use require for importing, only default export is available:

`const { Client, ClientPool } = require("axios-cpool");`

### Example

```js
import { Client } from 'axios-cpool';

// Create an instance of Client for your API server
const apiClient = new Client('https://api.example.com');

// Set headers for the clients: Authorization, Api-key, etc...
apiClient.setHeaders({
  Authorization: 'Bearer token1',
  'Custom-Header': 'customValue1'
});

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

    // Make an UPDATE request
    const updateData = { name: 'Updated Name', age: 35 };
    const updateResponse = await apiClient.put('/users/123', updateData);
    console.log('UPDATE Response:', updateResponse.data);
  } catch (error) {
    console.error('Error:', error);
  }
})();
```

Assuming you have multiple API servers:

    1. https://jsonplaceholder.typicode.com
    2. https://jsonplaceholder.typicode.com
    3. https://jsonplaceholder.typicode.com

```js
import { Client, ClientPool } from "axios-cpool";

// Create instances of Client for each API server
const client1 = new Client('https://jsonplaceholder.typicode.com');
const client2 = new Client('https://jsonplaceholder.typicode.com');
const client3 = new Client('https://jsonplaceholder.typicode.com'); // additional client for testing pool size


// Set headers for the clients: Authorization, Api-key, etc...
client1.setHeaders({
  Authorization: 'Bearer token1',
  'Custom-Header': 'customValue1'
});

// Create client pool with a size limit
const poolSize = 2;

// Create a ClientPool and add clients to it
const cpool = new ClientPool(poolSize);
cpool.addClient('server1', client1);
cpool.addClient('server2', client2);
cpool.addClient('server3', client3);

console.log('Current clients in pool:', cpool.listClients());

async fetchData() {
  try {
    const server2Data = await cpool.request('server2', 'get', '/posts/1');
    console.log('Server2 Data:', server2Data);

    const server3Data = await cpool.request('server3', 'get', '/posts/1');
    console.log('Server3 Data:', server3Data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


```

### Credits

Special thanks to the axios library for providing a robust and versatile HTTP client that served as the foundation for this package.

### Support

If you have enjoyed this package and would like to buy me a coffee ☕️

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoffee.com/nhanthanh93)
