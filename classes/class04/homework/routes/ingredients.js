var models = require('./models.js');

module.exports.getList = function(req,res){
	//Gets list of ingredients from DB
	models.Ingredients.find({}).exec(function(err,data){
		if(err){res.status(500).send("Failed to access list.")}
		res.render('ingredientsList',{layout:'empty', 'list':data});
	});
};

module.exports.addNew = function(req,res){
	if(req.body.name == "clear"){ //Debugging codeword for clearing ingredients
		models.Ingredients.remove({}).exec(function(err){
			if(err){res.status(500).send("Failed to add to list.")}
			res.send('ok');
		});
	//If not clearing adds new ingredient to DB
	}else{
		var data = {'name':req.body.name,'price':Number(req.body.price),'out':false};
		var ingredient = models.Ingredients(data);
		ingredient.save(function(err,data){
			if(err){res.status(500).send("Failed to add to list.")}
			res.send('ok');
		});
	}
};

module.exports.outOfStock = function(req,res){
	//Toggels the "out" state of a ingredient in the DB
	models.Ingredients
	.findById(req.body.id)
	.exec(function(err,data){
		if(err){res.status(500).send("Failed to edit list.")}
		data.out = !data.out;
		data.save(function(err,data){
			if(err){res.status(500).send("Failed to edit list.")}
			res.send('ok');
		});
	});
};

module.exports.edit = function(req,res){
	//Edits name and price of ingredient in DB
	models.Ingredients
	.findByIdAndUpdate(req.body.id,{'name':req.body.name,'price':req.body.price},null)
	.exec(function(err,data){
		if(err){res.status(500).send("Failed to edit list.")}
		res.send('ok')
	});
};
