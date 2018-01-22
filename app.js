const express = require('express'); //require express
const app = express();//importing the express module framework using routes.


app.get('/', (req, res) => {//listening for a user nav to the root of our webpage. This a route.
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res) => {//set up contact route. when they click the contact page, something happens here
  res.sendFile(__dirname + '/contact.html');
});

app.get('/portfolio', (req, res) => {//set up contact route. when they click the contact page, something happens here
  res.sendFile(__dirname + '/portfolio.html');
});

app.listen(3000, () => {
  console.log('app running on port 3000');
});
