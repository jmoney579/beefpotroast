			$(".search-button").click(function(){
				if ($(".translate-bar").is(":visible")){
					$(".translate-bar").hide();
				}
				if ($(".search-bar").is(":hidden")){
						$(".search-bar").fadeIn();
					}else{
						$(".search-bar").fadeOut();
							}
				})
			$(".translate-button").click(function(){
				if ($(".search-bar").is(":visible")){
					$(".search-bar").hide();
				}
				if ($(".translate-bar").is(":hidden")){
						$(".translate-bar").fadeIn();
					}else{
						$(".translate-bar").fadeOut();
							}
				})