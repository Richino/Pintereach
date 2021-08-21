const mongoose = require("mongoose");

const URI = "";

const database = () => {
	mongoose.connect(URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	});
	console.log("connected to database");
	mongoose.set("useFindAndModify", false);
};

module.exports = database;
