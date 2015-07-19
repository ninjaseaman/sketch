$(document).ready(function() {

	var user_height = 40;
	var user_width = 60;

	var setupPixels = function() {
		$(".center").height(user_height*13);
		$(".center").width(user_width*13);
		for(var h = 0; h < user_height; ++h)
		{
			for(var w = 0; w < user_width; ++w)
			{
				$(".container").append("<div class='pixel'></div>");
			};
			
		};
		if(user_height < 30) {
			$(".button").addClass("low_button");
		}
		else {
			$(".button").removeClass("low_button");
		}

		$(".pixel").hover(function() {
			$(this).addClass("colored_pixel");
		});


	};

	setupPixels(40, 60);



	$(".button").click(function() {
		user_height = prompt("How many squares tall?");
		user_width = prompt("How many squares wide?");
		$(".pixel").remove();
		setupPixels();



	});







});