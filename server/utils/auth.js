const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// set token secret and expiration date
const secret = process.env.JWT_SECRET || "my local secret";
const expiresIn = process.env.JWT_EXPIRES_IN || "1h";

const signToken = payload => {
  return jwt.sign(payload, secret, { expiresIn });
};

// if the password is new or modified, we hash it
const hashPassword = async function (next) {
  if (this.isNew || this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
};

// we compare the user password with the one in our database to make sure they are the same
const validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// we check the token for the secret and the age to make sure it is not expired
const verifyToken = token => {
  return jwt.verify(token, secret, { maxAge: expiresIn });
};

module.exports = {
  signToken,
  hashPassword,
  validatePassword,
  verifyToken,
};
