// @ts-check
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "node:fs";

const schema = readFileSync("schema.graphql", "utf-8");

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: {
    Query: {
      hello: () => "world",
      answer: () => 42,
    },
  },
});

await startStandaloneServer(server, { listen: { port: 4001 } });
console.log("Server running at http://localhost:4001");
