var mongoose = require('mongoose');

var mongoURI = process.env.MONGOURI || "mongodb://localhost/test";
mongoose.connect(mongoURI);


var ingredientsSchema = mongoose.Schema({
name: String,
price: Number,
out: Boolean
});

module.exports.ingredients = mongoose.model('Ingredients',ingredientsSchema);

var orderSchema = mongoose.Schema({
customer: String,
ingredients: [String]
});

module.exports.orders = mongoose.model('Orders',orderSchema);

