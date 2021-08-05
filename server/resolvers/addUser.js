const { User } = require("../models/User");

const addUser = async (_, { input }) => {
  const { username, email, password } = input;

  const newUser = await User.create({ username, email, password });

  if (!newUser) {
    throw new AuthenticationError("Something is wrong");
  }

  //TO Do token stuff
  return { newUser };
};

module.exports = addUser;
