var models = require('./models.js');

module.exports.getList = function(req,res){
	models.Ingredients.find({}).exec(function(err,data){
		res.render('ingredientsList',{layout:'empty', 'list':data});
	});
};

module.exports.addNew = function(req,res){
	console.log(req.body);
	if(req.body.name == "bye"){
		models.Ingredients.remove({}).exec(function(err){
			if(err){res.send("Error")}
			res.send('ok');
		});
	}else{
		var data = {'name':req.body.name,'price':Number(req.body.price),'out':false};
		var ingredient = models.Ingredients(data);
		ingredient.save(function(err,data){
			if(err){res.send("Error")}
			res.send(data.id);
		});
	}
};

module.exports.outOfStock = function(req,res){
	models.Ingredients
	.findById(req.body.id)
	.exec(function(err,data){
		if(err){res.send('Error')}
		data.out = !data.out;
		data.save(function(err,data){
			if(err){res.send("Error")}
			res.send(data.id);
		});
	});
};

module.exports.edit = function(req,res){
	models.Ingredients
	.findByIdAndUpdate(req.body.id,{'name':req.body.name,'price':req.body.price},null)
	.exec(function(err,data){
		if(err){res.send('Error')}
		res.send('ok')
	});
};
