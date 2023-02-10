const express = require("express");
const fetchOpenhim = require("./utils");

const app = express();

app.get("/ping", async (req, res) => {
  console.log("Sending request to openhim...");
  const response = await fetchOpenhim();
  res.json(response);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
