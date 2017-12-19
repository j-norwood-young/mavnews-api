var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ObjectId = mongoose.Schema.Types.ObjectId;
var Mixed = mongoose.Schema.Types.Mixed;

var ArticleSchema = new Schema({
	headline: String,
	blurb: String,
	provider_uid: { type: String, index: true },
	body: String,
	byline: [String],
	provider: String,
	date: { type: Date, index: true },
	city: String,
	country: String,
	keywords: [String],
	date_created: { type: Date, default: Date.now }
});

ArticleSchema.set("_perms", {
	admin: "crud",
	owner: "crud",
	user: "r",
	all: ""
});

module.exports = mongoose.model("Article", ArticleSchema);
