var models = require('./models.js');

module.exports.main = function(req,res){
	res.render('kitchen');
};

module.exports.getList = function(req,res){
	models.Order.find({}).exec(function(err,data){
		res.render('kitchenList',{layout:'empty', 'list':data});
	});
};

module.exports.complete = function(req,res){
	models.Order
	.findByIdAndRemove(req.body.id)
	.exec(function(err,data){
		if(err){res.send('Error')}
		res.send('ok')
	});
};
