# Engagespot NodeJS SDK

[![npm version](https://img.shields.io/npm/v/axios.svg?style=flat-square)](https://www.npmjs.org/package/axios)
[![build status](https://img.shields.io/travis/axios/axios/master.svg?style=flat-square)](https://travis-ci.org/axios/axios)
[![install size](https://packagephobia.now.sh/badge?p=axios)](https://packagephobia.now.sh/result?p=axios)

Easiest way to implement user-specific web push notifications in nodejs.

Engagespot helps you to add push notification functionality to your node web application. Before using this SDK, you need to create a free account at https://engagespot.co
Add push notifications to your NodeJS web app in less than 10 mins!

## Features

## Installing

Using npm:

```bash
$ npm install @engagespot/notifications
```

## Example

### Typescript usage:

```js
import { createInstance } from '@engagespot/notifications';

const apiKey = process.env.API_KEY || '';
const siteKey = process.env.SITE_KEY || '';

const engagespotInstance = createInstance({
    apiKey,
    siteKey,
});

engagespotInstance
    .setMessage({
        campaign_name: 'User Message Alert',
        notification: {
            title: 'You have a new message from John!',
            message: 'Hey Dave, Wassup...',
            icon: 'https://cdn.yourwebsite.com/images/profiles/john.jpg',
            url: 'https://app.yourwebsite.com/messages',
        },
        send_to: 'identifiers',
    })
    .addIdentifiers(['123'])
    .send()
    .then((res) => {
        console.log(`
        status: ${res.status}
        time: ${res.time}
        message: ${res.message}
        `);
    })
    .catch((err) => {
        throw err;
    });
```

### CommonJS usage:

```js
const { createInstance } = require('@engagespot/notifications');

const apiKey = process.env.API_KEY || '';
const siteKey = process.env.SITE_KEY || '';

const engagespotInstance = createInstance({
    apiKey,
    siteKey,
});

engagespotInstance
    .setMessage({
        campaign_name: 'User Message Alert',
        notification: {
            title: 'You have a new message from John!',
            message: 'Hey Dave, Wassup...',
            icon: 'https://cdn.yourwebsite.com/images/profiles/john.jpg',
            url: 'https://app.yourwebsite.com/messages',
        },
        send_to: 'identifiers',
    })
    .addIdentifiers(['123'])
    .send()
    .then((res) => {
        console.log(`
        status: ${res.status}
        time: ${res.time}
        message: ${res.message}
        `);
    })
    .catch((err) => {
        throw err;
    });
```

### Instance methods




## Promises

Engagespot notifications depends on a native ES6 Promise implementation.
If your environment doesn't support ES6 Promises, you can [polyfill](https://github.com/jakearchibald/es6-promise).

## TypeScript
Engagespot notifications includes [TypeScript](http://typescriptlang.org) definitions out of the box.
