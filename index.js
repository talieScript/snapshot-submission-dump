const express = require("express");
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const app = express();
const port = process.env.PORT || "8000";

app.use(express.json({limit: '50mb'}));

/**
 * Routes
 */

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

app.post("/", jsonParser, (req, res) => {
  const debugDump = req.body;
  console.log(debugDump);
  res.send(debugDump)
})

/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
