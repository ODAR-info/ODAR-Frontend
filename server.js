require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('app'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.all('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname + "/app" });
});
