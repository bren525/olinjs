var models = require('./models.js');

module.exports.main = function(req,res){
	res.render('kitchen');
};

module.exports.getList = function(req,res){
	//Gets list of orders from DB
	models.Order.find({}).exec(function(err,data){
		if(err){res.status(500).send("Failed to access list.")}
		res.render('kitchenList',{layout:'empty', 'list':data});
	});
};

module.exports.complete = function(req,res){
	//Removes completed order from DB
	models.Order
	.findByIdAndRemove(req.body.id)
	.exec(function(err,data){
		if(err){res.status(500).send("Failed to remove from list.")}
		res.send('ok')
	});
};
