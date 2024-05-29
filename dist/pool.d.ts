import { AxiosRequestConfig } from 'axios';
import Client from './client';
declare class ClientPool {
    private clients;
    private clientQueue;
    private poolSize;
    constructor(poolSize: number);
    addClient(name: string, client: Client): void;
    getClient(name: string): Client | undefined;
    removeClient(name: string): void;
    listClients(): string[];
    request<T>(clientName: string, method: 'get' | 'post' | 'delete' | 'put', url: string, dataOrParams?: any, config?: AxiosRequestConfig): Promise<T>;
}
export default ClientPool;
