const jwt = require("jsonwebtoken");

// set token secret and expiration date
const secret = process.env.JWT_SECRET || "my local secret";
const expiration = process.env.JWT_EXPIRES_IN || "2h";

const signToken = payload => {
  return jwt.sign(payload, secret, { expiresIn: expiration });
};

const verifyToken = token => {
  return jwt.verify(token, secret, { maxAge: expiration });
};

module.exports = {
  signToken,
  verifyToken,
};
