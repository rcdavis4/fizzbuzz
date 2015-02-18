//$(document).ready(function() {
//
//  var debug = function DEBUG(msg) {
//    console.log(msg);
//  };
//
//  var fizzCount = 0, buzzCount = 0, fizzBuzzCount = 0;
//
//  for (var index = 1; index <= 100; index++) {
//    if (index % 3 === 0 && index % 5 === 0) {
//      $('body').append('FIZZBUZZ <br><br>');
//      fizzBuzzCount++;
//    }
//    else if (index % 3 === 0) {
//      $('body').append('fizz <br><br>');
//      fizzCount++;
//    }
//    else if (index % 5 === 0) {
//      $('body').append('buzz <br><br>');
//      buzzCount++;
//    }
//    else {
//      $('body').append(index + '<br><br>');
//    }
//  }
//    debug('fizz count: ' + fizzCount);
//    debug('buzzCount: ' + buzzCount);
//    debug('fizz buzz count: ' + fizzBuzzCount);
//
//}); // end of document.ready


// $('#number-list').append('<li class="numbers">' + index);





/* ________________________________________________________________*/

// get user number
var userInput = prompt("Enter A Number");


function isValid(userIn) {
  var userNumber = Number(userIn);  // converts input string into number
  // var userNumber = +userInput; // alternative to converting input string into number

  // test for input: 1) being greater than '0' 2) being a number 3) being a whole number
  while ((userNumber < 1) || (isNaN) || (userNumber % 1 != 0)) {
    return prompt("Enter a VALID whole number");
  }
  else {
    return userNumber;
  }
}


isValid(userInput);

//function fizzBuzz(validNumber);
