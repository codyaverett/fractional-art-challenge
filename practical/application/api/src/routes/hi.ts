import {
    FastifyInstance,
    FastifyPluginAsync,
    FastifyPluginOptions
} from 'fastify';
import fp from 'fastify-plugin';

import { mssql, defaultSqlConfig } from '@app/infra';
import { lookupByMobileOperatorId } from '@lib/mno-lookup/dist/mno-lookup';
import { validateApiKey } from '../helpers/worstApiKeyCheckEver';

// define options
export interface MyPluginOptions {
    uri: string;
}

const hi: FastifyPluginAsync<MyPluginOptions> = async (
    api: FastifyInstance,
    options: FastifyPluginOptions
) => {
    try {
        api.get('/hi', {}, async (request, reply) => {
            try {
                return reply.code(200).send(["one", "two", "one", "two"]);
            } catch (error) {
                request.log.error(error);
                return reply.send(500);
            }
        });

        api.get('/get/access_keys', {}, async (request, reply) => {
            try {
                await validateApiKey(request, async () => {
                    const sqlConnection = await new mssql().getConnection(defaultSqlConfig);
                    const sql = await sqlConnection.connect();

                    // Logs on access. All the repetetive stuff should be moved to fastify middleware layer
                    // sql injection risk too.  Can mitigate with stored procedures (prefered) or cleaning any inputs
                    const key = request.headers.authorization;
                    const nowTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
                    // const insertRequest = sqlConnection.request();
                    await sql.query(`INSERT INTO application.api.access_log VALUES('${key}','${nowTime}', '/get/access_keys')`);

                    const result = await sql.query("SELECT * FROM application.api.access_key")

                    return reply.code(200).send(result.recordset);
                });

            } catch (error) {
                return reply.send(error);
            }
        });

        api.get('/get/access_logs', {}, async (request, reply) => {
            try {
                await validateApiKey(request, async () => {

                    const sqlConnection = await new mssql().getConnection(defaultSqlConfig);
                    const sql = await sqlConnection.connect();

                    // Logs on access. All the repetetive stuff should be moved to fastify middleware layer
                    // sql injection risk too.  Can mitigate with stored procedures (prefered) or cleaning any inputs
                    const key = request.headers.authorization;
                    const nowTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
                    // const insertRequest = sqlConnection.request();
                    await sql.query(`INSERT INTO application.api.access_log VALUES('${key}','${nowTime}', '/get/access_logs')`);

                    const result = await sql.query("SELECT * FROM application.api.access_log")

                    return reply.code(200).send(result.recordset);
                });

            } catch (error) {
                return reply.send(error);
            }
        });

        // lookup mobile network operator provider
        api.get('/get/mno/:mnoId', {}, async (request, reply) => {
            try {
                const { mnoId } = request.params as { mnoId: string };

                const lookup = lookupByMobileOperatorId(mnoId);

                return reply.code(200).send(lookup || {});
            } catch (error) {
                return reply.send(500);
            }
        });

    } catch (error) {
        console.error(error);
    }
};

export default fp(hi);
