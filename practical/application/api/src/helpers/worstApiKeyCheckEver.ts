import { FastifyRequest } from "fastify";

const validApiKeys = new Set();
    validApiKeys.add('123456789');
    validApiKeys.add('987654321');

// this is just for sake of brevity 
export async function validateApiKey(request: FastifyRequest, cb: Function) {
    if(validApiKeys.has(request.headers.authorization)) {
        await cb();
    } else {
        throw new Error("Unauthorized");
    }
}
