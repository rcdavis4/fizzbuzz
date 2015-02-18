var userInput = prompt("Enter A Number"); // gets user input
var userNumber = Number(userInput); // converts input string into a number

// fizzbuzz function, takes in number as parameter.
function fizzBuzz(number) {
  // validates number: 1) greater than zero  2) whole number  3) is a number
  if ((number < 1) || (number % 1 != 0) || isNaN(number)) {
    alert('Invalid Entry!');
  }
  else {
    // loops from 1 up to user's number and tests for fizzbuzz output
    for (var index = 1; index <= num; index++) {
      if (index % 3 === 0 && index % 5 === 0) {
        $('body').append('FIZZBUZZ <br><br>');
      }
      else if (index % 3 === 0) {
        $('body').append('FIZZ <br><br>');
      }
      else if (index % 5 === 0) {
        $('body').append('BUZZ <br><br>');
      }
      else {
        $('body').append(index + '<br><br>');
      }
    } // end for loop
  } // end outter else
} // end fizzbuzz function


// function call
fizzBuzz(userNumber);