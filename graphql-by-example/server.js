import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
    #this is a comment
    #This is default
    Schema {
        query: Query
    }
    type Query {
        greeting: String
    }
`;

const resolvers = {
    Query: {
        greeting: () => "Greet folks",
    },
};

const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log(`Server is running at ${url}`);
