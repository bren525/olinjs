var mongoose = require('mongoose');

var mongoURI = process.env.MONGOURI || "mongodb://localhost/test";
mongoose.connect(mongoURI);


var ingredientsSchema = mongoose.Schema({
name: String,
price: Number,
out: Boolean
});

module.exports.Ingredients = mongoose.model('Ingredients',ingredientsSchema);

var orderSchema = mongoose.Schema({
customer: String,
ingredients: [String]
});

module.exports.Order = mongoose.model('Orders',orderSchema);

