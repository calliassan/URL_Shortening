const { shortenUrlservice } = require("../service/urlservice");

async function urlController(req, res) {
  const { originalUrl } = req.body;

  try {
    const savedurl = await shortenUrlservice({
      userId: req.user.userId,
      originalUrl,
    });

    res.status(200).json({
      data: savedurl,
      message: "shortened url successful",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { urlController };
