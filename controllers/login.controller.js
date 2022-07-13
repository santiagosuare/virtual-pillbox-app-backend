import jwt from "jsonwebtoken";

const PRIVATE_KEY = "secretkey";
const { sign } = jwt;

const generateToken = (user) =>{
  const payload = {
    subject: user,
  };
  const options = {};
  return sign(payload, PRIVATE_KEY, options);
}

export { generateToken };
