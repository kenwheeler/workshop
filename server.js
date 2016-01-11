/*global console*/
/*eslint-disable no-console, max-len*/

const express = require("express");
const request = require("request-promise");
const cors = require("cors");
const app = express();

app.use(cors());

const API_KEY = process.env.WALMART_LABS_API_KEY;

app.get("/api/search/:query", (req, res) => {
  request(`https://api.walmartlabs.com/v1/search?query=${req.params.query}&format=json&apiKey=${API_KEY}`)
  .then((data) => res.json(JSON.parse(data)));
});

app.listen(1337, "localhost", (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("API server started at http://localhost:1337");
});
