$(document).ready(function(){

	$("#blog").hover(function(){
		$("#blog").toggleClass("headingsWider");
		$("#blogPanel").slideToggle('slow');
	});

	$("#contact").hover(function(){
		$("#contact").toggleClass("headingsWider");
		$("#contactPanel").slideToggle('slow');
	});


});