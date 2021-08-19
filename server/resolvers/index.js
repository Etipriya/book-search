const addUser = require("./addUser");
const login = require("./login");
const saveBook = require("./saveBook");
const removeBook = require("./removeBook");
const me = require("./user");

const resolvers = {
  Query: {
    me,
  },
  Mutation: {
    login,
    addUser,
    saveBook,
    removeBook,
  },
};

module.exports = resolvers;
