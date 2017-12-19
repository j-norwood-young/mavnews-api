var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var Objectid = mongoose.Schema.Types.ObjectId;
var Mixed = mongoose.Schema.Types.Mixed;

var TagSchema   = new Schema({
	name: { type: String, unique: true, index: true, set: toLower },
});

TagSchema.set("_perms", {
	admin: "crud",
	user: "cr",
});

function toLower (v) {
	return v.toLowerCase();
}

module.exports = mongoose.model('Tag', TagSchema);