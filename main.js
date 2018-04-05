$(document).ready(() => {
	$('.index').on('mouseenter', () => {
		$('.indexSub').fadeIn(100);
	});
	
	$('.indexSub').on('mouseleave', () => {
		$('.indexSub').fadeOut(100);
	});
});