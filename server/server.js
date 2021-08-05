const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const path = require("path");

// const routes = require('./routes');

const typeDefs = require("./schemas");
const resolvers = require("./resolvers");

const db = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  return app;
};
startServer();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    // console.log(`🌍 Now listening on localhost:${PORT}`);
    console.log(`Use Graphql at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
