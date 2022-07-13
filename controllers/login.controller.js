import jwt from "jsonwebtoken";

const PRIVATE_KEY = "secretkey";
const { sign } = jwt;

const generateToken = (user) =>{
  const payload = {
    subject: user,
  };
  const options = {
    expiresIn: "1h",
  };
  return sign(payload, PRIVATE_KEY, options);
}

export { generateToken };
