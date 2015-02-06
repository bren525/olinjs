$('.editForm').submit(function(event){
	event.preventDefault();
	formData = $(this).serialize();
	console.log(formData)
	$.post("/ingredients/edit",formData).done(function(data,status){
		grabList();
	}).error(function(data,stats){
		console.log("addNew error");
	});
});
$('.outForm').submit(function(event){
	event.preventDefault();
	formData = $(this).serialize();
	console.log(formData)
	$.post("/ingredients/outOfStock",formData).done(function(data,status){
		grabList();
	}).error(function(data,stats){
		console.log("addNew error");
	});
});
