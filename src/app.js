import express from 'express';
import dotenv from 'dotenv';
import { graphqlHTTP } from 'express-graphql';
import  schema  from './graphql/schema'
import {connect} from './mongodb/database';

const app = express();
dotenv.config();
connect();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: process.env.GRAPHQL_VALUE,
    schema: schema,
  })
);

app.listen(port || 3000, () =>   console.log(`App running on PORT ${port}`));
