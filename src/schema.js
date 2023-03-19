import {makeExecutableSchema} from 'graphql-tools';
import {resolvers} from './resolvers.js';

const typeDefs = `
  type Query {
    hello: String
    saludo(name: String!): String
  }
`;

export const schema =  makeExecutableSchema({
    typeDefs:typeDefs,
    resolvers: resolvers
});