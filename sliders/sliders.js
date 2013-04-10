$(document).ready(function(){

// night and day tabs/data on left side
	$('.tab').click(function(){
		$('.tab').removeClass('active');
		$(this).addClass('active');

		var id = $(this).attr('id');
		
		$('.tab-data').removeClass('active');
		$('.' + id).addClass('active');

		$('.sky').removeClass('active');
		$('.' + id).addClass('active');
	})

// things that get adjusted with sliders
	$('.adjust-fog').change(function(){

		var sliderValue = $(this).val();
		$('.sky').css('opacity', 1 / sliderValue);
	})


	$('.adjust-cloud').change(function(){

		var sliderValue = $(this).val();
		$('.ss-icon.left').css('font-size', sliderValue);
		$('.ss-icon.right').css('font-size', sliderValue);
	})


	$('.adjust-time').change(function(){

		var sliderValue = $(this).val();

		// if less than midpoint
		if (sliderValue <150){
			var leftdown = (150-sliderValue);	
			// move down from starting point using top margin
			$('.sunny').css('margin-top', (30 + leftdown));
			// move left from origin by a factor of 2
			$('.sunny').css('margin-left', (-2)*leftdown);
		} else {
			// if greater than midpoint
			var rightdown = (sliderValue - 150);
			// move down from starting point using top margin
			$('.sunny').css('margin-top', (30 + rightdown));
			// move right from origin by a factor of 2
			$('.sunny').css('margin-left', (2*rightdown));
		}
	})

// getting back to start when not active - need to add active class to slider????
	$('.tab.daytime').click(function(){
		$('.sky.daytime.active').css('opacity', 1);
	}) 

})	

