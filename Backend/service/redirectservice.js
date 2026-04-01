const urlmodel = require("../Models/urlmodel");

async function redirecturlservice(shortUrl) {
  try {
    const url = await urlmodel.findOne({ shortUrl });

    if (!url) {
      throw new Error("Short URL not found");
    }

    url.clicks += 1;
    await url.save();

    return url.originalUrl;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = { redirecturlservice };
