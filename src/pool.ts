import { AxiosRequestConfig } from 'axios';
import Client from './client';

class ClientPool {
  private clients: Map<string, Client>;
  private clientQueue: string[];
  private poolSize: number;

  constructor(poolSize: number) {
    this.clients = new Map<string, Client>();
    this.clientQueue = [];
    this.poolSize = poolSize;
  }

  public addClient(name: string, client: Client): void {
    if (this.clients.size >= this.poolSize) {
      const oldestClientName = this.clientQueue.shift();
      if (oldestClientName) {
        this.clients.delete(oldestClientName);
      }
    }

    this.clients.set(name, client);
    this.clientQueue.push(name);
  }

  public getClient(name: string): Client | undefined {
    return this.clients.get(name);
  }

  public removeClient(name: string): void {
    this.clients.delete(name);
    this.clientQueue = this.clientQueue.filter(clientName => clientName !== name);
  }

  public listClients(): string[] {
    return Array.from(this.clients.keys());
  }

  public async request<T>(clientName: string, method: 'get' | 'post' | 'delete' | 'put', url: string, dataOrParams?: any, config?: AxiosRequestConfig): Promise<T> {
    const client = this.clients.get(clientName);
    if (!client) {
      throw new Error(`Client for ${clientName} not found`);
    }
    
    let response;
    switch (method) {
      case 'get':
        response = await client.get<T>(url, dataOrParams, config);
        break;
      case 'post':
        response = await client.post<T>(url, dataOrParams, config);
        break;
      case 'delete':
        response = await client.delete<T>(url, config);
        break;
      case 'put':
        response = await client.put<T>(url, dataOrParams, config);
        break;
      default:
        throw new Error('Invalid method');
    }
    
    return response.data;
  }
}

export default ClientPool;
