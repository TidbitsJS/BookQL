const express = require("express");
const graphqlHTTP = require("express-graphql").graphqlHTTP;

const schema = require("./schema/schema");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
  })
);

app.listen(4040, () => {
  console.log("Server is running on port 4040");
});
