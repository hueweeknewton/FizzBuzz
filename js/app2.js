// JavaScript Document
$(document).ready(function() {

//FizzBuzz

$('button').on('click', function () {
	for (var i=1; i<=100; i++) {
		if (i%15==0) {
			$('body').append('<p class="italic">FizzBuzz</p>');
		}
		else if (i%5==0) {
			$('body').append('<p class="buzz">Buzz</p>');
		}
		else if (i%3==0) {
			$('body').append('<p class="fizz">Fizz</p>');
		}
		else {
			$('body').append('<p>' + i + '</p>');
		}
			
		}
	});//end of button on click function
	
});//end of document.ready