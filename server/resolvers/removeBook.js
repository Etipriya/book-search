const { User } = require("../models");

const removeBook = async (_, { bookId }, context) => {
  if (context.user) {
    const updatedUser = await User.findOneAndUpdate(
      { _id: context.user.id },
      { $pull: { savedBooks: { bookId } } },
      { new: true }
    );

    if (!updatedUser) {
      throw new Error("Couldn't find user with this id!");
    }

    return updatedUser;
  } else {
    throw new AuthenticationError("Not authorised");
  }
};

module.exports = removeBook;
