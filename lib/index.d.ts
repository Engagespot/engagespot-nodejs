import { EngagespotPushService } from './instance';
import { InstanceOptions } from './types';
/**
 * @param {InstanceOptions}  instanceOptions
 * @return {EngagespotPushService}  Returns an created instance of engagespot
 */
export declare const createInstance: ({ apiKey, siteKey }: InstanceOptions) => EngagespotPushService;
