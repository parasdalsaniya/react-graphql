const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');

const app = express();

app.use(cors('Access-Control-Allow-Origin'));

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.use(express.static('public'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));