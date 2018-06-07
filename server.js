const fs = require('fs');
const path = require('path');
const express = require('express');
const graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
const rootResolvers = require('./rootResolvers');

const app = express();

// Building Schema
const schema = buildSchema(
  fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8')
);

app.use(
  '/graph',
  graphqlHTTP({
    schema,
    graphiql: true,
    rootValue: rootResolvers,
  })
);

app.listen(3001);
