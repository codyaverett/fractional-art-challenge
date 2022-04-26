import { FastifyPlugin } from 'fastify';
import { ConnectionPool } from 'mssql';

// Most importantly, use declaration merging to add the custom property to the Fastify type system
declare module 'fastify' {
    interface FastifyInstance {
      sql: ConnectionPool,
      verifyTokenizeToken: any,
    }
  }