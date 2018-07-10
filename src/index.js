require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(process.env.PORT, (req, res) => {
  console.log(`Listening to the port: ${process.env.PORT}`);
});