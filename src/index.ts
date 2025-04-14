import "reflect-metadata";
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema } from 'type-graphql';
import { dataSourceDb } from "./config/db";
import { CountryResolver } from "./resolvers/CountryResolver";

const start = async () => {
  await dataSourceDb.initialize();
  
  const schema = await buildSchema({
    resolvers: [CountryResolver],
  });
  
  const server = new ApolloServer({ schema });
  
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);
  console.log("test live reload");
  
}

start();