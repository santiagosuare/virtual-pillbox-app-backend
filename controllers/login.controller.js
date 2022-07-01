const jwt = require("jsonwebtoken");

const PRIVATE_KEY = "secretkey";

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    role: user.role,
  };
  const options = {
    expiresIn: "1h",
  };
  return jwt.sign(payload, PRIVATE_KEY, options);
}

module.exports = { generateToken };
