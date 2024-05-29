import Client from './client';
declare class ClientPool {
    private clients;
    constructor();
    addClient(name: string, client: Client): void;
    getClient(name: string): Client | undefined;
    removeClient(name: string): void;
    listClients(): string[];
}
export default ClientPool;
