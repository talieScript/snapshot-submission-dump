const express = require("express");
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

require('dotenv').config()

const app = express();
const port = process.env.PORT || "8000";

app.use(express.json({limit: '50mb'}));

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

app.post("/", jsonParser, (req, res) => {
  const debugDump = req.body;
  // get auth token
  // parse submission to how endpoint wants them 
  // send submissisons 
  // response when done
  res.send(debugDump.submissions.submissions)
})

/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
