$( document ).ready(function(){})
$(".button-collapse").sideNav();

$(document).ready(function(){
    $('.parallax').parallax();
});


document.addEventListener("DOMContentLoaded", function(){
	$('.preloader-background').delay(1000).fadeOut('slow');
	
	$('.preloader-wrapper')
		.delay(1000)
		.fadeOut();
});

$(document).ready(function() {
    $('select').material_select();
});


$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 100, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });

  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });