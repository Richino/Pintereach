import "./style.scss";
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
	return (
		<>
			<div id="login">
				<form>
					<h1>LOGIN</h1>
					<input spellCheck="false" type="text" name="email" placeholder="Email Address" />
					<input spellCheck="false" type="password" name="password" placeholder="Password" />
					<button className="submit">Login</button>
					<Link to="register">Don't have an account? Sign up</Link>
				</form>
			</div>
		</>
	);
}
