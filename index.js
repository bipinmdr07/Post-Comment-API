const express = require('express');

const PORT = 3000;
const app = express();

app.listen(PORT, (req, res) => {
  console.log(`Listening to the port: ${PORT}`);
});