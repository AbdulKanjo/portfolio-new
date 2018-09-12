require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const { json } = require("body-parser");
const port = process.env.PORT || 3005;

const app = express();
app.use(json());
app.use(cors());

app.use(express.static(path.join(__dirname, "../Haribo")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Haribo/index.html"));
});

app.listen(port, function() {
  console.log(`listening to port: ${port}`);
});
