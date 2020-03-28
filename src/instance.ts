import { AxiosInstance } from 'axios';
import {
    InstanceOptions,
    Message,
    NotificationAPIResponse,
    Identifier
} from './types';
import { END_POINT_CAMPAIGN } from './apiDetails';

const STATUS_SUCCESS = 200;

export class EngagespotPushService {
    public message = {} as Message;
    constructor(
        public axiosInstance: AxiosInstance,
        public options: InstanceOptions
    ) {}

    /**
     * @param {Message} message - The message object
     * @return {EngagespotPushService}
     */
    setMessage = (message: Message): EngagespotPushService => {
        this.message = message;
        return this;
    };

    /**
     * @param {Identifier[]} identifiers - The message object
     * @return {EngagespotPushService}
     */
    addIdentifiers = (identifiers: Identifier[]): EngagespotPushService => {
        this.message.identifiers = identifiers;
        return this;
    };

    /**
     * @return {Promise<NotificationAPIResponse>}
     */
    send = async (): Promise<NotificationAPIResponse> => {
        const response = await this.axiosInstance
            .post<NotificationAPIResponse>(END_POINT_CAMPAIGN, {
                ...this.message
            })
            .catch((err) => {
                throw err;
            });
        if (response.data && response.status === STATUS_SUCCESS) {
            return response.data;
        }
        throw new Error(response.statusText);
    };
}
