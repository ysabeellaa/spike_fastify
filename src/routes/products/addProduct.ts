import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import {server} from "../../server";

export let products = [
    { id: 3, name: 'Product 2', price: 10000 }
];
export const addProduct = (server: FastifyInstance) => {
    server.post('/add', (request: FastifyRequest, reply: FastifyReply) => {
        const { id, name, price } = request.body as any;
        products.push({ id, name, price });
        return reply.status(201).send({ message: 'Product added successfully' });
    });
};