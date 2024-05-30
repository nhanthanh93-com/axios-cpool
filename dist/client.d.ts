import { AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from 'axios';
declare class Client {
    private instance;
    constructor(baseURL: string, timeout?: number);
    setHeaders(headers: RawAxiosRequestHeaders): void;
    get<T>(url: string, params?: Record<string, any>, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
    post<T>(url: string, data?: object, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
    delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
    put<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
    patch<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
}
export default Client;
