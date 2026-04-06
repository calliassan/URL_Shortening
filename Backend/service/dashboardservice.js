const mongoose = require("mongoose");
const urlmodel = require("../Models/urlmodel");

async function dashboardService({ userId, role }) {
  try {
    if (role === "admin") {
      // Admin → see ALL URLs
      return await urlmodel.find().sort({ createdAt: -1 });
    }

    // User → see ONLY their URLs
    return await urlmodel
      .find({ userId: new mongoose.Types.ObjectId(userId) })
      .sort({ createdAt: -1 });
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = { dashboardService };
