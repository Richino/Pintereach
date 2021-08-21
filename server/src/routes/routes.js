const express = require("express");
const router = express.Router();
const User = require("../models/schemas.js");
const validator = require("email-validator");
const encrypt = require("bcrypt");
const nodemailer = require("nodemailer");
var verification_code = null;

router.post("/register", (req, res, next) => {
	const { username, email, password, confirm_password } = req.body;

	if (username === "" && email === "" && password === "" && confirm_password === "") {
		res.json({ message: "All input fields cannot be empty" });
	} else {
		if (username.length < 4) {
			res.json({
				success: false,
				message: "User name too short. It needs to be 4 characters or more",
			});
		} else if (!validator.validate(email)) {
			res.json({
				success: false,
				message: "Email is invalid",
			});
		} else if (password < 6) {
			res.json({
				success: false,
				message: "Password is too short. It needs to be 6 characters or more",
			});
		} else if (password != confirm_password) {
			res.json({
				success: false,
				message: "Password do not match",
			});
		} else {
			User.find({ email }).then((data) => {
				if (data.length) {
					res.json({
						success: false,
						message: "Account already exist with this user name or email",
					});
				} else {
					verification_code = Math.floor(1000 + Math.random() * 9000);
					const send_email = nodemailer.createTransport({
						service: "",
						auth: {
							user: "",
							pass: "",
						},
					});

					const mail = {
						from: "",
						to: email,
						subject: "Verification code",
						text: `Your verifivation code is ${verification_code}.`,
					};

					send_email.sendMail(mail, () => {
						res.json({ success: true });
					});

					/*encrypt.hash(password, 10).then((encrypt_password) => {
						const new_user = new User({
							username: username.trim().toLowerCase(),
							email: email.trim().toLowerCase(),
							password: encrypt_password,
						});

						new_user.save();
					});*/
				}
			});
		}
	}
});

router.post("/verification", (req, res) => {
	const code = req.body;
	console.log(code.code);
	console.log(verification_code);
	if ((code.code = verification_code)) {
		console.log("Here");
		res.json({ success: true });
	} else {
		res.json({ message: "Verification code did not match" });
	}
});

module.exports = router;
