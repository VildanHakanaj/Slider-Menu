$(document).ready(function(){
	let $overlay = $('.overlay'); 
	let $ham = $('.ham');
	let $close_menu = $('.close-btn');

	$ham.on('click', function(){
		$overlay.addClass('show-menu')
	});

	$close_menu.on('click', function(){
		$overlay.removeClass('show-menu');
	});
});