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
$("#feedback-form form").submit(function() {
		$("#feedback-form form").hide();
		$(".submit_complete").fadeIn("slow");
		$("feedback-form").hide().delay(1200);
});
