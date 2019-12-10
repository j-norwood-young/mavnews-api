const Jxp = require("jxp");
var config = require('config');
var mongoose = require("mongoose");

//DB connection
// ES6 promises
mongoose.Promise = Promise;

// mongodb connection
config.mongo.options = config.mongo.options || {};
let mongoOptions = Object.assign(config.mongo.options, {
	promiseLibrary: global.Promise,
	useNewUrlParser: true,
	useCreateIndex: true,
});

mongoose.connect(`mongodb://${config.mongo.server}/${config.mongo.db}`, mongoOptions);

var db = mongoose.connection;

// mongodb error
db.on('error', console.error.bind(console, 'connection error:'));

// mongodb connection open
db.once('open', () => {
	console.log(`Connected to Mongo at: ${new Date()}`);
});

var server = new Jxp(config);

server.listen(config.port || 3001, function () {
	console.log('%s listening at %s', "Workspaceman API", server.url);
});

module.exports = server; //For Testing
