import { EngagespotPushService } from '../src/instance';
import { Message } from '../src/types';

const apiKey = '123';
const siteKey = '456';
const axiosResponse = {
    data: {
        status: 'ok',
        time: 0.05978202819824219,
        message: 'Notification has been queued'
    },
    status: 200,
    statusText: 'OK',
    config: {},
    headers: {}
};

const axiosMock = (resolveFlag: boolean) => {
    return {
        post(endpoint: string, obj: any) {
            return new Promise((resolve, reject) => {
                if (resolveFlag) {
                    return resolve(axiosResponse);
                } else {
                    reject();
                }
            });
        }
    };
};

describe('Tests', () => {
    describe('Fetch data', () => {
        it('fetches successfully data from an API', async () => {
            const message: Message = {
                campaign_name: 'User Message Alert',
                notification: {
                    title: 'You have a new message from John!',
                    message: 'Hey Dave, Wassup...',
                    icon:
                        'https://cdn.yourwebsite.com/images/profiles/john.jpg',
                    url: 'https://app.yourwebsite.com/messages'
                },
                send_to: 'everyone'
            };

            const instance = new EngagespotPushService(axiosMock(true) as any, {
                apiKey,
                siteKey
            });
            const response = await instance.setMessage(message).send();
            expect(response).toStrictEqual({
                status: 'ok',
                time: 0.05978202819824219,
                message: 'Notification has been queued'
            });
        });
    });
});
