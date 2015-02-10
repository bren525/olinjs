var grabOrderList = function(){
	console.log("grabbing list");
	$.get("kitchen/list")
	.done(function(data,status){
		$("#orderList").html(data);
	}).error(function(data,status){
		console.log("grabList ERROR");
	});
};

grabOrderList();