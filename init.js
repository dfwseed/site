(function($){
  $(function(){

    $('.button-collapse').sideNav();


	$(document).ready(function(){
	  $('.slider').slider({
		indicators: false,
		transition: 700,
		}
		);
	});

	$(document).ready(function(){
		$("#contact-form").submit(function(event){

		  var first_name = $('#first_name')
		  var last_name  = $('#last_name')
		  var email 	 = $('#email')
		  var phone 	 = $('#phone')
		  var message 	 = $('#message')

		  if(first_name.val() == "" || last_name.val() == "" || email.val() == "" || phone.val() == "" || message.val() == "") {
			Materialize.toast('Message FAILED to send, please try again<br><br>All fields are required', 4000, 'rounded red'); 
			return false;
		  }
		  else {

			  event.preventDefault();
			  $.ajax({
				url: "https://www.enformed.io/rmarlzop",
				method: "post",
				dataType: "json",
				accepts: "application/json",
				data: $("#contact-form").serialize(),
				success: function(){
				  console.log("Your form was successfully received!");
				  //Materialize.toast('Message successfully sent', 6000, 'rounded green');
				},
				error: function(){
				  console.log("Failure. Try again.");
				  //Materialize.toast('Message FAILED to send, please try again<br><br>All fields are required', 4000, 'rounded red'); 
				}
			  });
			  $(this).get(0).reset();
			 Materialize.toast('Message successfully sent', 6000, 'rounded green');
			}
		});
	});


  }); // end of document ready
})(jQuery); // end of jQuery name space

