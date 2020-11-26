const express = require("express");
const bodyParser = require('body-parser')
const axios = require('axios')
const jsonParser = bodyParser.json()

require('dotenv').config()

const app = express();
const port = process.env.PORT || "8000";

const endpoint = process.env.SNAPSHOT_API_ENDPOINT;

app.use(express.json({limit: '50mb'}));

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

app.post("/", jsonParser, async (req, res) => {
  const debugDump = req.body.debugDump;
  const {username, password} = req.body.user;
  // get auth token
  const authRes = await axios.post(`${endpoint}/auth/login`, 
  { username: username.trim(), password: password.trim() })
    .catch(error => {
    console.log(error)
  })

  const token = authRes.data.accessToken;

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
