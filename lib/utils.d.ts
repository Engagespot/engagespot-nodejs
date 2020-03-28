import { AxiosStatic, AxiosInstance } from 'axios';
/**
 *
 * @param {AxiosStatic} axios - The axios static instance
 * @param {string} baseUrl - The base url of the server
 * @param {string} apiVersion - The version number of the api
 * @param {sting} apiKey - API Secret
 * @return {AxiosInstance}  Returns preconfigured axios instance
 */
export declare const createAxiosInstance: (axios: AxiosStatic, baseUrl: string, apiVersion: string, apiKey: string) => AxiosInstance;
