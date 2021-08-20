import "./style.scss";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Register() {
	const history = useHistory();

	const [state, setState] = useState({
		username: "",
		email: "",
		password: "",
		confrim_password: "",
	});

	const [msg, setMsg] = useState();

	const getInfo = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const submit = (e) => {
		e.preventDefault();

		axios
			.post("http://localhost:3000/register", {
				username: state.username,
				email: state.email,
				password: state.password,
				confirm_password: state.confrim_password,
			})
			.then((response) => {
				if (response.data.success === true) {
					console.log(response.data.success);
					history.push("/verification");
				} else {
					setMsg(response.data.message);
				}
			})
			.catch((e) => console.log(e));
	};

	return (
		<>
			<div id="register">
				<form>
					<h1>REGISTER</h1>
					<input spellCheck="false" type="text" name="username" placeholder="Username" onChange={getInfo} />
					<input spellCheck="false" type="text" name="email" placeholder="Email Address" onChange={getInfo} />
					<input spellCheck="false" type="password" name="password" placeholder="Password" onChange={getInfo} />
					<input spellCheck="false" type="password" name="confrim_password" placeholder="Password" onChange={getInfo} />
					<button className="submit" onClick={submit}>
						Register
					</button>
					<Link to="/login">Already have an account? Login</Link>
					<label className="text">{msg}</label>
				</form>
			</div>
		</>
	);
}
