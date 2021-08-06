const { AuthenticationError } = require("apollo-server-express");

const { User } = require("../../models");

const removeBook = async (_, { bookId }, context) => {
  // check if the user is in context
  if (context.user) {
    // get the user id from the user object
    const { id } = context.user;

    // find a user by ID and pull the book to remove from saveBooks array
    const user = await User.findByIdAndUpdate(
      id,
      {
        $pull: {
          savedBooks: { bookId },
        },
      },
      { new: true }
    ).populate("savedBooks");

    return user;
  }
  // if user is not in the context throw error
  else {
    throw new AuthenticationError(
      "You are not authorised to perform this operation"
    );
  }
};

module.exports = removeBook;
