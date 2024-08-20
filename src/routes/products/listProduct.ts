import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import {server} from "../../server";
import { products } from "./addProduct";

export const listProducts = (server: FastifyInstance) => {
    server.get('/list', (request: FastifyRequest, reply: FastifyReply) => {
        return reply.status(200).send(products);
    });
};