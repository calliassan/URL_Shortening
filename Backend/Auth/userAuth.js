const jwt = require("jsonwebtoken");

async function userAuthorization(req, res, next) {
  const headers = req.headers;
  const Authorization = headers.authorization;
  if (!Authorization) {
    return res.status(401).json({ message: "No authorization" });
  }
  const Bearer = Authorization.split(" ")[0];
  if (!Bearer || Bearer !== "Bearer") {
    return res.status(401).json({ message: "Bearer name is not found" });
  }
  const token = Authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token" });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
}

module.exports = { userAuthorization };
