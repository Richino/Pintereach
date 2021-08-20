import "./style.scss";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Verification() {
	const history = useHistory();
	const [state, setState] = useState();
	const [msg, setMsg] = useState();

	const getInfo = (e) => {
		setState(e.target.value);
	};

	const submit = (e) => {
		e.preventDefault();

		axios
			.post("http://localhost:3000/verification", {
				code: state,
			})
			.then((response) => {
				if (response.data.success === true) {
					setMsg("Success");
				} else {
					setMsg(response.data.message);
				}
			})
			.catch((e) => console.log(e));
	};

	return (
		<>
			<div id="verification">
				<form>
					<h1>Verification</h1>
					<input spellCheck="false" type="text" name="verification_code" placeholder="Verification Code" onChange={getInfo} />
					<button className="submit" onClick={submit}>
						Verify
					</button>
					<label className="text">{msg}</label>
				</form>
			</div>
		</>
	);
}
