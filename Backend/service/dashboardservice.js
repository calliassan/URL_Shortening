const urlmodel = require("../Models/urlmodel");

async function dashboardService({ userId }) {
  try {
    const urls = await urlmodel.find({ userId }).sort({ createdAt: -1 });
    return urls;
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = { dashboardService };
