var grabOrderList = function(){
//Refreshes list of orders dynamically using ajax
	console.log("grabbing list");
	$.get("kitchen/list")
	.done(function(data,status){
		$("#orderList").html(data);
	}).error(function(data,status){
		console.log("grabList ERROR");
	});
};

grabOrderList();