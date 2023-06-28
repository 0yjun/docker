const express = require("express");

const PORT = 8081;
const HOST = "0.0.0.0";

const app = express();

app.get("/", (req, res) => {
  res.send("hello world1");
});

app.listen(PORT, HOST, () => {
  console.log(`Server1 is running on http://${HOST}:${PORT}`);
});