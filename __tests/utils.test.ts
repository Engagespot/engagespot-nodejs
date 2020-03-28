import { createAxiosInstance } from '../src/utils';
import axios, { AxiosInstance } from 'axios';

describe('createAxiosInstance function test', () => {
    let axiosInstance: AxiosInstance;
    const createAxiosTestInstance = () => {
        axiosInstance = createAxiosInstance(axios, 'abc.xyz', '1', '123');
    };
    beforeEach(() => {
        createAxiosTestInstance();
    });

    it('Should have a base url of abc.xyz', () => {
        expect(axiosInstance.defaults.baseURL).toEqual('abc.xyz/1/');
    });

    it('Should have a header named Content-Type with value application/json', () => {
        expect(axiosInstance.defaults.headers['Content-Type']).toEqual(
            'application/json'
        );
    });

    it('Should have a header named API-Key with value 123', () => {
        expect(axiosInstance.defaults.headers['API-Key']).toEqual('123');
    });
});
