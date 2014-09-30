// JavaScript Document
$(document).ready(function() {

//FizzBuzz

	$('button').on('click', function () {
		errmsg ();
			});//end of button on click function
			
	$('#factor').keypress(function (e) {
			if(e.which == 13){
				$('button').click();//trigger add button click
				e.preventDefault();
			}
		});
			
	function errmsg () {
		var numFB = +$('#factor').val();
		if (numFB > 100) {
			$('#errmsg').html("&nbsp;&nbsp;Number must be less than 100").show().fadeOut(2000);
			$('#factor').val("");
		}else if (isNaN(numFB)) {
			alert ("Input a Number, Please!");
			$('#factor').val("");
		}else {
			fizzBuzz ();
			$('button').prop('disabled', true);
			$('#refreshMe').html("&nbsp;&nbsp;Refresh this page to play again").show().fadeOut(2500);
		}
		
	}	
	function fizzBuzz () {
	var numFB = +$('#factor').val();
		for (var i=1; i<=numFB; i++) {
			if (i%15===0) {
				$('body').append('<p class="italic">FizzBuzz</p>');
			} else if (i%5===0) {
				$('body').append('<p class="buzz">Buzz</p>');
			} else if (i%3===0) {
				$('body').append('<p class="fizz">Fizz</p>');
			} else {
				$('body').append('<p>' + i + '</p>');
			}
		}//end of FOR loop

	}//end of Function		
});//end of document.ready

//if(+$('#factor').val(), 10) >100)) {
			//$('#errmsg').html("&nbsp;&nbsp;Number must be less than 100").show();
			
		//}