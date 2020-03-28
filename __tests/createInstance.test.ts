import { createInstance } from '../src/index';
import * as API from '../src/apiDetails';
import { EngagespotPushService } from '../src/instance';

describe('createAxiosInstance function test', () => {
    const apiKey = '123';
    const siteKey = '456';
    let engagespotPushService: EngagespotPushService;
    const createEngagespotPushService = () => {
        engagespotPushService = createInstance({ apiKey, siteKey });
    };
    beforeEach(() => {
        createEngagespotPushService();
    });

    it('Should return an instance of EngagespotPushService', () => {
        expect(engagespotPushService).toBeInstanceOf(EngagespotPushService);
    });

    it('Should have api key of 123', () => {
        expect(engagespotPushService.options.apiKey).toEqual(apiKey);
    });

    it('Should have site key of 456', () => {
        expect(engagespotPushService.options.siteKey).toEqual(siteKey);
    });
});
