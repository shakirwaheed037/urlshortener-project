const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  shortCode: {
    type: String,
    required: true,
  },
  longUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Url = mongoose.model("ShortURL", urlSchema);

module.exports = { Url };