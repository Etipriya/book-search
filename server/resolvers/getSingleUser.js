const { User } = require("../models");

const getSingleUser = async (_, args, context) => {
  try {
    if (context.user) {
      const foundUser = await User.findById({ _id: context.user.id });

      if (!foundUser) {
        throw new Error("Couldn't find user with this id!");
      }

      return foundUser;
    } else {
      throw new AuthenticationError("Not authorised");
    }
  } catch (err) {
    console.log(err);
    throw new AuthenticationError("Something went wrong!");
  }
};

module.exports = getSingleUser;
