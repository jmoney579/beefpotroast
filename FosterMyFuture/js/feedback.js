$(function() {
	$("#feedback-tab").click(function() {
		$("#feedback-form").toggle("slide");
	});

	$("#feedback-form form").on('submit', function(event) {
		var $form = $(this);
		$.ajax({
			type: $form.attr('method'),
			url: $form.attr('action'),
			data: $form.serialize(),
			success: function() {
				$("#feedback-form").toggle("slide").find("textarea").val('');
			}
		});
		event.preventDefault();
	});
});

/*---JS for submission message ----*/

/* $(document).ready(function(){   
  if ($.cookie('fostercare_contact') == null ){
   var ref = document.referrer.toLowerCase();  
   // set cookie  
   var cookURL =  $.cookie('fostercare_contact', ref, { expires: 1 }); 
  } 
 });  */

	
	 $(document).ready(function(){            

         if (Cookies.get('fostercarecontact')) { 		
			$("#feedback-form form").hide();
			$(".submit_complete").fadeIn("slow");
			$("feedback-form").hide().delay(2400);
			console.log(Cookies.get('fostercarecontact'));
         }else{
			 $("#feedback-form form").submit(function() {
                Cookies.set('fostercarecontact', 'submitted', { expires: 7});
				$("#feedback-form form").hide();
				$(".submit_complete").fadeIn("slow");
				$("feedback-form").hide().delay(2400);
				console.log(Cookies.get('fostercarecontact'));
			}); 
		 }
	 });

	
