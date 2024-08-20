import { FastifyInstance } from "fastify";
import { addProduct } from "./routes/products/addProduct";
import { listProducts } from "./routes/products/listProduct";
import { removeProducts } from "./routes/products/removeProduct";

export const routes = async (fastify: FastifyInstance) =>{
    fastify.get("/", async (request, reply) => {
        return { hello: "world" };
    });

    addProduct(fastify);
    listProducts(fastify);
    removeProducts(fastify);
}