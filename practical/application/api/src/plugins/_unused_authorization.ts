// @ts-nocheck

import {
    FastifyInstance,
    FastifyPluginAsync,
    FastifyPluginOptions,
    FastifyPluginCallback
} from 'fastify';
import fp from 'fastify-plugin';
import sql from './_unused_sql';

// Super secret secrets for this demo
const apiKeys = new Map()
apiKeys.set('123456789', 'secret1')
apiKeys.set('987654321', 'secret2')

// define options
export interface MyPluginOptions {
    getSecret: FastifyPluginCallback;
}

const apiKey: FastifyPluginAsync<MyPluginOptions> = async (
    api: FastifyInstance,
    options: FastifyPluginOptions
) => {
    api.register(require('fastify-auth'));
    api.register(sql);
    // inject SQL api.register(require('fastify-mongodb'), { url: 'mongodb://localhost:27017/my-awesome-db' })
    api.register(require('fastify-tokenize'), {
      fastifyAuth: true,
      fetchAccount: (app_key_id: string) => api.sql.query("SELECT * FROM application.api.access_key"),
      secret: 'btw have i told you i use arch'
    })
    
    api.route({
      method: 'GET',
      url: '/secure-place',
      // fastify.verifyTokenizeToken is added by fastify-tokenize when fastifyAuth is set to "true"
      preHandler: api.auth([ api.verifyTokenizeToken ]),
      handler: (req, reply) => {
        req.log.info('Auth route')
        reply.send({ hello: 'world' })
      }
    })

}

export default fp(apiKey);
