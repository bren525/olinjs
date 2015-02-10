var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
var PORT = process.env.PORT || 3000;

var ingredients = require('./routes/ingredients')
var order = require('./routes/order')
var kitchen = require('./routes/kitchen')

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'},'empty'));
app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
	res.render("home",{'paths':['/ingredients','/order','/kitchen']});
});

app.get('/ingredients',function(req,res){
	res.render("ingredients");
});
app.get('/ingredients/list',ingredients.getList);
app.post('/ingredients/add',ingredients.addNew);
app.post('/ingredients/outOfStock',ingredients.outOfStock);
app.post('/ingredients/edit',ingredients.edit);

app.get('/order',order.main);
app.post('/order/placeOrder',order.placeOrder);

app.get('/kitchen',kitchen.main);
app.get('/kitchen/list',kitchen.getList);
app.post('/kitchen/complete',kitchen.complete);


app.listen(PORT);
