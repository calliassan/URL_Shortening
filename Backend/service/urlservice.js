const mongoose = require("mongoose");
const urlmodel = require("../Models/urlmodel");
const generateShortCode = require("../utils/shortcodegenerator");

async function shortenUrlservice({ userId, originalUrl }) {
  const shortUrl = await generateShortCode();

  const urlobject = new urlmodel({
    userId: new mongoose.Types.ObjectId(userId),
    originalUrl,
    shortUrl,
  });

  try {
    const saveurl = await urlobject.save();
    return saveurl;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = { shortenUrlservice };
