var grabList = function(){
	//Dynamically refreshes the list using ajax
	$.get("ingredients/list").done(function(data,status){
		$("#ingredientList").html(data);
	}).error(function(data,status){
		console.log("grabList ERROR");
	});
}
$('#addForm').submit(function(event){
	//Submission of new ingredient
	event.preventDefault();
	formData = $('#addForm').serialize();
	$.post("/ingredients/add",formData).done(function(data,status){
		grabList();
	}).error(function(data,stats){
		console.log("addNew error");
	});
});

grabList();

