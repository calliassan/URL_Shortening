const mongoose = require("mongoose");
const urlmodel = require("../Models/urlmodel");

async function dashboardService({ userId, role }) {
  let urls;
  try {
    if (role === "admin") {
      urls = await urlmodel
        .find({ userId: new mongoose.Types.ObjectId(userId) })
        .sort({ createdAt: -1 });
      return urls;
    } else {
      urls = await urlmodel.find({ userId: userId });
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = { dashboardService };
