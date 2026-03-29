const express = require("express");
const mongoose = require("mongoose");
const { shortUrl, getOrignalUrl } = require("./Controllers/Url");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// 🔥 Put your MongoDB Atlas connection string here
const URL = "mongodb+srv://shakir03748_db_user:X51mPlMTLDW9CLlJ@cluster0.0b7xehw.mongodb.net/";

mongoose
  .connect(URL, {
    dbName: "UrlShortener",
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log(err));

// Routes
app.get("/", (req, res) => {
  res.render("index", { shortUrl: null });
});

app.post("/short", shortUrl);

app.get("/:shortCode", getOrignalUrl);

const port = 1000;
app.listen(port, () => console.log(`Server is running on port ${port}`));