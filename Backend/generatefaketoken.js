const jwt = require("jsonwebtoken");

const token = jwt.sign(
  { userId: "12345", role: "hacker" }, // 👈 fake role
  "your_secret_key_here", // same as your backend
  { expiresIn: "1h" },
);

console.log(token);
