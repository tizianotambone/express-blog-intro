// console.log("hello world")
const express = require('express');

const app = express();
const port = 3000;
// inserisco al rotta base per gestire le richieste GET

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {})  
