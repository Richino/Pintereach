const mongoose = require("mongoose");

const createUserSchema = mongoose.Schema({
	username: { type: String },
	email: { type: String },
	password: { type: String },
    
});

const userSchema = mongoose.model("users", createUserSchema);
module.exports = userSchema;
