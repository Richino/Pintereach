const mongoose = require("mongoose");

const URI = "mongodb+srv://Richie_2:Hesoyam1@pintereach.y9dzs.mongodb.net/Pintereach?retryWrites=true&w=majority";

const database = () => {
	mongoose.connect(URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	});
	console.log("connected to database");
	mongoose.set("useFindAndModify", false);
};

module.exports = database;
