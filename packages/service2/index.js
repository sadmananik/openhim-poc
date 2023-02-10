const express = require("express");

const app = express();

app.get("/ping", (req, res) => {
  console.log("Received request from openhim!");
  res.json({ response: "Hello from service 2" });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
