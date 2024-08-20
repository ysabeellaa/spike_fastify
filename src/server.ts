import fastify from "fastify";
import { routes } from "./routes";
import cors from "@fastify/cors";

export const server = fastify();

server.register(cors); 
server.register(routes); 

server.listen({ port: 3333 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at port 3333`);
});