import Client from './client';

class ClientPool {
  private clients: Map<string, Client>;
  
  constructor() {
    this.clients = new Map<string, Client>();
  }

  public addClient(name: string, client: Client): void {
    this.clients.set(name, client);
  }

  public getClient(name: string): Client | undefined {
    return this.clients.get(name);
  }

  public removeClient(name: string): void {
    this.clients.delete(name);
  }

  public listClients(): string[] {
    return Array.from(this.clients.keys());
  }
}

export default ClientPool;
