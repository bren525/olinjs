$('.editForm').submit(function(event){
	//Submission of editing an ingredient
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
	//Submission of switching and ingredient to in or out of stock
	event.preventDefault();
	formData = $(this).serialize();
	console.log(formData)
	$.post("/ingredients/outOfStock",formData).done(function(data,status){
		grabList();
	}).error(function(data,stats){
		console.log("addNew error");
	});
});
