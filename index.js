require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(PORT, (req, res) => {
  console.log(`Listening to the port: ${PORT}`);
});