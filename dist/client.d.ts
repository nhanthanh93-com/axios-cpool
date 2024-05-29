import { AxiosRequestConfig, AxiosResponse } from 'axios';
declare class Client {
    private instance;
    constructor(baseURL: string, timeout?: number);
    get<T>(url: string, params?: Record<string, any>, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
    post<T>(url: string, data?: object, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
    delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
    update<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
}
export default Client;
