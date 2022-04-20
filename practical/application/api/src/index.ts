import fastify from 'fastify';

// import sql from './plugins/_unused_sql';
import hi from './routes/hi';

const PORT = 8080;
const api = fastify({ logger: true });

// Swagger docs!
api.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix:'/docs',
    swagger: {
        info: { title: 'fastify-api' },
        securityDefinitions: {
            Authorization: {
              type: 'apiKey',
              name: 'Authorization',
              in: 'header'
            }
          }      
    }
})
.register(hi);

// Run
async function run() {
    try {
        const address = await api.listen(PORT);
        console.log(`Api listening at the ${address}`);
    } catch (error) {
        api.log.error(error);
    }
};

run();
