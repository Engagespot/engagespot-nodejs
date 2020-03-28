"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param {AxiosStatic} axios - The axios static instance
 * @param {string} baseUrl - The base url of the server
 * @param {string} apiVersion - The version number of the api
 * @param {sting} apiKey - API Secret
 * @return {AxiosInstance}  Returns preconfigured axios instance
 */
exports.createAxiosInstance = function (axios, baseUrl, apiVersion, apiKey) {
    return axios.create({
        baseURL: baseUrl + "/" + apiVersion + "/",
        timeout: 3000,
        headers: { 'Content-Type': 'application/json', 'API-Key': apiKey }
    });
};
