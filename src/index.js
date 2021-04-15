import express from 'express';
import dotenv from 'dotenv';
import { graphqlHTTP } from 'express-graphql';
import  schema  from './graphql/schema'
import {connect} from './mongodb/database';

const app = express();
dotenv.config();
connect();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema: schema,
  })
);

app.listen(process.env.PORT, () =>   console.log(`App running on PORT ${process.env.PORT}`));
