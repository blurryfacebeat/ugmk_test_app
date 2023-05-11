import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

import { IHttpOptions } from './HttpClient.types';

export class HttpClient {
  private readonly _instance: AxiosInstance;

  constructor(options?: IHttpOptions) {
    this._instance = axios.create({
      baseURL: options?.baseURL ?? '',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        ...options?.headers,
      },
      params: options?.params ?? {},
    });

    this.initializeResponseInterceptor();
  }

  private initializeResponseInterceptor() {
    this._instance.interceptors.response.use(
      this.handleResponse,
      this.handleError,
    );
  }

  private handleResponse = ({ data }: AxiosResponse): Promise<AxiosResponse> =>
    data;

  private handleError = (error: AxiosError): Promise<AxiosError> =>
    Promise.reject(error.response);

  get = async <T = never, R = AxiosResponse<T>>(
    resource: string,
    params?: Record<string, unknown>,
  ): Promise<R> => await this._instance.get(resource, { params });
}
