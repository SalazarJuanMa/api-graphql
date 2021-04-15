import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
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

app.use("/graphql", function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(
  '/graphql', cors(),
  graphqlHTTP({
    graphiql: process.env.GRAPHQL_VALUE,
    schema: schema,
  })
);

app.listen(port || 3000, () =>   console.log(`App running on PORT ${port}`));
