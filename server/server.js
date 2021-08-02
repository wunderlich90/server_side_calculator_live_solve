console.log('in server.js');

// Load the express library from node_modules/express
const express = require('express');

// Load the body parser module
const bodyParser = require('body-parser');

// create our "app" (server)
const app = express();

// Data



// Tell express where to find all of our "public" files (aka "client side" files)
// We also call these "static assets"
app.use(express.static('./server/public'));

// Setup body parser
// Tells express how to read data from the client
// either as JSON, or url-encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// Listen for requests
const port = 5000;
app.listen(port, () => {
    // kind of like our onReady function
    console.log('App is up and running on localhost:5000');
    
});