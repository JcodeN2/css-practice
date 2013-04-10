$(document).ready(function(){
	$('.tab').click(function(){
		$('.tab').removeClass('active')
		$(this).addClass('active');

		var id = $(this).attr('id');
		$('.tab-data').removeClass('active');
		$('.' + id).addClass('active');
	})
})