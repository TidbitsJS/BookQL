const express = require("express");
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const mongoose = require("mongoose");
require("dotenv").config();

const schema = require("./schema/schema");

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.error("Coneection to database failed");
    console.error(error);
  });

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4040, () => {
  console.log("Server is running on port 4040");
});
