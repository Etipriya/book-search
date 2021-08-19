const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const db = require("./config/connection");
const typeDefs = require("./schemas/typeDefs");
const resolvers = require("./resolvers/index");
const { authMiddleware } = require("./utils/auth");
const context = require("./context");

//const routes = require("./routes");
//const { start } = require("repl");

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

//start graphql server and implement express server as middleware
const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  return app;
};

startServer();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

//connect to the database and run express server
db.once("open", () => {
  try {
    app.listen(PORT, () => {
      console.log(`🌍 Now listening on localhost:${PORT}`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  } catch (error) {
    console.error(error.message);
    console.error("Failed to run server");
  }
});
