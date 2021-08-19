const login = require("./login");
const addUser = require("./addUser");
const saveBook = require("./saveBook");
const removeBook = require("./removeBook");
const getSingleUser = require("./getSingleUser");

const resolvers = {
  Query: {
    me: getSingleUser,
  },
  Mutation: {
    login,
    addUser,
    saveBook,
    removeBook,
  },
};

module.exports = resolvers;
