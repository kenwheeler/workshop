/*global console*/
/*eslint-disable no-console, max-len*/

const express = require("express");
const request = require("request-promise");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/api/search/:query", (req, res) => {
  request(`http://api.walmartlabs.com/v1/search?query=${req.params.query}&format=json&apiKey=API_KEY_GOES_HERE`)
  .then((data) => res.json(JSON.parse(data)));
});

app.listen(1337, "localhost", (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("API server started at http://localhost:1337");
});
