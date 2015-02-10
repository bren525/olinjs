var totalCost = 0.0;
var ingredientList = [];

$('.ingredients').click(function(){
	var price= parseFloat($(this).attr('price'));
	
	if($(this).is(':checked')){
		ingredientList.push($(this).attr('ingredient'));
		totalCost += price;
	}else{
		ingredientList.splice(ingredientList.indexOf($(this).attr('ingredient')),1);
		totalCost -= price;
	}
	console.log(totalCost)
	console.log(ingredientList);

	
	$('#total').html(totalCost);

});

$('#orderForm').submit(function(event){
	event.preventDefault();
	
	var formData = {ingredients:ingredientList,customer:$('#customerName').val()};

	console.log(formData);
	$.post("/order/placeOrder",formData).done(function(data,status){
		console.log(data);
	}).error(function(data,stats){
		console.log("addNew error");
	});
});