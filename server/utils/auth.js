const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET || "my local secret";
const expiresIn = process.env.JWT_EXPIRES_IN || "1h";

const signToken = payload => {
  return jwt.sign(payload, secret, { expiresIn });
};

const verifyToken = token => {
  return jwt.verify(token, secret, { maxAge: expiresIn });
};

module.exports = { signToken, verifyToken };
// const jwt = require("jsonwebtoken");

// // set token secret and expiration date
// const secret = 'mysecretsshhhhh';
// const expiration = '2h';

// module.exports = {
//   // function for our authenticated routes
//   authMiddleware: function (req, res, next) {
//     // allows token to be sent via  req.query or headers
//     let token = req.query.token || req.headers.authorization;

//     // ["Bearer", "<tokenvalue>"]
//     if (req.headers.authorization) {
//       token = token.split(' ').pop().trim();
//     }

//     if (!token) {
//       return res.status(400).json({ message: 'You have no token!' });
//     }

//     // verify token and get user data out of it
//     try {
//       const { data } = jwt.verify(token, secret, { maxAge: expiration });
//       req.user = data;
//     } catch {
//       console.log('Invalid token');
//       return res.status(400).json({ message: 'invalid token!' });
//     }

//     // send to next endpoint
//     next();
//   },
//   signToken: function ({ username, email, _id }) {
//     const payload = { username, email, _id };

//     return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
//   },
// };
