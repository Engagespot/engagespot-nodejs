import { createInstance } from '../src/index';

const apiKey = process.env.API_KEY || '';
const siteKey = process.env.SITE_KEY || '';

const engagespotInstance = createInstance({
    apiKey,
    siteKey
});

engagespotInstance
    .setMessage({
        campaign_name: 'User Message Alert',
        notification: {
            title: 'You have a new message from John!',
            message: 'Hey Dave, Wassup...',
            icon: 'https://cdn.yourwebsite.com/images/profiles/john.jpg',
            url: 'https://app.yourwebsite.com/messages'
        },
        send_to: 'identifiers'
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
