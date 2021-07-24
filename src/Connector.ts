
import axios, {AxiosInstance} from "axios";
import {Connection, createConnection} from "mysql2";

export interface Config {
    type: string,
    config: any,
}

export class Connector {

    private configs: Record<string, Config>;
    private connections: Record<string, any>;

    public constructor(configs: Record<string, Config>) {
        this.configs = configs;
        this.connections = {};
    }

    public getConnection(name: string): Connection|AxiosInstance {
        if (this.connections[name]) {
            return this.connections[name];
        }

        if (!this.configs[name]) {
            throw new Error('Connection does not exist');
        }

        const config = this.configs[name];

        if (config.type === 'Fusio.Adapter.Sql.Connection.Sql') {
            if (config.config.type === 'pdo_mysql') {
                return this.connections[name] = createConnection({
                    host: config.config.host,
                    user: config.config.username,
                    password: config.config.password,
                    database: config.config.database
                });
            } else {
                throw new Error('SQL type is not supported');
            }
        } else if (config.type === 'Fusio.Adapter.Sql.Connection.SqlAdvanced') {
            return this.connections[name] = createConnection(config.config.url);
        } else if (config.type === 'Fusio.Adapter.Http.Connection.Http') {
            return this.connections[name] = axios.create({
                baseURL: config.config.base_url
            });
        } else {
            throw new Error('Provided a not supported connection type');
        }
    }

}