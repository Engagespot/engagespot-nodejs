export declare type SendTo = 'everyone' | 'identifiers';
export declare type Identifier = string;
export interface InstanceOptions {
    siteKey: string;
    apiKey: string;
}
export interface Notification {
    title: string;
    message: string;
    icon: string;
    url?: string;
}
export interface Message {
    campaign_name: string;
    notification: Notification;
    send_to: SendTo;
    identifiers?: Identifier[];
}
export interface NotificationAPIResponse {
    time: number;
    status: string;
    message: string;
}
