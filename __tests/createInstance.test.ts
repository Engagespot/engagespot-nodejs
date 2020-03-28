import { createInstance } from '../src/index';
import * as API from '../src/apiDetails';
import { EngagespotPushService } from '../src/instance';

describe('createAxiosInstance function test', () => {
    const apiKey = '123';
    const siteKey = '456';
    let EngagespotPushService: EngagespotPushService;
    const createEngagespotPushService = () => {
        EngagespotPushService = createInstance({ apiKey, siteKey });
    };
    beforeEach(() => {
        createEngagespotPushService();
    });

    it('Should return an instance of EngagespotPushService', () => {
        expect(EngagespotPushService).toBeInstanceOf(EngagespotPushService);
    });

    it('Should have api key of 123', () => {
        expect(EngagespotPushService.options.apiKey).toEqual(apiKey);
    });

    it('Should have site key of 456', () => {
        expect(EngagespotPushService.options.siteKey).toEqual(siteKey);
    });
});
