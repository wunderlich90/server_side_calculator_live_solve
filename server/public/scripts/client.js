$(document).ready(onReady);

let operator = '';

function onReady() {
    console.log('So ready!!');
    
   // click listeners
   $('#submit').on('click', readySubmit);
   $('.operator').on('click', readyOperatorClick);
   // LOAD then GET
   getAllCalculations();

}

function readyOperatorClick() {
    console.log('clicked operand');
    operator = ($(this).text());
    
}

function renderCalculations(calculationsArray) {
    // append to DOM
    // first clear DOM since it's out of date. NO DUPES!!
    $('#allCalcs').empty();

    // show last calc result
    $('#lastCalc').text(calculationsArray[calculationsArray.length-1].result);

    // loop to append the DOM
    for(let calc of calculations) {
        $('#allCalcs').append(`<li>
            ${calc.num1}
            ${calc.operator}
            ${calc.num2}
            ${calc.result}
         `)
    }
}

function getAllCalculations() {
    // a promise -- asynchronous code -- this means it takes time
    $.ajax({
        method: 'GET',
        url: '/calculation',
    }).then((response) => {
        //for sure server has responded
        console.log(response);
        renderCalculations(response);
        
    })
}

function readySubmit() {
    console.log('clicked');
    const num1 = $('#num1').val();
    const num2 = $('#num2').val();

    //console.log(num1, num2, operator);

    // go to server with our data
    // package our data
    // objects are the best way to send data to server
    const dataToSend = {
        num1: $('#num1').val(),
        num2: $('#num2').val(),
        operator: operator
    }
    console.log('dataToSend');
    
    // send to server http request
    // this pattern is called a promise:
    $.ajax({
        method: 'POST',
        url: '/calculation',
        data: dataToSend
    }).then(function(response){
        // for sure server has responded
        console.log(response);
        // what to do??
        // GET ALL CALCULATIONS
        getAllCalculations();

        
    })

    // server probably not yet done




    //....wait
    // whe it comes back do something...? GET?
    
}

