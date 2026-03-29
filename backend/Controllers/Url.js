const { Url } = require("../Models/Url");
const shortid = require("shortid");

exports.shortUrl = async (req, res) => {
  try {
    const longUrl = req.body.longUrl.trim();
    const shortCode = shortid.generate();

    const shortUrl = `http://localhost:1000/${shortCode}`;

    const newUrl = new Url({
      shortCode,
      longUrl,
    });

    await newUrl.save();

    console.log("Short URL saved:", newUrl);

    res.render("index", { shortUrl });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

exports.getOrignalUrl = async (req, res) => {
  try {
    const shortCode = req.params.shortCode;
    console.log("Looking for:", shortCode);

    const originalUrl = await Url.findOne({ shortCode });

    if (!originalUrl) {
      return res.status(404).send("Invalid shortcode");
    }

    res.redirect(originalUrl.longUrl);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};
