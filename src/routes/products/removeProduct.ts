import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { server } from "../../server";
import { products } from "./addProduct";




export const removeProducts = (server: FastifyInstance) => {
    server.delete('/remove/:id', (request: FastifyRequest, reply: FastifyReply) => {
        const productId = parseInt(request.params.id, 10);
        const productIndex = products.findIndex(p => p.id === productId);
    
        if (productIndex > -1) {
            products.splice(productIndex, 1);
            reply.send({ message: `Product with ID ${productId} removed successfully.` });
        } else {
            reply.status(404).send({ message: "Product not found." });
        }
    });
};