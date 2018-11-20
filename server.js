// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});



/*
app.get('/api/', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify(
    { 
      
    }
  ));
});

*/

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

// =========================== API ============================== //

//get contract data
app.get('/api/contract', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify(
    { 
      "network": "Rinkbey",
      "address": "0xbca55e153d08d77bfac33e7153dc6ec12e42bd49"
    }
  ));
});

//return options
app.get('/api/', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify(
    { 
      "choices": ["contract", "user", "token"]
    }
  ));
});

//use infura for future calls
//store infura key in enviorment safe

//TODO infura setup

//TODO return user info based on address
app.get('/api/user/', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify(
    { 
      
    }
  ));
});

//TODO return token info from ID
app.get('/api/', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify(
    { 
      
    }
  ));
});















