const mongoose = require("mongoose");
const urlmodel = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "newusermodel",
    },
    originalUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      unique: true,
      required: true,
    },
    clicks: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model("urlmodels", urlmodel);
