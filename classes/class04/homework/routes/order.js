var models = require('./models.js');

module.exports.main = function(req,res){
	models.Ingredients.find({}).exec(function(err,data){
		res.render('order',{'list':data});
	});
};

module.exports.placeOrder = function(req,res){
	var data = {'customer':req.body.customer,'ingredients':req.body['ingredients[]']};
	console.log(data)
	var order = models.Order(data);
	order.save(function(err,data){
		if(err){res.send("Error")}
		res.send('ok');
	});
};