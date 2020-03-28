import { AxiosInstance } from 'axios';
import { InstanceOptions, Message, NotificationAPIResponse } from './types';
export declare class EngagespotPushService {
    axiosInstance: AxiosInstance;
    options: InstanceOptions;
    message: Message;
    constructor(axiosInstance: AxiosInstance, options: InstanceOptions);
    /**
     * @param {Message} message - The message object
     * @return {EngagespotPushService}
     */
    setMessage: (message: Message) => EngagespotPushService;
    /**
     * @param {Identifier[]} identifiers - The message object
     * @return {EngagespotPushService}
     */
    addIdentifiers: (identifiers: string[]) => EngagespotPushService;
    /**
     * @return {Promise<NotificationAPIResponse>}
     */
    send: () => Promise<NotificationAPIResponse>;
}
