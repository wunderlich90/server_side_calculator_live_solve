console.log('in server.js');

// Load the express library from node_modules/express
const express = require('express');

// Load the body parser module
const bodyParser = require('body-parser');

// create our "app" (server)
const app = express();

// Setup body parser
// Tells express how to read data from the client
// either as JSON, or url-encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Tell express where to find all of our "public" files (aka "client side" files)
// We also call these "static assets"
app.use(express.static('./server/public'));

// data storage
let calculationsArray = [];

// ROUTES
app.get('calculation', (req, res) => {
    // send back to the client all calculations
    res.send(calculationsArray);
})

app.post('/calculation', (req, res) => {
    // where's our data
    console.log(calculationsArray);
    
    console.log('here is our data', req.body);

    // do calculations
    //if(Request.BODY.OPERATOR === )
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let operator = req.body.operator;
    let result = 0;
    
    switch(req.body.operator) {
        case '+':
            //do add
            result = num1 + Number(req.body.num2)
            break;
        case '-':
            //do subtract
            result = num1 - Number(req.body.num2)
            break;
        case '*':
            //do multiply
            result = num1 * Number(req.body.num2)
            break;
        case '/':
            //do division
            result = num1 / Number(req.body.num2)
            break;
    }
    console.log(result);
    

    // save in array;
    const completedCalc = {
        num1: num1,
        num2: num2,
        operator: operator,
        result: result
    }
    calculationsArray.push(completedCalc);
    
    // all good routes respond with something
    res.sendStatus(200);  // CREATED
})




// Listen for requests
const port = 5000;
app.listen(port, () => {
    // kind of like our onReady function
    console.log('App is up and running on localhost:5000');
    
});