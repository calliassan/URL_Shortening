const { redirecturlservice } = require("../service/redirectservice");

async function redirectUrl(req, res) {
  const { shortUrl } = req.params;

  try {
    const originalUrl = await redirecturlservice(shortUrl);
    return res.redirect(originalUrl);
    // res.status(200).json({ data: originalUrl });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

module.exports = { redirectUrl };
