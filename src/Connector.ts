import axios, {AxiosInstance} from "axios";
import {Connection, createConnection} from "mysql2/promise";
import {MongoClient} from "mongodb";
import {Client as PgClient} from "pg";
import {Client as ElasticsearchClient} from "@elastic/elasticsearch";

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

    public async getConnection(name: string): Promise<Connection|PgClient|AxiosInstance|MongoClient|ElasticsearchClient> {
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
            } else if (config.config.type === 'pdo_pgsql') {
                const client = new PgClient({
                    user: config.config.username,
                    password: config.config.password,
                    host: config.config.host,
                    database: config.config.database
                });
                await client.connect();
                this.connections[name] = client;
                return client;
            } else {
                throw new Error('SQL type is not supported');
            }
        } else if (config.type === 'Fusio.Adapter.Sql.Connection.SqlAdvanced') {
            return this.connections[name] = createConnection(config.config.url);
        } else if (config.type === 'Fusio.Adapter.Http.Connection.Http') {
            // @TODO configure proxy for http client
            //config.config.username
            //config.config.password
            //config.config.proxy

            return this.connections[name] = axios.create({
                baseURL: config.config.url
            });
        } else if (config.type === 'Fusio.Adapter.Mongodb.Connection.MongoDB') {
            const client = new MongoClient(config.config.url);
            await client.connect();

            return this.connections[name] = client;
        } else if (config.type === 'Fusio.Adapter.Elasticsearch.Connection.Elasticsearch') {
            const client = new ElasticsearchClient({
                nodes: config.config.host.split(',')
            });

            return this.connections[name] = client;
        } else {
            throw new Error('Provided a not supported connection type');
        }
    }

}