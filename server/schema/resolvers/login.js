const { AuthenticationError } = require("apollo-server-errors");
const { User } = require("../../models");
const { signToken } = require("../../utils/auth");

const login = async (_, { input }) => {
  const { email, password } = input;

  const user = await User.findOne({ email });
  console.log(user);
  if (!user) {
    throw new AuthenticationError("User Not found");
  }

  const validPassword = user.isCorrectPassword(password);

  if (!validPassword) {
    throw new AuthenticationError("Invalid password");
  }

  const token = signToken({
    id: user._id,
    email: user.email,
    username: user.username,
  });

  return {
    token,
    user,
  };
};

module.exports = login;