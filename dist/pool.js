"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClientPool = /** @class */ (function () {
    function ClientPool() {
        this.clients = new Map();
    }
    ClientPool.prototype.addClient = function (name, client) {
        this.clients.set(name, client);
    };
    ClientPool.prototype.getClient = function (name) {
        return this.clients.get(name);
    };
    ClientPool.prototype.removeClient = function (name) {
        this.clients.delete(name);
    };
    ClientPool.prototype.listClients = function () {
        return Array.from(this.clients.keys());
    };
    return ClientPool;
}());
exports.default = ClientPool;
