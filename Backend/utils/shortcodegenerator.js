async function generateShortCode() {
  const { nanoid } = require("nanoid");
  const shortUrl = nanoid(8);
  return shortUrl;
}

module.exports = generateShortCode;
