var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ObjectId = mongoose.Schema.Types.ObjectId;
var Mixed = mongoose.Schema.Types.Mixed;

var SiteSchema = new Schema({
	name: { type: String, index: true, unique: true },
	url: { type: String, index: true, unique: true },
	reload: { type: Number, default: 600 },
	selectors: [{ type: Mixed }]
});

SiteSchema.set("_perms", {
	admin: "crud",
	owner: "crud",
	user: "r",
	all: ""
});

module.exports = mongoose.model("Site", SiteSchema);
