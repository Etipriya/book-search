const { AuthenticationError } = require("apollo-server-express");
const { verifyToken } = require("./utils/auth");

const context = ({ req }) => {
  // token is accessible either from the body, query or headers
  let token = req.body.token || req.query.token || req.headers.authorization;

  // format the token
  if (req.headers.authorization) {
    token = token.split(" ").pop().trim();
  }

  // if no token we return the request
  if (!token) {
    return req;
  }

  try {
    req.user = verifyToken(token);
  } catch (error) {
    console.error(error.message);
    throw new AuthenticationError("Invalid token");
  }

  return req;
};

module.exports = context;
