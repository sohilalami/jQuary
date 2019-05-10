$(document).ready(function() {
	$('figure img').mouseenter(function() {
		$(this).fadeTo(300, 0);
	}).mouseleave(function() {
		$(this).fadeTo(300, 1);
	}).click(function() {
		$(this).next().toggle(700);
	});
	$('footer').click(function() {
		$(this).animate({
			top: '-=50px',
			opacity: '-=0.2'
		}, 900)
	}).dbclick(function() {
		$(this).animate({
			top: '0',
			opacity: '1'
		}, 900)
	});
});
