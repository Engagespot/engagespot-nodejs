import axios from 'axios';
import { EngagespotPushService } from './instance';
import { InstanceOptions } from './types';
import { createAxiosInstance } from './utils';
import * as API from './apiDetails';

/**
 * @param {InstanceOptions}  instanceOptions
 * @return {EngagespotPushService}  Returns an created instance of engagespot
 */
export const createInstance = ({
    apiKey,
    siteKey
}: InstanceOptions): EngagespotPushService => {
    const axiosInstance = createAxiosInstance(
        axios,
        API.BASE_URL,
        API.API_VERSION,
        apiKey
    );

    return new EngagespotPushService(axiosInstance, {
        apiKey,
        siteKey
    });
};
