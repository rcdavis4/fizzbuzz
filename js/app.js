$(document).ready(function() {
  for (var index = 1; index <= 100; index++) {
    if (index % 3 == 0 && index % 5 == 0) {
      $('body').append('FIZZBUZZ <br>');
    }
    else if (index % 3 == 0) {
      $('body').append('fizz <br>');
    }
    else if (index % 5 == 0) {
      $('body').append('buzz <br>');
    }
    else {
      $('body').append(index + '<br>');
    }
  }
}); // end of document.ready







// $('#number-list').append('<li class="numbers">' + index);
