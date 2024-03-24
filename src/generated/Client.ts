/**
 * Client automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {ClientAbstract, CredentialsInterface, TokenStoreInterface} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {About} from "./About";
import {Execute} from "./Execute";
import {Message} from "./Message";
import {MessageException} from "./MessageException";
import {Response} from "./Response";
import {Update} from "./Update";

export class Client extends ClientAbstract {
    /**
     * @returns {Promise<About>}
     * @throws {MessageExceptionException}
     * @throws {ClientException}
     */
    public async get(): Promise<About> {
        const url = this.parser.url('/', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<About>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 500:
                        throw new MessageException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * @returns {Promise<Response>}
     * @throws {MessageExceptionException}
     * @throws {ClientException}
     */
    public async execute(action: string, payload: Execute): Promise<Response> {
        const url = this.parser.url('/:action', {
            'action': action,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'POST',
            params: this.parser.query({
            }, [
            ]),
            data: payload
        };

        try {
            const response = await this.httpClient.request<Response>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 500:
                        throw new MessageException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * @returns {Promise<Message>}
     * @throws {MessageExceptionException}
     * @throws {ClientException}
     */
    public async put(action: string, payload: Update): Promise<Message> {
        const url = this.parser.url('/:action', {
            'action': action,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'PUT',
            params: this.parser.query({
            }, [
            ]),
            data: payload
        };

        try {
            const response = await this.httpClient.request<Message>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 500:
                        throw new MessageException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }

    /**
     * @returns {Promise<Message>}
     * @throws {MessageExceptionException}
     * @throws {ClientException}
     */
    public async delete(action: string): Promise<Message> {
        const url = this.parser.url('/:action', {
            'action': action,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'DELETE',
            params: this.parser.query({
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<Message>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 500:
                        throw new MessageException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }



    public static build(credentials: CredentialsInterface): Client
    {
        return new Client('https://api.typehub.cloud/', credentials);
    }
}
