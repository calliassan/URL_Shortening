const usermodel = require("../Models/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function register({ name, password, email }) {
  const hashedpassword = await hashpassword(password);
  const founduser = await userexists(email);
  if (founduser) {
    throw new Error("user already exists");
  }

  const userobject = new usermodel({
    name,
    password: hashedpassword,
    email,
    role: "user",
  });
  try {
    const saveduser = await userobject.save();
    return saveduser;
  } catch (error) {
    throw new Error(error.message);
  }
}
async function hashpassword(password) {
  const saltrounds = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, saltrounds);
  return hashed;
}
async function userexists(email) {
  try {
    const found = await usermodel.findOne({ email });
    return found;
  } catch (error) {
    throw new Error(error.message);
  }
}
async function login({ email, password }) {
  const user = await userexists(email);
  if (!user) {
    throw new Error("user not found");
  }

  try {
    const matchpassword = await bcrypt.compare(password, user.password);
    if (!matchpassword) {
      throw new Error("credentials do not match");
    }
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      },
    );
    const userobject = user.toObject();
    delete userobject.password;
    return { user: userobject, token }; //here as we know jwt is stateless, we always attach user along with token.
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = { register, login };
