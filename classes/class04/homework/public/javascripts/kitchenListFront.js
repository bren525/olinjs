$('.completeForm').submit(function(event){
	//Submission of completing an order
	event.preventDefault();
	var formData = $(this).serialize();
	$.post("/kitchen/complete",formData).done(function(data,status){
		grabOrderList();
	}).error(function(data,stats){
		console.log("addNew error");
	});
});