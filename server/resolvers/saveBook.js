const { AuthenticationError } = require("apollo-server-express");

const { User } = require("../models");

const saveBook = async (_, { input }, context) => {
  try {
    if (context.user) {
      const updatedUser = await User.findByIdAndUpdate(
        { _id: context.user.id },
        {
          $push: {
            savedBooks: input,
          },
        },
        { new: true }
      );

      return updatedUser;
    } else {
      throw new AuthenticationError("Not authorised");
    }
  } catch (err) {
    console.log(err);
    throw new AuthenticationError("Something went wrong!");
  }
};

module.exports = saveBook;
