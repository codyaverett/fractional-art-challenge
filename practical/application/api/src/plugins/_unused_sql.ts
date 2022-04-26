import { defaultSqlConfig, mssql } from '@app/infra';
import {
    FastifyInstance,
    FastifyPluginAsync,
    FastifyPluginOptions
} from 'fastify';
import fp from 'fastify-plugin';

// define options
export interface MyPluginOptions {
    uri: string;
}

const sql: FastifyPluginAsync<MyPluginOptions> = async (
    api: FastifyInstance,
    options: FastifyPluginOptions
) => {
    try {       
        api.decorate('sql', async () => {
            const sqlConnection = await new mssql().getConnection(defaultSqlConfig);
            return await sqlConnection.connect();
        });
    } catch (error) {
        console.error(error);
    }
};

export default fp(sql);
