import axios, {AxiosInstance} from "axios";
import {Connection, createConnection} from "mysql2/promise";
import {MongoClient} from "mongodb";
import {Client as PgClient} from "pg";
import {Client as ElasticsearchClient} from "@elastic/elasticsearch";
import {ExecuteConnection} from "./generated/ExecuteConnection";

export class Connector {

    private connections: Record<string, ExecuteConnection>;
    private instances: Record<string, any>;

    public constructor(connections: Record<string, ExecuteConnection>) {
        this.connections = connections;
        this.instances = {};
    }

    public async getConnection(name: string): Promise<Connection|PgClient|AxiosInstance|MongoClient|ElasticsearchClient> {
        if (this.instances[name]) {
            return this.instances[name];
        }

        if (!this.connections[name]) {
            throw new Error('Connection does not exist');
        }

        const connection = this.connections[name];
        const config = JSON.parse(Buffer.from(connection.config || '', 'base64').toString());

        if (connection.type === 'Fusio.Adapter.Sql.Connection.Sql') {
            if (config.type === 'pdo_mysql') {
                return this.instances[name] = createConnection({
                    host: config.host,
                    user: config.username,
                    password: config.password,
                    database: config.database
                });
            } else if (config.type === 'pdo_pgsql') {
                const client = new PgClient({
                    user: config.username,
                    password: config.password,
                    host: config.host,
                    database: config.database
                });
                await client.connect();
                this.instances[name] = client;
                return client;
            } else {
                throw new Error('SQL type is not supported');
            }
        } else if (connection.type === 'Fusio.Adapter.Sql.Connection.SqlAdvanced') {
            return this.instances[name] = createConnection(config.url);
        } else if (connection.type === 'Fusio.Adapter.Http.Connection.Http') {
            // @TODO configure proxy for http client
            //config.username
            //config.password
            //config.proxy

            return this.instances[name] = axios.create({
                baseURL: config.url
            });
        } else if (connection.type === 'Fusio.Adapter.Mongodb.Connection.MongoDB') {
            const client = new MongoClient(config.url);
            await client.connect();

            return this.instances[name] = client;
        } else if (connection.type === 'Fusio.Adapter.Elasticsearch.Connection.Elasticsearch') {
            const client = new ElasticsearchClient({
                nodes: config.host.split(',')
            });

            return this.instances[name] = client;
        } else {
            throw new Error('Provided a not supported connection type');
        }
    }

}