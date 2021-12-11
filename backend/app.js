const express = require('express');

const app = express();

app.use((req, res) => {
  res.json({message: 'This is the new server response'});
});

module.exports = app;
