require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(bodyParser.json());

this.app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, access-control-allow-origin, profilerefid(whatever header you need)");
  next();
});

app.use('/api', routes);

app.listen(process.env.PORT, (req, res) => {
  console.log(`Listening to the port: ${process.env.PORT}`);
});