import {
    FastifyInstance,
    FastifyPluginAsync,
    FastifyPluginOptions,
    FastifyRequest
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
        const sqlConnection = await new mssql().getConnection(defaultSqlConfig);
        const sql = await sqlConnection.connect();

        async function logApiUsage(request: FastifyRequest, event: string) {
            // Logs on access. All the repetetive stuff should be moved to fastify middleware layer
            // sql injection risk too.  Can mitigate with stored procedures (prefered) or cleaning any inputs
            const apikey = request.headers.authorization;
            const nowTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
            // const insertRequest = sqlConnection.request();
            await sql.query(`INSERT INTO application.api.access_log VALUES('${apikey}','${nowTime}', '${event}')`);
        }

        api.get('/hi', {}, async (request, reply) => {
            try {
                return reply.code(200).send(["one", "two", "one", "two"]);
            } catch (error) {
                request.log.error(error);
                return reply.send(500);
            }
        });

        const get_access_keys_route = '/get/access_keys';
        api.get(get_access_keys_route, {}, async (request, reply) => {
            try {
                await validateApiKey(request, async () => {
                    await logApiUsage(request, get_access_keys_route);
                    const result = await sql.query("SELECT * FROM application.api.access_key");

                    return reply.code(200).send(result.recordset);
                });

            } catch (error) {
                return reply.send(error);
            }
        });

        const get_access_logs_route = '/get/access_logs';
        api.get(get_access_logs_route, {}, async (request, reply) => {
            try {
                await validateApiKey(request, async () => {
                    await logApiUsage(request, get_access_logs_route);
                    const result = await sql.query("SELECT * FROM application.api.access_log")

                    return reply.code(200).send(result.recordset);
                });

            } catch (error) {
                return reply.send(error);
            }
        });

        // lookup mobile network operator provider
        const get_mno_byMnoId_route = '/get/mno';
        api.get(`${get_mno_byMnoId_route}/:mnoId`, {}, async (request, reply) => {
            try {
                await validateApiKey(request, async () => {
                    const { mnoId } = request.params as { mnoId: string };
                    await logApiUsage(request, `${get_mno_byMnoId_route}/${mnoId}`);
                    const lookup = lookupByMobileOperatorId(mnoId);

                    return reply.code(200).send(lookup || {});
                });
            } catch (error) {
                return reply.send(500);
            }
        });

    } catch (error) {
        console.error(error);
    }
};

export default fp(hi);
