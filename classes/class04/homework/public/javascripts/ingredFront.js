var grabList = function(){
	console.log("grabbing list");
	$.get("ingredients/list").done(function(data,status){
		$("#ingredientList").html(data);
	}).error(function(data,status){
		console.log("grabList ERROR");
	});
}
$('#addForm').submit(function(event){
	event.preventDefault();
	formData = $('#addForm').serialize();
	$.post("/ingredients/add",formData).done(function(data,status){
		grabList();
	}).error(function(data,stats){
		console.log("addNew error");
	});
});

$(document).ready(function(){
	console.log("ready");
	grabList();
});

