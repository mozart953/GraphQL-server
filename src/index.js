import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema.js';

import {conect} from './database.js'

const app = express();
conect();

app.get('/', (req, res) => {
  res.json({ message: "hello world" }); // añade el paréntesis faltante aquí
});

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema: schema,
  context: {
    messageId: 'test'
  }
}));

app.listen(3000, () => {
  console.log("Server on port 3000");
});