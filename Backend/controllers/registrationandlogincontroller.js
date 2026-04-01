const { register, login } = require("../service/regandloginservice");

async function Register(req, res) {
  const { name, email, password } = req.body;
  try {
    const regresponse = await register({ name, email, password });
    res
      .status(200)
      .json({ data: regresponse, message: "registration successful" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
async function Login(req, res) {
  const { email, password } = req.body;
  try {
    const loginuser = await login({ email, password });
    res.status(200).json({ data: loginuser, message: "user loggedin" });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}
module.exports = { Register, Login };
