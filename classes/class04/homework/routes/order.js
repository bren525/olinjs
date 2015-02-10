var models = require('./models.js');

module.exports.main = function(req,res){
	models.Ingredients.find({}).exec(function(err,data){
		if(err){res.status(500).send("Failed to access list.")}
		res.render('order',{'list':data});
	});
};

module.exports.placeOrder = function(req,res){
	//Adds new Order to DB
	var data = {'customer':req.body.customer,'ingredients':req.body['ingredients[]']};
	console.log(data)
	var order = models.Order(data);
	order.save(function(err,data){
		if(err){res.status(500).send("Failed to add to list.")}
		res.send('ok');
	});
};