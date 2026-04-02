const mongoose = require("mongoose");
const dotenv = require("dotenv");
const usermodel = require("./Models/usermodel");
const bcrypt = require("bcrypt");

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  console.log("DB connected");

  const existingAdmin = await usermodel.findOne({ email: "admin@gmail.com" });

  if (existingAdmin) {
    console.log("Admin already exists");
    process.exit();
  }
  const hashedPassword = await bcrypt.hash("123456", 10);

  await usermodel.create({
    name: "sanju",
    email: "admin@gmail.com",
    password: hashedPassword,
    role: "admin",
  });

  console.log("Admin created successfully");
  process.exit();
});
