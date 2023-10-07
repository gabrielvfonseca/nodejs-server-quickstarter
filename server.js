let log = require('npmlog');
const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.send('Hello World!');
  log.info('fyi', 'I have a kitty cat: %j')
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
